#!/bin/bash

# Target files from grep search
files=(
"./src/constants/cta-links.ts"
"./src/components/audit-landing/Deliverables.tsx"
"./src/components/audit-landing/SocialProof.tsx"
"./src/components/audit-landing/FinalCTA.tsx"
"./src/components/audit-landing/Navigation.tsx"
"./src/components/sections/AIRolesSection/index.tsx"
"./src/components/sections/HowWeWorkSection/index.tsx"
"./src/components/sections/HowItWorksSection.tsx"
"./src/components/sections/ContactCTASection/index.tsx"
"./src/components/sections/HeroSection/index.tsx"
"./src/components/sections/FinalCTASection/index.tsx"
"./src/components/sections/FooterSection/index.tsx"
"./src/components/sections/WhyBookThisSection.tsx"
"./src/components/sections/WhoItsForSection.tsx"
"./src/components/sections/AgentsRepoLeadSection/index.tsx"
"./src/components/sections/WhoItsForSection/index.tsx"
"./src/layouts/RootLayout/Header/index.tsx"
"./src/pages/ai-voice-agent/index.tsx"
"./src/pages/ai-receptionist-for-medical-clinics/index.tsx"
"./src/pages/ai-receptionist-for-dental-practices/index.tsx"
)

old_link="https://cal.com/free-ai-clarity-call-avoid-costly-automation-mistakes/30min"
new_link="https://cal.com/ai-aditya/30min"

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Updating $file"
    # Note: Using | as sed delimiter because of slashes in links
    sed -i '' "s|$old_link|$new_link|g" "$file"
  else
    echo "Warning: $file not found"
  fi
done
