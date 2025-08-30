// 🌐 Translations object
const translations = {
  en: {
    address: "Kandivali East, Mumbai, Maharashtra (400101)",
    phone: "982-055-6711",
    email: "freindsofeducation464@gmail.com",
    brand: "Friends of Education",
    home: "Home",
    about: "About",
    programs: "Programs",
    events: "Events",
    blog: "Blog / Updates",
    contact: "Contact",
    login: "Login",
    register: "Register",
    donate: "Donate Now",
    language: "Language"
  },

  hi: {
    address: "कांदिवली ईस्ट, मुंबई, महाराष्ट्र (400101)",
    phone: "९८२-०५५-६७११",
    email: "freindsofeducation464@gmail.com",
    brand: "फ्रेंड्स ऑफ़ एजुकेशन",
    home: "होम",
    about: "हमारे बारे में",
    programs: "कार्यक्रम",
    events: "इवेंट्स",
    blog: "ब्लॉग / अपडेट्स",
    contact: "संपर्क करें",
    login: "लॉगिन",
    register: "रजिस्टर",
    donate: "दान करें",
    language: "भाषा"
  },

  mr: {
    address: "कांदिवली ईस्ट, मुंबई, महाराष्ट्र (400101)",
    phone: "९८२-०५५-६७११",
    email: "freindsofeducation464@gmail.com",
    brand: "फ्रेंड्स ऑफ एज्युकेशन",
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    programs: "कार्यक्रम",
    events: "कार्यक्रम / इव्हेंट्स",
    blog: "ब्लॉग / अपडेट्स",
    contact: "संपर्क",
    login: "लॉगिन",
    register: "नोंदणी",
    donate: "दान करा",
    language: "भाषा"
  },

  pa: {
    address: "ਕਾਂਦਿਵਲੀ ਪੂਰਬ, ਮੁੰਬਈ, ਮਹਾਰਾਸ਼ਟਰ (400101)",
    phone: "982-055-6711",
    email: "freindsofeducation464@gmail.com",
    brand: "ਫ੍ਰੈਂਡਜ਼ ਆਫ਼ ਐਜੂਕੇਸ਼ਨ",
    home: "ਹੋਮ",
    about: "ਸਾਡੇ ਬਾਰੇ",
    programs: "ਪ੍ਰੋਗਰਾਮ",
    events: "ਇਵੈਂਟਸ",
    blog: "ਬਲਾਗ / ਅੱਪਡੇਟਸ",
    contact: "ਸੰਪਰਕ",
    login: "ਲੌਗਿਨ",
    register: "ਰਜਿਸਟਰ",
    donate: "ਦਾਨ ਕਰੋ",
    language: "ਭਾਸ਼ਾ"
  }
};

// 🌐 Function to switch language
function setLanguage(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // Save selected language in localStorage
  localStorage.setItem("language", lang);
}

// 🌐 Auto-load saved language on page load
window.onload = () => {
  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);
};
