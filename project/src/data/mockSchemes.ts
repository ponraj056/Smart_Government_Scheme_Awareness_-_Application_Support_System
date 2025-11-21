// src/data/mockSchemes.ts
import { Scheme } from "../types";

export const mockSchemes: Scheme[] = [
  // --------------------------
  // HEALTHCARE
  // --------------------------
  {
    id: "HC1",
    title: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PMJAY)",
    titleTranslations: {
      hi: "आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना",
      ta: "ஆயுஷ்மான் பாரத் - பிரதான் மந்திரி ஜன் ஆரோக்யா யோஜனா",
      te: "ఆయుష్మాన్ భారత్ - ప్రధాన్ మంత్రి జన్ ఆరోగ్య యోజన",
    },
    description:
      "World’s largest health assurance scheme providing ₹5 lakh per family per year for secondary & tertiary hospitalization in empaneled hospitals.",
    descriptionTranslations: {
      hi: "द्वितीय और तृतीय स्तर के अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष ₹5 लाख तक का स्वास्थ्य बीमा।",
      ta: "இரண்டாம் & மூன்றாம் நிலை சிகிச்சைக்காக ஒரு குடும்பத்துக்கு ஆண்டுக்கு ₹5 லட்சம் வரை மருத்துவ காப்பீடு.",
      te: "ద్వితీయ & తృతీయ చికిత్స కోసం ప్రతి కుటుంబానికి సంవత్సరానికి ₹5 లక్షల ఆరోగ్య బీమా.",
    },
    category: "healthcare",
    eligibilityCriteria: [
      "Family listed in SECC 2011 database",
      "Economically weaker section",
      "No limit on family size, age or gender",
    ],
    requiredDocuments: ["Aadhaar Card", "Ration Card / Family ID", "Mobile Number", "Address Proof"],
    applicationProcedure: [
      {
        step: 1,
        title: "Check Eligibility",
        description: "Visit pmjay.gov.in → Enter mobile number & OTP to verify eligibility.",
        tips: "You can also visit the nearest CSC center.",
      },
      {
        step: 2,
        title: "Get Ayushman Card",
        description: "Visit an empaneled hospital or CSC center and complete biometric verification.",
        tips: "Carry all original documents for ID proof.",
      },
      {
        step: 3,
        title: "Use Card for Treatment",
        description: "Show Ayushman Card at any PMJAY empaneled hospital to receive free treatment.",
        tips: "Coverage up to ₹5 lakhs per year.",
      },
    ],
    procedureTranslations: {},
    deadline: "2026-12-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 0,
    maxAge: 200,
    incomeLimit: 500000,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://pmjay.gov.in",
    youtubeVideoUrl: "https://youtu.be/D3x830asSjI",
  },

  {
    id: "HC2",
    title: "Janani Suraksha Yojana (JSY)",
    titleTranslations: {
      hi: "जननी सुरक्षा योजना",
      ta: "ஜனனி பாதுகாப்பு திட்டம்",
      te: "జనని సురక్ష యోజన",
    },
    description:
      "Provides cash assistance to pregnant women for institutional delivery to reduce maternal and infant mortality rates.",
    descriptionTranslations: {
      hi: "संस्थागत प्रसव को बढ़ावा देने के लिए गर्भवती महिलाओं को नकद सहायता।",
      ta: "கர்ப்பிணி பெண்களுக்கு மருத்துவமனையில் பிரசவிக்க நிதி உதவி.",
      te: "గర్భిణీ స్త్రీలు ఆసుపత్రిలో ప్రసవించేందుకు నగదు సహాయం.",
    },
    category: "healthcare",
    eligibilityCriteria: [
      "Pregnant women from low-income households",
      "Must choose institutional delivery (public health centers)",
      "Valid maternal ID and pregnancy details",
    ],
    requiredDocuments: ["Aadhaar Card", "Pregnancy Certificate", "Bank Account", "Mother & Child Protection Card"],
    applicationProcedure: [
      {
        step: 1,
        title: "Contact ASHA Worker",
        description: "Register pregnancy and get JSY benefit approval through ASHA worker.",
        tips: "Keep medical records updated.",
      },
      {
        step: 2,
        title: "Institutional Delivery",
        description: "Deliver at government hospital or approved center to receive cash incentive.",
        tips: "Cash benefit varies by state.",
      },
      {
        step: 3,
        title: "Receive Payment",
        description: "Cash assistance transferred to registered bank account.",
      },
    ],
    procedureTranslations: {},
    deadline: "2026-03-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 18,
    maxAge: 50,
    incomeLimit: 300000,
    genderEligibility: ["Female"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://nhm.gov.in",
    youtubeVideoUrl: "https://youtu.be/UyI1psr6A_s?si=L0hbpScXSmnW8GO9",
  },

  {
    id: "HC3",
    title: "National TB Elimination Programme (NTEP)",
    titleTranslations: {
      hi: "राष्ट्रीय टीबी उन्मूलन कार्यक्रम",
      ta: "தேசிய காசநோய் ஒழிப்பு திட்டம்",
      te: "జాతీయ టిబి నిర్మూలన కార్యక్రమం",
    },
    description:
      "Free TB diagnosis & treatment including medicines, nutritional support, and cash assistance for patients.",
    descriptionTranslations: {
      hi: "टीबी रोगियों के लिए मुफ्त जाँच, इलाज और पोषण सहायता।",
      ta: "காசநோய் நோயாளிகளுக்கு இலவச பரிசோதனை, சிகிச்சை மற்றும் ஊட்டச்சத்து உதவி.",
      te: "టిబి రోగులకు ఉచిత పరీక్ష, చికిత్స & పోషకాహార సాయం.",
    },
    category: "healthcare",
    eligibilityCriteria: ["Any TB patient", "Confirmed diagnosis by government doctor"],
    requiredDocuments: ["Aadhaar Card", "TB Diagnosis Report", "Bank Account", "Mobile Number"],
    applicationProcedure: [
      {
        step: 1,
        title: "Diagnosis",
        description: "Visit nearest government PHC/CHC for sputum or X-ray screening.",
      },
      {
        step: 2,
        title: "Enroll Under NTEP",
        description: "ASHA worker registers patient and provides treatment kit.",
      },
      {
        step: 3,
        title: "Nutritional Incentive",
        description: "₹500 monthly nutritional allowance credited during treatment.",
      },
    ],
    procedureTranslations: {},
    deadline: "2027-12-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 1,
    maxAge: 200,
    incomeLimit: 1000000,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://ntep.in",
    youtubeVideoUrl: "https://youtu.be/uuflglAJ_SU?si=SavTiFXf3PzN344U",
  },

  // --------------------------
  // AGRICULTURE
  // --------------------------
 {
    id: '3',
    title: 'PM Kisan Samman Nidhi',
    titleTranslations: {
      hi: 'पीएम किसान सम्मान निधि',
      ta: 'பிரதமர் கிசான் சம்மான் நிதி',
      te: 'పిఎమ్ కిసాన్ సమ్మాన్ నిధి',
    },
    description:
      'Income support scheme for farmer families. Provides ₹6,000 per year in three equal installments directly to bank accounts.',
    descriptionTranslations: {
      hi: 'किसान परिवारों के लिए आय सहायता योजना। सीधे बैंक खातों में तीन समान किस्तों में प्रति वर्ष ₹6,000 प्रदान करता है।',
      ta: 'விவசாயி குடும்பங்களுக்கான வருமான ஆதரவு திட்டம். வங்கிக் கணக்குகளுக்கு நேரடியாக மூன்று சம பகுதிகளாக ஆண்டுக்கு ₹6,000 வழங்குகிறது.',
      te: 'రైతు కుటుంబాలకు ఆదాయ మద్దతు పథకం. బ్యాంక్ ఖాతాలకు నేరుగా మూడు సమాన వాయిదాలలో సంవత్సరానికి ₹6,000 అందిస్తుంది.',
    },
    category: 'agriculture',
    eligibilityCriteria: [
      'Must be a farmer with cultivable land',
      'Land records should be updated',
      'Should not be an income tax payer',
      'Should not hold constitutional post',
    ],
    requiredDocuments: [
      'Aadhaar Card',
      'Land Ownership Documents',
      'Bank Account with IFSC',
      'Mobile Number linked to Aadhaar',
    ],
    applicationProcedure: [
      {
        step: 1,
        title: 'Self Registration',
        description:
          'Visit pmkisan.gov.in and click on Farmers Corner > New Farmer Registration',
        tips: 'Registration can also be done through CSC centers',
      },
      {
        step: 2,
        title: 'Enter Details',
        description:
          'Fill Aadhaar number, mobile number, and select state and district',
        tips: 'Ensure Aadhaar is linked with mobile number',
      },
      {
        step: 3,
        title: 'Upload Documents',
        description: 'Upload land records and bank passbook copy',
        tips: 'Documents should be clear and in required format',
      },
      {
        step: 4,
        title: 'Verify Status',
        description: 'After submission, track status using registration number',
        tips: 'First installment comes after verification',
      },
    ],
    procedureTranslations: {},
    deadline: '2025-11-30',
    isActive: true,
    targetStates: ['All India'],
    minAge: 18,
    maxAge: 200,
    genderEligibility: ['Male', 'Female', 'Other'],
    categoryEligibility: ['General', 'SC', 'ST', 'OBC', 'EWS'],
    officialUrl: 'https://pmkisan.gov.in',
    youtubeVideoUrl: 'https://youtu.be/7t7564MS1Bk?si=lWhkd8srEFQGHUqf',
  },
  {
    id: "AG2",
    title: "PM Fasal Bima Yojana (PMFBY)",
    titleTranslations: {
      hi: "प्रधानमंत्री फसल बीमा योजना",
      ta: "பிரதமர் பயிர் காப்பீட்டு திட்டம்",
      te: "పీఎం పంట బీమా పథకం",
    },
    description:
      "Provides crop insurance to farmers against natural calamities, pests, diseases, and crop loss.",
    descriptionTranslations: {
      hi: "प्राकृतिक आपदाओं और फसल क्षति के लिए किसानों को बीमा सुरक्षा प्रदान करता है।",
      ta: "இயற்கை பேரிடர்களுக்கும் பயிர் சேதங்களுக்கு விவசாயிகளுக்கு காப்பீடு.",
      te: "ప్రకృతి వైపరీత్యాలు మరియు పంట నష్టాలకు రైతులకు బీమా రక్షణ.",
    },
    category: "agriculture",
    eligibilityCriteria: [
      "All farmers growing notified crops",
      "Farmer must have insurable interest in the crop",
      "Tenant farmers are also eligible",
      "Crop must be in the notified area",
    ],
    requiredDocuments: ["Aadhaar Card", "Land Papers / Lease Document", "Sowing Certificate", "Bank Account Details", "Crop Details Form"],
    applicationProcedure: [
      {
        step: 1,
        title: "Register for Insurance",
        description: "Apply on pmfby.gov.in or through local CSC center",
        tips: "Apply within insurance enrollment window",
      },
      {
        step: 2,
        title: "Upload Crop Details",
        description: "Provide sowing and crop type details",
        tips: "Use land ownership documents for verification",
      },
      {
        step: 3,
        title: "Premium Payment",
        description: "Pay minimal premium (2% for Kharif / 1.5% Rabi)",
        tips: "Bank will auto-debit premium for loan farmers",
      },
      {
        step: 4,
        title: "Claim Settlement",
        description: "If crop damage occurs, submit claim via portal or mobile app",
        tips: "Add geotagged images for quicker processing",
      },
    ],
    procedureTranslations: {},
    deadline: "2027-03-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 18,
    maxAge: 200,
    incomeLimit: 5000000,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://pmfby.gov.in",
    youtubeVideoUrl: "https://youtu.be/LHy6gfFwHiE?si=hFS0Fy6-b0y66ys_",
  },

  {
    id: "AG3",
    title: "Soil Health Card Scheme",
    titleTranslations: {
      hi: "मृदा स्वास्थ्य कार्ड योजना",
      ta: "மண் ஆரோக்கிய அட்டை திட்டம்",
      te: "మట్టి ఆరోగ్య కార్డ్ పథకం",
    },
    description:
      "Provides farmers with Soil Health Cards that contain nutrient status & fertilizer recommendations for improved productivity.",
    descriptionTranslations: {
      hi: "मृदा स्वास्थ्य कार्ड में पोषक तत्वों की स्थिति और उर्वरक की सिफारिशें दी जाती हैं।",
      ta: "மண் சத்து நிலை மற்றும் உர பரிந்துரைகளை வழங்கும் அட்டை.",
      te: "మట్టి పుష్కలత వివరాలు మరియు ఎరువు సూచనలు అందించే పథకం.",
    },
    category: "agriculture",
    eligibilityCriteria: ["All farmers including tenants and sharecroppers", "Land must be cultivable"],
    requiredDocuments: ["Aadhaar Card", "Landholding Document", "Mobile Number"],
    applicationProcedure: [
      {
        step: 1,
        title: "Soil Sample Collection",
        description: "Farmer or agriculture department staff collects soil samples.",
        tips: "Samples taken every 3 years.",
      },
      {
        step: 2,
        title: "Lab Testing",
        description: "Government labs test soil nutrients & crops suitability.",
        tips: "Testing is free under SHC scheme.",
      },
      {
        step: 3,
        title: "Card Generation",
        description: "Soil Health Card issued with fertiliser recommendations.",
        tips: "Farmers can download SHC online.",
      },
    ],
    procedureTranslations: {},
    deadline: "2030-03-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 18,
    maxAge: 200,
    incomeLimit: 10000000,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://soilhealth.dac.gov.in",
    youtubeVideoUrl: "https://youtu.be/9RjWmbb-spE?si=ACp53G-pKzLjn2qQ",
  },

  // --------------------------
  // WOMEN WELFARE
  // --------------------------
  {
    id: "W1",
    title: "Beti Bachao Beti Padhao (BBBP)",
    titleTranslations: {
      hi: "बेटी बचाओ बेटी पढ़ाओ",
      ta: "பெட்டி பச்சாவ் பெட்டி படாவோ திட்டம்",
      te: "బేటీ బచావో బేటీ పడావో పథకం",
    },
    description:
      "Central scheme promoting girl child education, preventing gender discrimination, and improving the Child Sex Ratio.",
    descriptionTranslations: {
      hi: "लड़कियों की शिक्षा, सुरक्षा और लिंग अनुपात सुधारने के लिए चलाया जाने वाला राष्ट्रीय कार्यक्रम।",
      ta: "பெண் குழந்தைகளின் கல்வி, பாதுகாப்பு மற்றும் பாலின விகிதத்தை மேம்படுத்தும் தேசிய திட்டம்.",
      te: "పిల్లల విద్య, రక్షణ మరియు లింగ నిష్పత్తిని మెరుగుపరచడానికి జాతీయ పథకం.",
    },
    category: "women_welfare",
    eligibilityCriteria: [
      "Must be an Indian girl child",
      "Age 0–18 years",
      "Family should not be involved in child marriage",
      "Enrollment in school is required for benefits",
    ],
    requiredDocuments: ["Aadhaar Card", "Birth Certificate", "Parents' ID Proof", "School Enrollment Proof"],
    applicationProcedure: [
      {
        step: 1,
        title: "Visit Women & Child Department",
        description: "Apply at nearest Anganwadi Centre or District Women & Child Development office.",
        tips: "Carry original documents for verification",
      },
      {
        step: 2,
        title: "Fill Enrollment Form",
        description: "Register girl child under BBBP initiative through local authority.",
        tips: "Check local district portal for availability",
      },
      {
        step: 3,
        title: "Submit Documents",
        description: "Submit required ID and birth records.",
        tips: "Ensure details match Aadhaar",
      },
    ],
    procedureTranslations: {},
    deadline: "2026-03-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 0,
    maxAge: 18,
    genderEligibility: ["Female"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://wcd.nic.in/bbbp-scheme",
    youtubeVideoUrl: "https://youtu.be/T5e-X202T9o?si=YGUDKcQSiqjqHP92",
  },
  
 {
    id: '1',
    title: 'PM Scholarship Scheme',
    titleTranslations: {
      hi: 'पीएम छात्रवृत्ति योजना',
      ta: 'பிரதமர் உதவித்தொகை திட்டம்',
      te: 'పిఎమ్ స్కాలర్‌షిప్ పథకం',
    },
    description:
      'Financial assistance for students from economically weaker sections to pursue higher education. The scholarship covers tuition fees and provides monthly stipends.',
    descriptionTranslations: {
      hi: 'आर्थिक रूप से कमजोर वर्गों के छात्रों के लिए उच्च शिक्षा प्राप्त करने के लिए वित्तीय सहायता। छात्रवृत्ति में ट्यूशन फीस और मासिक छात्रवृत्ति शामिल है।',
      ta: 'பொருளாதார ரீதியாக பலவீனமான பிரிவுகளைச் சேர்ந்த மாணவர்களுக்கு உயர்கல்வி தொடர நிதி உதவி. உதவித்தொகை கல்விக் கட்டணம் மற்றும் மாதாந்திர உதவித்தொகையை உள்ளடக்கியது.',
      te: 'ఆర్థికంగా బలహీన వర్గాల విద్యార్థులకు ఉన్నత విద్యను అభ్యసించడానికి ఆర్థిక సహాయం. స్కాలర్‌షిప్ ట్యూషన్ ఫీజులను కవర్ చేస్తుంది మరియు నెలవారీ స్టైపెండ్‌లను అందిస్తుంది.',
    },
    category: 'education',
    eligibilityCriteria: [
      'Student from family with annual income less than 6 lakhs',
      'Age between 18-25 years',
      'Minimum 60% marks in previous examination',
      'Indian citizen',
    ],
    requiredDocuments: [
      'Aadhaar Card',
      'Income Certificate',
      'Bank Account Details',
      'Previous Year Mark Sheets',
      'Passport Size Photograph',
    ],
    applicationProcedure: [
      {
        step: 1,
        title: 'Visit Official Portal',
        description:
          'Go to the National Scholarship Portal (scholarships.gov.in) and click on New Registration',
        tips: 'Keep all documents ready before starting',
      },
      {
        step: 2,
        title: 'Fill Registration Form',
        description:
          'Enter personal details including name, date of birth, mobile number, and email address',
        tips: 'Use a valid email and mobile number for verification',
      },
      {
        step: 3,
        title: 'Upload Documents',
        description:
          'Scan and upload all required documents in PDF format (max 200KB per file)',
        tips: 'Ensure documents are clear and readable',
      },
      {
        step: 4,
        title: 'Submit Application',
        description:
          'Review all details carefully and submit the application. Note down the application ID',
        tips: 'Take a screenshot of the confirmation page',
      },
    ],
    procedureTranslations: {},
    deadline: '2025-12-31',
    isActive: true,
    targetStates: ['All India'],
    minAge: 18,
    maxAge: 25,
    incomeLimit: 600000,
    genderEligibility: ['Male', 'Female', 'Other'],
    categoryEligibility: ['General', 'SC', 'ST', 'OBC', 'EWS'],
    officialUrl: 'https://scholarships.gov.in',
    youtubeVideoUrl: 'https://youtu.be/UFKaWaQm17M?si=9AvwvGLo10oVUnmF',
  },
  {
  id: "EMP3",
  title: "PM SVANidhi – Street Vendor Loan Scheme",
  titleTranslations: {
    hi: "पीएम स्वनिधि योजना",
    ta: "பிஎம் ஸ்வநிதி திட்டம்",
    te: "పీఎం స్వానిధి పథకం"
  },
  description:
    "Provides collateral-free loans up to ₹50,000 for street vendors to restart or expand their livelihood.",
  descriptionTranslations: {
    hi: "स्ट्रीट वेंडरों को ₹50,000 तक का बिना गारंटी वाला ऋण मिलता है।",
    ta: "தெருவோர வியாபாரிகளுக்கு ரூ.50,000 வரை ஜாமீன் இன்றி கடன் வழங்கப்படுகிறது.",
    te: "రోడ్డు వ్యాపారులకు రూ.50,000 వరకు రుణం అందిస్తుంది."
  },
  category: "employment",
  eligibilityCriteria: [
    "Must be a street vendor",
    "Age 18+",
    "Vendor certificate/ID required",
    "Should be operating before 24 March 2020"
  ],
  requiredDocuments: [
    "Aadhaar Card",
    "Vendor ID / Letter of Recommendation",
    "Bank Account",
    "Mobile Number"
  ],
  applicationProcedure: [
    {
      step: 1,
      title: "Apply on PM SVANidhi Portal",
      description: "Fill online loan form using Aadhaar authentication.",
      tips: "Vendor ID increases approval chances."
    },
    {
      step: 2,
      title: "Loan Sanction",
      description: "Bank processes application and approves loan.",
      tips: "No collateral required."
    },
    {
      step: 3,
      title: "Repayment Benefits",
      description:
        "Timely repayment gives interest subsidy & eligibility for higher loan.",
      tips: "Digital payments give cashback rewards."
    }
  ],
  procedureTranslations: {},
  deadline: "2026-12-31",
  isActive: true,
  targetStates: ["All India"],
  minAge: 18,
  maxAge: 200,
  incomeLimit: 3000000,
  genderEligibility: ["Male", "Female", "Other"],
  categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
  officialUrl: "https://pmsvanidhi.mohua.gov.in",
  youtubeVideoUrl: "https://youtu.be/S2Uj12TpbkU?si=Q-Kfa4C2FwfDboUr"
},


  {
    id: "W2",
    title: "One Stop Center Scheme (Sakhi)",
    titleTranslations: {
      hi: "वन स्टॉप सेंटर योजना (सखी केंद्र)",
      ta: "ஒரே இடத்தில் பெண்கள் பாதுகாப்பு மையம் (சகி)",
      te: "వన్ స్టాప్ సెంటర్ పథకం (సఖి)",
    },
    description:
      "Provides integrated support and assistance to women facing violence, including lodging, counseling, police help, and legal support.",
    descriptionTranslations: {
      hi: "हिंसा का सामना करने वाली महिलाओं को एक ही स्थान पर चिकित्सा, कानूनी और मानसिक सहायता प्रदान की जाती है।",
      ta: "வன்முறைக்கு உள்ளான பெண்களுக்கு மருத்துவ, சட்ட, ஆலோசனை உள்ளிட்ட சேவைகள் ஒரே இடத்தில் வழங்கப்படும்.",
      te: "హింసకు గురైన మహిళలకు వైద్య, న్యాయ, కౌన్సెలింగ్ సహాయాలు ఒకే చోట అందించే పథకం.",
    },
    category: "women_welfare",
    eligibilityCriteria: ["Applicant must be a woman facing violence", "Domestic, workplace, community or cyber harassment cases allowed"],
    requiredDocuments: ["Aadhaar Card", "Any ID Proof", "Police Complaint (optional)", "Medical Records (if applicable)"],
    applicationProcedure: [
      {
        step: 1,
        title: "Find Nearest Sakhi Center",
        description: "Visit sakhi.gov.in to locate nearest OSC.",
        tips: "24×7 help available",
      },
      {
        step: 2,
        title: "Walk-in or Helpline",
        description: "Use Women Helpline 181 or visit center directly.",
        tips: "Immediate protection provided",
      },
      {
        step: 3,
        title: "Receive Services",
        description: "Counseling, shelter, legal support, and police assistance provided.",
        tips: "All services are FREE",
      },
    ],
    procedureTranslations: {},
    deadline: "2030-12-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 0,
    maxAge: 200,
    genderEligibility: ["Female"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://wcd.nic.in/osc",
    youtubeVideoUrl: "https://youtu.be/55gy38iCSzs?si=H7Hoavzzfj_k72V9",
  },

  {
    id: "W3",
    title: "Mahila E-Haat",
    titleTranslations: {
      hi: "महिला ई-हाट",
      ta: "மகிளா இ-ஹாட்",
      te: "మహిళా ఈ-హాట్",
    },
    description:
      "A digital marketing platform enabling women entrepreneurs to showcase and sell their products directly to customers across India.",
    descriptionTranslations: {
      hi: "महिला उद्यमियों को अपने उत्पादों को ऑनलाइन बेचने का प्लेटफ़ॉर्म।",
      ta: "பெண் தொழில்முனைவோருக்கு தங்கள் தயாரிப்புகளை ஆன்லைனில் விற்க உதவும் தளம்.",
      te: "మహిళా వ్యాపారులకు తమ ఉత్పత్తులను ఆన్‌లైన్‌లో అమ్మడానికి సహాయపడే వేదిక.",
    },
    category: "women_welfare",
    eligibilityCriteria: ["Must be a woman entrepreneur", "Individual or SHG (Self Help Group) can apply", "Products must be legal & handmade"],
    requiredDocuments: ["Aadhaar / PAN Card", "Product Images", "Bank Account Details", "Business Information"],
    applicationProcedure: [
      {
        step: 1,
        title: "Open E-Haat Portal",
        description: "Visit mahilaehaat-rmk.gov.in",
        tips: "Ensure product photos are high quality",
      },
      {
        step: 2,
        title: "Create Seller Profile",
        description: "Provide business details, product category, bank info.",
        tips: "Fill accurate information for approval",
      },
      {
        step: 3,
        title: "Upload Products",
        description: "Add product images, pricing, and shipping details.",
        tips: "Set competitive pricing",
      },
    ],
    procedureTranslations: {},
    deadline: "2027-12-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 18,
    maxAge: 200,
    genderEligibility: ["Female"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://mahilaehaat-rmk.gov.in",
    youtubeVideoUrl: "https://youtu.be/_HEkZUXpGo4",
  },

  // --------------------------
  // YOUTH EMPLOYMENT
  // --------------------------
  {
    id: "Y1",
    title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    titleTranslations: {
      hi: "प्रधानमंत्री कौशल विकास योजना",
      ta: "பிரதமர் திறன் மேம்பாட்டு திட்டம்",
      te: "ప్రధాన్ మంత్రి కౌశల్ వికాస్ యోజన",
    },
    description:
      "A national skill development scheme offering free vocational training and certification to youth for better employment opportunities.",
    descriptionTranslations: {
      hi: "युवा रोजगार अवसरों के लिए मुफ्त कौशल प्रशिक्षण और प्रमाणन प्रदान करने वाली राष्ट्रीय योजना।",
      ta: "இளைஞர்களுக்கு இலவச திறன் பயிற்சி மற்றும் சான்றிதழ் வழங்கும் தேசிய திட்டம்.",
      te: "యువతకు ఉచిత నైపుణ్య శిక్షణ మరియు సర్టిఫికేషన్ అందించే జాతీయ పథకం.",
    },
    category: "youth_employment",
    eligibilityCriteria: ["Indian citizen aged 18–35 years", "School and college dropouts eligible", "Unemployed youth preferred", "No income limit"],
    requiredDocuments: ["Aadhaar Card", "Educational Certificates", "Bank Account", "Passport Size Photo"],
    applicationProcedure: [
      {
        step: 1,
        title: "Find Training Center",
        description: "Visit pmkvyofficial.org and locate nearest skill center.",
        tips: "Choose a course that matches job demand.",
      },
      {
        step: 2,
        title: "Enroll for Training",
        description: "Submit documents and register for selected course.",
        tips: "Training is completely free.",
      },
      {
        step: 3,
        title: "Assessment & Certification",
        description: "Take skill assessment after course completion.",
        tips: "Certified candidates get higher placement chances.",
      },
    ],
    procedureTranslations: {},
    deadline: "2026-03-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 18,
    maxAge: 35,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://www.pmkvyofficial.org",
    youtubeVideoUrl: "https://youtu.be/MPGtOXY_DAk?si=RGYlMvmT0ioxLQIC",
  },

  {
    id: "Y2",
    title: "National Apprenticeship Promotion Scheme (NAPS)",
    titleTranslations: {
      hi: "राष्ट्रीय प्रशिक्षुता प्रोत्साहन योजना",
      ta: "தேசிய பழகுநர் ஊக்குவிப்பு திட்டம்",
      te: "జాతీయ శిక్షణ ప్రోత్సాహక పథకం",
    },
    description:
      "Provides apprenticeship training with stipend support and job placement opportunities across industries.",
    descriptionTranslations: {
      hi: "उद्योगों में प्रशिक्षण, स्टाइपेंड और रोजगार अवसर प्रदान करने वाली योजना।",
      ta: "தொழில் துறைகளில் பயிற்சி, ஊதியம் மற்றும் வேலை வாய்ப்புகளை வழங்கும் திட்டம்.",
      te: "ఉద్యోగాల్లో శిక్షణ, స్టైపెండ్ మరియు ప్లేస్మెంట్ అవకాశాలను అందిస్తుంది.",
    },
    category: "youth_employment",
    eligibilityCriteria: ["Must be aged 16+", "Should not be a government employee", "Basic education required (Class 5–12 depending on trade)", "Unemployed youth preferred"],
    requiredDocuments: ["Aadhaar Card", "Bank Account", "Educational Certificates", "Mobile Number"],
    applicationProcedure: [
      {
        step: 1,
        title: "Create Profile",
        description: "Visit apprenticeshipindia.gov.in and register as a candidate.",
        tips: "Use Aadhaar-linked mobile number.",
      },
      {
        step: 2,
        title: "Apply for Apprenticeships",
        description: "Choose from thousands of industry apprenticeship openings.",
        tips: "Apply to multiple companies to increase selection chances.",
      },
      {
        step: 3,
        title: "Join Training",
        description: "Selected candidates receive on-the-job training and a stipend.",
        tips: "Certificates improve employability.",
      },
    ],
    procedureTranslations: {},
    deadline: "2027-12-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 16,
    maxAge: 200,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://www.apprenticeshipindia.gov.in",
    youtubeVideoUrl: "https://youtu.be/BLOB_GzMecc?si=xb0jplgD8luuycOm",
  },

  {
    id: "Y3",
    title: "MGNREGA Youth Employment Scheme",
    titleTranslations: {
      hi: "मनरेगा युवा रोजगार योजना",
      ta: "மன்ரேகா இளைஞர் வேலை வாய்ப்பு திட்டம்",
      te: "ఎంఎన్‌ఆర్‌ఇజిఏ యువ ఉపాధి పథకం",
    },
    description:
      "Provides guaranteed wage employment for rural youth for 100 days a year under government-approved works.",
    descriptionTranslations: {
      hi: "ग्रामीण युवाओं को हर साल 100 दिनों का गारंटीड रोजगार उपलब्ध कराया जाता है।",
      ta: "ஊரக இளைஞர்களுக்கு ஆண்டுக்கு 100 நாட்கள் உத்தரவாத வேலை வழங்கப்படுகிறது.",
      te: "గ్రామీణ యువతకు సంవత్సరానికి 100 రోజుల హామీ ఉపాధి ఇస్తుంది.",
    },
    category: "youth_employment",
    eligibilityCriteria: ["Must be a rural resident", "Age between 18–40 years", "Job card required", "Should be willing to work on govt-approved projects"],
    requiredDocuments: ["Aadhaar Card", "Ration Card", "Job Card", "Bank Details"],
    applicationProcedure: [
      {
        step: 1,
        title: "Get Job Card",
        description: "Apply at nearest Gram Panchayat for Job Card.",
        tips: "At least one adult member of household can apply.",
      },
      {
        step: 2,
        title: "Demand Work",
        description: "Request employment at Gram Panchayat for MGNREGA works.",
        tips: "Work must be provided within 15 days.",
      },
      {
        step: 3,
        title: "Start Earning",
        description: "Join work such as construction, irrigation, plantation, etc.",
        tips: "Wages deposited directly into bank account.",
      },
    ],
    procedureTranslations: {},
    deadline: "2030-03-31",
    isActive: true,
    targetStates: ["All India (Rural)"],
    minAge: 18,
    maxAge: 40,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://nrega.nic.in",
    youtubeVideoUrl: "https://youtu.be/dqFzDlAoGXY?si=sf5IUonCvKAkZgGp",
  },

  // --------------------------
  // ENTREPRENEURSHIP
  // --------------------------
  {
    id: "E1",
    title: "Stand-Up India Scheme",
    titleTranslations: {
      hi: "स्टैंड-अप इंडिया योजना",
      ta: "ஸ்டாண்ட் அப் இந்தியா திட்டம்",
      te: "స్టాండ్ అಪ್ ఇండియా పథకం",
    },
    description:
      "Provides bank loans to SC/ST and Women entrepreneurs for establishing new enterprises in manufacturing, services, or trading sectors.",
    descriptionTranslations: {
      hi: "एससी/एसटी और महिला उद्यमियों को नए व्यवसाय शुरू करने के लिए बैंक ऋण प्रदान किया जाता है।",
      ta: "SC/ST மற்றும் பெண்கள் தொழில்முனைவோருக்கு புதிய வணிகங்களைத் தொடங்க வங்கி கடன் வழங்கப்படுகிறது.",
      te: "SC/ST మరియు మహిళా వ్యాపారులకు కొత్త వ్యాపారాలను ప్రారంభించడానికి బ్యాంకు రుణాలు అందిస్తారు.",
    },
    category: "entrepreneurship",
    eligibilityCriteria: ["Applicant must be SC/ST or Woman", "Age above 18 years", "Loan must be for greenfield enterprise", "Enterprise must be in manufacturing, trading, or services"],
    requiredDocuments: ["Aadhaar Card", "Caste Certificate (SC/ST only)", "PAN Card", "Project Report", "Bank Account Details", "Address Proof"],
    applicationProcedure: [
      {
        step: 1,
        title: "Visit Official Portal",
        description: "Go to standupmitra.in and create a borrower profile.",
        tips: "Keep Aadhaar-linked mobile number ready.",
      },
      {
        step: 2,
        title: "Upload Business Details",
        description: "Submit business proposal and required documents.",
        tips: "A detailed project report increases loan approval chances.",
      },
      {
        step: 3,
        title: "Bank Processing",
        description: "Loan is processed by chosen bank branch.",
        tips: "Follow up with branch for quick processing.",
      },
    ],
    procedureTranslations: {},
    deadline: "2027-03-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 18,
    maxAge: 200,
    genderEligibility: ["Female", "Male", "Other"],
    categoryEligibility: ["SC", "ST", "General", "OBC"],
    incomeLimit: 10000000,
    officialUrl: "https://standupmitra.in",
    youtubeVideoUrl: "https://youtu.be/pnkdx3sqO_4?si=GMlGGDae8yoBMPB4",
  },

  {
    id: "E2",
    title: "PMEGP – Prime Minister Employment Generation Programme",
    titleTranslations: {
      hi: "प्रधानमंत्री रोजगार सृजन कार्यक्रम",
      ta: "பிரதமர் வேலைவாய்ப்பு உருவாக்கத் திட்டம்",
      te: "ప్రధానమంత్రి ఉద్యోగ తయారీ పథకం",
    },
    description:
      "Provides subsidies up to 35% for setting up micro-enterprises in manufacturing and service sectors.",
    descriptionTranslations: {
      hi: "सूक्ष्म उद्यम स्थापित करने के लिए 35% तक सब्सिडी प्रदान की जाती है।",
      ta: "சிறிய தொழில்களைத் தொடங்க 35% வரை மானியம் வழங்கப்படுகிறது.",
      te: "సూక్ష్మ వ్యాపారాలు ప్రారంభించడానికి 35% వరకు సబ్సిడీ ఇస్తారు.",
    },
    category: "entrepreneurship",
    eligibilityCriteria: ["Applicant must be 18+", "Minimum 8th class pass required for manufacturing sector", "No income limit", "Only new projects eligible"],
    requiredDocuments: ["Aadhaar Card", "Educational Certificate (8th pass)", "Project Report", "Community Certificate (if applicable)", "Bank Account Details"],
    applicationProcedure: [
      {
        step: 1,
        title: "Register Online",
        description: "Apply through kviconline.gov.in under PMEGP portal.",
        tips: "Use accurate project cost breakup.",
      },
      {
        step: 2,
        title: "Submit Documents",
        description: "Upload project report and personal documents.",
        tips: "Ensure PDF files are under required size.",
      },
      {
        step: 3,
        title: "Interview & Approval",
        description: "KVIC/DIC conducts interview and approves subsidy.",
        tips: "Carry all original documents.",
      },
    ],
    procedureTranslations: {},
    deadline: "2026-03-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 18,
    maxAge: 200,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://www.kviconline.gov.in/pmegp",
    youtubeVideoUrl: "https://youtu.be/ucee-DMajAY?si=bUo-e6CA_APb6sYY",
  },


  {
    id: "E3",
    title: "MUDRA Loan (Shishu, Kishor, Tarun)",
    titleTranslations: {
      hi: "मुद्रा ऋण योजना",
      ta: "முத்ரா கடன் திட்டம்",
      te: "ముద్రా రుణ పథకం",
    },
    description:
      "Provides loans up to ₹10 lakhs to small business owners, startups, and self-employed individuals.",
    descriptionTranslations: {
      hi: "छोटे व्यवसायों और स्वयंरोजगार के लिए 10 लाख तक का ऋण।",
      ta: "சிறு தொழில்களுக்கும் சுயதொழில் முனைவோருக்கும் 10 லட்சம் வரை கடன் வழங்கப்படும்.",
      te: "చిన్న వ్యాపారాలు మరియు స్వయం ఉపాధి కోసం 10 లక్షల వరకు రుణం అందిస్తారు.",
    },
    category: "entrepreneurship",
    eligibilityCriteria: ["Non-corporate small business owner", "Age 18–65 years", "No previous loan default", "Valid business plan required"],
    requiredDocuments: ["Aadhaar Card", "PAN Card", "Bank Account Details", "Business Plan/Project Report", "Address Proof"],
    applicationProcedure: [
      {
        step: 1,
        title: "Visit Bank",
        description: "Apply at any MUDRA-supported bank or online portal.",
        tips: "Prepare a complete project report.",
      },
      {
        step: 2,
        title: "Submit Documents",
        description: "Provide KYC documents and business details.",
        tips: "Check loan category: Shishu, Kishor, Tarun.",
      },
      {
        step: 3,
        title: "Loan Sanction",
        description: "Bank verifies details and approves loan.",
        tips: "Loan is collateral-free.",
      },
    ],
    procedureTranslations: {},
    deadline: "2030-12-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 18,
    maxAge: 65,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    officialUrl: "https://www.mudra.org.in",
    youtubeVideoUrl: "https://youtu.be/P2AF3Ks_Z9U?si=D4p9HTQ-TtoTSgcv",
  },

  // --------------------------
  // HOUSING (ACTIVE)
  // --------------------------
  {
    id: "H1",
    title: "Pradhan Mantri Awas Yojana – Gramin (PMAY-G)",
    titleTranslations: {
      hi: "प्रधानमंत्री आवास योजना – ग्रामीण",
      ta: "பிரதமர் அவாஸ் யோஜனா – கிராமின்",
      te: "ప్రధాన్ మంత్రి అవాస్ యోజన – గ్రామీణ",
    },
    description:
      "Provides financial assistance for constructing pucca houses for rural families living in kutcha or dilapidated houses.",
    descriptionTranslations: {
      hi: "कच्चे या जर्जर घरों में रहने वाले ग्रामीण परिवारों को पक्का घर बनाने के लिए वित्तीय सहायता प्रदान की जाती है।",
      ta: "குடிசை அல்லது பழுதடைந்த வீட்டில் வசிக்கும் கிராமப்புற குடும்பங்களுக்கு புதிய வீடு கட்ட நிதியுதவி வழங்கப்படுகிறது.",
      te: "కచ్చా లేదా పాడైపోయిన ఇళ్లలో నివసించే గ్రామీణ కుటుంబాలకు పక్కా ఇళ్ల నిర్మాణానికి ఆర్థిక సహాయం అందుతుంది.",
    },
    category: "housing",
    eligibilityCriteria: ["Must be a rural household", "Family must reside in kutcha or semi-kutcha house", "Name should appear in SECC 2011 list", "Should not own a pucca house"],
    requiredDocuments: ["Aadhaar Card", "Ration Card", "SECC List Proof", "Bank Passbook", "House Site Document (if available)"],
    applicationProcedure: [
      {
        step: 1,
        title: "Check Your Eligibility",
        description: "Visit pmayg.nic.in → Stakeholders → SECC Family Member Details.",
        tips: "Check using mobile number or Aadhaar.",
      },
      {
        step: 2,
        title: "Visit Gram Panchayat",
        description: "Fill PMAY-G application form and verify documents.",
        tips: "Gram Sabha approves your name for the scheme.",
      },
      {
        step: 3,
        title: "Geo-Tagging Process",
        description: "Technical assistant geotags your plot/house using PMAY app.",
        tips: "Geo-tagging is compulsory for fund release.",
      },
      {
        step: 4,
        title: "Fund Release",
        description: "Government releases the amount in 2–3 installments directly to your bank account.",
        tips: "Installments depend on construction stages.",
      },
    ],
    procedureTranslations: {},
    deadline: "2026-03-31",
    isActive: true,
    targetStates: ["All India (Rural)"],
    minAge: 18,
    maxAge: 200,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    incomeLimit: 300000,
    officialUrl: "https://pmayg.nic.in",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=ok5w9YVb6Wc",
  },
  

  {
    id: "H2",
    title: "PM Ujjwala Yojana – Housing Support (LPG for Poor Households)",
    titleTranslations: {
      hi: "प्रधानमंत्री उज्ज्वला योजना",
      ta: "பிரதமர் உஜ்ஜ்வலா திட்டம்",
      te: "ప్రధాన్ మంత్రి ఉజ్వల యోజన",
    },
    description:
      "Provides LPG connection to women in poor households to improve indoor living & housing conditions.",
    descriptionTranslations: {
      hi: "गरीब परिवारों की महिलाओं को एलपीजी गैस कनेक्शन उपलब्ध कराया जाता है जिससे घर की रसोई और जीवनशैली में सुधार होता है।",
      ta: "ஏழை குடும்பங்களின் பெண்களுக்கு எல்பிஜி இணைப்பு வழங்கப்படுகிறது, இது வீட்டுவசதி மற்றும் சமையலறை சூழலையும் மேம்படுத்துகிறது.",
      te: "పేద కుటుంబాల మహిళలకు ఎల్ఫీజీ కనెక్షన్ అందించి గృహ పరిస్థితులు మెరుగుపరుస్తుంది.",
    },
    category: "housing",
    eligibilityCriteria: ["Applicant must be a woman", "Family must belong to BPL category", "Name must be in SECC list or ration card BPL", "No existing LPG connection in family"],
    requiredDocuments: ["Aadhaar Card", "Ration Card", "Bank Account", "Age Proof", "Address Proof"],
    applicationProcedure: [
      {
        step: 1,
        title: "Visit LPG Distributor",
        description: "Submit Ujjwala Yojana form with documents.",
        tips: "Women aged 18+ only.",
      },
      {
        step: 2,
        title: "KYC & Verification",
        description: "Distributor verifies KYC and eligibility.",
        tips: "Ensure Aadhaar is updated.",
      },
      {
        step: 3,
        title: "Receive LPG Connection",
        description: "Cylinder, regulator and safety documents are provided.",
        tips: "Subsidy is auto-credited to bank account.",
      },
    ],
    procedureTranslations: {},
    deadline: "2027-12-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 18,
    maxAge: 200,
    genderEligibility: ["Female"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "EWS"],
    incomeLimit: 200000,
    officialUrl: "https://www.pmujjwalayojana.com",
    youtubeVideoUrl: "https://youtu.be/B4MiEuFuihU?si=a0KW7kwevj1XjU5m",
  },

  // --------------------------
  // STATE — TAMIL NADU
  // --------------------------
  {
    id: "TN1",
    title: "Tamil Nadu Chief Minister’s Girl Child Protection Scheme",
    titleTranslations: {
      hi: "तमिलनाडु मुख्यमंत्री बालिका सुरक्षा योजना",
      ta: "தமிழ்நாடு முதல்வர் மகளிர் பாதுகாப்புத் திட்டம்",
      te: "తమిళనాడు సీఎం బాలిక రక్షణ పథకం",
    },
    description:
      "Financial assistance to secure future of girl children from economically weaker families in Tamil Nadu.",
    descriptionTranslations: {
      hi: "तमिलनाडु की कमजोर परिवारों की बेटियों के भविष्य को सुरक्षित करने के लिए आर्थिक सहायता।",
      ta: "தமிழ்நாட்டில் பொருளாதார ரீதியாக பலவீனமான குடும்பங்களின் மகள்களின் எதிர்காலத்தை பாதுகாக்க நிதி உதவி.",
      te: "ఆర్థికంగా బలహీన కుటుంబాలకు చెందిన బాలికల భవిష్యత్తుకు ఆర్థిక సహాయం.",
    },
    category: "state",
    eligibilityCriteria: ["Girl child must be a resident of Tamil Nadu", "Family income < ₹72,000 per year", "Up to two girl children per family", "Parents should have undergone sterilization (for Scheme II)"],
    requiredDocuments: ["Aadhaar Card", "Birth Certificate", "Income Certificate", "Ration Card", "Bank Account Details"],
    applicationProcedure: [
      {
        step: 1,
        title: "Visit District Social Welfare Office",
        description: "Apply for Scheme I or Scheme II based on criteria.",
        tips: "Carry original certificates.",
      },
      {
        step: 2,
        title: "Document Verification",
        description: "Officials verify age, income and family status.",
        tips: "Ensure documents are valid.",
      },
      {
        step: 3,
        title: "Financial Deposit",
        description: "Amount deposited in Tamil Nadu Power Finance account.",
        tips: "Interest accumulates until maturity.",
      },
    ],
    procedureTranslations: {},
    deadline: "2025-12-31",
    isActive: true,
    targetStates: ["Tamil Nadu"],
    minAge: 0,
    maxAge: 18,
    incomeLimit: 72000,
    genderEligibility: ["Female"],
    categoryEligibility: ["General", "SC", "ST", "OBC", "MBC", "Minority"],
    officialUrl: "https://www.tn.gov.in",
    youtubeVideoUrl: "https://youtu.be/2OhdnXRbNXw?si=fvP3Qu0bZbBwMDn9",
  },

  {
    id: "TN2",
    title: "Kalaignar Magalir Urimai Thogai (Women’s Basic Income)",
    titleTranslations: {
      hi: "कलैग्नर महिलाओं को बुनियादी आय योजना",
      ta: "கலைஞர் மகளிர் உரிமை தொகை",
      te: "కళైగ్నర్ మహిళల మౌలిక ఆదాయ పథకం",
    },
    description:
      "Monthly financial assistance of ₹1000 for women heads of families in Tamil Nadu.",
    descriptionTranslations: {
      hi: "तमिलनाडु में परिवार की महिला प्रमुखों को ₹1000 मासिक सहायता।",
      ta: "தமிழ்நாட்டில் குடும்பத் தலைவிகளுக்கு மாதம் ₹1000 நிதி உதவி.",
      te: "తమిళనాడులో మహిళా కుటుంబాధ్యక్షులకు నెలకు ₹1000 ఆర్థిక సహాయం.",
    },
    category: "state",
    eligibilityCriteria: ["Women head of the family", "Resident of Tamil Nadu", "Annual family income < ₹2.5 lakh", "Electricity consumption < 3600 units/year"],
    requiredDocuments: ["Aadhaar Card", "Family Ration Card", "Electricity Bill", "Income Certificate", "Bank Passbook"],
    applicationProcedure: [
      {
        step: 1,
        title: "Apply via e-Sevai Center",
        description: "Submit application through e-Sevai operator.",
        tips: "Carry Aadhaar-seeded mobile.",
      },
      {
        step: 2,
        title: "Verification",
        description: "VAO & Revenue inspectors verify eligibility.",
        tips: "Keep utility bills ready.",
      },
    ],
    procedureTranslations: {},
    deadline: "2026-03-31",
    isActive: true,
    targetStates: ["Tamil Nadu"],
    minAge: 21,
    maxAge: 70,
    incomeLimit: 250000,
    genderEligibility: ["Female"],
    categoryEligibility: ["All"],
    officialUrl: "https://www.tn.gov.in",
    youtubeVideoUrl: "https://youtu.be/pe42T6WAvRA?si=noHgIV7G-T6vtMqo",
  },

  // --------------------------
  // KARNATAKA (state)
  // --------------------------
  {
    id: "KA1",
    title: "Gruha Lakshmi Scheme (₹2000 Monthly Aid)",
    titleTranslations: {
      hi: "गृह लक्ष्मी योजना",
      ta: "க்ருஹ லக்ஷ்மி திட்டம்",
      te: "గృహ లక్ష్మీ పథకం",
    },
    description: "Provides ₹2000 monthly assistance to women heads of households in Karnataka.",
    descriptionTranslations: {
      hi: "कर्नाटक में महिला परिवार प्रमुखों को ₹2000 प्रति माह सहायता।",
      ta: "கர்நாடகத்தில் குடும்பத்தலைவிகளுக்கு மாதம் ₹2000 வழங்கப்படுகிறது.",
      te: "కర్ణాటకలో మహిళా కుటుంబాధ్యక్షులకు నెలకు ₹2000 అందిస్తారు.",
    },
    category: "state",
    eligibilityCriteria: ["Resident of Karnataka", "Woman head of family", "Annual income < ₹2 lakh"],
    requiredDocuments: ["Aadhaar Card", "Ration Card", "Bank Passbook", "Residence Proof"],
    applicationProcedure: [
      {
        step: 1,
        title: "Apply on Seva Sindhu Portal",
        description: "Fill application online and upload documents.",
        tips: "Use Aadhaar-linked mobile.",
      },
      {
        step: 2,
        title: "Verification",
        description: "Revenue officers verify eligibility.",
        tips: "Track status on Seva Sindhu.",
      },
    ],
    procedureTranslations: {},
    deadline: "2026-03-31",
    isActive: true,
    targetStates: ["Karnataka"],
    minAge: 18,
    maxAge: 70,
    incomeLimit: 200000,
    genderEligibility: ["Female"],
    categoryEligibility: ["All"],
    officialUrl: "https://sevasindhu.karnataka.gov.in",
    youtubeVideoUrl: "https://youtu.be/pMkJFusQEK0?si=lyky9cQ_oMjxtCCJ",
  },

  // --------------------------
  // MAHARASHTRA (state)
  // --------------------------
  {
    id: "MH1",
    title: "Maharashtra Majhi Kanya Bhagyashree Scheme",
    titleTranslations: {
      hi: "माझी कन्या भाग्यश्री योजना",
      ta: "மஜ்ஹி கண்யா பாக்யஸ்ரீ திட்டம்",
      te: "మజ్ఝి కన్యా భాగ్యశ్రీ పథకం",
    },
    description: "Financial bond deposits for girl children to support education and empowerment.",
    descriptionTranslations: {
      hi: "बालिकाओं की शिक्षा और सशक्तिकरण के लिए आर्थिक बांड जमा।",
      ta: "பெண்கள் கல்வி மற்றும் மேம்பாட்டிற்காக நிதி பிணை வைப்பு.",
      te: "బాలికల విద్యా శక్తివంతం కోసం ఆర్థిక బాండ్ డిపాజిట్.",
    },
    category: "state",
    eligibilityCriteria: ["Girl child from BPL families", "Maximum 2 girl children per family"],
    requiredDocuments: ["Aadhaar", "Birth Certificate", "Ration Card"],
    applicationProcedure: [],
    procedureTranslations: {},
    deadline: "2025-12-31",
    isActive: true,
    targetStates: ["Maharashtra"],
    minAge: 0,
    maxAge: 18,
    incomeLimit: 100000,
    genderEligibility: ["Female"],
    categoryEligibility: ["General", "SC", "ST", "OBC"],
    officialUrl: "https://womenchild.maharashtra.gov.in",
    youtubeVideoUrl: "https://youtu.be/VZcAIsWrt3Y?si=EtQZoVizNBFiyHyF",
  },

  // --------------------------
  // RAJASTHAN (state)
  // --------------------------
  {
    id: "RJ1",
    title: "Rajasthan Indira Gandhi Gas Cylinder Subsidy",
    titleTranslations: {
      hi: "राजस्थान इंदिरा गांधी गैस सिलेंडर सब्सिडी",
      ta: "இந்திரா காந்தி எரிவாயு மானியம்",
      te: "ఇందిరా గాంధీ గ్యాస్ సబ్సిడీ",
    },
    description: "Subsidy of ₹500 per LPG cylinder for eligible families in Rajasthan.",
    descriptionTranslations: {
      hi: "राजस्थान में पात्र परिवारों को प्रति LPG सिलेंडर ₹500 सब्सिडी।",
      ta: "ராஜஸ்தானில் தகுதி வாய்ந்த குடும்பங்களுக்கு சிலிண்டர் ஒன்றுக்கு ₹500 மானியம்.",
      te: "రాజస్థాన్‌లో అర్హత ఉన్న కుటుంబాలకు ప్రతి గ్యాస్ సిలిండర్‌కు ₹500 సబ్సిడీ.",
    },
    category: "state",
    eligibilityCriteria: ["Resident of Rajasthan", "Must be registered under BPL / Ujjwala / Food Security"],
    requiredDocuments: ["Aadhaar", "Ration Card", "Gas Connection Details"],
    applicationProcedure: [],
    procedureTranslations: {},
    deadline: "2026-03-31",
    isActive: true,
    targetStates: ["Rajasthan"],
    minAge: 18,
    maxAge: 90,
    incomeLimit: 200000,
    genderEligibility: ["Male", "Female"],
    categoryEligibility: ["All"],
    officialUrl: "https://food.rajasthan.gov.in",
    youtubeVideoUrl: "https://youtu.be/ItpAgDTG-Wc?si=czpApOLkrq7UFeok",
  },

  // --------------------------
  // WEST BENGAL (state)
  // --------------------------
  {
    id: "WB1",
    title: "West Bengal Lakshmi Bhandar Scheme",
    titleTranslations: {
      hi: "पश्चिम बंगाल लक्ष्मी भंडार योजना",
      ta: "மேற்கு வங்காளம் லக்ஷ்மி பண்டார் திட்டம்",
      te: "పశ్చిమ బెంగాల్ లక్ష్మీ భండార్ పథకం",
    },
    description:
      "Provides ₹1000 per month (general caste) and ₹1200 per month (SC/ST women) as income support.",
    descriptionTranslations: {
      hi: "महिलाओं को ₹1000 और एससी/एसटी महिलाओं को ₹1200 मासिक सहायता।",
      ta: "பெண்களுக்கு ₹1000 மற்றும் SC/ST பெண்களுக்கு ₹1200 உதவி வழங்கப்படுகிறது.",
      te: "మహిళలకు ₹1000 మరియు SC/ST మహిళలకు ₹1200 సహాయం అందిస్తుంది.",
    },
    category: "state",
    eligibilityCriteria: ["Women aged 25–60 years", "Resident of West Bengal", "Income criteria vary by category"],
    requiredDocuments: ["Aadhaar", "Ration Card", "Bank Passbook", "Residential Certificate"],
    applicationProcedure: [],
    procedureTranslations: {},
    deadline: "2025-12-31",
    isActive: true,
    targetStates: ["West Bengal"],
    minAge: 25,
    maxAge: 60,
    incomeLimit: 200000,
    genderEligibility: ["Female"],
    categoryEligibility: ["General", "SC", "ST", "OBC"],
    officialUrl: "https://wb.gov.in",
    youtubeVideoUrl: "https://youtu.be/8GH9ZImRNI4?si=izZap5fXF_oA9IOz",
  },

  // --------------------------
  // MINORITY WELFARE
  // --------------------------
  {
    id: "MW1",
    title: "Post Matric Scholarship for Minorities",
    titleTranslations: {
      hi: "अल्पसंख्यक उत्तर-मैट्रिक छात्रवृत्ति",
      ta: "பிந்தைய மேட்ரிக் உதவித்தொகை",
      te: "అల్పసంఖ్యాకుల పోస్ట్ మెట్రిక్ స్కాలర్‌షిప్",
    },
    description:
      "Scholarship for minority students from Class 11 to PhD with full tuition fee reimbursement and maintenance allowance.",
    descriptionTranslations: {
      hi: "कक्षा 11 से पीएचडी तक के अल्पसंख्यक छात्रों के लिए छात्रवृत्ति। पूरी ट्यूशन फीस और भत्ता प्रदान किया जाता है।",
      ta: "11ஆம் வகுப்பு முதல் பிஎச்டி வரை உள்ள சிறுபான்மையினர் மாணவர்களுக்கு கட்டண விலக்கு மற்றும் உதவித்தொகை வழங்கப்படுகிறது.",
      te: "11వ తరగతి నుండి పీహెచ్‌డీ వరకు ఉన్న అల్పసంఖ్యాక విద్యార్థులకు ఫీజు మినహాయం మరియు భృతి అందుతుంది.",
    },
    category: "minority",
    eligibilityCriteria: ["Must belong to notified minority community", "Annual family income < ₹2 lakh", "Minimum 50% marks", "Studying in Class 11 to PhD"],
    requiredDocuments: ["Aadhaar Card", "Minority Community Certificate", "Bank Passbook", "Income Certificate", "Previous Marksheets"],
    applicationProcedure: [
      {
        step: 1,
        title: "Register on NSP Portal",
        description: "Go to scholarships.gov.in and register under minority scholarships.",
        tips: "Use active mobile and email.",
      },
      {
        step: 2,
        title: "Upload Documents",
        description: "Upload income certificate, marksheet, Aadhaar and bank details.",
        tips: "PDF size must be under 200 KB.",
      },
      {
        step: 3,
        title: "Institute Verification",
        description: "Your school/college will verify the application.",
        tips: "Track status on NSP dashboard.",
      },
    ],
    procedureTranslations: {},
    deadline: "2025-12-31",
    isActive: true,
    targetStates: ["All India"],
    minAge: 12,
    maxAge: 35,
    incomeLimit: 200000,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["Minority"],
    officialUrl: "https://scholarships.gov.in",
    youtubeVideoUrl: "https://youtu.be/wVgBRW25BJQ?si=bFvJFopLkV8pqhI-",
  },



  // --------------------------
  // STATE MINORITY EXAMPLE
  // --------------------------
  {
    id: "TN-MW1",
    title: "Tamil Nadu  Marriage Assistance Scheme",
    titleTranslations: {
      hi: "तमिलनाडु  विवाह सहायता योजना",
      ta: "தமிழ்நாடு  திருமண உதவி திட்டம்",
      te: "తమిళనాడు  వివాహ సహాయ పథకం",
    },
    description:
      "Provides financial assistance for marriage of girls belonging to the Muslim community in Tamil Nadu.",
    descriptionTranslations: {
      hi: "तमिलनाडु  मुस्लिम समुदाय की लड़कियों के विवाह के लिए आर्थिक सहायता।",
      ta: "தமிழ்நாட்டின்  சமூகத்தைச் சேர்ந்த பெண்களின் திருமணத்திற்கு நிதி உதவி.",
      te: "తమిళనాడులో  అమ్మాయిల వివాహానికి ఆర్థిక సహాయం.",
    },
    category: "minority",
    eligibilityCriteria: ["Bride must belong to Muslim community", "Family income < ₹1.5 lakh", "Age of bride must be 18+ years"],
    requiredDocuments: ["Aadhaar Card", "Community Certificate", "Income Certificate", "Ration Card", "Bank Passbook"],
    applicationProcedure: [
      {
        step: 1,
        title: "Apply at District Collectorate",
        description: "Submit application 40 days before marriage.",
        tips: "Attach community certificate.",
      },
      {
        step: 2,
        title: "Verification",
        description: "Revenue inspector verifies income status.",
        tips: "Keep original documents ready.",
      },
    ],
    procedureTranslations: {},
    deadline: "2026-03-31",
    isActive: true,
    targetStates: ["Tamil Nadu"],
    minAge: 18,
    maxAge: 40,
    incomeLimit: 150000,
    genderEligibility: ["Female"],
    categoryEligibility: ["Minority"],
    officialUrl: "https://www.tn.gov.in",
    youtubeVideoUrl: "https://youtu.be/rcLv3NHwba8?si=8-NgILhep3luc6OF",
  },

  {
    id: "KA-MW1",
    title: "Karnataka Minority Loan Scheme",
    titleTranslations: {
      hi: "कर्नाटक अल्पसंख्यक ऋण योजना",
      ta: "கர்நாடக சிறுபான்மை கடன் திட்டம்",
      te: "కర్ణాటక మైనారిటీ లోన్ పథకం",
    },
    description: "Soft loans for minority youth for business, self-employment and education.",
    descriptionTranslations: {
      hi: "व्यापार, स्वरोजगार और शिक्षा के लिए अल्पसंख्यक युवाओं को सॉफ्ट लोन।",
      ta: "வணிகம், சுயதொழில் மற்றும் கல்விக்காக சிறுபான்மை இளைஞர்களுக்கு மென்மையான கடன்.",
      te: "వ్యాపారం, ఉద్యోగం మరియు విద్య కోసం మైనారిటీ యువతకు సాఫ్ట్ లోన్లు.",
    },
    category: "minority",
    eligibilityCriteria: ["Belong to minority community", "Age 18–55 years", "Family income < ₹2.5 lakh"],
    requiredDocuments: ["Aadhaar Card", "Minority Certificate", "Income Certificate", "Business Plan (if loan)", "Bank Statement"],
    applicationProcedure: [
      {
        step: 1,
        title: "Apply online",
        description: "Visit kmdc.karnataka.gov.in and register.",
        tips: "Upload complete documents.",
      },
      {
        step: 2,
        title: "Loan Approval",
        description: "Committee verifies and sanctions loan.",
        tips: "Track application on portal.",
      },
    ],
    procedureTranslations: {},
    deadline: "2025-12-31",
    isActive: true,
    targetStates: ["Karnataka"],
    minAge: 18,
    maxAge: 55,
    incomeLimit: 250000,
    genderEligibility: ["Male", "Female", "Other"],
    categoryEligibility: ["Minority"],
    officialUrl: "https://kmdc.karnataka.gov.in",
    youtubeVideoUrl: "https://youtu.be/be0hiIgxQJ4?si=3FAnpCw0ra2hJdDN",
  }
];
