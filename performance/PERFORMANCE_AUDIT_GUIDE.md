# Performance Audit Guide

## Build Analysis Results

### Current Bundle Sizes:
- **Homepage**: 230 kB First Load JS
- **AI Clarity Workshop**: 244 kB First Load JS  
- **Blog Pages**: 370 kB First Load JS (⚠️ Large)
- **Shared JS**: 235 kB

### Issues Identified:
1. ⚠️ Blog pages exceed 128 kB threshold (158 kB page data)
2. Large First Load JS across all pages
3. Multiple analytics scripts loading (GTM, GA, Facebook Pixel, Hotjar)

---

## How to Run Lighthouse Audit

### Option 1: Chrome DevTools (Easiest - Recommended)
1. Start your production server:
   ```bash
   npm run build
   npm run start
   ```
2. Open Chrome and navigate to `http://localhost:3000`
3. Open DevTools (F12)
4. Go to **Lighthouse** tab
5. Select:
   - ✅ Performance
   - ✅ Mobile (or Desktop)
   - ✅ SEO
   - ✅ Accessibility
   - ✅ Best Practices
6. Click **"Analyze page load"**
7. Review the report

### Option 2: PageSpeed Insights (Online)
1. Go to: https://pagespeed.web.dev/
2. Enter your production URL: `https://www.tryagentikai.com`
3. Click **"Analyze"**
4. Review mobile and desktop scores

### Option 3: Lighthouse CLI (Advanced)
```bash
# Install Lighthouse CLI globally
npm install -g lighthouse

# Run audit on local server
npm run start
# In another terminal:
lighthouse http://localhost:3000 --view --output=html --output-path=./lighthouse-report.html

# Or audit production URL
lighthouse https://www.tryagentikai.com --view --output=html --output-path=./lighthouse-report.html
```

---

## Key Metrics to Check

### Core Web Vitals:
- **LCP (Largest Contentful Paint)**: Should be < 2.5s
- **FID (First Input Delay)**: Should be < 100ms
- **CLS (Cumulative Layout Shift)**: Should be < 0.1

### Performance Score Targets:
- **Mobile**: 70+ (Good), 90+ (Excellent)
- **Desktop**: 80+ (Good), 95+ (Excellent)

### What to Look For:
1. **Largest Contentful Paint (LCP)**
   - Check which element is LCP (usually hero image/text)
   - Optimize hero images
   - Preload critical fonts

2. **Total Blocking Time (TBT)**
   - Check JavaScript execution time
   - Look for heavy third-party scripts
   - Consider code splitting

3. **Cumulative Layout Shift (CLS)**
   - Check for layout shifts during load
   - Ensure images have dimensions
   - Avoid dynamic content insertion

4. **First Contentful Paint (FCP)**
   - Should be < 1.8s
   - Optimize critical CSS
   - Reduce render-blocking resources

---

## Quick Performance Checks

### Check Bundle Size:
```bash
npm run build
# Look at the "First Load JS" column
```

### Check Network Requests:
1. Open DevTools → Network tab
2. Reload page
3. Check:
   - Total requests count
   - Total transfer size
   - Blocking requests (red bars)

### Check JavaScript Execution:
1. DevTools → Performance tab
2. Record page load
3. Check:
   - Main thread blocking time
   - Long tasks (>50ms)
   - Script evaluation time

---

## Next Steps After Audit

Once you have the Lighthouse report, we'll:
1. ✅ Identify specific bottlenecks
2. ✅ Optimize largest resources
3. ✅ Reduce JavaScript bundle size
4. ✅ Optimize images and fonts
5. ✅ Defer non-critical scripts
6. ✅ Implement code splitting

---

## Expected Improvements After Optimization

- **First Load JS**: Reduce from 230 kB → ~180 kB
- **LCP**: Improve from ~3-4s → < 2.5s
- **TBT**: Reduce blocking time by 40-60%
- **Performance Score**: Improve by 15-25 points

