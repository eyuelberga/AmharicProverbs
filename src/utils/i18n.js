import { createI18n } from "vue-i18n";

const messages = {
  en: {
    search: "Search",
    random: "Random Proverbs",
    "search-placeholder": "Search for proverb",
    proverbs: "Proverbs",
    amharic: "Amharic",
    error: "Something went wrong!",
    loading: "Loading...",
    "not-found": "No proverbs found!",
    "load-more": "Load More",
  },
  አማ: {
    search: "ፈልግ",
    "search-placeholder": "ምሳሌዎችን ፈልግ",
    random: "በዘፈቀደ ምሳሌዎች",
    proverbs: "ምሳሌዎች",
    amharic: "የአማርኛ",
    error: "የሆነ ስህተት ተፈጠረ!",
    loading: "በመጫን ላይ...",
    "not-found": "ምንም ምሳሌ አልተገኘም!",
    "load-more": "ተጨማሪ  ጫን",
  },
};

const i18n = createI18n({
  locale: "አማ", // set locale
  fallbackLocale: "en", // set fallback locale
  messages,
});

export default i18n;
