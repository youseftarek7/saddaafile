// ==========================================
// مطعم السعادة - script.js (نسخة محسّنة)
// ==========================================

// ==========================================
// 1. CONFIG
// ==========================================
const WA_NUMBER = "201027450811";
const API_KEY = "AIzaSyCS4p8pJlZrBGTLOB-5zu-EVX0MSlLmsEk";

// ==========================================
// 2. DATA
// ==========================================

const fallbackMainSections = [
  {
    id: 'saada_crepes',
    name: 'ركن كريبات السعادة',
    image: 'section-assets/section-crepes-cutout.png',
    badge: 'الأكثر تنوعًا',
    desc: 'كريبات مشبعة بحشوات فراخ، لحوم وجبن بطابع سريع وشهي.'
  },
  {
    id: 'saada_sandwiches',
    name: 'ركن الساندوتشات',
    image: 'section-assets/section-sandwiches-cutout.png',
    badge: 'وجبات سريعة',
    desc: 'ساندوتشات غربية وبرجر واختيارات يومية سهلة الطلب.'
  },
  {
    id: 'special_meals',
    name: 'ركن التشيكن والبيف',
    image: 'section-assets/section-specials-cutout.png',
    badge: 'الأكثر طلبًا',
    desc: 'تشيكن وبيف ووجبات كايزر جاهزة للشبع والتوصيل.'
  },
  {
    id: 'sides_extras',
    name: 'مقبلات وإضافات',
    image: 'section-assets/section-extras-cutout.png',
    badge: 'تكملة الطلب',
    desc: 'صوصات ومقبلات وإضافات تكمل الوجبة من غير لف كثير.'
  }
];

const fallbackFeaturedProducts = [
  {
    id: 44,
    badge: 'الأكثر طلبًا اليوم',
    note: 'ميكس برجر وفرايد تشيكن مع بطاطس في وجبة واحدة مشبعة وسريعة.',
    trust: 'اختيار متكرر'
  },
  {
    id: 41,
    badge: 'وجبة مشبعة',
    note: 'تشيكن رانش دبل مناسب للجوع الكبير مع بطاطس وطعم واضح.',
    trust: 'يشبع من أول طلب'
  },
  {
    id: 37,
    badge: 'ثقة العملاء',
    note: 'تشيز برجر لحمة بطعم ثابت وصوص غني لعشاق البرجر الكلاسيك.',
    trust: 'برجر لحمة'
  },
  {
    id: 27,
    badge: 'طلب سريع',
    note: 'فاهيتا فراخ خفيفة وسهلة في التوصيل ومناسبة للطلبات السريعة.',
    trust: 'ساندوتشات الغربي'
  }
];

const fallbackCategories = [
  { id: 'meat_crepe', name: 'كريب اللحوم', icon: 'fas fa-drumstick-bite', sectionId: 'saada_crepes' },
  { id: 'mix_happiness', name: 'كريب ميكس الانبساط', icon: 'fas fa-laugh-squint', sectionId: 'saada_crepes' },
  { id: 'fresh_chicken', name: 'كريب الفراخ الفريش', icon: 'fas fa-grin-tongue', sectionId: 'saada_crepes' },
  { id: 'normal_chicken', name: 'كريب الفراخ المجمدة', icon: 'fas fa-smile-wink', sectionId: 'saada_crepes' },
  { id: 'potato_cheese', name: 'كريب البطاطس والجبن', icon: 'fas fa-cheese', sectionId: 'saada_crepes' },
  { id: 'sweet_crepe', name: 'كريب الحلو', icon: 'fas fa-ice-cream', sectionId: 'saada_crepes' },
  { id: 'western_sandwich', name: 'ساندوتشات الغربي', icon: 'fas fa-bread-slice', sectionId: 'saada_sandwiches' },
  { id: 'burger', name: 'ساندوتشات البرجر', icon: 'fas fa-hamburger', sectionId: 'saada_sandwiches' },
  { id: 'potato_pane', name: 'بانيه وبطاطس', icon: 'fas fa-cookie-bite', sectionId: 'saada_sandwiches' },
  { id: 'special_kaiser', name: 'وجبات الكايزر', icon: 'fas fa-utensils', sectionId: 'special_meals' },
  { id: 'special_beef', name: 'وجبات البيف', icon: 'fas fa-fire-alt', sectionId: 'special_meals' },
  { id: 'extras', name: 'الإضافات والصوصات', icon: 'fas fa-plus-square', sectionId: 'sides_extras' },
];

const commonExtras = [
  { name: 'موتزريلا زيادة', price: 10 },
  { name: 'صوص شيدر', price: 15 },
  { name: 'صوص تكساس', price: 15 }
];

const crepeOnlyExtras = [
  { name: 'كونو جبنة', price: 10 }
];

const fallbackMenuData = [
  // كريب اللحوم
  { id: 1, category: 'meat_crepe', name: 'كريب برجر لحمة', price: 65, desc: 'برجر لحم صافي مشوي', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 2, category: 'meat_crepe', name: 'كريب ميكس لحوم', price: 110, desc: 'تشكيلة لحوم مميزة', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 3, category: 'meat_crepe', name: 'كريب ميكس لحوم السعادة', price: 130, desc: 'ميكس السعادة الخاص', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 4, category: 'meat_crepe', name: 'كريب هوت دوج ميكسكانو', price: 65, desc: 'هوت دوج بالخلطة المكسيكية', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  // كريب ميكس الانبساط
  { id: 5, category: 'mix_happiness', name: 'كريب ميكس فراخ فريش', price: 125, desc: 'صدور دجاج طازجة', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 6, category: 'mix_happiness', name: 'كريب الفرقعة', price: 125, desc: 'طعم يفرقع في بؤك', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 7, category: 'mix_happiness', name: 'كريب سوبر كرانشي', price: 105, desc: 'قرمشة زيادة', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 8, category: 'mix_happiness', name: 'كريب السعادة', price: 130, desc: 'سر السعادة عندنا', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 9, category: 'mix_happiness', name: 'كريب قنبلة السعادة', price: 140, desc: 'وجبة دسمة ومشبعة', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  // كريب الفراخ الفريش
  { id: 10, category: 'fresh_chicken', name: 'كريب شاورما فراخ جريل', price: 105, desc: 'شاورما سوري على الجريل', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 11, category: 'fresh_chicken', name: 'كريب فاهيتا فراخ', price: 105, desc: 'فاهيتا بالخضروات', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 12, category: 'fresh_chicken', name: 'كريب شيش جريل', price: 105, desc: 'شيش طاووق متبل', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 13, category: 'fresh_chicken', name: 'كريب كرسبي مقرمش', price: 100, desc: 'دجاج مقرمش ذهبي', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 14, category: 'fresh_chicken', name: 'كريب ستربس رانش', price: 100, desc: 'ستربس مع صوص الرانش', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 15, category: 'fresh_chicken', name: 'كريب زنجر حار', price: 100, desc: 'للمحبين السبايسي', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 16, category: 'fresh_chicken', name: 'كريب فراخ برجر دبل', price: 105, desc: 'قطعتين برجر دجاج', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  // كريب الفراخ المجمدة
  { id: 17, category: 'normal_chicken', name: 'كريب بانيه', price: 65, desc: 'بانيه مقلي', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 18, category: 'normal_chicken', name: 'كريب كرسبي', price: 65, desc: 'كرسبي اقتصادي', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 19, category: 'normal_chicken', name: 'كريب بانيه بطاطس', price: 75, desc: 'بانيه مع بطاطس', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 20, category: 'normal_chicken', name: 'كريب ميكس فراخ', price: 110, desc: 'تشكيلة دجاج', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  // كريب البطاطس والجبن
  { id: 21, category: 'potato_cheese', name: 'كريب البطاطس', price: 60, desc: 'بطاطس بوم فريت', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 22, category: 'potato_cheese', name: 'كريب بطاطس ميكس جبن', price: 75, desc: 'بطاطس غرقانة جبنة', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 23, category: 'potato_cheese', name: 'كريب موتزريلا فقط', price: 40, desc: 'لعشاق الموتزريلا', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 24, category: 'potato_cheese', name: 'كريب ميكس جبن', price: 60, desc: 'رومي وشيدر وموتزريلا', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  // كريب الحلو
  { id: 25, category: 'sweet_crepe', name: 'كريب شيكولاتة', price: 45, desc: 'نوتيلا غنية', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  { id: 26, category: 'sweet_crepe', name: 'كريب شيكولاتة بالموز', price: 55, desc: 'نوتيلا مع قطع الموز', image: 'WhatsApp Image 2026-02-07 at 1.51.00 PM.jpeg' },
  // ساندوتشات الغربي
  { id: 27, category: 'western_sandwich', name: 'ساندوتش فاهيتا فراخ', desc: 'وسط / كبير', image: 'WhatsApp Image 2026-02-07 at 3.18.38 PM.jpeg', sizes: [{ name: 'وسط (M)', price: 75 }, { name: 'كبير (L)', price: 85 }] },
  { id: 28, category: 'western_sandwich', name: 'ساندوتش شاورما جريل', desc: 'وسط / كبير', image: 'WhatsApp Image 2026-02-07 at 3.13.20 PM.jpeg', sizes: [{ name: 'وسط (M)', price: 70 }, { name: 'كبير (L)', price: 80 }] },
  { id: 29, category: 'western_sandwich', name: 'ساندوتش شيش جريل', desc: 'وسط / كبير', image: 'WhatsApp Image 2026-02-07 at 3.15.30 PM.jpeg', sizes: [{ name: 'وسط (M)', price: 70 }, { name: 'كبير (L)', price: 80 }] },
  { id: 30, category: 'western_sandwich', name: 'ساندوتش الزنجر الحار', desc: 'وسط / كبير', image: 'WhatsApp Image 2026-02-07 at 3.01.40 PM.jpeg', sizes: [{ name: 'وسط (M)', price: 70 }, { name: 'كبير (L)', price: 80 }] },
  { id: 31, category: 'western_sandwich', name: 'ساندوتش استربس', desc: 'وسط / كبير', image: 'WhatsApp Image 2026-02-07 at 2.56.39 PM.jpeg', sizes: [{ name: 'وسط (M)', price: 70 }, { name: 'كبير (L)', price: 80 }] },
  { id: 32, category: 'western_sandwich', name: 'ساندوتش هوت دوج', price: 60, desc: 'حجم واحد', image: 'WhatsApp Image 2026-02-07 at 3.24.20 PM.jpeg' },
  // برجر
  { id: 33, category: 'burger', name: 'برجر دجاج', price: 70, desc: 'ساندوتش كلاسيك', image: 'WhatsApp Image 2026-02-07 at 4.02.03 PM.jpeg' },
  { id: 34, category: 'burger', name: 'تشيز برجر دجاج', price: 75, desc: 'مع شريحة جبنة', image: 'WhatsApp Image 2026-02-07 at 4.02.04 PM.jpeg' },
  { id: 35, category: 'burger', name: 'تشيز برجر دجاج دبل', price: 100, desc: 'قطعتين دجاج وجبنة', image: 'WhatsApp Image 2026-02-07 at 4.02.04 PM (1).jpeg' },
  { id: 36, category: 'burger', name: 'برجر لحمة', price: 65, desc: 'لحم بلدي', image: 'WhatsApp Image 2026-02-07 at 4.11.43 PM (2).jpeg' },
  { id: 37, category: 'burger', name: 'تشيز برجر لحمة', price: 70, desc: 'لحم مع جبنة', image: 'WhatsApp Image 2026-02-07 at 4.11.43 PM (1).jpeg' },
  { id: 38, category: 'burger', name: 'تشيز برجر لحمة دبل', price: 95, desc: 'وجبة المشبعين', image: 'WhatsApp Image 2026-02-07 at 4.11.43 PM.jpeg' },
  // وجبات الكايزر
  { id: 39, category: 'special_kaiser', name: 'تشيكن رانش', price: 120, desc: 'يقدم مع بطاطس', image: 'WhatsApp Image 2026-02-07 at 2.29.00 PM.jpeg' },
  { id: 40, category: 'special_kaiser', name: 'تشيكن راوند', price: 115, desc: 'يقدم مع بطاطس', image: 'WhatsApp Image 2026-02-07 at 2.21.44 PM.jpeg' },
  { id: 41, category: 'special_kaiser', name: 'تشيكن رانش دبل', price: 155, desc: 'يقدم مع بطاطس', image: 'WhatsApp Image 2026-02-07 at 2.30.56 PM.jpeg' },
  { id: 42, category: 'special_kaiser', name: 'تشيكن راوند دبل', price: 150, desc: 'يقدم مع بطاطس', image: 'WhatsApp Image 2026-02-07 at 2.24.05 PM.jpeg' },
  { id: 43, category: 'special_kaiser', name: 'تشيكن هالبينو دبل', price: 150, desc: 'حار جداً - مع بطاطس', image: 'WhatsApp Image 2026-02-07 at 2.36.11 PM.jpeg' },
  // وجبات البيف
  { id: 44, category: 'special_beef', name: 'تشيكن اند بيف', price: 170, desc: 'ميكس الفراخ واللحمة - مع بطاطس', image: 'تشيكن اند بيف.jpeg' },
  { id: 45, category: 'special_beef', name: 'بيف برجر', price: 115, desc: 'وجبة برجر - مع بطاطس', image: 'WhatsApp Image 2026-02-07 at 2.46.37 PM.jpeg' },
  { id: 46, category: 'special_beef', name: 'بيف برجر دبل', price: 165, desc: 'وجبة دبل - مع بطاطس', image: 'WhatsApp Image 2026-02-07 at 2.50.14 PM.jpeg' },
  // بطاطس وبانيه
  { id: 47, category: 'potato_pane', name: 'ساندوتش بانيه', desc: 'وسط / كبير', image: 'WhatsApp Image 2026-02-07 at 2.04.33 PM.jpeg', sizes: [{ name: 'وسط (M)', price: 40 }, { name: 'كبير (L)', price: 45 }] },
  { id: 48, category: 'potato_pane', name: 'ساندوتش بطاطس', desc: 'وسط / كبير', image: 'WhatsApp Image 2026-02-07 at 2.17.05 PM.jpeg', sizes: [{ name: 'وسط (M)', price: 25 }, { name: 'كبير (L)', price: 30 }] },
  { id: 49, category: 'potato_pane', name: 'ساندوتش بطاطس موتزريلا', desc: 'وسط / كبير', image: 'WhatsApp Image 2026-02-07 at 2.17.05 PM.jpeg', sizes: [{ name: 'وسط (M)', price: 35 }, { name: 'كبير (L)', price: 40 }] },
  { id: 50, category: 'potato_pane', name: 'بطاطس باكت', desc: 'وسط / كبير', image: 'WhatsApp Image 2026-02-07 at 2.09.08 PM.jpeg', sizes: [{ name: 'وسط (M)', price: 25 }, { name: 'كبير (L)', price: 35 }] },
  // إضافات
  { id: 52, category: 'extras', name: 'كول سلو', sizes: [{ name: 'M', price: 15 }, { name: 'L', price: 25 }], desc: 'سلطة', image: 'WhatsApp Image 2026-02-07 at 3.38.43 PM.jpeg' },
  { id: 53, category: 'extras', name: 'صوص تكساس', price: 15, desc: 'إضافة', image: 'WhatsApp Image 2026-02-07 at 3.47.39 PM.jpeg' },
  { id: 54, category: 'extras', name: 'صوص شيدر', price: 15, desc: 'إضافة', image: 'WhatsApp Image 2026-02-07 at 3.42.26 PM.jpeg' },
  { id: 55, category: 'extras', name: 'موتزريلا', price: 10, desc: 'إضافة', image: 'WhatsApp Image 2026-02-10 at 3.39.46 AM.jpeg' },
  { id: 56, category: 'extras', name: 'إضافة كونو جبنة', price: 15, desc: '', image: 'WhatsApp Image 2026-02-10 at 3.39.46 AM (1).jpeg' },
  { id: 57, category: 'extras', name: 'بطاطس باكت', desc: 'وسط / كبير', image: 'WhatsApp Image 2026-02-07 at 2.09.08 PM.jpeg', sizes: [{ name: 'وسط (M)', price: 20 }, { name: 'كبير (L)', price: 30 }] },
];

let mainSections = [...fallbackMainSections];
let featuredProducts = [...fallbackFeaturedProducts];
let categories = [...fallbackCategories];
let menuData = [...fallbackMenuData];

const DEFAULT_SECTION_IMAGE = "";
const DEFAULT_PRODUCT_IMAGE = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22><rect width=%22400%22 height=%22400%22 fill=%22%23111111%22/><text x=%2250%25%22 y=%2250%25%22 fill=%22%23666666%22 font-size=%2230%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>Food</text></svg>";
const REQUIRED_SECTIONS = [
  {
    id: 'saada_crepes',
    name: 'ركن كريبات السعادة',
    icon: 'fas fa-utensils',
    badge: 'الأكثر تنوعًا',
    desc: 'كريبات مشبعة بحشوات فراخ، لحوم وجبن بطابع سريع وشهي.'
  },
  {
    id: 'saada_sandwiches',
    name: 'ركن الساندوتشات',
    icon: 'fas fa-burger',
    badge: 'وجبات سريعة',
    desc: 'ساندوتشات غربية وبرجر واختيارات يومية سهلة الطلب.'
  },
  {
    id: 'special_meals',
    name: 'ركن التشيكن والبيف',
    icon: 'fas fa-drumstick-bite',
    badge: 'الأكثر طلبًا',
    desc: 'تشيكن وبيف ووجبات كايزر جاهزة للشبع والتوصيل.'
  },
  {
    id: 'sides_extras',
    name: 'مقبلات وإضافات',
    icon: 'fas fa-cheese',
    badge: 'تكملة الطلب',
    desc: 'صوصات ومقبلات وإضافات تكمل الوجبة من غير لف كتير.'
  }
];

const MENU_CACHE_KEY = 'saada_menu_cache_v2';
const BUSINESS_HOURS_CACHE_KEY = 'saada_business_hours_cache_v1';
const FIREBASE_FETCH_TIMEOUT_MS = 4500;
const INITIAL_LOADER_HIDE_DELAY_MS = 120;

let categoriesUnsubscribe = null;
let productsUnsubscribe = null;
let liveCategoriesDocs = null;
let liveProductsDocs = null;
let appliedCoupon = null;
let firebaseHydrationStarted = false;

function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

function readCachedJson(key) {
  try {
    const raw = window.localStorage?.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function writeCachedJson(key, value) {
  try {
    window.localStorage?.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

function withTimeout(promise, timeoutMs = FIREBASE_FETCH_TIMEOUT_MS) {
  let timeoutId = null;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = window.setTimeout(() => reject(new Error('timeout')), timeoutMs);
  });

  return Promise.race([promise, timeoutPromise]).finally(() => {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }
  });
}

function getFallbackBusinessHours() {
  return {
    saturday: { closed: false, open: '12:00', close: '02:00' },
    sunday: { closed: false, open: '12:00', close: '02:00' },
    monday: { closed: false, open: '12:00', close: '02:00' },
    tuesday: { closed: false, open: '12:00', close: '02:00' },
    wednesday: { closed: false, open: '12:00', close: '02:00' },
    thursday: { closed: false, open: '12:00', close: '02:00' },
    friday: { closed: false, open: '13:00', close: '02:00' }
  };
}

function normalizeBusinessHoursMap(rawHours = {}) {
  const fallback = getFallbackBusinessHours();
  const normalized = {};

  Object.keys(fallback).forEach(key => {
    normalized[key] = normalizeBusinessHoursEntry(rawHours[key], fallback[key]);
  });

  return normalized;
}

function applyMenuSnapshot(snapshot) {
  const sections = Array.isArray(snapshot?.sections) ? snapshot.sections : [];
  const cachedCategories = Array.isArray(snapshot?.categories) ? snapshot.categories : [];
  const products = Array.isArray(snapshot?.products) ? snapshot.products : [];
  if (!sections.length || !cachedCategories.length || !products.length) {
    return false;
  }

  mainSections = sections;
  categories = cachedCategories;
  menuData = products;
  featuredProducts = Array.isArray(snapshot?.featuredProducts) && snapshot.featuredProducts.length
    ? snapshot.featuredProducts
    : buildFeaturedProducts(products);
  return true;
}

function persistMenuSnapshot() {
  return writeCachedJson(MENU_CACHE_KEY, {
    savedAt: Date.now(),
    sections: mainSections,
    categories,
    products: menuData,
    featuredProducts
  });
}

function restoreCachedMenuData() {
  return applyMenuSnapshot(readCachedJson(MENU_CACHE_KEY));
}

function getCachedBusinessHours() {
  const cached = readCachedJson(BUSINESS_HOURS_CACHE_KEY);
  if (!cached) {
    return null;
  }

  const payload = cached.hours && typeof cached.hours === 'object' ? cached.hours : cached;
  return normalizeBusinessHoursMap(payload);
}

function persistBusinessHours(hours) {
  if (!hours || typeof hours !== 'object') {
    return false;
  }

  return writeCachedJson(BUSINESS_HOURS_CACHE_KEY, {
    savedAt: Date.now(),
    hours
  });
}

function getInitialBusinessHours() {
  return getCachedBusinessHours() || getFallbackBusinessHours();
}

function normalizeCategoryDoc(doc) {
  return {
    id: doc.id,
    name: doc.name || "",
    icon: doc.icon || "fas fa-utensils",
    type: doc.type || "category",
    sectionId: doc.sectionId || "",
    image: doc.image || "",
    badge: doc.badge || "",
    desc: doc.desc || ""
  };
}

function normalizeProductDoc(doc) {
  const normalizedSizes = Array.isArray(doc.sizes)
    ? doc.sizes
        .map(size => ({
          name: size?.name || "",
          price: toNumber(size?.price)
        }))
        .filter(size => size.name && size.price > 0)
    : [];

  const normalizedExtras = Array.isArray(doc.extras)
    ? doc.extras
        .map(extra => ({
          name: extra?.name || "",
          price: toNumber(extra?.price)
        }))
        .filter(extra => extra.name)
    : [];

  const normalized = {
    id: doc.id,
    name: doc.name || "",
    category: doc.category || "",
    section: doc.section || "",
    desc: doc.desc || "",
    image: doc.image || DEFAULT_PRODUCT_IMAGE,
    extras: normalizedExtras,
    active: doc.active !== false
  };

  if (normalizedSizes.length > 0) {
    normalized.sizes = normalizedSizes;
  } else {
    normalized.price = toNumber(doc.price);
  }

  return normalized;
}

function buildMenuState(categoryDocs = [], productDocs = []) {
  const normalizedCategories = categoryDocs.map(normalizeCategoryDoc);
  const remoteSections = normalizedCategories.filter(item => item.type === "section");
  const remoteCategories = normalizedCategories.filter(item => item.type === "category");
  const remoteProducts = productDocs
    .map(normalizeProductDoc)
    .filter(item => item.active !== false && item.name && item.category);

  const sectionMap = new Map(
    fallbackMainSections.map(section => [
      section.id,
      {
        ...section,
        image: section.image || DEFAULT_SECTION_IMAGE,
        badge: section.badge || "متاح الآن",
        desc: section.desc || "اطلب من الأصناف المتاحة في هذا الركن."
      }
    ])
  );

  remoteSections.forEach(section => {
    if (!section.id || !section.name) return;

    const existing = sectionMap.get(section.id) || {};
    sectionMap.set(section.id, {
      ...existing,
      id: section.id,
      name: section.name || existing.name || "",
      image: section.image || existing.image || DEFAULT_SECTION_IMAGE,
      badge: section.badge || existing.badge || "متاح الآن",
      desc: section.desc || existing.desc || "اطلب من الأصناف المتاحة في هذا الركن."
    });
  });

  const categoryMap = new Map(fallbackCategories.map(category => [category.id, { ...category }]));

  remoteCategories.forEach(category => {
    if (!category.id || !category.sectionId || !sectionMap.has(category.sectionId)) return;

    const existing = categoryMap.get(category.id) || {};
    categoryMap.set(category.id, {
      ...existing,
      ...category,
      icon: category.icon || existing.icon || "fas fa-utensils"
    });
  });

  const productMap = new Map(fallbackMenuData.map(product => [String(product.id), { ...product }]));

  remoteProducts.forEach(product => {
    if (!categoryMap.has(product.category)) return;
    productMap.set(String(product.id), product);
  });

  const mergedCategories = Array.from(categoryMap.values()).filter(category => sectionMap.has(category.sectionId));
  const categoryIds = new Set(mergedCategories.map(category => category.id));
  const mergedProducts = Array.from(productMap.values()).filter(product => categoryIds.has(product.category));
  const categoryIdsWithProducts = new Set(mergedProducts.map(product => product.category));
  const filteredCategories = mergedCategories.filter(category => categoryIdsWithProducts.has(category.id));
  const sectionIdsWithProducts = new Set(filteredCategories.map(category => category.sectionId));
  const filteredSections = Array.from(sectionMap.values()).filter(section => sectionIdsWithProducts.has(section.id));

  return {
    sections: filteredSections,
    categories: filteredCategories,
    products: mergedProducts
  };
}

function buildFeaturedProducts(items) {
  const source = items.length ? items.slice(0, 4) : fallbackMenuData.slice(0, 4);
  const badges = [
    "الأكثر طلبًا",
    "اختيار مميز",
    "ترشيح المطعم",
    "جرّبه اليوم"
  ];

  return source.map((item, index) => ({
    id: item.id,
    badge: badges[index] || "منتج مميز",
    note: item.desc || "من العناصر المتاحة الآن في المنيو.",
    trust: item.sizes ? "متوفر بأكثر من حجم" : "جاهز للطلب"
  }));
}

function applyRemoteMenuData(categoryDocs, productDocs) {
  if (!categoryDocs.length && !productDocs.length) {
    return false;
  }

  const mergedState = buildMenuState(categoryDocs, productDocs);
  if (!mergedState.sections.length || !mergedState.products.length) {
    return false;
  }

  mainSections = mergedState.sections;
  categories = mergedState.categories;
  menuData = mergedState.products;
  featuredProducts = buildFeaturedProducts(mergedState.products);
  persistMenuSnapshot();
  return true;
}

function restoreFallbackMenuData() {
  const fallbackState = buildMenuState([], []);
  mainSections = fallbackState.sections;
  categories = fallbackState.categories;
  menuData = fallbackState.products;
  featuredProducts = buildFeaturedProducts(fallbackState.products);
}

function refreshMenuUI() {
  renderHomeOverview();
  renderMainSections();

  if (!currentSectionId) {
    return;
  }

  const sectionStillExists = mainSections.some(section => section.id === currentSectionId);
  if (!sectionStillExists) {
    backToSections();
    return;
  }

  const subCategories = categories.filter(category => category.sectionId === currentSectionId);
  currentSectionCategories = subCategories;
  renderCategoryTabs(subCategories);

  if (!subCategories.length) {
    currentCategoryId = null;
    renderProducts([]);
    return;
  }

  const categoryStillExists = subCategories.some(category => category.id === currentCategoryId);
  currentCategoryId = categoryStillExists ? currentCategoryId : subCategories[0].id;
  filterCategory(currentCategoryId);
}

async function loadMenuFromFirebaseOnce() {
  if (!window.firebaseReady || !window.db) {
    return false;
  }

  try {
    const [categoriesSnap, productsSnap] = await withTimeout(Promise.all([
      window.fsGetDocs(window.fsCollection(window.db, "categories")),
      window.fsGetDocs(window.fsCollection(window.db, "products"))
    ]));

    const loaded = applyRemoteMenuData(
      categoriesSnap.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() })),
      productsSnap.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }))
    );

    return loaded;
  } catch (error) {
    return false;
  }
}

async function seedFirebaseMenuIfEmpty() {
  return false;
}

async function ensureRequiredSectionsExist() {
  if (!window.firebaseReady || !window.db) {
    return false;
  }

  // fsSetDoc is not imported — skip silently; Firebase data seeding handled elsewhere
  if (!window.fsSetDoc) {
    return false;
  }

  try {
    for (const section of REQUIRED_SECTIONS) {
      await window.fsSetDoc(window.fsDoc(window.db, 'categories', section.id), {
        name: section.name,
        icon: section.icon,
        type: 'section',
        badge: section.badge || '',
        desc: section.desc || '',
        image: '',
        locked: true,
        updatedAt: window.fsServerTimestamp()
      }, { merge: true });
    }
    return true;
  } catch (error) {
    return false;
  }
}

function syncLiveMenuData() {
  if (!liveCategoriesDocs || !liveProductsDocs) {
    return;
  }

  const loaded = applyRemoteMenuData(liveCategoriesDocs, liveProductsDocs);
  if (!loaded && !restoreCachedMenuData()) {
    restoreFallbackMenuData();
  }
  refreshMenuUI();
}

function startMenuRealtimeSync() {
  if (!window.firebaseReady || !window.db || !window.fsOnSnapshot) {
    return;
  }

  if (categoriesUnsubscribe) categoriesUnsubscribe();
  if (productsUnsubscribe) productsUnsubscribe();

  categoriesUnsubscribe = window.fsOnSnapshot(window.fsCollection(window.db, "categories"), snap => {
    liveCategoriesDocs = snap.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
    syncLiveMenuData();
  });

  productsUnsubscribe = window.fsOnSnapshot(window.fsCollection(window.db, "products"), snap => {
    liveProductsDocs = snap.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
    syncLiveMenuData();
  });
}

// ==========================================
// 3. STATE
// ==========================================
let cart = [];
let currentSelectedItem = null;
let currentBasePrice = 0;
let currentProductExtras = [];
let currentSectionId = null;
let currentSectionCategories = [];
let currentCategoryId = null;
let currentSearchTerm = '';

// ==========================================
// 4. TOAST
// ==========================================
function showToast(msg, duration = 2500) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.innerHTML = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), duration);
}

// ==========================================
// 5. NAVIGATION
// ==========================================
function setMenuHeroHidden(hidden) {
  const hero = document.querySelector('.reference-hero-section');
  if (!hero) return;
  hero.classList.toggle('is-hidden-in-menu', Boolean(hidden));
}

function setSectionBrowsingMode(active) {
  document.body.classList.toggle('is-section-view', Boolean(active));
}

function setNavActive(id) {
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(id);
  if (btn) btn.classList.add('active');
}

function resetSectionSelection() {
  currentSectionId = null;
  currentSectionCategories = [];
  currentCategoryId = null;
  currentSearchTerm = '';

  const searchInput = document.getElementById('menu-search-input');
  const clearBtn = document.getElementById('menu-search-clear');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
}

function ensureHeroLandingState() {
  closeMobileMenu();
  setMenuHeroHidden(false);
  setSectionBrowsingMode(false);
  resetSectionSelection();
  showSectionsView();
  setNavActive('nav-home');
}

function forceViewportTop() {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.requestAnimationFrame(() => window.scrollTo(0, 0));
}

function hidePageLoader(delay = INITIAL_LOADER_HIDE_DELAY_MS) {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.setTimeout(() => loader.classList.add('hidden'), delay);
}

function showSectionsView() {
  const productsView = document.getElementById('products-view');
  const sectionsView = document.getElementById('sections-view');
  if (productsView) productsView.style.display = 'none';
  if (sectionsView) sectionsView.style.display = 'block';
}

function setMobileMenuState(open) {
  const shouldOpen = Boolean(open) && window.innerWidth < 768;
  const panel = document.getElementById('mobile-menu-panel');
  const toggle = document.getElementById('mobile-menu-toggle');
  const backdrop = document.getElementById('mobile-menu-backdrop');

  document.body.classList.toggle('is-mobile-menu-open', shouldOpen);

  if (panel) {
    panel.setAttribute('aria-hidden', String(!shouldOpen));
  }

  if (toggle) {
    toggle.setAttribute('aria-expanded', String(shouldOpen));
    toggle.setAttribute('aria-label', shouldOpen ? 'إغلاق القائمة' : 'فتح القائمة');
  }

  if (backdrop) {
    if (shouldOpen) {
      backdrop.hidden = false;
      backdrop.classList.add('is-visible');
    } else {
      backdrop.classList.remove('is-visible');
      window.setTimeout(() => {
        if (!document.body.classList.contains('is-mobile-menu-open')) {
          backdrop.hidden = true;
        }
      }, 220);
    }
  }
}

function openMobileMenu() {
  setMobileMenuState(true);
}

function closeMobileMenu() {
  setMobileMenuState(false);
}

function toggleMobileMenu() {
  setMobileMenuState(!document.body.classList.contains('is-mobile-menu-open'));
}

function syncMobileMenuWithViewport() {
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
}

function setupMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const panel = document.getElementById('mobile-menu-panel');

  if (!toggle || !panel) return;

  window.addEventListener('resize', syncMobileMenuWithViewport, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMobileMenu();
    }
  });

  syncMobileMenuWithViewport();
}

function navGoHome() {
  closeMobileMenu();
  setMenuHeroHidden(false);
  setSectionBrowsingMode(false);
  if (currentSectionId) {
    resetSectionSelection();
    showSectionsView();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  setNavActive('nav-home');
}

function navGoMenu() {
  closeMobileMenu();
  setMenuHeroHidden(true);
  scrollToMenu();
  setNavActive('nav-menu');
}

function navGoOffers() {
  closeMobileMenu();
  setMenuHeroHidden(true);
  setSectionBrowsingMode(false);
  if (currentSectionId) {
    resetSectionSelection();
    showSectionsView();
  }

  const target =
    document.getElementById('offers-section') ||
    document.getElementById('popular-items-grid') ||
    document.getElementById('sections-view');

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setNavActive('nav-offers');
}

function scrollToMenu() {
  closeMobileMenu();
  setMenuHeroHidden(true);
  setSectionBrowsingMode(false);
  resetSectionSelection();
  showSectionsView();
  document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
  setNavActive('nav-menu');
}

function jumpToSection(sectionId) {
  if (!mainSections.some(section => section.id === sectionId)) return;
  scrollToMenu();
  setTimeout(() => selectSection(sectionId), 260);
}

function getItemBasePrice(item) {
  if (!item) return 0;
  if (Array.isArray(item.sizes) && item.sizes.length > 0) {
    return Math.min(...item.sizes.map(size => Number(size.price) || 0).filter(Boolean));
  }
  return Number(item.price) || 0;
}

function formatPriceLabel(price) {
  return `${price} ج.م`;
}

function toArabicNumerals(value) {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(value ?? '').replace(/\d/g, digit => arabicDigits[Number(digit)] || digit);
}

function getCategoryName(categoryId) {
  return categories.find(category => category.id === categoryId)?.name || '';
}

function getSectionStartingPrice(sectionId) {
  const sectionCategoryIds = categories
    .filter(category => category.sectionId === sectionId)
    .map(category => category.id);

  const prices = menuData
    .filter(item => sectionCategoryIds.includes(item.category))
    .map(item => getItemBasePrice(item))
    .filter(Boolean);

  return prices.length ? Math.min(...prices) : 0;
}

function getSectionItems(sectionId) {
  const sectionCategoryIds = categories
    .filter(category => category.sectionId === sectionId)
    .map(category => category.id);

  return menuData.filter(item => sectionCategoryIds.includes(item.category));
}

function getSectionPreviewImage(section) {
  const sectionItems = getSectionItems(section.id);
  const featuredItem = featuredProducts
    .map(feature => menuData.find(item => String(item.id) === String(feature.id)))
    .find(item => item && categories.find(category => category.id === item.category)?.sectionId === section.id);

  return featuredItem?.image
    || sectionItems.find(item => item.image)?.image
    || section.image
    || 'hero-burger.png';
}

function isUnavailableSectionArt(src) {
  const value = String(src || '').trim().toLowerCase();
  return !value || value.includes('section-assets/');
}

function getSectionCardArtImage(section) {
  const sectionItems = getSectionItems(section.id);
  const pngItem = sectionItems.find(item => /\.png(\?|$)/i.test(String(item.image || '')));
  const sectionImage = isUnavailableSectionArt(section.image) ? '' : section.image;
  const previewImage = pngItem?.image || getSectionPreviewImage(section);

  return sectionImage || previewImage || '';
}

function getSectionCardIcon(section) {
  const sectionIconMap = {
    saada_crepes: 'fas fa-pizza-slice',
    saada_sandwiches: 'fas fa-burger',
    special_meals: 'fas fa-drumstick-bite',
    sides_extras: 'fas fa-cheese'
  };

  return section.icon
    || sectionIconMap[section.id]
    || categories.find(category => category.sectionId === section.id)?.icon
    || 'fas fa-utensils';
}

function getSectionSignatureLabel(sectionId) {
  const sectionItems = getSectionItems(sectionId);
  const featuredItem = featuredProducts
    .map(feature => menuData.find(item => String(item.id) === String(feature.id)))
    .find(item => item && categories.find(category => category.id === item.category)?.sectionId === sectionId);

  return featuredItem?.name
    || sectionItems[0]?.name
    || 'اختيارات واضحة وسريعة للطلب';
}

function getSectionDisplayName(name) {
  return String(name || '').replace(/^ركن\s+/, '').trim() || name;
}

function getQuickStartSectionDisplayName(section) {
  const cleanName = getSectionDisplayName(section?.name);
  const quickStartLabels = {
    saada_sandwiches: 'ساندوتشات',
    saada_crepes: 'كريب',
    special_meals: 'لحوم',
    sides_extras: 'مقبلات'
  };

  return quickStartLabels[section?.id] || cleanName;
}

function getQuickStartSectionEyebrow(section) {
  const eyebrowMap = {
    saada_sandwiches: 'اختيارات بريميوم',
    saada_crepes: 'مذاق فرنسي',
    special_meals: 'الأكثر طلبًا',
    sides_extras: 'تكملة الطلب'
  };

  return eyebrowMap[section?.id] || section?.badge || 'اختيارات بريميوم';
}

function getQuickStartSections() {
  const preferredOrder = ['saada_sandwiches', 'saada_crepes', 'sides_extras', 'special_meals'];

  return [...mainSections].sort((firstSection, secondSection) => {
    const firstIndex = preferredOrder.indexOf(firstSection.id);
    const secondIndex = preferredOrder.indexOf(secondSection.id);
    const safeFirstIndex = firstIndex === -1 ? preferredOrder.length : firstIndex;
    const safeSecondIndex = secondIndex === -1 ? preferredOrder.length : secondIndex;

    if (safeFirstIndex !== safeSecondIndex) {
      return safeFirstIndex - safeSecondIndex;
    }

    return 0;
  });
}

function getQuickStartReferenceImage(sectionId) {
  const referenceImageMap = {
    saada_sandwiches: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbpHkOzYrI_JPQLLw1b9AG3gPAwFg1A7IOdHGEqlHUgHCW3QHL9CicEgtjPGWWwjrEIqf0bARTMpD5NgpL5ttece8Bs-gU1A50H0GYi-4DBkW3KPmvjLHH27lG8Uja0nKITkAJ31K-pF3AlqROlszddOb3nkKbE9pvGietH_fueNUzf_MzrcPhxTfl8fEnupj60Bvd7Kt_v19JpJ6xoJcXJKDROGwegtaYOZbSSBfONjSnOzmM4VUy63aZQALs0HXSSaDzKU8OQXg',
    saada_crepes: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxjSOmx-I9RDjKTBhapjZNBHCpHPpjrrqdDMpjiFMlLuBEH_Ng7k9rOLnOX2H59sh6u7wdnvdzcFju-QtTIuWdByhBnvscQKuxWKxeVRtG8rR711vnzENxcOlya_QdLMgwIYyvvkYHWVDvQvEMjcpRWmcOOOysbjyBUP96LOYy4SCVl8GOdRiKPJlMH2QNEzrdzia9C8drNmI9h1FjrnT2UfoWlob9qGZuZTG47Rb31GZ-047mPscPscBLIsjt_pl52UhhGi43VMA',
    sides_extras: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw-DzpliPnxyT3nrFHiPFTrIE54HVKhPDVU7wPK1F-T2g_J3P62dw9XetE6cIT4la2b7LEQhDWMIWlApsteUEHZ4FaZXBbAJLsW_uMvgxiKL5lIzwnHbD4rkulCrrGekrO0e_zzvWWkik6dgjvh-cVfCRTFCA374oBKD28wV5Tm5jLKhfJcRpC-DQOSX5y8Sk-QPgCQIyMIDtKbrkJfxq6UpmTmjJL4MeNzP1FPYL4keZICdh9_J07Jalpi_Zksk-7JKYPWiX1foc',
    special_meals: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTbsGKCFkFM1OQVQfZrQS5R2ND0AInPFQ8bVxgtnADl_qX9VsPqLrsh5PI9jTUtf4-drqokRJryN-7ViloOQdjuKXzIF0PDdVzJsVV3bvtHGdHoxxnK5LeRHbCzCEmITrmVdBN3mdZIJi77aSikQ9PUUjYyzYtdgwnUjzQj7dURRpiDPdk14jlDFLa2BIx1WWTzAK-_0EuzAeRTdZnHTchGFrXIp0qB-W1E75HDOt1oXoVlpvCXbZY1UukeekGEvNsBQWETgAhL8w'
  };

  return referenceImageMap[sectionId] || '';
}

function renderPremiumCompactSectionCard(section, index) {
  const sectionCount = getSectionItemCount(section.id);
  const startingPrice = formatPriceLabel(getSectionStartingPrice(section.id));
  const previewImage = getSectionPreviewImage(section);
  const displayName = getSectionDisplayName(section.name);
  const signature = getSectionSignatureLabel(section.id);
  const theme = ['is-sand', 'is-rose'][index % 2];

  return `
    <article class="section-card premium-section-card premium-section-card--compact ${theme} animate-slide-up" onclick="selectSection('${section.id}')">
      <span class="premium-section-card__orb premium-section-card__orb--a" aria-hidden="true"></span>
      <span class="premium-section-card__orb premium-section-card__orb--b" aria-hidden="true"></span>
      <div class="premium-section-card__compact-copy">
        <span class="premium-section-card__badge">${section.badge || 'اختيار مميز'}</span>
        <h3 class="section-card-title">${displayName}</h3>
        <p class="premium-section-card__signature">${signature}</p>
        <div class="premium-section-card__compact-meta">
          <span>${sectionCount} صنف</span>
          <span>من ${startingPrice}</span>
        </div>
      </div>
      <div class="section-card-media premium-section-card__compact-media">
        <img src="${previewImage}" alt="${section.name}" loading="lazy" onerror="this.src='hero-burger.png'">
      </div>
    </article>
  `;
}

function renderPremiumShowcaseSectionCard(section, index) {
  const sectionCount = getSectionItemCount(section.id);
  const categoryCount = getSectionCategoryCount(section.id);
  const startingPrice = formatPriceLabel(getSectionStartingPrice(section.id));
  const previewImage = getSectionPreviewImage(section);
  const theme = ['is-berry', 'is-rose-mist', 'is-sand-glow'][index % 3];

  return `
    <article class="section-card premium-section-card premium-section-card--showcase ${theme} animate-slide-up" onclick="selectSection('${section.id}')">
      <span class="premium-section-card__orb premium-section-card__orb--a" aria-hidden="true"></span>
      <span class="premium-section-card__orb premium-section-card__orb--b" aria-hidden="true"></span>
      <div class="section-card-body premium-section-card__showcase-body">
        <div class="premium-section-card__topline">
          <span class="premium-section-card__badge">${section.badge || 'ركن مميز'}</span>
          <span class="premium-section-card__soft-kicker">${categoryCount} تصنيف</span>
        </div>
        <h3 class="section-card-title">${section.name}</h3>
        <p class="section-card-desc">${section.desc || 'اختيارات مشبعة وصور أوضح للوصول للقسم المناسب.'}</p>
      </div>
      <div class="section-card-media premium-section-card__showcase-media">
        <img src="${previewImage}" alt="${section.name}" loading="lazy" onerror="this.src='hero-burger.png'">
      </div>
      <div class="section-card-footer premium-section-card__showcase-footer">
        <span class="premium-section-card__pill">${sectionCount} صنف</span>
        <span class="premium-section-card__pill premium-section-card__pill--price">من ${startingPrice}</span>
        <span class="section-card-arrow" aria-hidden="true">
          <i class="fas fa-arrow-left"></i>
        </span>
      </div>
    </article>
  `;
}

function renderReferenceSectionCard(section, index) {
  const sectionCount = getSectionItemCount(section.id);
  const startingPrice = formatPriceLabel(getSectionStartingPrice(section.id));
  const previewImage = getSectionPreviewImage(section);
  const displayName = getSectionDisplayName(section.name);
  const signature = getSectionSignatureLabel(section.id);
  const accentClass = ['is-noir', 'is-berry', 'is-sand', 'is-olive'][index % 4];

  return `
    <article class="section-card reference-section-card ${accentClass} animate-slide-up" onclick="selectSection('${section.id}')">
      <div class="reference-section-card__media">
        <img src="${previewImage}" alt="${section.name}" loading="lazy" onerror="this.src='hero-burger.png'">
      </div>
      <span class="reference-section-card__badge">${section.badge || 'اختيار مميز'}</span>
      ${index === 0 ? `<span class="reference-section-card__sparkle" aria-hidden="true"><i class="fas fa-star"></i></span>` : ''}
      <div class="reference-section-card__overlay">
        <h3 class="section-card-title">${displayName}</h3>
        <p class="reference-section-card__subtitle">${signature}</p>
        <div class="reference-section-card__stats">
          <span>${sectionCount} صنف</span>
          <span>من ${startingPrice}</span>
        </div>
      </div>
    </article>
  `;
}

function openOptionsById(id) {
  const item = menuData.find(product => String(product.id) === String(id));
  if (!item) return;
  openOptionsModal(item);
}

function renderQuickStartSectionCard(section, index, activeIndex = 0) {
  const sectionCount = getSectionItemCount(section.id);
  const previewImage = getQuickStartReferenceImage(section.id) || getSectionCardArtImage(section);
  const displayName = getQuickStartSectionDisplayName(section);
  const eyebrow = getQuickStartSectionEyebrow(section);
  const iconClass = getSectionCardIcon(section);
  const accentClass = ['is-noir', 'is-sand', 'is-olive', 'is-berry'][index % 4];
  const badgeLabel = sectionCount ? `${toArabicNumerals(sectionCount)} صنف` : 'اختيار مميز';

  return `
    <article class="section-card reference-section-card quick-start-card ${accentClass} ${index === activeIndex ? 'is-active' : ''}" onclick="selectSection('${section.id}')" onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); selectSection('${section.id}'); }" role="button" tabindex="0" aria-label="افتح قسم ${displayName}" data-quick-start-index="${index}">
      <div class="reference-section-card__media quick-start-card__media ${previewImage ? 'has-image' : 'is-icon-only'}">
        ${previewImage ? `<img src="${previewImage}" alt="${section.name}" loading="lazy" onerror="if(this.dataset.fallbackApplied==='1'){ this.closest('.quick-start-card__media').classList.add('is-icon-only'); this.remove(); } else { this.dataset.fallbackApplied='1'; this.src='hero-burger.png'; }">` : ''}
        <span class="quick-start-card__icon" aria-hidden="true">
          <i class="${iconClass}"></i>
        </span>
      </div>
      <span class="quick-start-card__badge">${badgeLabel}</span>
      <div class="reference-section-card__overlay quick-start-card__body">
        <p class="quick-start-card__eyebrow">${eyebrow}</p>
        <h3 class="section-card-title">${displayName}</h3>
        <span class="quick-start-card__button">استكشف القائمة</span>
      </div>
    </article>
  `;
}

function renderHomeOverview() {
  const totalItems = document.getElementById('proof-total-items');
  const topItem = document.getElementById('proof-top-item');
  const heroTotalItems = document.getElementById('hero-total-items');
  const heroTopItem = document.getElementById('hero-top-item');
  const topProduct = menuData.find(item => String(item.id) === String(featuredProducts[0]?.id)) || menuData[0];
  const totalLabel = `${menuData.length}+`;
  const topLabel = topProduct?.name || 'المنيو متاح الآن';

  if (totalItems) totalItems.textContent = totalLabel;
  if (heroTotalItems) heroTotalItems.textContent = totalLabel;
  if (topItem) topItem.textContent = topLabel;
  if (heroTopItem) heroTopItem.textContent = topLabel;

  renderFeaturedProducts();
}

function renderFeaturedProducts() {
  const grid = document.getElementById('popular-items-grid');
  if (!grid) return;

  if (!featuredProducts.length) {
    grid.innerHTML = '';
    return;
  }

  grid.innerHTML = featuredProducts.slice(0, 4).map((feature, index) => {
    const item = menuData.find(product => String(product.id) === String(feature.id));
    if (!item) return '';

    const price = getItemBasePrice(item);
    const categoryName = getCategoryName(item.category);
    const fallbackBadges = ['ترشيح الشيف', 'الأكثر طلبًا', 'تقييم مرتفع', 'طازج'];
    const badgeLabel = feature.badge || fallbackBadges[index % fallbackBadges.length];

    return `
      <article class="popular-card animate-slide-up" onclick="openOptionsById('${item.id}')">
        <div class="popular-card-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22360%22 height=%22360%22><rect fill=%22%23f7f2ea%22 width=%22360%22 height=%22360%22/><text fill=%22%23b08b3e%22 font-size=%2248%22 text-anchor=%22middle%22 x=%22180%22 y=%22198%22>🍔</text></svg>'">
          <span class="popular-card-floating-badge">${badgeLabel}</span>
        </div>
        <div class="popular-card-body">
          <div class="popular-card-topline">
            <span class="popular-card-category">${categoryName}</span>
            <span class="popular-card-badge">${feature.trust || 'جاهز للطلب'}</span>
          </div>
          <h3 class="popular-card-title">${item.name}</h3>
          <p class="popular-card-desc">${feature.note || item.desc || ''}</p>
          <div class="popular-card-footer">
            <div class="popular-card-price-block">
              <span class="popular-card-price">${formatPriceLabel(price)}</span>
              <small>سعر يبدأ من</small>
            </div>
            <button class="btn-primary popular-card-cta" onclick="event.stopPropagation(); openOptionsById('${item.id}')">
              <i class="fas fa-cart-plus"></i>
              أضف
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================
// 6. SECTIONS / MENU RENDER
// ==========================================
function renderMainSections() {
  const grid = document.getElementById('sections-grid');
  const progress = document.getElementById('quick-start-progress');
  if (!grid) return;
  grid.classList.add('sections-grid--premium');

  document.getElementById('sections-view').style.display = 'block';
  document.getElementById('products-view').style.display = 'none';

  if (!mainSections.length) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:36px 16px;color:var(--text-secondary);">
        لا توجد أقسام متاحة الآن.
      </div>`;
    if (progress) progress.innerHTML = '';
    return;
  }

  const orderedSections = getQuickStartSections();
  const initialIndex = 0;

  grid.innerHTML = `
    <div class="quick-start-carousel-track no-scrollbar" id="quick-start-carousel-track" aria-live="polite">
      ${orderedSections.map((section, index) => renderQuickStartSectionCard(section, index, initialIndex)).join('')}
    </div>
  `;

  if (progress) {
    progress.innerHTML = orderedSections.map((section, index) => `
      <button
        type="button"
        class="quick-start-progress__dot ${index === initialIndex ? 'is-active' : ''}"
        data-quick-start-dot="${index}"
        aria-label="اعرض قسم ${getQuickStartSectionDisplayName(section)}"
        aria-current="${index === initialIndex ? 'true' : 'false'}"
      ></button>
    `).join('');
  }

  initQuickStartCarousel();
}

function updateQuickStartCarouselState(cards, dots, activeIndex) {
  cards.forEach((card, index) => {
    card.classList.toggle('is-active', index === activeIndex);
  });

  dots.forEach((dot, index) => {
    const isActive = index === activeIndex;
    dot.classList.toggle('is-active', isActive);
    dot.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

function getQuickStartActiveIndex(track, cards) {
  const trackRect = track.getBoundingClientRect();
  const trackCenter = trackRect.left + (trackRect.width / 2);
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  cards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + (cardRect.width / 2);
    const distance = Math.abs(cardCenter - trackCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

function initQuickStartCarousel() {
  const track = document.getElementById('quick-start-carousel-track');
  const progress = document.getElementById('quick-start-progress');
  if (!track || !progress) return;

  const cards = [...track.querySelectorAll('.quick-start-card')];
  const dots = [...progress.querySelectorAll('.quick-start-progress__dot')];
  if (!cards.length) return;
  const initialIndex = 0;

  const scrollToCard = (index, behavior = 'smooth') => {
    const targetCard = cards[index];
    if (!targetCard) return;

    const trackRect = track.getBoundingClientRect();
    const targetRect = targetCard.getBoundingClientRect();
    const delta = (targetRect.left + (targetRect.width / 2)) - (trackRect.left + (trackRect.width / 2));

    if (Math.abs(delta) > 1) {
      track.scrollBy({
        left: delta,
        behavior
      });
    }

    updateQuickStartCarouselState(cards, dots, index);
  };

  track.addEventListener('scroll', () => {
    if (track.quickStartAnimationFrame) {
      cancelAnimationFrame(track.quickStartAnimationFrame);
    }

    track.quickStartAnimationFrame = requestAnimationFrame(() => {
      const activeIndex = getQuickStartActiveIndex(track, cards);
      updateQuickStartCarouselState(cards, dots, activeIndex);
    });
  }, { passive: true });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => scrollToCard(index));
  });

  cards.forEach((card, index) => {
    card.addEventListener('focus', () => updateQuickStartCarouselState(cards, dots, index));
  });

  requestAnimationFrame(() => {
    updateQuickStartCarouselState(cards, dots, getQuickStartActiveIndex(track, cards));
  });
}

function getSectionCategoryCount(sectionId) {
  return categories.filter(category => category.sectionId === sectionId).length;
}

function getSectionItemCount(sectionId) {
  const sectionCategoryIds = categories
    .filter(category => category.sectionId === sectionId)
    .map(category => category.id);

  return menuData.filter(item => sectionCategoryIds.includes(item.category)).length;
}

function getCategoryItemCount(categoryId) {
  return menuData.filter(item => String(item.category) === String(categoryId)).length;
}

function getSectionViewDisplayName(section) {
  const sectionViewTitleMap = {
    saada_crepes: 'كريبات السعادة',
    saada_sandwiches: 'ساندوتشات',
    special_meals: 'وجبات السعادة',
    sides_extras: 'إضافات ومقبلات'
  };

  return sectionViewTitleMap[section?.id] || getSectionDisplayName(section?.name || '') || 'المنيو';
}

function updateSectionViewHeader(categoryId = null) {
  const currentSection = mainSections.find(section => String(section.id) === String(currentSectionId));
  const currentCategory = categories.find(category => String(category.id) === String(categoryId));
  const titleEl = document.getElementById('section-view-title');
  const subtitleEl = document.getElementById('section-view-subtitle');

  if (titleEl) {
    titleEl.textContent = getSectionViewDisplayName(currentSection);
  }

  if (subtitleEl) {
    if (currentCategory) {
      const itemCount = getCategoryItemCount(currentCategory.id);
      subtitleEl.textContent = `${currentCategory.name} • ${toArabicNumerals(itemCount)} صنف متاح الآن`;
      return;
    }

    subtitleEl.textContent = currentSection?.desc || 'اختيارات منتقاة بعناية لطلب أسرع وأوضح';
  }
}

function selectSection(sectionId) {
  closeMobileMenu();
  setMenuHeroHidden(true);
  setSectionBrowsingMode(true);
  currentSectionId = sectionId;
  currentSearchTerm = '';
  const searchInput = document.getElementById('menu-search-input');
  const clearBtn = document.getElementById('menu-search-clear');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';

  document.getElementById('sections-view').style.display = 'none';
  document.getElementById('products-view').style.display = 'block';
  document.getElementById('products-view').scrollIntoView({ behavior: 'smooth', block: 'start' });

  const subCategories = categories.filter(c => c.sectionId === sectionId);
  currentSectionCategories = subCategories;
  renderCategoryTabs(subCategories);
  if (subCategories.length > 0) {
    filterCategory(subCategories[0].id);
  } else {
    updateSectionViewHeader(null);
  }
  setNavActive('nav-menu');
}

function backToSections() {
  closeMobileMenu();
  setMenuHeroHidden(false);
  setSectionBrowsingMode(false);
  resetSectionSelection();
  showSectionsView();
  document.getElementById('sections-view').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderCategoryTabs(cats) {
  const scroll = document.getElementById('categories-scroll');
  if (!scroll) return;

  scroll.innerHTML = cats.map(cat => `
    <button class="cat-btn" id="cat-${cat.id}" onclick="filterCategory('${cat.id}')">
      <i class="${cat.icon}"></i>
      <span>${cat.name}</span>
    </button>
  `).join('');
}

function filterCategory(catId) {
  currentCategoryId = catId;

  // Update active tab
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`cat-${catId}`);
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  updateSectionViewHeader(catId);

  // Render products with skeleton
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  // Show skeleton
  grid.innerHTML = Array(3).fill(0).map(() => `
    <div class="skeleton-card">
      <div class="skeleton skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton skeleton-line"></div>
        <div class="skeleton skeleton-line short"></div>
        <div class="skeleton skeleton-line short" style="width:40%;margin-top:8px;"></div>
      </div>
    </div>
  `).join('');

  // Render real items after short delay (simulate load)
  setTimeout(() => {
    const items = getFilteredItems(catId, currentSearchTerm);
    renderProducts(items);
  }, 280);
}

function getFilteredItems(catId, searchTerm = '') {
  const normalized = searchTerm.trim().toLowerCase();
  let items = menuData.filter(i => i.category === catId);

  if (!normalized) return items;

  return items.filter(item => {
    const name = (item.name || '').toLowerCase();
    const desc = (item.desc || '').toLowerCase();
    return name.includes(normalized) || desc.includes(normalized);
  });
}

function handleMenuSearch(value) {
  currentSearchTerm = (value || '').trim();
  const clearBtn = document.getElementById('menu-search-clear');
  if (clearBtn) clearBtn.style.display = currentSearchTerm ? 'inline-flex' : 'none';
  if (!currentCategoryId) return;
  filterCategory(currentCategoryId);
}

function clearMenuSearch() {
  currentSearchTerm = '';
  const input = document.getElementById('menu-search-input');
  const clearBtn = document.getElementById('menu-search-clear');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  if (!currentCategoryId) return;
  filterCategory(currentCategoryId);
}

function renderProducts(items) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  if (!items || items.length === 0) {
    grid.innerHTML = `
      <div class="pcard-empty">
        <i class="fas fa-utensils"></i>
        <p>${currentSearchTerm ? 'لا توجد نتائج مطابقة للبحث الحالي' : 'مفيش أكل في هذا القسم حالياً'}</p>
      </div>`;
    return;
  }

  const placeholderSvg = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect fill=%22%23fff3e0%22 width=%22200%22 height=%22200%22/><text fill=%22%23e0a050%22 font-size=%2248%22 text-anchor=%22middle%22 x=%22100%22 y=%22115%22>🍽️</text></svg>`;

  grid.innerHTML = items.map(item => {
    const minPrice = getItemBasePrice(item);
    const categoryName = getCategoryName(item.category) || '';
    const isSized = Array.isArray(item.sizes) && item.sizes.length > 0;
    const priceLabel = isSized ? `من ${formatPriceLabel(minPrice)}` : formatPriceLabel(minPrice);
    const summaryText = String(item.desc || categoryName || 'اختيار شهي جاهز للطلب الآن').trim();
    const badge =
      (typeof item.badge === 'string' && item.badge.trim()) ||
      (typeof item.label === 'string' && item.label.trim()) ||
      (item.hot ? 'ساخن' : '') ||
      (item.featured ? 'مميز' : '');

    return `
      <article
        class="pcard"
        onclick="openOptionsById('${item.id}')"
        onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openOptionsById('${item.id}'); }"
        role="button"
        tabindex="0"
        aria-label="${item.name}، السعر ${priceLabel}"
      >
        <div class="pcard__media">
          <img
            src="${item.image || ''}"
            alt="${item.name}"
            loading="lazy"
            onerror="this.src='${placeholderSvg}'"
          >
          ${badge ? `<span class="pcard__badge">${badge}</span>` : ''}
        </div>
        <div class="pcard__body">
          <div class="pcard__copy">
            <h3 class="pcard__name">${item.name}</h3>
            <p class="pcard__desc">${summaryText}</p>
          </div>
          <div class="pcard__foot">
            <div class="pcard__price">
              ${priceLabel}
            </div>
            <button
              class="pcard__add"
              onclick="event.stopPropagation(); openOptionsById('${item.id}')"
              aria-label="أضف ${item.name} للسلة"
              type="button"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================
// 7. OPTIONS MODAL
// ==========================================
function openOptionsModal(item) {
  currentSelectedItem = item;
  currentProductExtras = [];

  const backdrop = document.getElementById('options-backdrop');
  const modalImg = document.getElementById('modal-img');
  const modalName = document.getElementById('modal-item-name');
  const modalBody = document.getElementById('modal-body');

  modalImg.src = item.image;
  modalImg.onerror = () => { modalImg.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23111" width="200" height="200"/><text fill="%23444" font-size="40" text-anchor="middle" x="100" y="115">🍽️</text></svg>'; };
  modalName.textContent = item.name;

  let bodyHTML = '';

  // Sizes section
  if (item.sizes) {
    bodyHTML += `
      <div class="option-section">
        <div class="option-section-title"><i class="fas fa-ruler-combined"></i> اختر الحجم:</div>
        ${item.sizes.map((s, i) => `
          <label class="size-option-label">
            <input type="radio" name="size_opt" value="${i}" ${i === 0 ? 'checked' : ''} onchange="updateModalTotal()">
            <div class="size-option-card">
              <div style="display:flex;align-items:center;gap:10px;">
                <div class="size-option-radio"></div>
                <span class="size-option-name">${s.name}</span>
              </div>
              <span class="size-option-price">${s.price} ج.م</span>
            </div>
          </label>
        `).join('')}
      </div>`;
  }

  // Extras from product only
  if (Array.isArray(item.extras) && item.extras.length > 0) {
    currentProductExtras = item.extras.map(e => ({ ...e, selected: false }));

    bodyHTML += `
      <div class="option-section">
        <div class="option-section-title"><i class="fas fa-plus-circle"></i> دلع نفسك (إضافات):</div>
        ${currentProductExtras.map((e, i) => `
          <label class="extra-option-label">
            <input type="checkbox" value="${i}" onchange="updateModalTotal()">
            <div class="extra-option-card">
              <div class="extra-check-wrap">
                <div class="custom-checkbox"><i class="fas fa-check" style="display:none;"></i></div>
                <span class="extra-name">${e.name}</span>
              </div>
              <span class="extra-price">+${e.price} ج.م</span>
            </div>
          </label>
        `).join('')}
      </div>`;
  }

  // Note
  bodyHTML += `
    <div class="option-section">
      <div class="option-section-title"><i class="fas fa-pen"></i> ملاحظة خاصة (اختياري):</div>
      <textarea id="item-note" class="form-input" rows="2" placeholder="مثلا: بدون بصل..."></textarea>
    </div>`;

  modalBody.innerHTML = bodyHTML;

  // Fix extras checkbox visuals
  modalBody.querySelectorAll('.extra-option-label input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const card = cb.nextElementSibling;
      const box = card?.querySelector('.custom-checkbox');
      const icon = box?.querySelector('i');
      if (cb.checked) {
        if (box) box.style.background = 'var(--brand-red)';
        if (box) box.style.borderColor = 'var(--brand-red)';
        if (icon) icon.style.display = 'block';
      } else {
        if (box) box.style.background = '';
        if (box) box.style.borderColor = '';
        if (icon) icon.style.display = 'none';
      }
    });
  });

  backdrop.classList.add('open');
  updateModalTotal();
}

function closeOptionsModal() {
  document.getElementById('options-backdrop').classList.remove('open');
  currentSelectedItem = null;
}

function handleOptionsBackdrop(e) {
  if (e.target === document.getElementById('options-backdrop')) closeOptionsModal();
}

function updateModalTotal() {
  if (!currentSelectedItem) return;
  let total = 0;

  if (currentSelectedItem.sizes) {
    const sel = document.querySelector('input[name="size_opt"]:checked');
    if (sel) total += currentSelectedItem.sizes[parseInt(sel.value)]?.price || 0;
  } else {
    total += currentSelectedItem.price || 0;
  }

  document.querySelectorAll('#modal-body .extra-option-label input[type="checkbox"]:checked').forEach(cb => {
    const extra = currentProductExtras[parseInt(cb.value)];
    if (extra) total += extra.price || 0;
  });

  const totalEl = document.getElementById('modal-total-price');
  const addBtn = document.getElementById('modal-add-btn');
  if (totalEl) totalEl.textContent = `${total} ج.م`;
  if (addBtn) addBtn.innerHTML = `<i class="fas fa-cart-plus"></i> إضافة للسلة (${total} ج.م)`;
}

function submitOptionOrder() {
  if (!currentSelectedItem) return;
  let finalName = currentSelectedItem.name;
  let finalPrice = 0;

  if (currentSelectedItem.sizes) {
    const sel = document.querySelector('input[name="size_opt"]:checked');
    if (sel) {
      const sizeObj = currentSelectedItem.sizes[parseInt(sel.value)];
      finalName += ` (${sizeObj.name})`;
      finalPrice += sizeObj.price;
    }
  } else {
    finalPrice += currentSelectedItem.price || 0;
  }

  const checkedExtras = document.querySelectorAll('#modal-body .extra-option-label input[type="checkbox"]:checked');
  if (checkedExtras.length > 0) {
    const names = [];
    checkedExtras.forEach(cb => {
      const extra = currentProductExtras[parseInt(cb.value)];
      if (extra) { names.push(extra.name); finalPrice += extra.price; }
    });
    finalName += ` + [${names.join(', ')}]`;
  }

  const note = document.getElementById('item-note')?.value.trim();

  addToCartDirect(finalName, finalPrice, note);
  closeOptionsModal();
}

// ==========================================
// 8. CART
// ==========================================
function openCart() {
  document.getElementById('cart-backdrop').classList.add('open');
  document.getElementById('cart-panel').classList.add('open');
  setNavActive('nav-cart');
  renderCartBody();
}

function closeCart() {
  document.getElementById('cart-backdrop').classList.remove('open');
  document.getElementById('cart-panel').classList.remove('open');
}

// Legacy compatibility
function toggleCart() { openCart(); }

function addToCartDirect(name, price, note = '') {
  const existing = cart.find(i => i.name === name && String(i.price) === String(price));
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: Date.now() + Math.random(), name, price: String(price), qty: 1, note });
  }
  updateCartUI();
  showToast(`<i class="fas fa-check-circle"></i> تمت الإضافة: ${name.split(' ').slice(0,3).join(' ')}`);
  // Animate badge
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.classList.add('bounce-in');
    setTimeout(() => badge.classList.remove('bounce-in'), 400);
  }
}

function updateCartUI() {
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = totalQty;
    badge.classList.toggle('hidden-badge', totalQty === 0);
  }
  renderCartBody();
}

function renderCartBody() {
  const body = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-basket"></i>
        <p style="font-weight:600;">السلة فاضية...</p>
        <p style="font-size:0.82rem;color:var(--text-muted);">يلا نملاها بحاجة حلوة! 😋</p>
        <button onclick="closeCart(); scrollToMenu();" class="btn-primary" style="margin-top:8px;font-size:0.85rem;padding:10px 20px;">
          <i class="fas fa-utensils"></i> شوف المنيو
        </button>
      </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  let total = 0;
  body.innerHTML = cart.map((item, idx) => {
    const price = parseFloat(String(item.price).replace(/[^\d.]/g, '')) || 0;
    total += price * item.qty;
    return `
      <div class="cart-item">
        <div style="flex:1;min-width:0;">
          <div style="font-weight:700;font-size:0.88rem;line-height:1.3;margin-bottom:3px;">${item.name}</div>
          ${item.note ? `<div style="font-size:0.72rem;color:var(--text-muted);">📝 ${item.note}</div>` : ''}
          <div style="color:var(--brand-gold);font-size:0.82rem;font-weight:600;margin-top:2px;">${price * item.qty} ج.م</div>
        </div>
        <div class="qty-control">
          <button class="qty-btn minus" onclick="changeQty(${idx}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn plus" onclick="changeQty(${idx}, 1)">+</button>
        </div>
        <button onclick="removeItem(${idx})" style="background:none;border:none;color:var(--text-muted);cursor:pointer;padding:4px 6px;font-size:0.9rem;transition:color 0.2s;" onmouseover="this.style.color='#ff4444'" onmouseout="this.style.color='var(--text-muted)'">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>`;
  }).join('');

  if (footer) {
    footer.style.display = 'block';
    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = `${total} ج.م`;
  }
}

function changeQty(index, delta) {
  if (index < 0 || index >= cart.length) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCartUI();
}

function removeItem(index) {
  if (index < 0 || index >= cart.length) return;
  const name = cart[index].name;
  cart.splice(index, 1);
  updateCartUI();
  showToast(`🗑️ تم حذف: ${name.split(' ').slice(0,3).join(' ')}`);
}

// ==========================================
// 9. ORDER TRACKING
// ==========================================
const ORDER_STATUSES = {
  new: { label: 'طلب جديد', steps: 1 },
  preparing: { label: 'جاري التحضير', steps: 2 },
  delivering: { label: 'خرج للتوصيل', steps: 3 },
  done: { label: 'تم التسليم', steps: 4 }
};

const TIMELINE_STEPS = [
  { icon: 'fas fa-check', name: 'تم استلام الطلب', desc: 'وصلنا طلبك بنجاح' },
  { icon: 'fas fa-fire-alt', name: 'جاري التحضير', desc: 'الشيف بيجهز طلبك' },
  { icon: 'fas fa-motorcycle', name: 'خرج للتوصيل', desc: 'المندوب في الطريق' },
  { icon: 'fas fa-home', name: 'تم التسليم', desc: 'وصلك الطلب، بالعافية!' },
];

function openTracking() {
  document.getElementById('tracking-modal').classList.add('open');
  setNavActive('nav-track');
}

function closeTracking() {
  document.getElementById('tracking-modal').classList.remove('open');
}

function handleTrackingBackdrop(e) {
  if (e.target === document.getElementById('tracking-modal')) closeTracking();
}

async function trackOrder() {
  const input = document.getElementById('order-number-input');
  const result = document.getElementById('tracking-result');
  if (!input || !result) return;

  const orderId = input.value.trim();
  if (!orderId) { showToast('⚠️ أدخل رقم الطلب'); return; }

  result.innerHTML = `
    <div style="text-align:center;padding:32px;color:var(--text-secondary);">
      <div class="loader-ring" style="margin:0 auto 12px;"></div>
      <p style="font-size:0.88rem;">جاري البحث...</p>
    </div>`;

  if (!window.firebaseReady || !window.db) {
    // Demo mode
    setTimeout(() => showDemoOrder(orderId), 800);
    return;
  }

  try {
    // Try exact ID match
    const docRef = window.fsDoc(window.db, 'orders', orderId);
    const snap = await window.fsGetDoc(docRef);

    if (snap.exists()) {
      showOrderResult(snap.id, snap.data());
    } else {
      // Try searching by short ID prefix
      const shortId = orderId.toLowerCase();
      const q = await window.fsGetDocs(window.fsCollection(window.db, 'orders'));
      const match = q.docs.find(d => d.id.startsWith(shortId) || d.id.slice(0, 8) === shortId);
      if (match) {
        showOrderResult(match.id, match.data());
      } else {
        result.innerHTML = `
          <div style="text-align:center;padding:32px;color:var(--text-secondary);">
            <i class="fas fa-search" style="font-size:2.5rem;margin-bottom:12px;opacity:0.3;display:block;"></i>
            <p style="font-weight:600;margin-bottom:6px;">الطلب مش موجود</p>
            <p style="font-size:0.8rem;">تأكد من رقم الطلب وجرب تاني</p>
          </div>`;
      }
    }
  } catch (err) {
    showDemoOrder(orderId);
  }
}

function showDemoOrder(orderId) {
  const demoOrder = {
    customerName: 'عميل مطعم السعادة',
    status: 'preparing',
    items: [{ name: 'كريب السعادة', qty: 2, price: '130' }],
    totalPrice: 260,
    createdAt: { toDate: () => new Date() }
  };
  showOrderResult(orderId, demoOrder);
}

function showOrderResult(id, data) {
  const result = document.getElementById('tracking-result');
  if (!result) return;

  const statusInfo = ORDER_STATUSES[data.status] || ORDER_STATUSES.new;
  const doneSteps = statusInfo.steps;

  const timelineHTML = TIMELINE_STEPS.map((step, i) => {
    const isDone = i < doneSteps - 1;
    const isActive = i === doneSteps - 1;
    return `
      <div class="timeline-step ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}">
        <div class="step-icon"><i class="${step.icon}"></i></div>
        <div class="step-content">
          <div class="step-name" style="${isDone || isActive ? 'color:var(--text-primary)' : 'color:var(--text-muted)'}">${step.name}</div>
          <div class="step-desc">${step.desc}</div>
        </div>
      </div>`;
  }).join('');

  result.innerHTML = `
    <div style="animation:slideUp 0.3s ease;">
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:14px;padding:16px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <div>
            <div style="font-weight:700;font-size:0.95rem;">طلب #${id.slice(0,8)}</div>
            <div style="font-size:0.78rem;color:var(--text-secondary);">${data.customerName}</div>
          </div>
          <span class="status-badge status-${data.status || 'new'}">${statusInfo.label}</span>
        </div>
        <div style="font-size:0.82rem;color:var(--text-secondary);border-top:1px solid var(--border);padding-top:10px;">
          <span>إجمالي الطلب:</span>
          <span style="color:var(--brand-gold);font-weight:700;margin-right:8px;">${data.totalPrice} ج.م</span>
        </div>
      </div>
      <div style="padding:4px 0 0;">
        ${timelineHTML}
      </div>
    </div>`;
}

// ==========================================
// 10. ADMIN PANEL
// ==========================================
function openAdmin() {
  document.getElementById('admin-panel').classList.add('open');
  adminTab('orders');
}

function closeAdmin() {
  document.getElementById('admin-panel').classList.remove('open');
}

function adminTab(tab) {
  // Update nav buttons
  ['orders', 'products', 'add-product'].forEach(t => {
    const btn = document.getElementById(`admin-tab-${t}`);
    if (btn) btn.classList.toggle('active', t === tab);
  });

  const body = document.getElementById('admin-body');
  if (!body) return;

  if (tab === 'orders') renderAdminOrders(body);
  else if (tab === 'products') renderAdminProducts(body);
  else if (tab === 'add-product') renderAddProductForm(body);
}

async function renderAdminOrders(body) {
  body.innerHTML = `<div style="text-align:center;padding:32px;"><div class="loader-ring" style="margin:0 auto;"></div></div>`;

  if (!window.firebaseReady || !window.db) {
    body.innerHTML = `<div style="text-align:center;padding:32px;color:var(--text-secondary);font-size:0.88rem;">
      <i class="fas fa-exclamation-triangle" style="color:var(--brand-gold);font-size:1.5rem;display:block;margin-bottom:8px;"></i>
      Firebase غير متصل. اربط Firebase أولاً.
    </div>`;
    return;
  }

  try {
    const q = window.fsQuery(window.fsCollection(window.db, 'orders'), window.fsOrderBy('createdAt', 'desc'));
    const snap = await window.fsGetDocs(q);
    const orders = snap.docs.map(d => ({ id: d.id, ...d.data() }));

    if (orders.length === 0) {
      body.innerHTML = `<div style="text-align:center;padding:48px;color:var(--text-secondary);">لا توجد طلبات بعد</div>`;
      return;
    }

    body.innerHTML = `
      <div style="overflow-x:auto;">
        <table class="admin-table">
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>العميل</th>
              <th>الإجمالي</th>
              <th>الحالة</th>
              <th>تغيير الحالة</th>
            </tr>
          </thead>
          <tbody>
            ${orders.map(o => `
              <tr>
                <td style="font-size:0.75rem;font-family:monospace;">${o.id.slice(0, 8)}...</td>
                <td>
                  <div style="font-weight:600;">${o.customerName || '—'}</div>
                  <div style="font-size:0.72rem;color:var(--text-muted);">${o.customerPhone || ''}</div>
                </td>
                <td style="font-weight:700;color:var(--brand-gold);">${o.totalPrice || 0} ج.م</td>
                <td><span class="status-badge status-${o.status || 'new'}">${ORDER_STATUSES[o.status]?.label || 'جديد'}</span></td>
                <td>
                  <select onchange="updateOrderStatus('${o.id}', this.value)" style="background:var(--bg-elevated);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);padding:5px 8px;font-family:'Cairo',sans-serif;font-size:0.78rem;cursor:pointer;">
                    <option value="new" ${o.status === 'new' ? 'selected' : ''}>طلب جديد</option>
                    <option value="preparing" ${o.status === 'preparing' ? 'selected' : ''}>جاري التحضير</option>
                    <option value="delivering" ${o.status === 'delivering' ? 'selected' : ''}>خرج للتوصيل</option>
                    <option value="done" ${o.status === 'done' ? 'selected' : ''}>تم التسليم</option>
                  </select>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>`;
  } catch (e) {
    body.innerHTML = `<div style="color:#ff6b6b;padding:16px;">خطأ في جلب الطلبات: ${e.message}</div>`;
  }
}

async function updateOrderStatus(orderId, status) {
  if (!window.firebaseReady || !window.db) return;
  try {
    await window.fsUpdateDoc(window.fsDoc(window.db, 'orders', orderId), { status });
    showToast('✅ تم تحديث حالة الطلب');
  } catch (e) {
    showToast('❌ فشل التحديث');
  }
}

async function renderAdminProducts(body) {
  body.innerHTML = `<div style="text-align:center;padding:32px;"><div class="loader-ring" style="margin:0 auto;"></div></div>`;

  if (!window.firebaseReady || !window.db) {
    // Show static products from menuData
    body.innerHTML = `
      <div style="margin-bottom:12px;padding:10px;background:rgba(255,183,3,0.1);border:1px solid rgba(255,183,3,0.2);border-radius:8px;font-size:0.8rem;color:#fbbf24;">
        <i class="fas fa-info-circle"></i> Firebase غير متصل — عرض المنتجات المحلية
      </div>
      <div style="overflow-x:auto;">
        <table class="admin-table">
          <thead><tr><th>الاسم</th><th>السعر</th><th>القسم</th></tr></thead>
          <tbody>
            ${menuData.slice(0, 20).map(p => `
              <tr>
                <td>${p.name}</td>
                <td style="color:var(--brand-gold);font-weight:700;">${p.sizes ? `${Math.min(...p.sizes.map(s=>s.price))}+ ج.م` : p.price + ' ج.م'}</td>
                <td style="font-size:0.78rem;color:var(--text-secondary);">${categories.find(c=>c.id===p.category)?.name || p.category}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
    return;
  }

  try {
    const snap = await window.fsGetDocs(window.fsCollection(window.db, 'products'));
    const prods = snap.docs.map(d => ({ id: d.id, ...d.data() }));

    if (prods.length === 0) {
      body.innerHTML = `<div style="text-align:center;padding:48px;color:var(--text-secondary);">لا توجد منتجات في Firebase. أضف منتجات من تبويب "إضافة منتج".</div>`;
      return;
    }

    body.innerHTML = `
      <div style="overflow-x:auto;">
        <table class="admin-table">
          <thead><tr><th>الاسم</th><th>السعر</th><th>القسم</th><th>إجراءات</th></tr></thead>
          <tbody>
            ${prods.map(p => `
              <tr>
                <td>${p.name}</td>
                <td style="color:var(--brand-gold);font-weight:700;">${p.price} ج.م</td>
                <td style="font-size:0.78rem;color:var(--text-secondary);">${p.category || '—'}</td>
                <td>
                  <button onclick="adminDeleteProduct('${p.id}')" style="background:rgba(230,57,70,0.1);border:1px solid rgba(230,57,70,0.3);border-radius:6px;color:var(--brand-red);cursor:pointer;padding:5px 10px;font-family:'Cairo',sans-serif;font-size:0.78rem;">
                    <i class="fas fa-trash"></i> حذف
                  </button>
                </td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  } catch (e) {
    body.innerHTML = `<div style="color:#ff6b6b;padding:16px;">خطأ: ${e.message}</div>`;
  }
}

async function adminDeleteProduct(id) {
  if (!window.firebaseReady || !window.db) return;
  if (!confirm('هل أنت متأكد من حذف هذا المنتج؟')) return;
  try {
    await window.fsDeleteDoc(window.fsDoc(window.db, 'products', id));
    showToast('✅ تم حذف المنتج');
    adminTab('products');
  } catch (e) {
    showToast('❌ فشل الحذف: ' + e.message);
  }
}

function renderAddProductForm(body) {
  body.innerHTML = `
    <div style="max-width:480px;">
      <h3 style="font-weight:700;font-size:0.95rem;margin-bottom:16px;color:var(--brand-gold);">
        <i class="fas fa-plus-circle"></i> إضافة منتج جديد
      </h3>
      <div class="form-group">
        <label class="form-label">اسم المنتج *</label>
        <input type="text" id="ap-name" class="form-input" placeholder="مثال: كريب فاهيتا">
      </div>
      <div class="form-group">
        <label class="form-label">السعر *</label>
        <input type="number" id="ap-price" class="form-input" placeholder="0">
      </div>
      <div class="form-group">
        <label class="form-label">الوصف</label>
        <input type="text" id="ap-desc" class="form-input" placeholder="وصف مختصر">
      </div>
      <div class="form-group">
        <label class="form-label">القسم</label>
        <select id="ap-category" class="form-input">
          ${categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">رابط الصورة</label>
        <input type="text" id="ap-image" class="form-input" placeholder="رابط الصورة أو اسم الملف">
      </div>
      <button onclick="submitAddProduct()" class="btn-primary" style="margin-top:8px;">
        <i class="fas fa-save"></i> حفظ المنتج
      </button>
    </div>`;
}

async function submitAddProduct() {
  const name = document.getElementById('ap-name')?.value.trim();
  const price = parseFloat(document.getElementById('ap-price')?.value);
  const desc = document.getElementById('ap-desc')?.value.trim();
  const category = document.getElementById('ap-category')?.value;
  const image = document.getElementById('ap-image')?.value.trim();

  if (!name) { showToast('❌ اكتب اسم المنتج'); return; }
  if (!price) { showToast('❌ اكتب السعر'); return; }

  if (!window.firebaseReady || !window.db) {
    showToast('⚠️ Firebase غير متصل');
    return;
  }

  try {
    await window.fsAddDoc(window.fsCollection(window.db, 'products'), {
      name, price, desc: desc || '', category: category || '', image: image || '',
      createdAt: window.fsServerTimestamp()
    });
    showToast('✅ تم إضافة المنتج بنجاح');
    adminTab('products');
  } catch (e) {
    showToast('❌ فشل الحفظ: ' + e.message);
  }
}

// ==========================================
// 11. AI (Gemini)
// ==========================================
function openAI() {
  document.getElementById('ai-modal-wrap').classList.add('open');
}

function closeAI() {
  document.getElementById('ai-modal-wrap').classList.remove('open');
}

function handleAIBackdrop(e) {
  if (e.target === document.getElementById('ai-modal-wrap')) closeAI();
}

// Legacy
function toggleChat() { openAI(); }

function resetAI() {
  document.getElementById('ai-main-view').style.display = 'block';
  document.getElementById('ai-results-view').style.display = 'none';
  document.getElementById('ai-products-grid').innerHTML = '';
  const input = document.getElementById('ai-user-input');
  if (input) input.value = '';
}

async function askAI(mood) {
  showAILoading();
  const result = await callGemini(mood);
  showAIResultFromAPI(result);
}

async function sendAIMessage() {
  const input = document.getElementById('ai-user-input');
  if (!input || !input.value.trim()) return;
  const text = input.value.trim();
  input.value = '';
  showAILoading();
  const result = await callGemini(text);
  showAIResultFromAPI(result);
}

function showAILoading() {
  document.getElementById('ai-main-view').style.display = 'none';
  document.getElementById('ai-results-view').style.display = 'block';
  document.getElementById('ai-message-text').textContent = 'جاري التفكير... 🤔';
  document.getElementById('ai-products-grid').innerHTML = `
    <div style="text-align:center;padding:32px;color:var(--text-secondary);">
      <div class="loader-ring" style="margin:0 auto 12px;"></div>
      <p style="font-size:0.85rem;">الشيف الذكي بيفكرلك...</p>
    </div>`;
}

async function callGemini(userMessage) {
  const menuContext = menuData.map(p => `[ID:${p.id}] ${p.name} (${p.price || (p.sizes ? p.sizes[0].price : 0)}ج)`).join('\n');
  const prompt = `أنت نادل ذكي في مطعم السعادة.
المنيو:
${menuContext}

العميل يقول: "${userMessage}"

اختر أنسب منتج وأجب بجملة عربية ودية قصيرة.
أجب بـ JSON فقط بدون markdown:
{"reply":"ردك هنا","suggested_id":"الـ ID هنا"}`;

  try {
    const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    if (!resp.ok) throw new Error(`Error ${resp.status}`);
    const data = await resp.json();
    let text = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
    const match = text.match(/\{[\s\S]*\}/);
    const result = match ? JSON.parse(match[0]) : { reply: text, suggested_id: null };
    if (result.suggested_id && !menuData.find(p => String(p.id) === String(result.suggested_id))) {
      const nameMatch = menuData.find(p => text.includes(p.name));
      if (nameMatch) result.suggested_id = nameMatch.id;
    }
    return result;
  } catch (e) {
    return { reply: 'يا خبر! النت قطع. جرب تاني!', suggested_id: null };
  }
}

function showAIResultFromAPI(result) {
  const grid = document.getElementById('ai-products-grid');
  const msg = document.getElementById('ai-message-text');
  if (!grid || !msg) return;

  msg.textContent = result.reply || 'إليك اقتراحنا 👇';

  let product = result.suggested_id
    ? menuData.find(i => String(i.id) === String(result.suggested_id))
    : null;
  if (!product) product = menuData[Math.floor(Math.random() * menuData.length)];

  const price = product.sizes
    ? `يبدأ من ${Math.min(...product.sizes.map(s => s.price))}`
    : product.price;

  grid.innerHTML = `
    <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:14px;overflow:hidden;max-width:360px;margin:0 auto;animation:slideUp 0.3s ease;">
      <div style="height:160px;overflow:hidden;">
        <img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;" 
          onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect fill=%22%23111%22 width=%22200%22 height=%22200%22/><text fill=%22%23444%22 font-size=%2240%22 text-anchor=%22middle%22 x=%22100%22 y=%22115%22>🍽️</text></svg>'">
      </div>
      <div style="padding:14px;">
        <div style="font-weight:700;font-size:0.95rem;margin-bottom:4px;">${product.name}</div>
        <div style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:10px;">${product.desc || ''}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-weight:700;color:var(--brand-gold);font-size:1rem;">${price} ج.م</span>
          <button onclick="openOptionsFromAI('${product.id}')" class="btn-primary" style="padding:9px 16px;font-size:0.85rem;border-radius:10px;">
            <i class="fas fa-cart-plus"></i> اطلب
          </button>
        </div>
      </div>
    </div>`;
}

function openOptionsFromAI(id) {
  const item = menuData.find(p => String(p.id) === String(id));
  if (!item) return;
  closeAI();
  setTimeout(() => openOptionsModal(item), 200);
}

function getValueByCandidateIds(ids) {
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && typeof el.value !== 'undefined') {
      return el.value.trim();
    }
  }
  return '';
}

function ensureFeedbackEntryPoints() {
  if (document.getElementById('floating-feedback-entry')) return;

  const wrap = document.createElement('div');
  wrap.id = 'floating-feedback-entry';
  wrap.style.cssText = 'position:fixed;left:14px;bottom:140px;z-index:1200;display:flex;flex-direction:column;gap:10px;';
  wrap.innerHTML = `
    <button onclick="openComplaintModal()" style="background:#e63946;color:#fff;border:none;border-radius:999px;padding:12px 16px;font-family:'Cairo',sans-serif;font-weight:700;cursor:pointer;box-shadow:0 10px 25px rgba(0,0,0,.22);">
      <i class="fas fa-comment-dots"></i> شكوى
    </button>
    <button onclick="openReviewModal()" style="background:#d4a017;color:#111;border:none;border-radius:999px;padding:12px 16px;font-family:'Cairo',sans-serif;font-weight:700;cursor:pointer;box-shadow:0 10px 25px rgba(0,0,0,.22);">
      <i class="fas fa-star"></i> تقييم
    </button>
  `;
  document.body.appendChild(wrap);

  const modal = document.createElement('div');
  modal.id = 'feedback-modal-wrap';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.62);z-index:1300;display:none;align-items:center;justify-content:center;padding:18px;';
  modal.innerHTML = `
    <div style="width:min(520px,100%);background:#101010;border:1px solid rgba(255,255,255,.08);border-radius:20px;overflow:hidden;">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-bottom:1px solid rgba(255,255,255,.08);">
        <div id="feedback-modal-title" style="font-family:'Cairo',sans-serif;font-size:1rem;font-weight:800;color:#fff;">تواصل معنا</div>
        <button onclick="closeFeedbackModal()" style="background:none;border:none;color:#bbb;font-size:1.1rem;cursor:pointer;"><i class="fas fa-times"></i></button>
      </div>
      <div style="padding:18px;">
        <input id="feedback-name" class="form-input" placeholder="اسمك" style="margin-bottom:10px;">
        <input id="feedback-phone" class="form-input" placeholder="رقم الموبايل" style="margin-bottom:10px;">
        <div id="feedback-rating-wrap" style="display:none;margin-bottom:10px;">
          <select id="feedback-rating" class="form-input">
            <option value="5">5 نجوم</option>
            <option value="4">4 نجوم</option>
            <option value="3">3 نجوم</option>
            <option value="2">2 نجوم</option>
            <option value="1">1 نجمة</option>
          </select>
        </div>
        <textarea id="feedback-message" class="form-input" rows="4" placeholder="اكتب رسالتك" style="resize:vertical;"></textarea>
        <button id="feedback-submit-btn" onclick="submitFeedbackEntry()" class="btn-primary" style="width:100%;justify-content:center;margin-top:14px;">
          إرسال
        </button>
      </div>
    </div>
  `;
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeFeedbackModal();
  });
  document.body.appendChild(modal);
}

function calculateCartSubtotal() {
  return cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 1;
    return sum + (price * qty);
  }, 0);
}

function normalizeCouponCode(value) {
  return String(value || '').trim().toLowerCase();
}

function computeCouponDiscount(coupon, subtotal) {
  if (!coupon) return 0;

  const type = String(coupon.type || coupon.discountType || '').toLowerCase();
  const value = Number(
    coupon.value ??
    coupon.amount ??
    coupon.discount ??
    coupon.percent ??
    coupon.percentage ??
    0
  ) || 0;

  if (!value || subtotal <= 0) return 0;

  if (type.includes('percent') || type.includes('نسب')) {
    return Math.min(subtotal, Math.round((subtotal * value) / 100));
  }

  return Math.min(subtotal, value);
}

function findCartCheckoutButton() {
  return document.querySelector('button[onclick*="checkout"]');
}

function injectCouponUI() {
  const checkoutBtn = findCartCheckoutButton();
  if (!checkoutBtn || document.getElementById('cart-coupon-box')) return;

  const box = document.createElement('div');
  box.id = 'cart-coupon-box';
  box.style.cssText = 'margin:12px 0 14px;background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:14px;padding:12px;';
  box.innerHTML = `
    <div style="font-family:'Cairo',sans-serif;font-size:.88rem;font-weight:700;margin-bottom:8px;">كوبون الخصم</div>
    <div style="display:flex;gap:8px;align-items:center;">
      <input id="cart-coupon-input" class="form-input" placeholder="اكتب الكوبون" style="flex:1;">
      <button id="cart-coupon-apply" onclick="applyCouponCode()" class="btn-primary" style="padding:10px 14px;border-radius:10px;">تطبيق</button>
    </div>
    <div id="cart-coupon-status" style="margin-top:8px;font-size:.8rem;color:var(--text-secondary);"></div>
    <div id="cart-coupon-summary" style="margin-top:8px;font-size:.82rem;color:#f5deb3;"></div>
  `;
  checkoutBtn.parentElement.insertBefore(box, checkoutBtn);
}

function syncCouponUI() {
  injectCouponUI();
  const statusEl = document.getElementById('cart-coupon-status');
  const summaryEl = document.getElementById('cart-coupon-summary');
  const inputEl = document.getElementById('cart-coupon-input');
  if (!statusEl || !summaryEl || !inputEl) return;

  const subtotal = calculateCartSubtotal();
  if (!cart.length) {
    appliedCoupon = null;
  }

  if (!appliedCoupon) {
    statusEl.textContent = 'اكتب كوبون الخصم ثم اضغط تطبيق.';
    summaryEl.textContent = '';
    return;
  }

  inputEl.value = appliedCoupon.code || '';
  const discount = computeCouponDiscount(appliedCoupon.raw, subtotal);
  const totalAfterDiscount = Math.max(0, subtotal - discount);
  statusEl.innerHTML = `✅ تم تطبيق الكوبون <strong>${appliedCoupon.code}</strong> <button onclick="removeCouponCode()" style="margin-inline-start:8px;background:none;border:none;color:#f87171;cursor:pointer;">إزالة</button>`;
  summaryEl.textContent = `الإجمالي قبل الخصم: ${subtotal} ج.م | الخصم: ${discount} ج.م | بعد الخصم: ${totalAfterDiscount} ج.م`;
}

async function applyCouponCode() {
  const input = document.getElementById('cart-coupon-input');
  const code = normalizeCouponCode(input?.value);
  const subtotal = calculateCartSubtotal();

  if (!cart.length) {
    showToast('⚠️ أضف منتجات للسلة أولًا');
    return;
  }
  if (!code) {
    showToast('⚠️ اكتب الكوبون');
    return;
  }
  if (!window.firebaseReady || !window.db) {
    showToast('⚠️ لا يمكن التحقق من الكوبون الآن');
    return;
  }

  try {
    const snap = await window.fsGetDocs(window.fsCollection(window.db, 'coupons'));
    const allCoupons = snap.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
    const coupon = allCoupons.find(item => normalizeCouponCode(item.code || item.name || item.id) === code);

    if (!coupon) {
      appliedCoupon = null;
      syncCouponUI();
      showToast('❌ الكوبون غير موجود');
      return;
    }

    const active = coupon.active !== false && coupon.enabled !== false;
    const minOrder = Number(coupon.minOrder || coupon.minTotal || 0) || 0;
    const expirySeconds = coupon.expiresAt?.seconds || 0;
    const isExpired = expirySeconds ? (Date.now() > expirySeconds * 1000) : false;

    if (!active || isExpired) {
      appliedCoupon = null;
      syncCouponUI();
      showToast('❌ الكوبون غير صالح');
      return;
    }

    if (subtotal < minOrder) {
      appliedCoupon = null;
      syncCouponUI();
      showToast(`⚠️ الحد الأدنى لتفعيل الكوبون هو ${minOrder} ج.م`);
      return;
    }

    appliedCoupon = {
      id: coupon.id,
      code: String(coupon.code || coupon.name || coupon.id).trim(),
      raw: coupon
    };
    syncCouponUI();
    showToast('✅ تم تطبيق الكوبون');
  } catch (error) {
    showToast('❌ تعذر التحقق من الكوبون');
  }
}

function removeCouponCode() {
  appliedCoupon = null;
  syncCouponUI();
}

function injectUnifiedFeedbackNav() {
  const floating = document.getElementById('floating-feedback-entry');
  if (floating) floating.style.display = 'none';

  if (document.getElementById('nav-feedback')) return;
  const nav = document.querySelector('.reference-bottom-nav, .bottom-nav, .bottom-nav-bar, .mobile-bottom-nav');
  if (!nav) return;

  const btn = document.createElement('button');
  btn.className = 'nav-item';
  btn.id = 'nav-feedback';
  btn.setAttribute('onclick', 'openFeedbackModal()');
  btn.innerHTML = '<i class="fas fa-comment-dots"></i><span>الشكاوى والتقييم</span>';
  nav.appendChild(btn);
}

function openFeedbackModal() {
  setNavActive('nav-feedback');
  ensureFeedbackEntryPoints();
  const title = document.getElementById('feedback-modal-title');
  const message = document.getElementById('feedback-message');
  const ratingWrap = document.getElementById('feedback-rating-wrap');
  if (title) title.textContent = 'الشكاوى والتقييمات';
  if (message) message.placeholder = 'اكتب الشكوى أو التقييم';
  if (ratingWrap) ratingWrap.style.display = 'block';
  const modal = document.getElementById('feedback-modal-wrap');
  if (modal) modal.style.display = 'flex';
}

window.openComplaintModal = openFeedbackModal;
window.openReviewModal = openFeedbackModal;

const submitFeedbackEntryOriginal = window.submitFeedbackEntry;
window.submitFeedbackEntry = async function unifiedFeedbackSubmit() {
  const message = getValueByCandidateIds(['feedback-message']);
  if (!message) {
    showToast('⚠️ اكتب رسالتك');
    return;
  }

  const name = getValueByCandidateIds(['feedback-name', 'customer-name', 'order-name']);
  const phone = getValueByCandidateIds(['feedback-phone', 'customer-phone', 'order-phone', 'phone']);
  const rating = Number(document.getElementById('feedback-rating')?.value || 5);

  if (!window.firebaseReady || !window.db) {
    showToast('⚠️ قاعدة البيانات غير متصلة الآن');
    return;
  }

  const btn = document.getElementById('feedback-submit-btn');
  if (btn) btn.disabled = true;

  try {
    const payload = {
      customerName: name || '',
      phone: phone || '',
      message,
      rating,
      type: 'feedback',
      status: 'new',
      createdAt: window.fsServerTimestamp()
    };

    await window.fsAddDoc(window.fsCollection(window.db, 'complaints'), payload);
    showToast('✅ تم إرسال رسالتك');
    ['feedback-name', 'feedback-phone', 'feedback-message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    const ratingEl = document.getElementById('feedback-rating');
    if (ratingEl) ratingEl.value = '5';
    closeFeedbackModal();
  } catch (error) {
    if (typeof submitFeedbackEntryOriginal === 'function') {
      return submitFeedbackEntryOriginal();
    }
    showToast('❌ تعذر الإرسال الآن');
  } finally {
    if (btn) btn.disabled = false;
  }
};

function findFieldValueBySelectors(selectors) {
  for (const selector of selectors) {
    const el = document.querySelector(selector);
    if (el && typeof el.value !== 'undefined' && String(el.value).trim()) {
      return String(el.value).trim();
    }
  }
  return '';
}

// checkout is defined as checkoutOverride below and assigned in DOMContentLoaded

async function loadBusinessHours() {
  const fallback = getFallbackBusinessHours();
  const cached = getCachedBusinessHours();

  if (!window.firebaseReady || !window.db) return cached || fallback;
  try {
    const snap = await withTimeout(
      window.fsGetDoc(window.fsDoc(window.db, 'settings', 'businessHours'))
    );
    if (!snap.exists()) return cached || fallback;
    const normalized = normalizeBusinessHoursMap(snap.data());
    persistBusinessHours(normalized);
    return normalized;
  } catch (error) {
    return cached || fallback;
  }
}

function normalizeBusinessHoursEntry(value, fallbackEntry = { closed: false, open: '12:00', close: '02:00' }) {
  if (!value) return { ...fallbackEntry };
  if (typeof value === 'object') {
    return {
      closed: value.closed === true,
      open: value.open || fallbackEntry.open,
      close: value.close || fallbackEntry.close
    };
  }

  const text = String(value).trim();
  if (!text || text === 'مغلق') {
    return { closed: true, open: fallbackEntry.open, close: fallbackEntry.close };
  }

  const match = text.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (!match) return { ...fallbackEntry };

  const open = convertLegacyTimeTo24(`${match[1]}:${match[2]}`, match[3]);
  const close = convertLegacyTimeTo24(`${match[4]}:${match[5]}`, match[6]);
  return { closed: false, open, close };
}

function convertLegacyTimeTo24(time, period) {
  const [hoursRaw, minutesRaw] = String(time).split(':');
  let hours = Number(hoursRaw);
  const minutes = String(minutesRaw || '00').padStart(2, '0');
  const meridiem = String(period || '').toUpperCase();

  if (meridiem === 'PM' && hours < 12) hours += 12;
  if (meridiem === 'AM' && hours === 12) hours = 0;
  return `${String(hours).padStart(2, '0')}:${minutes}`;
}

function formatTimeArabic(time24) {
  const [hoursRaw, minutesRaw] = String(time24 || '00:00').split(':');
  let hours = Number(hoursRaw);
  const minutes = String(minutesRaw || '00').padStart(2, '0');
  const period = hours >= 12 ? 'م' : 'ص';
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${period}`;
}

function formatBusinessHoursRange(entry) {
  if (!entry || entry.closed) return 'مغلق';
  return `${formatTimeArabic(entry.open)} - ${formatTimeArabic(entry.close)}`;
}

function getTodayBusinessHoursStatus(hours) {
  const dayMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const now = new Date();
  const currentKey = dayMap[now.getDay()];
  const todayEntry = normalizeBusinessHoursEntry(hours[currentKey], { closed: true, open: '12:00', close: '02:00' });
  const minutesNow = now.getHours() * 60 + now.getMinutes();

  if (todayEntry.closed) {
    return { isOpen: false, text: 'مغلق الآن', entry: todayEntry, key: currentKey };
  }

  const [openHour, openMinute] = todayEntry.open.split(':').map(Number);
  const [closeHour, closeMinute] = todayEntry.close.split(':').map(Number);
  const openMinutes = openHour * 60 + openMinute;
  let closeMinutes = closeHour * 60 + closeMinute;
  let isOpen = false;

  if (closeMinutes <= openMinutes) {
    if (minutesNow >= openMinutes) {
      isOpen = true;
    } else if (minutesNow <= closeMinutes) {
      isOpen = true;
    }
  } else {
    isOpen = minutesNow >= openMinutes && minutesNow <= closeMinutes;
  }

  return {
    isOpen,
    text: isOpen
      ? `مفتوح من ${formatTimeArabic(todayEntry.open)} إلى ${formatTimeArabic(todayEntry.close)}`
      : 'مغلق الآن',
    entry: todayEntry,
    key: currentKey
  };
}

function renderHeroOpenStatus(hours) {
  const badge = document.getElementById('reference-hero-status');
  if (!badge) return;
  const status = getTodayBusinessHoursStatus(hours);
  const compactText = status.isOpen ? 'مفتوح الآن' : 'مغلق الآن';
  const icon = status.isOpen ? 'fa-bag-shopping' : 'fa-clock';
  badge.classList.remove('is-open', 'is-closed');
  badge.classList.add(status.isOpen ? 'is-open' : 'is-closed');
  badge.title = status.text;
  badge.setAttribute('aria-label', status.text);
  badge.innerHTML = `
    <span class="reference-hero-status__icon" aria-hidden="true">
      <i class="fas ${icon}"></i>
    </span>
    <span class="reference-hero-status__text">${compactText}</span>
  `;
}

function renderBusinessHoursCard(hours) {
  const existing = document.getElementById('business-hours-card');
  if (existing) existing.remove();

  const anchor = document.getElementById('business-hours-mount');
  if (!anchor) return;

  const card = document.createElement('section');
  card.id = 'business-hours-card';
  card.className = 'business-hours-card';
  const labels = {
    saturday: 'السبت',
    sunday: 'الأحد',
    monday: 'الإثنين',
    tuesday: 'الثلاثاء',
    wednesday: 'الأربعاء',
    thursday: 'الخميس',
    friday: 'الجمعة'
  };
  card.innerHTML = `
    <div class="business-hours-card__header">
      <div class="business-hours-card__icon"><i class="fas fa-clock"></i></div>
      <div>
        <div class="business-hours-card__title">مواعيد العمل</div>
        <div class="business-hours-card__subtitle">أوقات الفتح والغلق خلال الأسبوع</div>
      </div>
    </div>
    <div class="business-hours-card__rows">
      ${Object.entries(labels).map(([key, label]) => `
        <div class="business-hours-card__row">
          <span>${label}</span>
          <span>${formatBusinessHoursRange(hours[key])}</span>
        </div>
      `).join('')}
    </div>
  `;
  anchor.appendChild(card);
}

function disableEmbeddedAdminPanel() {
  const panel = document.getElementById('admin-panel');
  if (panel) panel.remove();

  const trigger = document.getElementById('admin-trigger');
  if (trigger) trigger.remove();

  window.openAdmin = function openDedicatedAdmin() {
    window.location.href = 'admin.html';
  };

  window.closeAdmin = function closeEmbeddedAdmin() {};
  window.adminTab = function noopAdminTab() {};
}

function fixCheckoutButtonLabel() {
  const btn = document.querySelector('button[onclick*="checkout"]');
  if (!btn) return;
  btn.innerHTML = '<i class="fas fa-paper-plane"></i> تأكيد الطلب';
}

function enableCartScrolling() {
  const styleId = 'cart-scroll-fix-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      #cart-panel,
      .cart-panel {
        display: flex !important;
        flex-direction: column !important;
        height: 100dvh !important;
        max-height: 100dvh !important;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        -webkit-overflow-scrolling: touch !important;
      }

      #cart-body,
      .cart-body,
      #customer-form-wrap {
        flex: 0 0 auto !important;
      }

      #cart-footer,
      .cart-footer {
        flex: 0 0 auto !important;
        position: sticky !important;
        bottom: 0 !important;
        z-index: 5 !important;
        background: var(--bg-secondary, #fff) !important;
        padding-bottom: max(16px, env(safe-area-inset-bottom)) !important;
      }

      #cart-body,
      .cart-body {
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
        overscroll-behavior: contain !important;
        max-height: none !important;
        touch-action: pan-y !important;
        flex: 1 1 auto !important;
        min-height: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }

  const panel = document.getElementById('cart-panel');
  const body = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');

  if (panel) {
    panel.style.display = 'flex';
    panel.style.flexDirection = 'column';
    panel.style.height = '100dvh';
    panel.style.maxHeight = '100dvh';
    panel.style.overflowY = 'auto';
    panel.style.overflowX = 'hidden';
    panel.style.webkitOverflowScrolling = 'touch';
  }

  if (body) {
    body.style.flex = '1 1 auto';
    body.style.minHeight = '0';
    body.style.overflowY = 'auto';
    body.style.webkitOverflowScrolling = 'touch';
    body.style.overscrollBehavior = 'contain';
    body.style.touchAction = 'pan-y';
  }

  if (footer) {
    footer.style.flex = '0 0 auto';
    footer.style.position = 'sticky';
    footer.style.bottom = '0';
    footer.style.zIndex = '5';
  }
}

let currentFeedbackMode = 'complaint';

function openComplaintModal() {
  currentFeedbackMode = 'complaint';
  ensureFeedbackEntryPoints();
  document.getElementById('feedback-modal-title').textContent = 'إرسال شكوى';
  document.getElementById('feedback-message').placeholder = 'اكتب الشكوى أو المشكلة التي واجهتك';
  document.getElementById('feedback-rating-wrap').style.display = 'none';
  document.getElementById('feedback-modal-wrap').style.display = 'flex';
}

function openReviewModal() {
  currentFeedbackMode = 'review';
  ensureFeedbackEntryPoints();
  document.getElementById('feedback-modal-title').textContent = 'إضافة تقييم';
  document.getElementById('feedback-message').placeholder = 'اكتب تقييمك أو ملاحظاتك';
  document.getElementById('feedback-rating-wrap').style.display = 'block';
  document.getElementById('feedback-modal-wrap').style.display = 'flex';
}

function closeFeedbackModal() {
  const modal = document.getElementById('feedback-modal-wrap');
  if (modal) modal.style.display = 'none';
}

async function submitFeedbackEntry() {
  const name = getValueByCandidateIds(['feedback-name', 'customer-name', 'order-name']);
  const phone = getValueByCandidateIds(['feedback-phone', 'customer-phone', 'order-phone', 'phone']);
  const message = getValueByCandidateIds(['feedback-message']);
  const rating = Number(document.getElementById('feedback-rating')?.value || 5);

  if (!name || !phone || !message) {
    showToast('⚠️ اكتب الاسم والموبايل والرسالة');
    return;
  }

  if (!window.firebaseReady || !window.db) {
    showToast('⚠️ قاعدة البيانات غير متصلة الآن');
    return;
  }

  const btn = document.getElementById('feedback-submit-btn');
  if (btn) btn.disabled = true;

  try {
    if (currentFeedbackMode === 'complaint') {
      await window.fsAddDoc(window.fsCollection(window.db, 'complaints'), {
        customerName: name,
        phone,
        message,
        status: 'new',
        createdAt: window.fsServerTimestamp()
      });
      showToast('✅ تم إرسال الشكوى');
    } else {
      await window.fsAddDoc(window.fsCollection(window.db, 'reviews'), {
        customerName: name,
        phone,
        message,
        rating,
        createdAt: window.fsServerTimestamp()
      });
      showToast('✅ شكرًا على تقييمك');
    }

    ['feedback-name', 'feedback-phone', 'feedback-message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    const ratingEl = document.getElementById('feedback-rating');
    if (ratingEl) ratingEl.value = '5';
    closeFeedbackModal();
  } catch (error) {
    showToast('❌ تعذر الإرسال الآن');
  } finally {
    if (btn) btn.disabled = false;
  }
}

const trackOrderOverride = async function() {
  const input = document.getElementById('order-number-input');
  const result = document.getElementById('tracking-result');
  const queryValue = input?.value?.trim() || '';
  if (!result) return;
  if (!queryValue) {
    showToast('⚠️ أدخل رقم الطلب أو رقم الموبايل');
    return;
  }

  result.innerHTML = `
    <div style="text-align:center;padding:32px;color:var(--text-secondary);">
      <div class="loader-ring" style="margin:0 auto 12px;"></div>
      <p style="font-size:0.88rem;">جاري البحث...</p>
    </div>`;

  if (!window.firebaseReady || !window.db) {
    setTimeout(() => showDemoOrder(queryValue), 800);
    return;
  }

  try {
    const directSnap = await window.fsGetDoc(window.fsDoc(window.db, 'orders', queryValue));
    if (directSnap.exists()) {
      showOrderResult(directSnap.id, directSnap.data());
      return;
    }

    const inputPhone = queryValue.replace(/\D/g, '');
    const normalizedQuery = queryValue.toLowerCase();
    const allOrders = await window.fsGetDocs(window.fsCollection(window.db, 'orders'));
    const matches = allOrders.docs
      .map(docSnap => ({ id: docSnap.id, ...docSnap.data() }))
      .filter(order => {
        const phone = String(order.phone || '').replace(/\D/g, '');
        const displayPhone = String(order.displayPhone || '').replace(/\D/g, '');
        const rawPhone = String(order.phone || '').toLowerCase();
        const rawDisplayPhone = String(order.displayPhone || '').toLowerCase();
        return order.id.toLowerCase().includes(normalizedQuery)
          || rawPhone.includes(normalizedQuery)
          || rawDisplayPhone.includes(normalizedQuery)
          || (inputPhone && (phone.includes(inputPhone) || displayPhone.includes(inputPhone)));
      })
      .sort((a, b) => {
        const aTime = a.createdAt?.seconds || 0;
        const bTime = b.createdAt?.seconds || 0;
        return bTime - aTime;
      });

    if (matches.length) {
      showOrderResult(matches[0].id, matches[0]);
    } else {
      result.innerHTML = `
        <div style="text-align:center;padding:32px;color:var(--text-secondary);">
          <i class="fas fa-search" style="font-size:2.5rem;margin-bottom:12px;opacity:0.3;display:block;"></i>
          <p style="font-weight:600;margin-bottom:6px;">الطلب غير موجود</p>
          <p style="font-size:0.8rem;">تأكد من رقم الطلب أو رقم الموبايل وجرب مرة أخرى</p>
        </div>`;
    }
  } catch (error) {
    result.innerHTML = `
      <div style="text-align:center;padding:32px;color:var(--text-secondary);">
        <i class="fas fa-exclamation-triangle" style="font-size:2.2rem;margin-bottom:12px;opacity:0.45;display:block;"></i>
        <p style="font-weight:600;margin-bottom:6px;">تعذر تتبع الطلب الآن</p>
        <p style="font-size:0.8rem;">حاول مرة أخرى بعد قليل</p>
      </div>`;
  }
};
window.trackOrder = trackOrderOverride;

const checkoutOverride = async function() {
  const name = getValueByCandidateIds(['cust-name', 'customer-name', 'order-name', 'checkout-name', 'name']);
  const phone = getValueByCandidateIds(['cust-phone', 'customer-phone', 'order-phone', 'checkout-phone', 'phone']);
  const address = getValueByCandidateIds(['cust-address', 'customer-address', 'order-address', 'checkout-address', 'address']);
  const note = getValueByCandidateIds(['order-note', 'checkout-note', 'note']);
  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'delivery';

  if (!cart.length) { showToast('⚠️ السلة فارغة'); return; }
  if (!name) { showToast('❌ اكتب الاسم'); return; }
  if (!phone) { showToast('❌ اكتب رقم الموبايل'); return; }
  if (orderType === 'delivery' && !address) { showToast('❌ اكتب العنوان'); return; }
  if (!window.firebaseReady || !window.db) { showToast('⚠️ Firebase غير متصل'); return; }

  const subtotal = calculateCartSubtotal();
  const discountValue = appliedCoupon ? computeCouponDiscount(appliedCoupon.raw, subtotal) : 0;
  const total = Math.max(0, subtotal - discountValue);
  const normalizedPhone = phone.replace(/\D/g, '');

  try {
    const orderData = {
      customerName: name,
      phone: normalizedPhone || phone,
      displayPhone: phone,
      orderType,
      address: orderType === 'delivery' ? address : '',
      note,
      items: cart.map(item => ({
        ...item,
        qty: Number(item.qty) || 1,
        price: Number(item.price) || 0
      })),
      couponCode: appliedCoupon?.code || '',
      couponId: appliedCoupon?.id || '',
      discountValue,
      subtotalPrice: subtotal,
      totalPrice: total,
      status: 'new',
      createdAt: window.fsServerTimestamp()
    };

    const docRef = await window.fsAddDoc(window.fsCollection(window.db, 'orders'), orderData);
    showToast(`✅ طلبك وصل للمطعم. رقم الطلب: ${docRef.id}`);
    appliedCoupon = null;
    cart = [];
    updateCartUI();
    if (typeof closeCart === 'function') closeCart();
    setMenuHeroHidden(false);
    setNavActive('nav-home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    showToast('❌ فشل إرسال الطلب');
  }
};
window.checkout = checkoutOverride;

const originalUpdateCartUI = typeof window.updateCartUI === 'function' ? window.updateCartUI : null;
window.updateCartUI = function wrappedUpdateCartUI(...args) {
  if (originalUpdateCartUI) {
    originalUpdateCartUI.apply(this, args);
  }
  syncCouponUI();
  fixCheckoutButtonLabel();
  enableCartScrolling();
};

async function hydrateAppFromFirebase() {
  if (!window.firebaseReady || !window.db || firebaseHydrationStarted) {
    return false;
  }

  firebaseHydrationStarted = true;

  try {
    await ensureRequiredSectionsExist();
    await seedFirebaseMenuIfEmpty();
    await loadMenuFromFirebaseOnce();
    refreshMenuUI();
    const businessHours = await loadBusinessHours();
    renderHeroOpenStatus(businessHours);
    startMenuRealtimeSync();
    return true;
  } catch (error) {
    return false;
  }
}

// ==========================================
// 12. INIT
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  disableEmbeddedAdminPanel();
  setupMobileMenu();
  window.trackOrder = trackOrderOverride;
  window.checkout = checkoutOverride;

  if (!restoreCachedMenuData()) {
    restoreFallbackMenuData();
  }

  ensureHeroLandingState();
  forceViewportTop();
  refreshMenuUI();
  updateCartUI();
  fixCheckoutButtonLabel();
  enableCartScrolling();
  ensureFeedbackEntryPoints();
  injectUnifiedFeedbackNav();
  renderHeroOpenStatus(getInitialBusinessHours());
  hidePageLoader();

  if (window.firebaseReady) {
    hydrateAppFromFirebase();
  } else {
    document.addEventListener('firebaseReady', () => {
      window.checkout = checkoutOverride;
      hydrateAppFromFirebase();
    }, { once: true });
  }
});

window.addEventListener('pageshow', event => {
  if (!event.persisted) {
    return;
  }

  ensureHeroLandingState();
  forceViewportTop();
});

// renderHeroOpenStatus is defined earlier in this file (single canonical version)
