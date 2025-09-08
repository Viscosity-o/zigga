import { useState, createContext, useContext, useRef, useEffect } from "react";
import { imgFrame, imgFrame1, imgFrame2, imgFrame3 } from "./imports/svg-42gje";
import { useLocfy } from "./hooks/useLocfy";
import { 
  imgFrame as dashFrame, 
  imgFrame1 as dashFrame1, 
  imgFrame2 as dashFrame2, 
  imgFrame3 as dashFrame3,
  imgFrame4 as dashFrame4,
  imgFrame5 as dashFrame5,
  imgFrame6 as dashFrame6,
  imgFrame7 as dashFrame7,
  imgFrame8 as dashFrame8,
  imgFrame9 as dashFrame9,
  imgFrame10 as dashFrame10,
  imgFrame11 as dashFrame11,
  imgFrame12 as dashFrame12
} from "./imports/svg-ulwkl";
import { 
  imgFrame as emergFrame, 
  imgFrame1 as emergFrame1, 
  imgFrame2 as emergFrame2, 
  imgFrame3 as emergFrame3,
  imgFrame4 as emergFrame4,
  imgFrame5 as emergFrame5,
  imgFrame6 as emergFrame6,
  imgFrame7 as emergFrame7,
  imgFrame8 as emergFrame8,
  imgFrame9 as emergFrame9,
  imgFrame10 as emergFrame10,
  imgFrame11 as emergFrame11
} from "./imports/svg-ttvy8";
import { 
  imgFrame as profileFrame, 
  imgFrame1 as profileFrame1, 
  imgFrame2 as profileFrame2, 
  imgFrame3 as profileFrame3,
  imgFrame4 as profileFrame4,
  imgFrame5 as profileFrame5,
  imgFrame6 as profileFrame6,
  imgFrame7 as profileFrame7,
  imgFrame8 as profileFrame8,
  imgFrame9 as profileFrame9,
  imgFrame10 as profileFrame10,
  imgFrame11 as profileFrame11,
  imgFrame12 as profileFrame12,
  imgFrame13 as profileFrame13
} from "./imports/svg-8fbof";
import imgImg from "figma:asset/4c8e7e643f9f13c1c81387fbc2ab0c99f4ab1020.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Badge } from "./components/ui/badge";

type ViewType = "login" | "forgot-id-step1" | "forgot-id-step2" | "dashboard" | "emergency" | "safety-details" | "profile" | "report-issue" | "view-itinerary";

// Language types and translations
type Language = "en" | "hi" | "bn" | "ta";

// Notification types
interface Notification {
  id: string;
  type: "safety" | "system" | "travel" | "verification" | "emergency" | "weather";
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  priority: "high" | "medium" | "low";
  icon: string;
  color: string;
  bgColor: string;
  details?: {
    description: string;
    actions?: Array<{
      label: string;
      type: "primary" | "secondary";
      action: () => void;
    }>;
    location?: string;
    affectedAreas?: string[];
    instructions?: string[];
  };
}

interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
}

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    bn: string;
    ta: string;
  };
}

const languages: LanguageConfig[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी (Hindi)" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা (Bengali)" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ் (Tamil)" },
];

const translations: Translations = {
  // Header and Login
  appTitle: {
    en: "Tourist Digital ID",
    hi: "पर्यटक डिजिटल आईडी",
    bn: "পর্যটক ডিজিটাল আইডি",
    ta: "சுற்றுலா டிஜிட்டல் ஐடி"
  },
  secureAuthPortal: {
    en: "Secure Authentication Portal",
    hi: "सुरक्षित प्रमाणीकरण पोर्टल",
    bn: "নিরাপদ প্রমাণীকরণ পোর্টাল",
    ta: "பாதுகாப்பான அங்கீகார போர்ட்டல்"
  },
  government: {
    en: "Government of [Country]",
    hi: "भारत सरकार",
    bn: "ভারত সরকার",
    ta: "இந்திய அரசு"
  },
  secureLogin: {
    en: "Secure Login",
    hi: "सुरक्षित लॉगिन",
    bn: "নিরাপদ লগিন",
    ta: "பாதுகாப்பான உள்நுழைவு"
  },
  digitalIdNumber: {
    en: "Digital ID Number",
    hi: "डिजिटल आईडी नंबर",
    bn: "ডিজিটাল আইডি নম্বর",
    ta: "டிஜிட்டல் ஐடி எண்"
  },
  password: {
    en: "Password",
    hi: "पासवर्ड",
    bn: "পাসওয়ার্ড",
    ta: "கடவுச்சொல்"
  },
  signIn: {
    en: "Sign In",
    hi: "साइन इन करें",
    bn: "সাইন ইন",
    ta: "உள்நுழையவும்"
  },
  signingIn: {
    en: "Signing In...",
    hi: "साइन इन कर रहे हैं...",
    bn: "সাইন ইন করা হচ্ছে...",
    ta: "உள்நுழைகிறது..."
  },
  forgotDigitalId: {
    en: "Forgot Digital ID?",
    hi: "डिजिटल आईडी भूल गए?",
    bn: "ডিজিটাল আইডি ভুলে গেছেন?",
    ta: "டிஜிட்டல் ஐடி மறந்துவிட்டதா?"
  },
  needHelp: {
    en: "Need help?",
    hi: "सहायता चाहिए?",
    bn: "সাহায্য প্রয়োজন?",
    ta: "உதவி வேண்டுமா?"
  },
  // Dashboard
  dashboard: {
    en: "Dashboard",
    hi: "डैशबोर्ड",
    bn: "ড্যাশবোর্ড",
    ta: "டாஷ்போர்ட்"
  },
  stayKSafeJourney: {
    en: "Stay safe on your journey",
    hi: "अपनी यात्रा में सुरक्षित रहें",
    bn: "আপনার যাত্রায় নিরাপদ থাকুন",
    ta: "உங்கள் பயணத்தில் பாதுகாப்பாக இருங்கள்"
  },
  touristDigitalId: {
    en: "Tourist Digital ID",
    hi: "पर्यटक डिजिटल आईडी",
    bn: "পর্যটক ডিজিটাল আইডি",
    ta: "சுற்றுலா டிஜிட்டல் ஐடி"
  },
  verified: {
    en: "Verified",
    hi: "सत्यापित",
    bn: "যাচাইকৃত",
    ta: "சரிபார்க்கப்பட்டது"
  },
  active: {
    en: "Active",
    hi: "सक्रिय",
    bn: "সক্রিয়",
    ta: "செயலில்"
  },
  safetyScore: {
    en: "Safety Score",
    hi: "सुरक्षा स्कोर",
    bn: "নিরাপত্তা স্কোর",
    ta: "பாதுகாப்பு மதிப்பெண்"
  },
  currentLocationStatus: {
    en: "Current location status",
    hi: "वर्तमान स्थान की स्थिति",
    bn: "বর্তমান অবস্থানের স্থিতি",
    ta: "தற்போதைய இருப்பிட நிலை"
  },
  safe: {
    en: "SAFE",
    hi: "सुरक्षित",
    bn: "নিরাপদ",
    ta: "பாதுகாப்பானது"
  },
  quickActions: {
    en: "Quick Actions",
    hi: "त्वरित कार्य",
    bn: "দ্রুত কর্ম",
    ta: "விரைவு செயல்கள்"
  },
  shareLive: {
    en: "Share Live",
    hi: "लाइव साझा करें",
    bn: "লাইভ শেয়ার",
    ta: "நேரடி பகிர்வு"
  },
  location: {
    en: "Location",
    hi: "स्थान",
    bn: "অবস্থান",
    ta: "இருப்பிடம்"
  },
  report: {
    en: "Report",
    hi: "रिपोर्ट",
    bn: "রিপোর্ট",
    ta: "அறிக்கை"
  },
  issue: {
    en: "Issue",
    hi: "समस्या",
    bn: "সমস্যা",
    ta: "பிரச்சினை"
  },
  view: {
    en: "View",
    hi: "देखें",
    bn: "দেখুন",
    ta: "பார்க்கவும்"
  },
  itinerary: {
    en: "Itinerary",
    hi: "यात्रा कार्यक्रम",
    bn: "ভ্রমণ পরিকল্পনা",
    ta: "பயண திட்டம்"
  },
  // Navigation
  home: {
    en: "Home",
    hi: "होम",
    bn: "হোম",
    ta: "முகப்பு"
  },
  map: {
    en: "Map",
    hi: "मानचित्र",
    bn: "মানচিত্র",
    ta: "வரைபடம்"
  },
  support: {
    en: "Support",
    hi: "सहायता",
    bn: "সাহায্য",
    ta: "ஆதரவு"
  },
  profile: {
    en: "Profile",
    hi: "प्रोफ़ाइल",
    bn: "প্রোফাইল",
    ta: "சுயவிவரம்"
  },
  // Profile Page
  touristUser: {
    en: "Tourist User",
    hi: "पर्यटक उपयोगकर्ता",
    bn: "পর্যটক ব্যবহারকারী",
    ta: "சுற்றுலா பயனர்"
  },
  verifiedTourist: {
    en: "Verified Tourist",
    hi: "सत्यापित पर्यटक",
    bn: "যাচাইকৃত পর্যটক",
    ta: "சரிபார்க்கப்பட்ட சுற்றுலாப் பயணி"
  },
  digitalIdCard: {
    en: "Digital ID Card",
    hi: "डिजिटल आईडी कार्ड",
    bn: "ডিজিটাল আইডি কার্ড",
    ta: "டிஜிட்டல் ஐடி கார்டு"
  },
  touristId: {
    en: "Tourist ID",
    hi: "पर्यटक आईडी",
    bn: "পর্যটক আইডি",
    ta: "சுற்றுலா ஐடி"
  },
  name: {
    en: "Name",
    hi: "नाम",
    bn: "নাম",
    ta: "பெயர்"
  },
  validUntil: {
    en: "Valid Until",
    hi: "तक मान्य",
    bn: "পর্যন্ত বৈধ",
    ta: "வரை செல்லுபடியாகும்"
  },
  languagePreferences: {
    en: "Language Preferences",
    hi: "भाषा प्राथमिकताएं",
    bn: "ভাষার পছন্দ",
    ta: "மொழி விருப்பங்கள்"
  },
  viewAllLanguages: {
    en: "View All Languages",
    hi: "सभी भाषाएं देखें",
    bn: "সব ভাষা দেখুন",
    ta: "அனைத்து மொழிகளையும் பார்க்கவும்"
  },
  logout: {
    en: "Logout",
    hi: "लॉग आउट",
    bn: "লগ আউট",
    ta: "வெளியேறு"
  },
  // Notifications
  notifications: {
    en: "Notifications",
    hi: "सूचनाएं",
    bn: "বিজ্ঞপ্তি",
    ta: "அறிவிப்புகள்"
  },
  safetyAlert: {
    en: "Safety Alert",
    hi: "सुरक्षा चेतावनी",
    bn: "নিরাপত্তা সতর্কতা",
    ta: "பாதுகாப்பு எச்சரிக்கை"
  },
  systemUpdate: {
    en: "System Update",
    hi: "सिस्टम अपडेट",
    bn: "সিস্টেম আপডেট",
    ta: "கணினி புதுப்பிப்பு"
  },
  travelAdvisory: {
    en: "Travel Advisory",
    hi: "यात्रा सलाह",
    bn: "ভ্রমণ পরামর্শ",
    ta: "பயண ஆலோசனை"
  },
  idVerification: {
    en: "ID Verification",
    hi: "आईडी सत्यापन",
    bn: "আইডি যাচাইকরণ",
    ta: "அடையாள சரிபார்ப்பு"
  },
  emergency: {
    en: "Emergency",
    hi: "आपातकाल",
    bn: "জরুরি অবস্থা",
    ta: "அவசரநிலை"
  },
  weatherAlert: {
    en: "Weather Alert",
    hi: "मौसम चेतावनी",
    bn: "আবহাওয়া সতর্কতা",
    ta: "வானிலை எச்சரிக்கை"
  },
  noNotifications: {
    en: "No notifications",
    hi: "कोई सूचना नहीं",
    bn: "কোন বিজ্ঞপ্তি নেই",
    ta: "அறிவிப்புகள் இல்லை"
  },
  markAsRead: {
    en: "Mark as Read",
    hi: "पढ़ा हुआ चिह्नित करें",
    bn: "পড়া হিসেবে চিহ্নিত করুন",
    ta: "படித்ததாக குறிக்கவும்"
  },
  viewDetails: {
    en: "View Details",
    hi: "विवरण देखें",
    bn: "বিস্তারিত দেখুন",
    ta: "விவரங்களைப் பார்க்கவும்"
  },
  // Report Issue
  reportIssue: {
    en: "Report Issue",
    hi: "समस्या रिपोर्ट करें",
    bn: "সমস্যার রিপোর্ট করুন",
    ta: "பிரச்சினையை புகாரளிக்கவும்"
  },
  issueType: {
    en: "Issue Type",
    hi: "समस्या का प्रकार",
    bn: "সমস্যার ধরন",
    ta: "பிரச்சினை வகை"
  },
  safetyIssue: {
    en: "Safety Concern",
    hi: "सुरक्षा चिंता",
    bn: "নিরাপত্তা উদ্বেग",
    ta: "பாதுகாப்பு கவலை"
  },
  infrastructureIssue: {
    en: "Infrastructure",
    hi: "बुनियादी ढांचा",
    bn: "অবকাঠামো",
    ta: "உள்கட்டமைப்பு"
  },
  touristService: {
    en: "Tourist Service",
    hi: "पर्यटक सेवा",
    bn: "পর্যটক সেবা",
    ta: "சுற்றுலா சேவை"
  },
  medicalEmergency: {
    en: "Medical Emergency",
    hi: "चिकित्सा आपातकाल",
    bn: "চিকিৎসা জরুরি অবস্থা",
    ta: "மருத்துவ அவசரநிலை"
  },
  lostStolen: {
    en: "Lost/Stolen Items",
    hi: "खोया/चोरी का सामान",
    bn: "হারিয়ে যাওয়া/চুরি হওয়া জিনিস",
    ta: "தொலைந்த/திருடப்பட்ট பொருட்கள்"
  },
  transportation: {
    en: "Transportation",
    hi: "परिवहन",
    bn: "পরিবহন",
    ta: "போக்குவரத்து"
  },
  accommodation: {
    en: "Accommodation",
    hi: "आवास",
    bn: "বাসস্থান",
    ta: "தங்குமிடம்"
  },
  other: {
    en: "Other",
    hi: "अन्य",
    bn: "অন্যান্য",
    ta: "மற்றவை"
  },
  describe: {
    en: "Describe the issue",
    hi: "समस्या का वर्णन करें",
    bn: "সমস্যাটি বর্ণনা করুন",
    ta: "பிரச்சினையை விவரிக்கவும்"
  },
  optional: {
    en: "Optional",
    hi: "वैकल्पिक",
    bn: "ঐচ্ছিক",
    ta: "விருப்பமானது"
  },
  currentLocation: {
    en: "Current Location",
    hi: "वर्तमान स्थान",
    bn: "বর্তমান অবস্থান",
    ta: "தற்போதைய இருப்பிடम்"
  },
  useCurrentLocation: {
    en: "Use Current Location",
    hi: "वर्तमान स्थान का उपयोग करें",
    bn: "বর্তমান অবস্থান ব্যবহার করুন",
    ta: "தற்போதைய இருப்பிடத்தைப் பயன்படுத்துங்கள்"
  },
  attachPhotos: {
    en: "Attach Photos",
    hi: "फोटो संलग्न करें",
    bn: "ছবি সংযুক্ত করুন",
    ta: "புகைப்படங்களை இணைக்கவும்"
  },
  submitReport: {
    en: "Submit Report",
    hi: "रिपोर्ट जमा करें",
    bn: "রিপোর্ট জমা দিন",
    ta: "அறிக்கையை சமர்ப்பிக்கவும்"
  },
  urgent: {
    en: "Urgent",
    hi: "तत्काल",
    bn: "জরুরি",
    ta: "அவசரம்"
  },
  high: {
    en: "High",
    hi: "उच्च",
    bn: "উচ্চ",
    ta: "உயர்"
  },
  medium: {
    en: "Medium",
    hi: "मध्यम",
    bn: "মাঝারি",
    ta: "நடுத்தர"
  },
  low: {
    en: "Low",
    hi: "कम",
    bn: "কম",
    ta: "குறைந்த"
  },
  priority: {
    en: "Priority",
    hi: "प्राथमिकता",
    bn: "অগ্রাধিকার",
    ta: "முன்னுரிமை"
  },
  // Itinerary
  myItinerary: {
    en: "My Itinerary",
    hi: "मेरा यात्रा कार्यक्रम",
    bn: "আমার ভ্রমণ পরিকল্পনা",
    ta: "எனது பயண திட்டம்"
  },
  today: {
    en: "Today",
    hi: "आज",
    bn: "আজ",
    ta: "இன்று"
  },
  upcoming: {
    en: "Upcoming",
    hi: "आगामी",
    bn: "আগামী",
    ta: "வரவிருக்கும்"
  },
  activities: {
    en: "Activities",
    hi: "गतिविधियां",
    bn: "কার্যক্রম",
    ta: "செயல்பாடுகள்"
  },
  reservations: {
    en: "Reservations",
    hi: "आरक्षण",
    bn: "সংরক্ষণ",
    ta: "முன்பதிவுகள்"
  },
  checkIn: {
    en: "Check-in",
    hi: "चेक-इन",
    bn: "চেক-ইন",
    ta: "செக்-இன்"
  },
  checkOut: {
    en: "Check-out",
    hi: "चेक-आउट",
    bn: "চেক-আউট",
    ta: "செக்-அவுட்"
  },
  confirmed: {
    en: "Confirmed",
    hi: "पुष्ट",
    bn: "নিশ্চিত",
    ta: "உறுதிப்படுத்தப்பட்டது"
  },
  pending: {
    en: "Pending",
    hi: "लंबित",
    bn: "মুলতুবি",
    ta: "நிலுவையில்"
  },
  cancelled: {
    en: "Cancelled",
    hi: "रद्द",
    bn: "বাতিল",
    ta: "ரத்து"
  },
  flight: {
    en: "Flight",
    hi: "उड़ान",
    bn: "ফ্লাইট",
    ta: "விমானம்"
  },
  hotel: {
    en: "Hotel",
    hi: "होटल",
    bn: "হোটেল",
    ta: "ஹோட்டல்"
  },
  restaurant: {
    en: "Restaurant",
    hi: "रेस्तरां",
    bn: "রেস্তোরাঁ",
    ta: "உணவகம்"
  },
  tour: {
    en: "Tour",
    hi: "दौरा",
    bn: "ভ্রমণ",
    ta: "சுற்றுலா"
  },
  emergencyContacts: {
    en: "Emergency Contacts",
    hi: "आपातकालीन संपर्क",
    bn: "জরুরি যোগাযোগ",
    ta: "அவசர தொடர்புகள்"
  },
  viewMap: {
    en: "View on Map",
    hi: "मानचित्र पर देखें",
    bn: "মানচিত্রে দেখুন",
    ta: "வரைபடத்தில் பார்க்கவும்"
  },
  callVenue: {
    en: "Call Venue",
    hi: "स्थान पर कॉल करें",
    bn: "স্থানে কল করুন",
    ta: "இடத்திற்கு அழைக்கவும்"
  },
  getDirections: {
    en: "Get Directions",
    hi: "दिशा-निर्देश प्राप्त करें",
    bn: "দিকনির্দেশনা পান",
    ta: "திசைகளைப் பெறுங்கள்"
  }
};

// Language Context
const LanguageContext = createContext<{
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}>({
  currentLanguage: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[currentLanguage] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Sample notifications data
const sampleNotifications: Notification[] = [
  {
    id: "1",
    type: "safety",
    title: "High Crime Alert",
    message: "Avoid central downtown area after 10 PM due to increased security incidents",
    timestamp: "2 hours ago",
    isRead: false,
    priority: "high",
    icon: dashFrame2,
    color: "text-red-600",
    bgColor: "bg-red-100",
    details: {
      description: "Local authorities have reported increased criminal activity in the central downtown area. Multiple incidents have been documented between 10 PM and 2 AM over the past week.",
      location: "Central Downtown District",
      affectedAreas: ["Main Street", "Central Plaza", "Market Square", "Government District"],
      instructions: [
        "Avoid traveling alone after 10 PM",
        "Use well-lit main roads only",
        "Keep emergency contacts readily available", 
        "Report any suspicious activity immediately"
      ],
      actions: [
        {
          label: "View Safe Routes",
          type: "primary",
          action: () => alert("Opening safe route map...")
        },
        {
          label: "Share with Contacts",
          type: "secondary", 
          action: () => alert("Sharing safety alert...")
        }
      ]
    }
  },
  {
    id: "2",
    type: "weather",
    title: "Severe Weather Warning",
    message: "Heavy rainfall expected from 6 PM today. Flash flood risk in low-lying areas",
    timestamp: "4 hours ago",
    isRead: false,
    priority: "high",
    icon: dashFrame7,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    details: {
      description: "The meteorological department has issued a severe weather warning for heavy rainfall starting 6 PM today. Flash flooding is possible in low-lying areas and near riverbanks.",
      location: "Entire City Region",
      affectedAreas: ["Riverfront District", "Old Town", "Valley Areas", "Coastal Roads"],
      instructions: [
        "Stay indoors during heavy rainfall",
        "Avoid driving through flooded roads",
        "Keep important documents in waterproof containers",
        "Have emergency supplies ready"
      ],
      actions: [
        {
          label: "Check Weather Updates",
          type: "primary",
          action: () => alert("Opening weather forecast...")
        }
      ]
    }
  },
  {
    id: "3",
    type: "verification",
    title: "ID Verification Successful",
    message: "Your Tourist Digital ID has been successfully verified and is now active",
    timestamp: "1 day ago", 
    isRead: true,
    priority: "medium",
    icon: dashFrame1,
    color: "text-green-600",
    bgColor: "bg-green-100",
    details: {
      description: "Your Tourist Digital ID (TID-2024-789) has been successfully verified by the authorities. Your account is now fully active and you have access to all tourist services.",
      instructions: [
        "Keep your digital ID easily accessible",
        "Report any issues immediately",
        "Renew before expiration date"
      ],
      actions: [
        {
          label: "View Digital ID",
          type: "primary",
          action: () => alert("Opening digital ID card...")
        }
      ]
    }
  },
  {
    id: "4",
    type: "travel",
    title: "Travel Advisory Update",
    message: "New entry requirements for tourist zones effective from tomorrow",
    timestamp: "2 days ago",
    isRead: true,
    priority: "medium",
    icon: dashFrame6,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    details: {
      description: "Updated travel requirements have been implemented for certain tourist zones. All visitors must carry valid identification and complete health screening at checkpoints.",
      affectedAreas: ["Historic District", "Beach Areas", "Mountain Regions", "Cultural Sites"],
      instructions: [
        "Carry valid ID at all times",
        "Complete health screening when required",
        "Check zone-specific requirements before travel",
        "Allow extra time for checkpoint procedures"
      ],
      actions: [
        {
          label: "View Requirements",
          type: "primary",
          action: () => alert("Opening travel requirements...")
        }
      ]
    }
  },
  {
    id: "5",
    type: "system",
    title: "App Update Available",
    message: "New version 2.4.1 includes enhanced security features and bug fixes",
    timestamp: "3 days ago",
    isRead: true,
    priority: "low",
    icon: dashFrame11,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    details: {
      description: "Version 2.4.1 of the Tourist Digital ID app is now available. This update includes enhanced security features, improved performance, and critical bug fixes.",
      instructions: [
        "Update to the latest version for best experience",
        "Backup your data before updating",
        "Restart the app after installation"
      ],
      actions: [
        {
          label: "Update Now",
          type: "primary", 
          action: () => alert("Starting app update...")
        }
      ]
    }
  }
];

// Auth context for basic authentication
const useAuth = () => {
  const [user, setUser] = useState<{ digitalId: string; name: string } | null>(null);
  
  const login = (digitalId: string, password: string) => {
    // Basic auth simulation - in real app, this would call an API
    if (digitalId && password) {
      setUser({ digitalId, name: "Tourist User" });
      return true;
    }
    return false;
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return { user, login, logout };
};

// Locfy Context
const LocfyContext = createContext<{
  isInitialized: boolean;
  currentLocation: any;
  safetyScore: number;
  startTracking: () => void;
  stopTracking: () => void;
  shareEmergencyLocation: (contacts: string[]) => Promise<string | null>;
  reportIncident: (incident: any) => Promise<string | null>;
  getDirections: (destination: any) => Promise<any>;
  refreshData: () => void;
}>({
  isInitialized: false,
  currentLocation: null,
  safetyScore: 75,
  startTracking: () => {},
  stopTracking: () => {},
  shareEmergencyLocation: async () => null,
  reportIncident: async () => null,
  getDirections: async () => null,
  refreshData: () => {}
});

const LocfyProvider = ({ children }: { children: React.ReactNode }) => {
  const locfy = useLocfy();

  useEffect(() => {
    // Initialize Locfy when the provider mounts
    const initLocfy = async () => {
      await locfy.initializeService({
        apiKey: process.env.REACT_APP_LOCFY_API_KEY || "demo_api_key_12345",
        baseUrl: process.env.REACT_APP_LOCFY_BASE_URL || "https://api.locfy.com/v1",
        enableRealTimeTracking: true,
        enableGeofencing: true
      });
    };

    initLocfy();
  }, []);

  const refreshData = () => {
    locfy.refreshNearbyServices();
    locfy.refreshTouristZones();
  };

  return (
    <LocfyContext.Provider value={{
      isInitialized: locfy.isInitialized,
      currentLocation: locfy.currentLocation,
      safetyScore: locfy.safetyScore,
      startTracking: locfy.startTracking,
      stopTracking: locfy.stopTracking,
      shareEmergencyLocation: locfy.shareEmergencyLocation,
      reportIncident: locfy.reportIncident,
      getDirections: locfy.getDirections,
      refreshData
    }}>
      {children}
    </LocfyContext.Provider>
  );
};

const useLocfyContext = () => {
  const context = useContext(LocfyContext);
  if (!context) {
    throw new Error("useLocfyContext must be used within a LocfyProvider");
  }
  return context;
};

// Notifications context
const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications);
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };
  
  const getUnreadCount = () => {
    return notifications.filter(n => !n.isRead).length;
  };
  
  const selectNotification = (notification: Notification) => {
    setSelectedNotification(notification);
    markAsRead(notification.id);
  };
  
  return { 
    notifications, 
    selectedNotification,
    markAsRead, 
    getUnreadCount,
    selectNotification,
    setSelectedNotification 
  };
};

function SecurityBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1573181759662-1c146525b21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBjYXBpdG9sJTIwYXJjaGl0ZWN0dXJlJTIwYmx1ZXxlbnwxfHx8fDE3NTczMTM3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Government building background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-background/90 to-blue-800/15"></div>
      <div className="absolute inset-0 bg-background/85"></div>
    </div>
  );
}

function GovernmentHeader() {
  const { t } = useLanguage();
  
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center shadow-lg border border-border">
          <div className="w-8 h-7">
            <img className="w-full h-full object-contain filter brightness-0 invert" src={imgFrame} alt="Digital ID" />
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <h1 className="text-foreground tracking-tight">
          {t("appTitle")}
        </h1>
        <div className="w-12 h-px bg-primary mx-auto"></div>
        <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">
          {t("secureAuthPortal")}
          <br />
          <span className="text-sm">{t("government")}</span>
        </p>
      </div>
    </div>
  );
}

function LoginForm({ onForgotId, onLogin }: { onForgotId: () => void; onLogin: (digitalId: string, password: string) => boolean }) {
  const [digitalId, setDigitalId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const success = onLogin(digitalId, password);
    if (!success) {
      setError("Invalid Digital ID or password");
    }
    
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-sm mx-auto border-border/50 shadow-2xl bg-card/95 backdrop-blur-sm">
      <div className="p-8 space-y-6">
        <div className="text-center border-b border-border pb-4">
          <p className="text-sm text-muted-foreground">{t("secureLogin")}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="digitalId" className="text-foreground">
              {t("digitalIdNumber")}
            </Label>
            <div className="relative">
              <Input
                id="digitalId"
                type="text"
                placeholder="Enter your Digital ID"
                value={digitalId}
                onChange={(e) => setDigitalId(e.target.value)}
                className="h-12 pl-4 pr-12 bg-input-background border-border focus:border-primary focus:ring-primary/20 transition-all"
                required
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60">
                <img src={imgFrame1} alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">
              {t("password")}
            </Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 pl-4 pr-12 bg-input-background border-border focus:border-primary focus:ring-primary/20 transition-all"
                required
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60">
                <img src={imgFrame2} alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          
          {error && (
            <p className="text-destructive text-sm text-center">{error}</p>
          )}
          
          <div className="pt-2">
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg disabled:opacity-50"
            >
              <div className="w-4 h-4 mr-2">
                <img src={imgFrame3} alt="" className="w-full h-full object-contain filter brightness-0 invert" />
              </div>
              {isLoading ? t("signingIn") : t("signIn")}
            </Button>
          </div>
        </form>
        
        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <button 
              onClick={onForgotId}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {t("forgotDigitalId")}
            </button>
            <div className="text-muted-foreground">
              {t("needHelp")}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function ForgotIdStep1({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [digitalId, setDigitalId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (digitalId.trim()) {
      onNext();
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto border-border/50 shadow-2xl bg-card/95 backdrop-blur-sm">
      <div className="p-8 space-y-6">
        <div className="text-center border-b border-border pb-4">
          <p className="text-sm text-muted-foreground">Digital ID Recovery</p>
          <p className="text-xs text-muted-foreground mt-1">Step 1 of 2</p>
        </div>
        
        <div className="text-center space-y-2">
          <h3 className="text-foreground">Enter Your Digital ID</h3>
          <p className="text-sm text-muted-foreground">
            We'll send a verification code to your registered contact method
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="recoveryDigitalId" className="text-foreground">
              Digital ID Number
            </Label>
            <div className="relative">
              <Input
                id="recoveryDigitalId"
                type="text"
                placeholder="Enter your Digital ID"
                value={digitalId}
                onChange={(e) => setDigitalId(e.target.value)}
                className="h-12 pl-4 pr-12 bg-input-background border-border focus:border-primary focus:ring-primary/20 transition-all"
                required
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60">
                <img src={imgFrame1} alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          
          <div className="space-y-3 pt-2">
            <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <div className="w-4 h-4 mr-2">
                <img src={imgFrame3} alt="" className="w-full h-full object-contain filter brightness-0 invert" />
              </div>
              Send Verification Code
            </Button>
            
            <Button 
              type="button"
              onClick={onBack}
              variant="outline" 
              className="w-full h-12 border-border hover:bg-accent"
            >
              Back to Login
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}

function ForgotIdStep2({ onBack }: { onBack: () => void }) {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.trim()) {
      alert("OTP verified successfully! You can now reset your password.");
      onBack();
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto border-border/50 shadow-2xl bg-card/95 backdrop-blur-sm">
      <div className="p-8 space-y-6">
        <div className="text-center border-b border-border pb-4">
          <p className="text-sm text-muted-foreground">Digital ID Recovery</p>
          <p className="text-xs text-muted-foreground mt-1">Step 2 of 2</p>
        </div>
        
        <div className="text-center space-y-2">
          <h3 className="text-foreground">Enter Verification Code</h3>
          <p className="text-sm text-muted-foreground">
            Enter the OTP sent to your registered contact method
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="verificationOtp" className="text-foreground">
              One-Time Password (OTP)
            </Label>
            <div className="relative">
              <Input
                id="verificationOtp"
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="h-12 pl-4 pr-12 bg-input-background border-border focus:border-primary focus:ring-primary/20 transition-all text-center tracking-widest"
                maxLength={6}
                required
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60">
                <img src={imgFrame2} alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          
          <div className="space-y-3 pt-2">
            <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <div className="w-4 h-4 mr-2">
                <img src={imgFrame3} alt="" className="w-full h-full object-contain filter brightness-0 invert" />
              </div>
              Verify Code
            </Button>
            
            <div className="flex gap-2">
              <Button 
                type="button"
                onClick={onBack}
                variant="outline" 
                className="flex-1 h-12 border-border hover:bg-accent"
              >
                Back
              </Button>
              
              <Button 
                type="button"
                variant="outline" 
                className="flex-1 h-12 border-border hover:bg-accent text-primary"
              >
                Resend OTP
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}

// Notification Dropdown Components
function NotificationDropdownItem({ notification, onSelect }: { notification: Notification; onSelect: (notification: Notification) => void }) {
  const getTypeLabel = (type: string) => {
    switch (type) {
      case "safety": return "Safety Alert";
      case "weather": return "Weather Alert";
      case "verification": return "ID Verification";
      case "travel": return "Travel Advisory";
      case "system": return "System Update";
      case "emergency": return "Emergency";
      default: return "Notification";
    }
  };

  return (
    <div 
      className={`p-3 cursor-pointer transition-all hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
        !notification.isRead ? 'bg-blue-50/50' : ''
      }`}
      onClick={() => onSelect(notification)}
    >
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 ${notification.bgColor} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
          <div className="w-4 h-4">
            <img src={notification.icon} alt={notification.type} className="w-full h-full object-contain" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <Badge className={`${notification.bgColor} ${notification.color} text-xs px-2 py-0.5 rounded-full`}>
              {getTypeLabel(notification.type)}
            </Badge>
            <span className="text-xs text-gray-500">{notification.timestamp}</span>
          </div>
          
          <h4 className={`text-sm mb-1 ${!notification.isRead ? 'font-semibold text-gray-900' : 'text-gray-900'}`}>
            {notification.title}
          </h4>
          <p className="text-xs text-gray-600 leading-4 line-clamp-2">
            {notification.message}
          </p>
          
          {notification.priority === "high" && (
            <div className="flex items-center gap-1 mt-1">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              <span className="text-xs text-red-600 font-medium">High Priority</span>
            </div>
          )}
        </div>
        
        {!notification.isRead && (
          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
        )}
      </div>
    </div>
  );
}

function NotificationDropdown({ isOpen, onClose, onSelectNotification }: { isOpen: boolean; onClose: () => void; onSelectNotification: (notification: Notification) => void }) {
  const { notifications } = useNotifications();
  const { t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-96 overflow-hidden">
      <div ref={dropdownRef}>
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-gray-900">{t("notifications")}</h3>
            <button 
              onClick={onClose}
              className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <div className="w-3 h-3">
                <img src={emergFrame3} alt="Close" className="w-full h-full object-contain rotate-45" />
              </div>
            </button>
          </div>
        </div>
        
        <div className="max-h-80 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <div className="w-6 h-6">
                  <img src={dashFrame11} alt="No notifications" className="w-full h-full object-contain opacity-40" />
                </div>
              </div>
              <p className="text-gray-500 text-sm text-center">{t("noNotifications")}</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <NotificationDropdownItem 
                key={notification.id} 
                notification={notification} 
                onSelect={onSelectNotification}
              />
            ))
          )}
        </div>
        
        {notifications.length > 0 && (
          <div className="p-3 border-t border-gray-100">
            <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
              View All Notifications
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function NotificationModal({ notification, onClose }: { notification: Notification | null; onClose: () => void }) {
  if (!notification) return null;

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "safety": return "Safety Alert";
      case "weather": return "Weather Alert"; 
      case "verification": return "ID Verification";
      case "travel": return "Travel Advisory";
      case "system": return "System Update";
      case "emergency": return "Emergency";
      default: return "Notification";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg text-gray-900">Notification Details</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <div className="w-4 h-4">
              <img src={emergFrame3} alt="Close" className="w-full h-full object-contain" />
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Main notification card */}
          <div className="p-4">
            <div className="space-y-4">
              {/* Header with icon and badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${notification.bgColor} rounded-full flex items-center justify-center`}>
                    <div className="w-5 h-5">
                      <img src={notification.icon} alt={notification.type} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <Badge className={`${notification.bgColor} ${notification.color} text-sm px-3 py-1 rounded-full`}>
                    {getTypeLabel(notification.type)}
                  </Badge>
                </div>
                <span className="text-sm text-gray-500">{notification.timestamp}</span>
              </div>
              
              {/* Title and message */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">{notification.title}</h3>
                <p className="text-base text-gray-700 leading-6">{notification.message}</p>
              </div>
              
              {/* Priority indicator */}
              {notification.priority === "high" && (
                <div className="flex items-center gap-2 p-3 bg-red-50 rounded-xl">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-red-700 font-medium">High Priority Alert</span>
                </div>
              )}
            </div>
          </div>

          {/* Details section */}
          {notification.details && (
            <>
              {/* Description */}
              <div className="px-4 pb-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="text-base font-medium text-gray-900 mb-2">Details</h4>
                  <p className="text-sm text-gray-700 leading-5">
                    {notification.details.description}
                  </p>
                </div>
              </div>

              {/* Location */}
              {notification.details.location && (
                <div className="px-4 pb-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3">
                          <img src={dashFrame4} alt="Location" className="w-full h-full object-contain" />
                        </div>
                      </div>
                      <h4 className="text-base font-medium text-gray-900">Location</h4>
                    </div>
                    <p className="text-sm text-gray-700">{notification.details.location}</p>
                  </div>
                </div>
              )}

              {/* Affected Areas */}
              {notification.details.affectedAreas && notification.details.affectedAreas.length > 0 && (
                <div className="px-4 pb-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="text-base font-medium text-gray-900 mb-3">Affected Areas</h4>
                    <div className="space-y-1">
                      {notification.details.affectedAreas.map((area, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Instructions */}
              {notification.details.instructions && notification.details.instructions.length > 0 && (
                <div className="px-4 pb-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="text-base font-medium text-gray-900 mb-3">Instructions</h4>
                    <div className="space-y-2">
                      {notification.details.instructions.map((instruction, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-blue-600">{index + 1}</span>
                          </div>
                          <p className="text-sm text-gray-700 leading-5">{instruction}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              {notification.details.actions && notification.details.actions.length > 0 && (
                <div className="p-4 space-y-2">
                  {notification.details.actions.map((action, index) => (
                    <Button 
                      key={index}
                      onClick={action.action}
                      className={`w-full h-10 rounded-xl ${
                        action.type === 'primary' 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Dashboard Components
function DashboardHeader({ onLogout }: { onLogout: () => void }) {
  const { t } = useLanguage();
  const { getUnreadCount, selectNotification } = useNotifications();
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const unreadCount = getUnreadCount();
  
  const handleNotificationClick = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
  };

  const handleSelectNotification = (notification: Notification) => {
    selectNotification(notification);
    setSelectedNotification(notification);
    setIsNotificationDropdownOpen(false);
  };

  const handleCloseModal = () => {
    setSelectedNotification(null);
  };

  return (
    <>
      <div className="bg-white p-6 flex items-center justify-between border-b border-border">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">{t("dashboard")}</h1>
          <p className="text-sm text-gray-500">{t("stayKSafeJourney")}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button 
              onClick={handleNotificationClick}
              className="relative w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <div className="w-4 h-4">
                <img src={dashFrame11} alt="Notifications" className="w-full h-full object-contain" />
              </div>
              {unreadCount > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-medium">{unreadCount > 9 ? '9+' : unreadCount}</span>
                </div>
              )}
            </button>
            <NotificationDropdown 
              isOpen={isNotificationDropdownOpen} 
              onClose={() => setIsNotificationDropdownOpen(false)}
              onSelectNotification={handleSelectNotification}
            />
          </div>
          <button 
            onClick={onLogout}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <div className="w-4 h-4">
              <img src={dashFrame} alt="Logout" className="w-full h-full object-contain" />
            </div>
          </button>
        </div>
      </div>
      <NotificationModal 
        notification={selectedNotification} 
        onClose={handleCloseModal}
      />
    </>
  );
}

function DigitalIdCard({ user }: { user: { digitalId: string; name: string } }) {
  const { t } = useLanguage();
  
  return (
    <div className="p-6">
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 shadow-xl">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-white">{t("touristDigitalId")}</h3>
              <p className="text-sm text-blue-100">ID: TDI-2024-8847</p>
            </div>
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-5">
                  <img src={dashFrame1} alt="Digital ID" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-white">{t("verified")} • {t("active")}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

function SafetyScore({ onViewDetails }: { onViewDetails: () => void }) {
  const { t } = useLanguage();
  const { safetyScore, currentLocation } = useLocfyContext();
  
  const getSafetyLevel = (score: number) => {
    if (score >= 80) return { level: t("safe"), color: "text-emerald-500", bgColor: "bg-green-100" };
    if (score >= 60) return { level: "Moderate", color: "text-yellow-500", bgColor: "bg-yellow-100" };
    if (score >= 40) return { level: "Caution", color: "text-orange-500", bgColor: "bg-orange-100" };
    return { level: "Unsafe", color: "text-red-500", bgColor: "bg-red-100" };
  };

  const safetyInfo = getSafetyLevel(safetyScore);
  
  return (
    <div className="p-6">
      <Card 
        className="p-6 cursor-pointer hover:shadow-md transition-all"
        onClick={onViewDetails}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900">{t("safetyScore")}</h3>
            <p className="text-sm text-gray-500">
              {currentLocation ? currentLocation.address || t("currentLocationStatus") : t("currentLocationStatus")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 ${safetyInfo.bgColor} rounded-full flex items-center justify-center`}>
              <div className="w-5 h-5">
                <img src={dashFrame2} alt="Safety" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold ${safetyInfo.color}`}>{safetyScore}</div>
              <div className="text-xs text-gray-500">{safetyInfo.level}</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function SOSButton({ onActivate }: { onActivate: () => void }) {
  const { shareEmergencyLocation, isInitialized, startTracking } = useLocfyContext();

  const handleSOSActivate = async () => {
    // First trigger the emergency screen
    onActivate();

    // Then start emergency location sharing
    if (isInitialized) {
      try {
        await startTracking();
        
        // Share location with emergency contacts
        const emergencyContacts = ["police", "family", "tourism_dept"];
        const shareId = await shareEmergencyLocation(emergencyContacts);
        
        if (shareId) {
          console.log('Emergency location sharing activated:', shareId);
        }
      } catch (error) {
        console.error('Error activating emergency location sharing:', error);
      }
    }
  };

  return (
    <div className="p-6 flex justify-center">
      <button 
        onClick={handleSOSActivate}
        className="w-32 h-32 bg-red-500 hover:bg-red-600 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-200 active:scale-95"
      >
        <div className="w-1 h-8 mb-2">
          <img src={dashFrame3} alt="SOS" className="w-full h-full object-contain" />
        </div>
        <span className="text-lg font-bold text-white">SOS</span>
      </button>
    </div>
  );
}

function QuickActions({ onReportIssue, onViewItinerary }: { onReportIssue: () => void; onViewItinerary: () => void }) {
  const { t } = useLanguage();
  const { shareEmergencyLocation, isInitialized, startTracking } = useLocfyContext();

  const handleShareLocation = async () => {
    if (!isInitialized) {
      alert("Location services not available. Please enable location permissions.");
      return;
    }

    try {
      await startTracking();
      // In a real app, you'd get actual emergency contacts
      const mockContactIds = ["emergency_contact_1", "family_member_1"];
      const shareId = await shareEmergencyLocation(mockContactIds);
      
      if (shareId) {
        alert(`Live location sharing started! Share ID: ${shareId}`);
      } else {
        alert("Failed to start location sharing. Please try again.");
      }
    } catch (error) {
      alert("Error starting location sharing. Please check your permissions.");
    }
  };
  
  const actions = [
    { 
      icon: dashFrame4, 
      title: t("shareLive"), 
      subtitle: t("location"), 
      bgColor: "bg-blue-100",
      action: handleShareLocation
    },
    { 
      icon: dashFrame5, 
      title: t("report"), 
      subtitle: t("issue"), 
      bgColor: "bg-orange-100",
      action: onReportIssue
    },
    { 
      icon: dashFrame6, 
      title: t("view"), 
      subtitle: t("itinerary"), 
      bgColor: "bg-green-100",
      action: onViewItinerary
    },
  ];

  return (
    <div className="p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">{t("quickActions")}</h3>
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action, index) => (
          <Card 
            key={index} 
            className="p-4 cursor-pointer hover:shadow-md transition-all"
            onClick={action.action}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className={`w-12 h-12 ${action.bgColor} rounded-full flex items-center justify-center`}>
                <div className="w-4 h-5">
                  <img src={action.icon} alt={action.title} className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">{action.title}</div>
                <div className="text-xs text-gray-500">{action.subtitle}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}



function BottomNavigation({ activeTab, onProfileClick }: { activeTab: string; onProfileClick: () => void }) {
  const { t } = useLanguage();
  
  const navItems = [
    { icon: dashFrame9, label: t("home"), active: activeTab === "home", onClick: null },
    { icon: dashFrame10, label: t("map"), active: activeTab === "map", onClick: null },
    { icon: dashFrame11, label: t("support"), active: activeTab === "support", onClick: null },
    { icon: dashFrame12, label: t("profile"), active: activeTab === "profile", onClick: onProfileClick },
  ];

  return (
    <div className="bg-white border-t border-border p-4">
      <div className="flex justify-around">
        {navItems.map((item, index) => (
          <button 
            key={index}
            onClick={item.onClick || undefined}
            className="flex flex-col items-center gap-1 p-2"
          >
            <div className="w-6 h-5">
              <img 
                src={item.icon} 
                alt={item.label} 
                className={`w-full h-full object-contain ${item.active ? 'opacity-100' : 'opacity-40'}`} 
              />
            </div>
            <span className={`text-xs ${item.active ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Dashboard({ user, onLogout, onSOSActivate, onViewSafetyDetails, onViewProfile, onReportIssue, onViewItinerary }: { user: { digitalId: string; name: string }; onLogout: () => void; onSOSActivate: () => void; onViewSafetyDetails: () => void; onViewProfile: () => void; onReportIssue: () => void; onViewItinerary: () => void }) {
  const { isInitialized, startTracking } = useLocfyContext();

  // Auto-start location tracking when dashboard loads
  useEffect(() => {
    if (isInitialized) {
      startTracking();
    }
  }, [isInitialized, startTracking]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-sm mx-auto relative">
      <DashboardHeader onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto pb-20">
        <DigitalIdCard user={user} />
        <SafetyScore onViewDetails={onViewSafetyDetails} />
        <SOSButton onActivate={onSOSActivate} />
        <QuickActions onReportIssue={onReportIssue} onViewItinerary={onViewItinerary} />
      </div>
      
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
        <BottomNavigation activeTab="home" onProfileClick={onViewProfile} />
      </div>
    </div>
  );
}

// Emergency Screen Components
function EmergencyStatusBar() {
  return (
    <div className="bg-white h-11 flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-sm text-gray-600">9:41</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4">
          <img src={emergFrame} alt="Signal" className="w-full h-full object-contain" />
        </div>
        <div className="w-4 h-4">
          <img src={emergFrame1} alt="WiFi" className="w-full h-full object-contain" />
        </div>
        <div className="w-4 h-4">
          <img src={emergFrame2} alt="Battery" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

function EmergencyHeader({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-white h-19 shadow-sm flex items-center justify-between px-6 py-4">
      <button 
        onClick={onBack}
        className="flex items-center justify-center w-8 h-8 -ml-2"
      >
        <div className="w-5 h-5">
          <img src={emergFrame3} alt="Back" className="w-full h-full object-contain" />
        </div>
      </button>
      <h1 className="text-lg text-gray-900">Emergency Active</h1>
      <div className="w-8 h-8"></div> {/* Spacer for center alignment */}
    </div>
  );
}

function SOSActiveCard() {
  return (
    <div className="px-6 pt-6">
      <Card className="bg-red-500 border-0 shadow-xl rounded-2xl">
        <div className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-9 h-9">
              <img src={emergFrame4} alt="Warning" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-2xl font-normal text-white">SOS ACTIVE</h2>
            <p className="text-base text-red-100">Emergency alert has been triggered</p>
          </div>
          
          <div className="inline-block bg-white/20 rounded-xl px-4 py-3">
            <span className="text-sm text-white">Alert sent at 9:41 AM</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

function AlertsSentTo() {
  const contacts = [
    {
      icon: emergFrame5,
      title: "Police Department",
      subtitle: "Emergency Services",
      bgColor: "bg-blue-100"
    },
    {
      icon: emergFrame7,
      title: "Family Contacts",
      subtitle: "3 contacts notified",
      bgColor: "bg-green-100"
    },
    {
      icon: emergFrame8,
      title: "Tourism Department",
      subtitle: "Local authorities",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <div className="px-6 pt-8 space-y-6">
      <h3 className="text-lg text-gray-900">Alerts Sent To:</h3>
      
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <Card key={index} className="p-4 border border-gray-100 shadow-sm rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${contact.bgColor} rounded-full flex items-center justify-center`}>
                  <div className="w-5 h-5">
                    <img src={contact.icon} alt={contact.title} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <div className="text-base text-gray-900">{contact.title}</div>
                  <div className="text-sm text-gray-500">{contact.subtitle}</div>
                </div>
              </div>
              <div className="w-5 h-5">
                <img src={emergFrame6} alt="Success" className="w-full h-full object-contain" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function LiveLocationCard() {
  return (
    <div className="px-6 pt-8">
      <Card className="p-6 border border-gray-100 shadow-sm rounded-2xl space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-gray-900">Live Location</h3>
          <Badge className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
            SHARING ON
          </Badge>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mt-1">
            <div className="w-4 h-5">
              <img src={emergFrame9} alt="Location" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-base text-gray-900 mb-2">Real-time tracking active</div>
            <p className="text-sm text-gray-500 leading-5">
              Your location is being shared with emergency contacts
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="w-2 h-2 bg-red-500 rounded-full opacity-55"></div>
          <span>Live updating every 30 seconds</span>
        </div>
      </Card>
    </div>
  );
}

function EmergencyActions({ onCancel }: { onCancel: () => void }) {
  const handleCallEmergency = () => {
    alert("Calling Emergency Services...");
  };

  return (
    <div className="px-6 pt-8 pb-8 space-y-4">
      <Button 
        onClick={handleCallEmergency}
        className="w-full h-15 bg-red-500 hover:bg-red-600 text-white rounded-2xl shadow-lg text-lg"
      >
        <div className="w-5 h-5 mr-3">
          <img src={emergFrame10} alt="Phone" className="w-full h-full object-contain" />
        </div>
        Call Emergency Services
      </Button>
      
      <Button 
        onClick={onCancel}
        variant="secondary"
        className="w-full h-15 bg-gray-600 hover:bg-gray-700 text-white rounded-2xl text-lg"
      >
        <div className="w-5 h-5 mr-3">
          <img src={emergFrame11} alt="Cancel" className="w-full h-full object-contain" />
        </div>
        Cancel SOS Alert
      </Button>
    </div>
  );
}

function EmergencyScreen({ onBack }: { onBack: () => void }) {
  const handleCancel = () => {
    if (confirm("Are you sure you want to cancel the SOS alert?")) {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-sm mx-auto">
      <EmergencyStatusBar />
      <EmergencyHeader onBack={onBack} />
      
      <div className="flex-1 overflow-y-auto">
        <SOSActiveCard />
        <AlertsSentTo />
        <LiveLocationCard />
        <EmergencyActions onCancel={handleCancel} />
      </div>
    </div>
  );
}

// Safety Details Screen Components
function SafetyDetailsHeader({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-white shadow-sm flex items-center justify-between px-6 py-4">
      <button 
        onClick={onBack}
        className="flex items-center justify-center w-8 h-8 -ml-2"
      >
        <div className="w-5 h-5">
          <img src={emergFrame3} alt="Back" className="w-full h-full object-contain" />
        </div>
      </button>
      <h1 className="text-lg text-gray-900">Safety Details</h1>
      <div className="w-8 h-8"></div> {/* Spacer for center alignment */}
    </div>
  );
}

function CurrentLocationCard() {
  return (
    <div className="px-6 pt-6">
      <Card className="p-6 border border-gray-100 shadow-sm rounded-2xl">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-gray-900">Current Location</h3>
            <Badge className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
              VERIFIED
            </Badge>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mt-1">
              <div className="w-5 h-5">
                <img src={dashFrame4} alt="Location" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-base text-gray-900 mb-1">Downtown District</div>
              <div className="text-sm text-gray-500 mb-2">123 Main Street, Tourist Zone</div>
              <p className="text-sm text-gray-600 leading-5">
                Well-patrolled area with high security presence and emergency services nearby
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-600 pt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Last updated 2 minutes ago</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

function SafetyScoreBreakdown() {
  const factors = [
    {
      icon: dashFrame5,
      title: "Crime Rate",
      score: "92",
      status: "Low",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: dashFrame6,
      title: "Emergency Services",
      score: "88",
      status: "Available",
      color: "text-green-600", 
      bgColor: "bg-green-100"
    },
    {
      icon: dashFrame7,
      title: "Tourist Activity",
      score: "78",
      status: "High",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: dashFrame8,
      title: "Transportation",
      score: "82",
      status: "Good",
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <div className="px-6 pt-8 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-gray-900">Safety Score Breakdown</h3>
        <div className="text-right">
          <div className="text-2xl font-bold text-emerald-500">85</div>
          <div className="text-xs text-gray-500">OVERALL</div>
        </div>
      </div>
      
      <div className="space-y-4">
        {factors.map((factor, index) => (
          <Card key={index} className="p-4 border border-gray-100 shadow-sm rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${factor.bgColor} rounded-full flex items-center justify-center`}>
                  <div className="w-5 h-5">
                    <img src={factor.icon} alt={factor.title} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <div className="text-base text-gray-900">{factor.title}</div>
                  <div className={`text-sm ${factor.color}`}>{factor.status}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-xl font-bold ${factor.color}`}>{factor.score}</div>
                <div className="text-xs text-gray-500">SCORE</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SafetyAnomalies() {
  const anomalies = [
    {
      icon: dashFrame9,
      title: "Traffic Congestion",
      description: "Heavy traffic reported on Main St",
      time: "15 mins ago",
      severity: "Low",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: dashFrame10,
      title: "Large Crowd Event", 
      description: "Festival gathering in Central Park",
      time: "1 hour ago",
      severity: "Medium",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <div className="px-6 pt-8 space-y-6">
      <h3 className="text-lg text-gray-900">Current Anomalies</h3>
      
      <div className="space-y-4">
        {anomalies.map((anomaly, index) => (
          <Card key={index} className="p-4 border border-gray-100 shadow-sm rounded-2xl">
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 ${anomaly.bgColor} rounded-full flex items-center justify-center mt-1`}>
                <div className="w-5 h-5">
                  <img src={anomaly.icon} alt={anomaly.title} className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-base text-gray-900">{anomaly.title}</div>
                  <Badge className={`${anomaly.bgColor} ${anomaly.color} text-xs px-2 py-1 rounded-full`}>
                    {anomaly.severity}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{anomaly.description}</p>
                <div className="text-xs text-gray-500">{anomaly.time}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SafetyRecommendations() {
  const recommendations = [
    {
      icon: dashFrame11,
      title: "Stay Alert",
      description: "Keep emergency contacts easily accessible",
      bgColor: "bg-blue-100"
    },
    {
      icon: dashFrame12,
      title: "Avoid Large Crowds",
      description: "Consider alternative routes during festival hours",
      bgColor: "bg-purple-100"
    },
    {
      icon: dashFrame4,
      title: "Share Location",
      description: "Keep live location sharing active with trusted contacts",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <div className="px-6 pt-8 pb-8 space-y-6">
      <h3 className="text-lg text-gray-900">Safety Recommendations</h3>
      
      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <Card key={index} className="p-4 border border-gray-100 shadow-sm rounded-2xl">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 ${rec.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                <div className="w-4 h-4">
                  <img src={rec.icon} alt={rec.title} className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 mb-1">{rec.title}</div>
                <div className="text-xs text-gray-600 leading-4">{rec.description}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SafetyDetailsScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-sm mx-auto">
      <SafetyDetailsHeader onBack={onBack} />
      
      <div className="flex-1 overflow-y-auto">
        <CurrentLocationCard />
        <SafetyScoreBreakdown />
        <SafetyAnomalies />
        <SafetyRecommendations />
      </div>
    </div>
  );
}

// Profile Screen Components
function ProfileHeader({ onBack, onLogout }: { onBack: () => void; onLogout: () => void }) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white h-[76px] shadow-sm flex items-center justify-between px-4 py-4">
      <button 
        onClick={onBack}
        className="flex items-center justify-center w-11 h-11 bg-gray-100 rounded-xl -ml-2"
      >
        <div className="w-4 h-4">
          <img src={profileFrame12} alt="Back" className="w-full h-full object-contain" />
        </div>
      </button>
      <h1 className="text-xl text-gray-900">{t("profile")}</h1>
      <button 
        onClick={() => alert("Menu options")}
        className="flex items-center justify-center w-5 h-11 bg-gray-100 rounded-xl"
      >
        <div className="w-1 h-4">
          <img src={profileFrame13} alt="Menu" className="w-full h-full object-contain" />
        </div>
      </button>
    </div>
  );
}

function ProfileUserCard() {
  const { t } = useLanguage();
  
  return (
    <div className="px-4 pt-0">
      <Card className="p-6 border border-gray-100 shadow-sm rounded-2xl">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div 
              className="w-20 h-20 bg-center bg-cover bg-no-repeat rounded-2xl border-2 border-blue-500"
              style={{ backgroundImage: `url('${imgImg}')` }}
            ></div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3">
                <img src={profileFrame} alt="Verified" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="space-y-1">
              <h3 className="text-xl text-gray-900">{t("touristUser")}</h3>
              <p className="text-sm text-gray-500">Tourist ID: TID-2024-789</p>
            </div>
            <div className="inline-block bg-emerald-50 px-3 py-1 rounded-full">
              <span className="text-xs text-emerald-500">{t("verifiedTourist")}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ProfileDigitalIdCard() {
  const { t } = useLanguage();
  
  return (
    <div className="px-4 pt-8">
      <Card className="border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-gray-900">{t("digitalIdCard")}</h3>
            <button className="w-8 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
              <div className="w-4 h-4">
                <img src={profileFrame1} alt="QR Code" className="w-full h-full object-contain" />
              </div>
            </button>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 relative overflow-hidden">
          {/* Background decorative circles */}
          <div className="absolute -top-16 right-4 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-7 -left-12 w-24 h-24 bg-white/10 rounded-full"></div>
          
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-white/80">{t("touristId")}</p>
                <h4 className="text-lg text-white">TID-2024-789</h4>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <div className="w-4 h-4">
                  <img src={profileFrame2} alt="User" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-1">
                <p className="text-xs text-white/80">{t("name")}</p>
                <p className="text-base text-white">{t("touristUser")}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-white/80">{t("validUntil")}</p>
                <p className="text-base text-white">Dec 2024</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function LanguagePreferences() {
  const { currentLanguage, setLanguage, t } = useLanguage();

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
  };

  return (
    <div className="px-4 pt-8">
      <Card className="border border-gray-100 shadow-sm rounded-2xl">
        <div className="p-6 space-y-6">
          <h3 className="text-lg text-gray-900">{t("languagePreferences")}</h3>
          
          <div className="space-y-3">
            {languages.map((lang, index) => (
              <button 
                key={index}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full p-4 rounded-xl flex items-center justify-between transition-all ${
                  currentLanguage === lang.code
                    ? 'bg-blue-50 border border-blue-200' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4">
                    <img src={profileFrame3} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className={`text-base ${currentLanguage === lang.code ? 'text-gray-900' : 'text-gray-700'}`}>
                    {lang.nativeName}
                  </span>
                </div>
                <div className="w-3 h-4">
                  <img 
                    src={currentLanguage === lang.code ? profileFrame4 : profileFrame5} 
                    alt="" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </button>
            ))}
          </div>
          
          <button className="w-full p-3 flex items-center justify-center gap-2 text-blue-500">
            <div className="w-3 h-4">
              <img src={profileFrame6} alt="Add" className="w-full h-full object-contain" />
            </div>
            <span className="text-base">{t("viewAllLanguages")}</span>
          </button>
        </div>
      </Card>
    </div>
  );
}

function AccessibilitySettings() {
  return (
    <div className="px-4 pt-8">
      <Card className="border border-gray-100 shadow-sm rounded-2xl">
        <div className="p-6 space-y-6">
          <h3 className="text-lg text-gray-900">Accessibility</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <div className="w-3 h-4">
                    <img src={profileFrame7} alt="Voice" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <p className="text-base text-gray-900">Voice Commands</p>
                  <p className="text-sm text-gray-500">Control app with voice</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
                  <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <div className="w-5 h-4">
                    <img src={profileFrame8} alt="Speaker" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <p className="text-base text-gray-900">Text-to-Speech</p>
                  <p className="text-sm text-gray-500">Read content aloud</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function PrivacySecuritySettings() {
  return (
    <div className="px-4 pt-8">
      <Card className="border border-gray-100 shadow-sm rounded-2xl">
        <div className="p-6 space-y-6">
          <h3 className="text-lg text-gray-900">Privacy & Security</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <div className="w-3 h-4">
                    <img src={profileFrame9} alt="Location" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <p className="text-base text-gray-900">Real-time Tracking</p>
                  <p className="text-sm text-gray-500">Share location for safety</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-12 h-6 bg-orange-500 rounded-full relative">
                  <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            <button className="w-full p-4 bg-gray-50 rounded-xl flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <div className="w-4 h-4">
                  <img src={profileFrame10} alt="Shield" className="w-full h-full object-contain" />
                </div>
              </div>
              <span className="text-base text-gray-900">Data & Privacy</span>
              <div className="ml-auto w-2 h-4">
                <img src={profileFrame5} alt="Arrow" className="w-full h-full object-contain" />
              </div>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ProfileLogoutButton({ onLogout }: { onLogout: () => void }) {
  const { t } = useLanguage();
  
  return (
    <div className="px-4 pt-8 pb-8">
      <Button 
        onClick={onLogout}
        className="w-full h-14 bg-red-500 hover:bg-red-600 text-white rounded-2xl shadow-lg"
      >
        <div className="w-4 h-4 mr-3">
          <img src={profileFrame11} alt="Logout" className="w-full h-full object-contain" />
        </div>
        {t("logout")}
      </Button>
    </div>
  );
}

function ProfileScreen({ onBack, onLogout }: { onBack: () => void; onLogout: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-sm mx-auto">
      <ProfileHeader onBack={onBack} onLogout={onLogout} />
      
      <div className="flex-1 overflow-y-auto">
        <ProfileUserCard />
        <ProfileDigitalIdCard />
        <LanguagePreferences />
        <AccessibilitySettings />
        <PrivacySecuritySettings />
        <ProfileLogoutButton onLogout={onLogout} />
      </div>
    </div>
  );
}

// Report Issue Screen Components
function ReportIssueHeader({ onBack }: { onBack: () => void }) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white shadow-sm flex items-center justify-between px-6 py-4">
      <button 
        onClick={onBack}
        className="flex items-center justify-center w-8 h-8 -ml-2"
      >
        <div className="w-5 h-5">
          <img src={emergFrame3} alt="Back" className="w-full h-full object-contain" />
        </div>
      </button>
      <h1 className="text-lg text-gray-900">{t("reportIssue")}</h1>
      <div className="w-8 h-8"></div>
    </div>
  );
}

function ReportIssueForm({ onSubmit }: { onSubmit: () => void }) {
  const { t } = useLanguage();
  const { reportIncident, currentLocation, isInitialized } = useLocfyContext();
  const [selectedIssueType, setSelectedIssueType] = useState("");
  const [priority, setPriority] = useState("medium");
  const [description, setDescription] = useState("");
  const [useLocation, setUseLocation] = useState(false);

  const issueTypes = [
    { 
      id: "safety", 
      title: t("safetyIssue"), 
      icon: dashFrame2, 
      color: "text-red-600", 
      bgColor: "bg-red-100" 
    },
    { 
      id: "infrastructure", 
      title: t("infrastructureIssue"), 
      icon: dashFrame8, 
      color: "text-blue-600", 
      bgColor: "bg-blue-100" 
    },
    { 
      id: "tourist-service", 
      title: t("touristService"), 
      icon: dashFrame6, 
      color: "text-purple-600", 
      bgColor: "bg-purple-100" 
    },
    { 
      id: "medical", 
      title: t("medicalEmergency"), 
      icon: emergFrame4, 
      color: "text-red-600", 
      bgColor: "bg-red-100" 
    },
    { 
      id: "lost-stolen", 
      title: t("lostStolen"), 
      icon: dashFrame5, 
      color: "text-orange-600", 
      bgColor: "bg-orange-100" 
    },
    { 
      id: "transportation", 
      title: t("transportation"), 
      icon: dashFrame10, 
      color: "text-green-600", 
      bgColor: "bg-green-100" 
    },
    { 
      id: "accommodation", 
      title: t("accommodation"), 
      icon: dashFrame11, 
      color: "text-blue-600", 
      bgColor: "bg-blue-100" 
    },
    { 
      id: "other", 
      title: t("other"), 
      icon: dashFrame12, 
      color: "text-gray-600", 
      bgColor: "bg-gray-100" 
    }
  ];

  const priorities = [
    { id: "urgent", label: t("urgent"), color: "text-red-600", bgColor: "bg-red-100" },
    { id: "high", label: t("high"), color: "text-orange-600", bgColor: "bg-orange-100" },
    { id: "medium", label: t("medium"), color: "text-yellow-600", bgColor: "bg-yellow-100" },
    { id: "low", label: t("low"), color: "text-green-600", bgColor: "bg-green-100" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIssueType && description.trim()) {
      try {
        const incident = {
          type: selectedIssueType,
          description: description.trim(),
          priority,
          useLocation: useLocation && isInitialized,
          photos: [] // Could be extended to include actual photos
        };

        const incidentId = await reportIncident(incident);
        
        if (incidentId) {
          alert(`Report submitted successfully!\nIncident ID: ${incidentId}\nType: ${selectedIssueType}\nPriority: ${priority}`);
        } else {
          alert(`Report submitted locally!\nType: ${selectedIssueType}\nPriority: ${priority}\nDescription: ${description}`);
        }
        
        onSubmit();
      } catch (error) {
        alert(`Error submitting report. Please try again.\nType: ${selectedIssueType}\nPriority: ${priority}`);
        console.error('Error submitting incident report:', error);
      }
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <form onSubmit={handleSubmit} className="p-6 space-y-8">
        {/* Issue Type Selection */}
        <div className="space-y-4">
          <h3 className="text-lg text-gray-900">{t("issueType")}</h3>
          <div className="grid grid-cols-2 gap-3">
            {issueTypes.map((type) => (
              <Card 
                key={type.id}
                className={`p-4 cursor-pointer transition-all ${
                  selectedIssueType === type.id
                    ? 'border-2 border-blue-500 bg-blue-50'
                    : 'border border-gray-200 hover:shadow-md'
                }`}
                onClick={() => setSelectedIssueType(type.id)}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`w-10 h-10 ${type.bgColor} rounded-full flex items-center justify-center`}>
                    <div className="w-5 h-5">
                      <img src={type.icon} alt={type.title} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900">{type.title}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Priority Selection */}
        <div className="space-y-4">
          <h3 className="text-lg text-gray-900">{t("priority")}</h3>
          <div className="grid grid-cols-2 gap-3">
            {priorities.map((priorityOption) => (
              <Card 
                key={priorityOption.id}
                className={`p-3 cursor-pointer transition-all ${
                  priority === priorityOption.id
                    ? 'border-2 border-blue-500 bg-blue-50'
                    : 'border border-gray-200 hover:shadow-md'
                }`}
                onClick={() => setPriority(priorityOption.id)}
              >
                <div className="flex items-center justify-center gap-2">
                  <div className={`w-3 h-3 ${priorityOption.bgColor} rounded-full`}></div>
                  <span className="text-sm font-medium text-gray-900">{priorityOption.label}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <Label htmlFor="description" className="text-lg text-gray-900">{t("describe")}</Label>
          <textarea
            id="description"
            placeholder="Please provide detailed information about the issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-32 p-4 border border-gray-200 rounded-xl bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
            required
          />
        </div>

        {/* Location Toggle */}
        <div className="space-y-3">
          <h3 className="text-lg text-gray-900">{t("currentLocation")} <span className="text-sm text-gray-500">({t("optional")})</span></h3>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5">
                    <img src={dashFrame4} alt="Location" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <p className="text-base text-gray-900">{t("useCurrentLocation")}</p>
                  <p className="text-sm text-gray-500">
                    {currentLocation ? currentLocation.address || "Current location detected" : "Location not available"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setUseLocation(!useLocation)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  useLocation ? 'bg-blue-500' : 'bg-gray-200'
                }`}
              >
                <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  useLocation ? 'translate-x-6' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>
          </Card>
        </div>

        {/* Attach Photos */}
        <div className="space-y-3">
          <h3 className="text-lg text-gray-900">{t("attachPhotos")} <span className="text-sm text-gray-500">({t("optional")})</span></h3>
          <Card className="p-6 border-2 border-dashed border-gray-300 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6">
                  <img src={profileFrame1} alt="Camera" className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <p className="text-base text-gray-900">Add photos or videos</p>
                <p className="text-sm text-gray-500">Tap to capture or select from gallery</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button 
            type="submit"
            className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl shadow-lg"
            disabled={!selectedIssueType || !description.trim()}
          >
            <div className="w-5 h-5 mr-3">
              <img src={dashFrame5} alt="Submit" className="w-full h-full object-contain filter brightness-0 invert" />
            </div>
            {t("submitReport")}
          </Button>
        </div>
      </form>
    </div>
  );
}

function ReportIssueScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-sm mx-auto">
      <ReportIssueHeader onBack={onBack} />
      <ReportIssueForm onSubmit={onBack} />
    </div>
  );
}

// View Itinerary Screen Components
function ItineraryHeader({ onBack }: { onBack: () => void }) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white shadow-sm flex items-center justify-between px-6 py-4">
      <button 
        onClick={onBack}
        className="flex items-center justify-center w-8 h-8 -ml-2"
      >
        <div className="w-5 h-5">
          <img src={emergFrame3} alt="Back" className="w-full h-full object-contain" />
        </div>
      </button>
      <h1 className="text-lg text-gray-900">{t("myItinerary")}</h1>
      <div className="w-8 h-8"></div>
    </div>
  );
}

function ItineraryTabs({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const { t } = useLanguage();
  
  const tabs = [
    { id: "today", label: t("today") },
    { id: "upcoming", label: t("upcoming") },
    { id: "reservations", label: t("reservations") }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-4 px-6 text-center transition-colors ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="text-sm font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Directions Button Component
function DirectionsButton({ location }: { location: string }) {
  const { t } = useLanguage();
  const { getDirections, isInitialized } = useLocfyContext();

  const handleGetDirections = async () => {
    if (!isInitialized) {
      alert("Location services not available");
      return;
    }

    try {
      // Mock coordinates for the location - in real app, you'd geocode the address
      const mockDestination = {
        latitude: 40.7128 + Math.random() * 0.01,
        longitude: -74.0060 + Math.random() * 0.01
      };

      const route = await getDirections(mockDestination);
      
      if (route) {
        alert(`Directions to ${location}:\nDistance: ${route.distance || '1.2 km'}\nDuration: ${route.duration || '15 mins walking'}`);
      } else {
        alert(`Opening directions to: ${location}`);
      }
    } catch (error) {
      console.error('Error getting directions:', error);
      alert(`Opening external map for: ${location}`);
    }
  };

  return (
    <button 
      onClick={handleGetDirections}
      className="text-blue-600 text-sm hover:text-blue-700"
    >
      {t("getDirections")}
    </button>
  );
}

function TodayActivities() {
  const { t } = useLanguage();
  
  const activities = [
    {
      id: "1",
      time: "09:00 AM",
      title: "City Walking Tour",
      location: "Tourist Information Center",
      type: "tour",
      status: "confirmed",
      icon: dashFrame6,
      bgColor: "bg-blue-100"
    },
    {
      id: "2", 
      time: "01:00 PM",
      title: "Lunch at Local Restaurant",
      location: "Traditional Cuisine House",
      type: "restaurant",
      status: "confirmed",
      icon: dashFrame7,
      bgColor: "bg-green-100"
    },
    {
      id: "3",
      time: "03:30 PM",
      title: "Museum Visit",
      location: "National Heritage Museum",
      type: "activity",
      status: "confirmed", 
      icon: dashFrame8,
      bgColor: "bg-purple-100"
    },
    {
      id: "4",
      time: "07:00 PM",
      title: "Cultural Show",
      location: "Cultural Center Auditorium",
      type: "entertainment",
      status: "pending",
      icon: dashFrame9,
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-gray-900">{t("today")}'s {t("activities")}</h3>
        <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          4 {t("activities")}
        </Badge>
      </div>
      
      <div className="space-y-3">
        {activities.map((activity) => (
          <Card key={activity.id} className="p-4 border border-gray-100 shadow-sm rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-center min-w-[60px]">
                <div className="text-sm font-medium text-blue-600">{activity.time}</div>
                <div className="w-2 h-8 bg-blue-200 rounded-full mx-auto mt-2"></div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-base font-medium text-gray-900">{activity.title}</h4>
                    <p className="text-sm text-gray-600">{activity.location}</p>
                  </div>
                  <div className={`w-10 h-10 ${activity.bgColor} rounded-full flex items-center justify-center`}>
                    <div className="w-5 h-5">
                      <img src={activity.icon} alt={activity.type} className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge className={`text-xs px-2 py-1 rounded-full ${
                    activity.status === 'confirmed' 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {t(activity.status)}
                  </Badge>
                  
                  <div className="flex gap-2">
                    <button className="text-blue-600 text-sm hover:text-blue-700">
                      {t("viewMap")}
                    </button>
                    <span className="text-gray-300">•</span>
                    <DirectionsButton location={activity.location} />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function UpcomingEvents() {
  const { t } = useLanguage();
  
  const events = [
    {
      id: "1",
      date: "Tomorrow",
      time: "10:00 AM",
      title: "Airport Transfer",
      location: "Hotel → International Airport",
      type: "transport",
      status: "confirmed",
      icon: dashFrame10,
      bgColor: "bg-blue-100"
    },
    {
      id: "2",
      date: "Dec 12",
      time: "02:15 PM", 
      title: "Return Flight",
      location: "International Airport",
      type: "flight",
      status: "confirmed",
      icon: dashFrame11,
      bgColor: "bg-green-100"
    }
  ];

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-gray-900">{t("upcoming")} Events</h3>
        <Badge className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
          2 {t("upcoming")}
        </Badge>
      </div>
      
      <div className="space-y-3">
        {events.map((event) => (
          <Card key={event.id} className="p-4 border border-gray-100 shadow-sm rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-center min-w-[60px]">
                <div className="text-xs text-gray-500">{event.date}</div>
                <div className="text-sm font-medium text-gray-900">{event.time}</div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-base font-medium text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </div>
                  <div className={`w-10 h-10 ${event.bgColor} rounded-full flex items-center justify-center`}>
                    <div className="w-5 h-5">
                      <img src={event.icon} alt={event.type} className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
                
                <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  {t(event.status)}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ReservationsTab() {
  const { t } = useLanguage();
  
  const reservations = [
    {
      id: "1",
      type: "hotel",
      title: "Grand Plaza Hotel",
      details: "Deluxe Room • 3 Nights",
      checkIn: "Dec 9",
      checkOut: "Dec 12", 
      status: "confirmed",
      icon: dashFrame11,
      bgColor: "bg-blue-100",
      confirmationCode: "HPL2024789"
    },
    {
      id: "2",
      type: "restaurant", 
      title: "Traditional Cuisine House",
      details: "Table for 2 • Dinner",
      checkIn: "Dec 10",
      checkOut: "8:00 PM",
      status: "confirmed",
      icon: dashFrame7,
      bgColor: "bg-green-100",
      confirmationCode: "TCH458321"
    },
    {
      id: "3",
      type: "tour",
      title: "Heritage Walking Tour", 
      details: "Group Tour • 4 Hours",
      checkIn: "Dec 11",
      checkOut: "2:00 PM",
      status: "pending",
      icon: dashFrame6,
      bgColor: "bg-orange-100",
      confirmationCode: "HWT789456"
    }
  ];

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-gray-900">{t("reservations")}</h3>
        <Badge className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
          3 {t("reservations")}
        </Badge>
      </div>
      
      <div className="space-y-3">
        {reservations.map((reservation) => (
          <Card key={reservation.id} className="p-4 border border-gray-100 shadow-sm rounded-2xl">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 ${reservation.bgColor} rounded-full flex items-center justify-center`}>
                    <div className="w-5 h-5">
                      <img src={reservation.icon} alt={reservation.type} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">{reservation.title}</h4>
                    <p className="text-sm text-gray-600">{reservation.details}</p>
                    <p className="text-xs text-gray-500 mt-1">ID: {reservation.confirmationCode}</p>
                  </div>
                </div>
                <Badge className={`text-xs px-2 py-1 rounded-full ${
                  reservation.status === 'confirmed' 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {t(reservation.status)}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex gap-4">
                  <div>
                    <span className="text-gray-500">{t("checkIn")}: </span>
                    <span className="text-gray-900">{reservation.checkIn}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">{t("checkOut")}: </span>
                    <span className="text-gray-900">{reservation.checkOut}</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  {t("callVenue")}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function EmergencyContactsSection() {
  const { t } = useLanguage();
  
  const contacts = [
    {
      id: "1",
      title: "Tourist Police",
      number: "+1 (555) 911-1234",
      available: "24/7",
      icon: emergFrame5,
      bgColor: "bg-red-100"
    },
    {
      id: "2", 
      title: "Tourist Helpline",
      number: "+1 (555) 800-HELP",
      available: "24/7",
      icon: emergFrame7,
      bgColor: "bg-blue-100"
    },
    {
      id: "3",
      title: "Medical Emergency",
      number: "+1 (555) 911-MED",
      available: "24/7", 
      icon: emergFrame4,
      bgColor: "bg-green-100"
    }
  ];

  return (
    <div className="p-6 space-y-4 bg-red-50 mx-6 rounded-2xl">
      <h3 className="text-lg text-gray-900">{t("emergencyContacts")}</h3>
      
      <div className="space-y-3">
        {contacts.map((contact) => (
          <Card key={contact.id} className="p-3 border border-red-200 shadow-sm rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${contact.bgColor} rounded-full flex items-center justify-center`}>
                  <div className="w-4 h-4">
                    <img src={contact.icon} alt={contact.title} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{contact.title}</div>
                  <div className="text-xs text-gray-500">{contact.available}</div>
                </div>
              </div>
              <Button 
                className="h-8 px-3 bg-red-500 hover:bg-red-600 text-white text-xs rounded-lg"
                onClick={() => alert(`Calling ${contact.number}...`)}
              >
                Call
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ItineraryContent({ activeTab }: { activeTab: string }) {
  const renderContent = () => {
    switch (activeTab) {
      case "today":
        return <TodayActivities />;
      case "upcoming":
        return <UpcomingEvents />;
      case "reservations":
        return <ReservationsTab />;
      default:
        return <TodayActivities />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {renderContent()}
      <EmergencyContactsSection />
      <div className="h-8"></div> {/* Bottom spacing */}
    </div>
  );
}

function ViewItineraryScreen({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-sm mx-auto">
      <ItineraryHeader onBack={onBack} />
      <ItineraryTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <ItineraryContent activeTab={activeTab} />
    </div>
  );
}



function SecurityFooter() {
  return (
    <div className="text-center space-y-4 text-xs text-muted-foreground max-w-sm mx-auto">
      <div className="flex items-center justify-center gap-2">
        <div className="w-3 h-3">
          <img src={imgFrame3} alt="" className="w-full h-full object-contain opacity-40" />
        </div>
        <span>Secured by 256-bit SSL encryption</span>
      </div>
      
      <div className="space-y-1">
        <p>This system is for authorized use only.</p>
        <p>All sessions are monitored and logged.</p>
      </div>
      
      <div className="flex justify-center gap-4 pt-2">
        <button className="hover:text-foreground transition-colors">Privacy Policy</button>
        <span>•</span>
        <button className="hover:text-foreground transition-colors">Terms of Service</button>
      </div>
    </div>
  );
}

function AppContent() {
  const [currentView, setCurrentView] = useState<ViewType>("login");
  const { user, login, logout } = useAuth();

  const handleForgotId = () => setCurrentView("forgot-id-step1");
  const handleNextStep = () => setCurrentView("forgot-id-step2");
  const handleBackToLogin = () => setCurrentView("login");
  
  const handleLogin = (digitalId: string, password: string) => {
    const success = login(digitalId, password);
    if (success) {
      setCurrentView("dashboard");
    }
    return success;
  };
  
  const handleLogout = () => {
    logout();
    setCurrentView("login");
  };

  const handleSOSActivate = () => {
    setCurrentView("emergency");
  };

  const handleViewSafetyDetails = () => {
    setCurrentView("safety-details");
  };

  const handleViewProfile = () => {
    setCurrentView("profile");
  };

  const handleReportIssue = () => {
    setCurrentView("report-issue");
  };

  const handleViewItinerary = () => {
    setCurrentView("view-itinerary");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
  };

  // If user is authenticated, show appropriate authenticated view
  if (user && currentView === "dashboard") {
    return <Dashboard user={user} onLogout={handleLogout} onSOSActivate={handleSOSActivate} onViewSafetyDetails={handleViewSafetyDetails} onViewProfile={handleViewProfile} onReportIssue={handleReportIssue} onViewItinerary={handleViewItinerary} />;
  }

  if (user && currentView === "emergency") {
    return <EmergencyScreen onBack={handleBackToDashboard} />;
  }

  if (user && currentView === "safety-details") {
    return <SafetyDetailsScreen onBack={handleBackToDashboard} />;
  }

  if (user && currentView === "profile") {
    return <ProfileScreen onBack={handleBackToDashboard} onLogout={handleLogout} />;
  }

  if (user && currentView === "report-issue") {
    return <ReportIssueScreen onBack={handleBackToDashboard} />;
  }

  if (user && currentView === "view-itinerary") {
    return <ViewItineraryScreen onBack={handleBackToDashboard} />;
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "login":
        return <LoginForm onForgotId={handleForgotId} onLogin={handleLogin} />;
      case "forgot-id-step1":
        return <ForgotIdStep1 onNext={handleNextStep} onBack={handleBackToLogin} />;
      case "forgot-id-step2":
        return <ForgotIdStep2 onBack={() => setCurrentView("forgot-id-step1")} />;
      default:
        return <LoginForm onForgotId={handleForgotId} onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen relative">
      <SecurityBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center px-4 py-8">
          <div className="space-y-12">
            <GovernmentHeader />
            {renderCurrentView()}
          </div>
        </div>
        
        <div className="px-4 pb-8">
          <SecurityFooter />
        </div>
      </div>
    </div>
  );
}

// Notifications Provider Component
const NotificationsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <LocfyProvider>
        <NotificationsProvider>
          <AppContent />
        </NotificationsProvider>
      </LocfyProvider>
    </LanguageProvider>
  );
}