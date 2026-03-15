const fs = require('fs');
const data = require('./website changes/voice ai directory /list_of_audio.json');

const useCases = [
  { industry: "Healthcare", role: "Medical Receptionist", description: "Empathetic and calm voice, perfect for patient appointment scheduling, reminder calls, and basic triage.", tags: ["Empathetic", "Calm", "Trustworthy"] },
  { industry: "Fintech & Banking", role: "Collections Agent", description: "Firm but polite voice suitable for payment reminders, KYC verification, and collections.", tags: ["Professional", "Assertive", "Clear"] },
  { industry: "E-commerce", role: "Support Specialist", description: "Friendly and energetic voice for handling order tracking, returns, and customer queries.", tags: ["Friendly", "Energetic", "Helpful"] },
  { industry: "Real Estate", role: "Property Assistant", description: "Consultative and engaging voice for qualifying leads, scheduling viewings, and property inquiries.", tags: ["Consultative", "Engaging", "Warm"] },
  { industry: "Logistics", role: "Delivery Coordinator", description: "Direct and clear voice for delivery scheduling, address verification, and driver coordination.", tags: ["Direct", "Clear", "Efficient"] },
  { industry: "Hospitality", role: "Concierge", description: "Welcoming and polite voice for hotel bookings, restaurant reservations, and guest inquiries.", tags: ["Welcoming", "Polite", "Premium"] },
  { industry: "EdTech", role: "Student Counselor", description: "Encouraging and patient voice for course inquiries, enrollment follow-ups, and student support.", tags: ["Encouraging", "Patient", "Guiding"] },
  { industry: "Automotive", role: "Service Advisor", description: "Knowledgeable and reassuring voice for service bookings, maintenance reminders, and test drive scheduling.", tags: ["Knowledgeable", "Reassuring", "Professional"] },
];

const voices = data.results.map((vc, i) => {
  const useCase = useCases[i % useCases.length];
  return {
    id: vc.speaker,
    name: vc.speaker.charAt(0).toUpperCase() + vc.speaker.slice(1),
    gender: vc.metadata.gender,
    audioUrl: vc.audioUrl,
    industry: useCase.industry,
    role: useCase.role,
    description: useCase.description,
    tags: useCase.tags
  };
});

fs.mkdirSync('./src/data', { recursive: true });
fs.writeFileSync('./src/data/indianVoices.ts', `export const indianVoices = ${JSON.stringify(voices, null, 2)};`);
console.log("Generated src/data/indianVoices.ts");
