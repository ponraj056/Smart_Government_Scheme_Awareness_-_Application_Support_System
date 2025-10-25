const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Scheme = require('./models/Scheme');

dotenv.config();

const schemes = [
  {
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    category: "Agriculture",
    deadline: new Date("2025-12-31"),
    description: "Financial support of ₹6000 per year to farmer families in three equal installments",
    eligibility: [
      "Small and marginal farmers",
      "Land holding up to 2 hectares",
      "Indian citizen"
    ],
    documents: [
      "Aadhaar Card",
      "Land Records",
      "Bank Account Details"
    ],
    steps: [
      "Visit PM-KISAN official portal",
      "Click on 'Farmers Corner' and select 'New Farmer Registration'",
      "Enter Aadhaar number and captcha",
      "Fill registration form with personal details",
      "Upload required documents",
      "Submit application and note registration number"
    ],
    videoUrl: "https://example.com/pm-kisan-guide",
    languages: ["Hindi", "English", "Tamil", "Telugu"],
    benefitAmount: "₹6,000 per year",
    officialWebsite: "https://pmkisan.gov.in"
  },
  {
    name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana",
    category: "Healthcare",
    deadline: new Date("2025-11-30"),
    description: "Health insurance coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization",
    eligibility: [
      "Socio-Economic Caste Census (SECC) beneficiaries",
      "Poor and vulnerable families",
      "No income limit"
    ],
    documents: [
      "Aadhaar Card",
      "Ration Card",
      "Income Certificate",
      "Mobile Number"
    ],
    steps: [
      "Check eligibility on PMJAY website",
      "Visit nearest Common Service Centre (CSC)",
      "Provide Aadhaar and family details",
      "Get Ayushman Card printed",
      "Use card at empaneled hospitals for cashless treatment"
    ],
    videoUrl: "https://example.com/ayushman-guide",
    languages: ["Hindi", "English", "Bengali", "Marathi"],
    benefitAmount: "₹5 lakh per family per year",
    officialWebsite: "https://pmjay.gov.in"
  },
  {
    name: "Pradhan Mantri Awas Yojana - Urban",
    category: "Housing",
    deadline: new Date("2025-10-25"),
    description: "Housing for all mission providing financial assistance for construction of houses",
    eligibility: [
      "EWS/LIG/MIG categories",
      "No pucca house in family",
      "First-time home buyer"
    ],
    documents: [
      "Income Certificate",
      "Identity Proof",
      "Address Proof",
      "Bank Account",
      "Caste Certificate"
    ],
    steps: [
      "Visit PMAY-U official website",
      "Select appropriate component (ISSR/BLC/AHP/CLSS)",
      "Fill online application form",
      "Upload required documents",
      "Submit application with Aadhaar authentication",
      "Track application status online"
    ],
    videoUrl: "https://example.com/pmay-guide",
    languages: ["Hindi", "English", "Gujarati", "Punjabi"],
    benefitAmount: "Up to ₹2.67 lakh subsidy",
    officialWebsite: "https://pmaymis.gov.in"
  },
  {
    name: "Stand Up India Scheme",
    category: "Entrepreneurship",
    deadline: new Date("2026-01-15"),
    description: "Loan facility between ₹10 lakh to ₹1 crore for SC/ST and Women entrepreneurs",
    eligibility: [
      "SC/ST or Women entrepreneur",
      "Age 18+ years",
      "First-time business venture"
    ],
    documents: [
      "Business Plan",
      "Identity Proof",
      "Business Registration",
      "Bank Statements",
      "Project Report"
    ],
    steps: [
      "Prepare detailed business plan",
      "Visit Stand Up India portal",
      "Create account and login",
      "Fill online application with business details",
      "Upload required documents and project report",
      "Submit to nearest bank branch",
      "Attend bank interview if required"
    ],
    videoUrl: "https://example.com/standup-guide",
    languages: ["Hindi", "English", "Kannada", "Malayalam"],
    benefitAmount: "₹10 lakh to ₹1 crore",
    officialWebsite: "https://standupmitra.in"
  },
  {
    name: "National Scholarship Portal",
    category: "Education",
    deadline: new Date("2025-11-15"),
    description: "Scholarships for students from various backgrounds to pursue education",
    eligibility: [
      "Students from SC/ST/OBC/Minority communities",
      "Family income below specified limits",
      "Enrolled in recognized educational institution"
    ],
    documents: [
      "Aadhaar Card",
      "Income Certificate",
      "Caste Certificate",
      "Bank Account Details",
      "Previous Year Marksheet"
    ],
    steps: [
      "Register on National Scholarship Portal",
      "Fill application form with academic details",
      "Upload required documents",
      "Submit application before deadline",
      "Track application status online"
    ],
    videoUrl: "https://example.com/nsp-guide",
    languages: ["Hindi", "English", "Tamil", "Bengali"],
    benefitAmount: "Varies by scholarship",
    officialWebsite: "https://scholarships.gov.in"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');

    await Scheme.deleteMany();
    console.log('🗑️  Existing schemes deleted');

    await Scheme.insertMany(schemes);
    console.log('✅ Sample schemes inserted');

    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();