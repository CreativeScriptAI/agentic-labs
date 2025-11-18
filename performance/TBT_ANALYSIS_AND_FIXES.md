# 🎯 Total Blocking Time (TBT) Deep Dive & Action Plan

**Current TBT**: 2,212ms  
**Target**: < 200ms  
**Gap**: 2,012ms to close

---

## 🔍 Root Cause Analysis

### **Main Thread Breakdown** (6.3 seconds total):

| Category | Time | % of Total |
|----------|------|------------|
| **Script Evaluation** | 2,844ms | 45% |
| **Other** | 1,825ms | 29% |
| **Style & Layout** | 784ms | 13% |
| **Script Parsing** | 536ms | 9% |
| **Paint/Render** | 282ms | 4% |

---

## ⚠️ THE SMOKING GUNS

### **Problem #1: Third-Party Scripts - 1,330ms Blocking (60% of TBT!)** 🔴

Even though we set them to `lazyOnload`, they still block the main thread:

| Script | Blocking Time | Transfer Size |
|--------|--------------|---------------|
| **Google Tag Manager** | **979ms** | 725 KB |
| - GTM main | 427ms | 118 KB |
| - Google Analytics | 259ms | 167 KB |
| - Google Ads | 217ms | 136 KB |
| **Hotjar** | **172ms** | 67 KB |
| **Facebook Pixel** | ~**100ms** | ~50 KB |
| **TOTAL** | **~1,330ms** | **~900 KB** |

**Issue**: `lazyOnload` defers **when** they load, but once loaded, they still **block** the main thread.

---

### **Problem #2: Large JavaScript Bundles - 1,950ms Impact** 🔴

| File | CPU Time | Evaluation | Parse |
|------|----------|------------|-------|
| Homepage document | 1,423ms | 49ms | 1ms |
| Framework (React) | 588ms | 495ms | 34ms |
| _app bundle | 366ms | 332ms | 0ms |
| Other chunks | ~500ms | ~400ms | ~20ms |
| **TOTAL** | **~3,300ms** | **~1,276ms** | **~55ms** |

---

## 🎯 Action Plan: Reduce TBT from 2,212ms → < 500ms

### **Phase 1: Remove/Defer Heavy Third-Party Scripts** ⭐⭐⭐
**Expected Impact**: -1,000ms to -1,200ms TBT

#### Option A: Remove Non-Essential Scripts (RECOMMENDED) ✅

**1. Remove Hotjar** (-172ms TBT)
```typescript
// In _document.tsx - Comment out or remove:
/*
<Script
  id="hotjar"
  strategy="lazyOnload"
  dangerouslySetInnerHTML={{
    __html: `...hotjar code...`,
  }}
/>
*/
```

**Reasoning**: 
- Hotjar is for user behavior analytics
- Not critical for site functionality
- Can add back later when optimizing conversion
- **Immediate gain**: -172ms TBT

---

**2. Remove or Consolidate Google Analytics** (-259ms TBT)

You have BOTH Google Analytics AND Google Tag Manager. You only need GTM:

```typescript
// REMOVE standalone Google Analytics (GTM already tracks it):
/*
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-PW19164HWX"
  strategy="lazyOnload"
/>
<Script id="ga-config" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PW19164HWX', {...});
  `}
</Script>
*/

// Configure GA INSIDE GTM instead (single script)
```

**Reasoning**:
- GTM can load GA internally
- No need for duplicate tracking
- **Immediate gain**: -259ms TBT

---

**3. Consider Removing Google Ads** (-217ms TBT) - OPTIONAL

Unless you're actively running paid campaigns:

```typescript
// If not using Google Ads currently, remove:
/*
<Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-17453709032"
  strategy="lazyOnload"
/>
<Script id="ga-ads" strategy="lazyOnload">
  {`...ads code...`}
</Script>
*/
```

**Reasoning**:
- Only needed if running active ad campaigns
- Can add back when needed
- **Potential gain**: -217ms TBT

---

**4. Remove Facebook Pixel** (~-100ms TBT) - OPTIONAL

Unless actively using Facebook ads:

```typescript
// If not using Facebook ads, remove:
/*
<Script id="facebook-pixel" strategy="lazyOnload">
  {`...fb pixel code...`}
</Script>
*/
```

---

#### Option B: Use Partytown (Advanced) ⭐⭐

Move third-party scripts to Web Worker (doesn't block main thread):

```bash
npm install @builder.io/partytown
```

```typescript
// In _document.tsx
import { Partytown } from '@builder.io/partytown'

<Head>
  <Partytown debug={false} forward={['dataLayer.push', 'gtag']} />
</Head>

// Change strategy to "worker"
<Script
  src="https://www.googletagmanager.com/gtm.js?id=GTM-N8HPKS8Z"
  type="text/partytown"
  strategy="worker"
/>
```

**Expected Impact**: -800ms to -1,000ms TBT  
**Effort**: 2-3 hours  
**Complexity**: Medium

---

### **Phase 2: Optimize First-Party JavaScript** ⭐⭐
**Expected Impact**: -300ms to -500ms TBT

#### 1. Remove Unused Dependencies

Check for heavy, unused libraries:

```bash
# Analyze bundle
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js:
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... existing config
})

# Run analysis
ANALYZE=true npm run build
```

**Look for**:
- Moment.js (use date-fns instead) - saves ~70 KB
- Lodash (use individual imports) - saves ~50 KB
- Large icon libraries (tree-shake or use individual icons)
- Unused React Context providers

---

#### 2. Further Code Splitting

Split larger components:

```typescript
// Split AICaller component (likely heavy)
const AICaller = dynamic(() => import("src/components/AICaller"), {
  ssr: false, // Don't need SSR for interactive widget
});

// Split Image component wrappers
const OptimizedImage = dynamic(() => import("next/image"), {
  ssr: true,
});

// Split form validation
const FormValidator = dynamic(() => import("./FormValidator"), {
  ssr: false,
});
```

---

#### 3. Reduce React Hydration Cost

Currently _app bundle takes 366ms. Reduce by:

```typescript
// Remove unnecessary providers/context
// Only wrap what needs the context

// Before (wraps entire app):
<ThemeProvider>
  <QueryProvider>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </QueryProvider>
</ThemeProvider>

// After (selective wrapping):
<Component {...pageProps} />
// Add providers only on pages that need them
```

---

### **Phase 3: Optimize Asset Delivery** ⭐
**Expected Impact**: -200ms to -300ms TBT

#### 1. Preload Critical Resources

```tsx
// In _document.tsx
<Head>
  {/* Preload critical fonts */}
  <link
    rel="preload"
    href="/fonts/Mondwest.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  
  {/* Preconnect to third-party domains */}
  <link rel="preconnect" href="https://www.googletagmanager.com" />
</Head>
```

---

#### 2. Use Next.js Font Optimization

```typescript
// In _app.tsx or _document.tsx
import { Mondwest } from 'next/font/google'

const mondwest = Mondwest({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mondwest',
})

// Then in layout:
<html className={mondwest.variable}>
```

---

## 📊 Expected Results by Phase

### **Minimal Effort (Phase 1 Only)**:

| Action | TBT Reduction |
|--------|---------------|
| Remove Hotjar | -172ms |
| Remove standalone GA | -259ms |
| Remove Google Ads* | -217ms |
| Remove FB Pixel* | -100ms |
| **TOTAL** | **-650ms to -750ms** |

**New TBT**: ~1,500ms (from 2,212ms)  
**New Score**: ~75-78

*Optional but recommended if not actively using

---

### **Medium Effort (Phase 1 + Phase 2)**:

| Phase | TBT Reduction |
|-------|---------------|
| Phase 1 | -750ms |
| Phase 2 | -400ms |
| **TOTAL** | **-1,150ms** |

**New TBT**: ~1,000ms (from 2,212ms)  
**New Score**: ~78-82

---

### **Maximum Effort (All Phases + Partytown)**:

| Phase | TBT Reduction |
|-------|---------------|
| Phase 1 + Partytown | -1,200ms |
| Phase 2 | -400ms |
| Phase 3 | -250ms |
| **TOTAL** | **-1,850ms** |

**New TBT**: ~350ms (from 2,212ms)  
**New Score**: ~85-88

---

## 🎯 Recommended Immediate Actions (Quick Wins)

### **Step 1: Remove Non-Essential Analytics** (30 minutes)

Remove these from `src/pages/_document.tsx`:

1. ❌ **Hotjar** (unless actively analyzing user behavior)
2. ❌ **Standalone Google Analytics** (GTM already handles it)
3. ❌ **Google Ads** (unless running active campaigns)
4. ❌ **Facebook Pixel** (unless running Facebook ads)

**Keep only**:
- ✅ Google Tag Manager (configure GA inside GTM)

**Expected gain**: -650ms TBT, Score +5-8 points

---

### **Step 2: Run Bundle Analyzer** (15 minutes)

```bash
npm install --save-dev @next/bundle-analyzer
ANALYZE=true npm run build
```

Look for:
- Large dependencies to replace
- Unused code to remove
- Duplicated packages

---

### **Step 3: Test Results** (10 minutes)

After Step 1, rebuild and test:

```bash
npm run build
npm run start
# Run PageSpeed Insights again
```

**Expected new score**: 78-80

---

## 📋 Priority Matrix

### **Do First** (High Impact, Low Effort):
1. ✅ Remove Hotjar (-172ms, 5 min)
2. ✅ Remove duplicate GA (-259ms, 10 min)
3. ✅ Bundle analysis (0ms now, insights for later)

### **Do Next** (High Impact, Medium Effort):
4. ✅ Remove Google Ads if unused (-217ms, 5 min)
5. ✅ Remove Facebook Pixel if unused (-100ms, 5 min)
6. ✅ Code split AICaller component (-100ms, 30 min)

### **Do Later** (High Impact, High Effort):
7. ⭐ Implement Partytown (-800ms, 2-3 hours)
8. ⭐ Optimize React hydration (-200ms, 3-4 hours)
9. ⭐ Further bundle optimization (-150ms, 2-3 hours)

---

## 🚀 Implementation Guide

### **Quick Start (30 minutes)**:

1. Open `src/pages/_document.tsx`
2. Comment out Hotjar script
3. Comment out standalone GA scripts (keep GTM)
4. If not using ads, comment out Google Ads and FB Pixel
5. Save and rebuild:

```bash
npm run build
npm run start
```

6. Test on PageSpeed Insights
7. Expected new score: **78-80**

---

### **Files to Modify**:

```
src/pages/_document.tsx (primary file - remove scripts)
src/pages/_app.tsx (optional - optimize providers)
next.config.js (optional - add bundle analyzer)
```

---

## 💡 Why This Will Work

### **The Math**:

Current TBT sources:
- Third-party scripts: 1,330ms (60%)
- First-party code: 882ms (40%)

By removing non-essential third-parties:
- Remove 650-750ms directly
- Score improves by 5-8 points
- Still keep core tracking (GTM)

**Trade-off**: Lose some analytics detail, but:
- ✅ Much faster site
- ✅ Better user experience
- ✅ Better SEO (Core Web Vitals)
- ✅ Can add back selectively later

---

## 🎯 Success Criteria

### **Target**: Score 80+, TBT < 1,000ms

| Metric | Current | Target | Achievable? |
|--------|---------|--------|-------------|
| Score | 71 | 80+ | ✅ Yes |
| TBT | 2,212ms | < 1,000ms | ✅ Yes |
| CLS | 0 | 0 | ✅ Maintained |
| LCP | 1.9s | < 2.0s | ✅ Maintained |

---

## ❓ Decision Time

**Which approach do you want?**

### **Option A: Quick Wins (RECOMMENDED)** ✅
- Remove non-essential analytics
- 30 minutes effort
- -650ms TBT
- Score ~78-80
- **Start here!**

### **Option B: Aggressive Optimization**
- Remove most third-parties
- Implement Partytown
- 6-8 hours effort
- -1,500ms TBT
- Score ~85-88

### **Option C: Balanced Approach**
- Quick wins + bundle optimization
- 3-4 hours effort
- -1,000ms TBT
- Score ~80-83

---

**Ready to implement? I recommend starting with Option A - let me know and I'll make the changes!**




