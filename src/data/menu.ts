// Menu + deals data for The Quetta Tea 20 (QT20)
// Prices are numbers (PKR). Single-price items use `price`; items sold in
// multiple sizes use `prices` (an ordered label -> amount map). The UI renders
// whatever size labels exist, so new sizes need no code changes.

export type PriceMap = Record<string, number>;

export interface MenuItem {
  name: string;
  price?: number;
  prices?: PriceMap;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
  image?: string;
}

export interface Deal {
  id: string;
  name: string;
  items: string[];
  price: number;
  image: string;
}

// --- Deals (all Rs. 999) -----------------------------------------------------
// deal_2 image not supplied yet; path is reserved. When deal_2.png is added to
// /public/media, run the same WebP conversion and switch this to /media/deal_2.webp.
export const DEALS: Deal[] = [
  {
    id: "deal-1",
    name: "Deal 1: Chai Scene",
    items: ["2 Tea Karak Special", "1 Chicken Cheese Paratha", "1 Malai Paratha"],
    price: 999,
    image: "/media/deal_1.webp",
  },
  {
    id: "deal-2",
    name: "Deal 2: Burger Feast",
    items: ["2 Zinger Burgers or 2 Jalapeno Burgers", "1 Regular Fries", "2 Regular Cokes"],
    price: 999,
    image: "/media/deal_2.webp",
  },
  {
    id: "deal-3",
    name: "Deal 3: Sandwich Combo",
    items: ["1 Grill Sandwich", "1 Club Sandwich", "1 Regular Fries", "2 Regular Cokes"],
    price: 999,
    image: "/media/deal_3.webp",
  },
  {
    id: "deal-4",
    name: "Deal 4: Pizza Night",
    items: ["1 Medium Pizza", "1 Regular Fries", "2 Regular Cokes"],
    price: 999,
    image: "/media/deal_4.webp",
  },
  {
    id: "deal-5",
    name: "Deal 5: Pasta Duo",
    items: ["1 Pasta (Alfredo or California Crispy)", "1 Chicken Chowmein", "2 Regular Cokes"],
    price: 999,
    image: "/media/deal_5.webp",
  },
  {
    id: "deal-6",
    name: "Deal 6: Chinese Special",
    items: ["1 Egg Fried Rice (Full)", "1 Black Pepper Chicken Manchurian", "2 Regular Cokes"],
    price: 999,
    image: "/media/deal_6.webp",
  },
];

// --- Menu --------------------------------------------------------------------
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    name: "Starters",
    items: [
      { name: "Plain Fries", price: 300 },
      { name: "Masala Fries", price: 330 },
      { name: "Cheese Fries", price: 450 },
      { name: "Loaded Fries", price: 500 },
      { name: "Chicken Strips (6 Pieces)", price: 600 },
    ],
  },
  {
    name: "Tea",
    items: [
      { name: "Quetta Tea", price: 250 },
      { name: "Cardamom Tea", price: 250 },
      { name: "Zafrani Tea", price: 250 },
      { name: "Karak Special Tea", price: 250 },
      { name: "Chocolate Tea", price: 280 },
      { name: "Doodh Patti Special", price: 250 },
      { name: "Sulemani Tea Indian (Kehwa)", price: 200 },
      { name: "Masala Tea", price: 280 },
      { name: "Malai Tea", price: 280 },
      { name: "Karak Ginger Tea", price: 280 },
      { name: "Green Tea", price: 200 },
    ],
  },
  {
    name: "Quetta Coffee House",
    items: [
      { name: "Hot Coffee", price: 300 },
      { name: "Cappuccino", price: 450 },
      { name: "Latte", price: 450 },
      { name: "Beater", price: 400 },
      { name: "Iced Coffee", price: 400 },
    ],
  },
  {
    name: "Mocktail",
    items: [
      { name: "Mint Margarita", price: 300 },
      { name: "Pina Colada", price: 350 },
      { name: "Blue Colada", price: 350 },
      { name: "Pineapple Chiller", price: 300 },
      { name: "Lemonade Chiller", price: 300 },
      { name: "Strawberry Margarita", price: 300 },
      { name: "Mojito (Blueberry / Strawberry)", price: 350 },
      { name: "Shakes (Strawberry / Chocolate)", price: 350 },
      { name: "Fresh Lime", price: 200 },
    ],
  },
  {
    name: "Paratha",
    items: [
      { name: "Lacha Paratha", price: 150 },
      { name: "Aloo Paratha", price: 200 },
      { name: "Malai Paratha", price: 350 },
      { name: "Chicken Paratha", price: 400 },
      { name: "Chicken Cheese Paratha", price: 450 },
      { name: "Quetta Special Paratha", price: 500 },
    ],
  },
  {
    name: "Paratha Roll",
    items: [
      { name: "Chicken Tikka Roll", price: 450 },
      { name: "Chicken Malai Boti Roll", price: 450 },
    ],
  },
  {
    name: "Sandwich",
    items: [
      { name: "Chicken Club Sandwich", price: 450 },
      { name: "BBQ Sandwich", price: 400 },
      { name: "Grilled Sandwich", price: 450 },
      { name: "Cheese Sandwich", price: 450 },
      { name: "Fajita Sandwich", price: 450 },
    ],
  },
  {
    name: "Burger",
    items: [
      { name: "Zinger Burger", price: 400 },
      { name: "Monster Zinger Burger", price: 600 },
      { name: "Jalapeno Crunchy Burger", price: 500 },
      { name: "Pizza Burger", price: 600 },
      { name: "Quetta Stuffed Chicken Burger", price: 700 },
    ],
  },
  {
    name: "Wraps",
    items: [
      { name: "Chicken Cheese Wrap", price: 450 },
      { name: "BBQ Wrap", price: 400 },
      { name: "Tortilla Wrap", price: 400 },
    ],
  },
  {
    name: "Shawarma",
    items: [
      { name: "Chicken Shawarma", price: 350 },
      { name: "Zinger Shawarma", price: 400 },
      { name: "Quetta Signature Platter", price: 650 },
    ],
  },
  {
    name: "Steaks",
    items: [
      { name: "Tarragon Steak", price: 900 },
      { name: "Mexican Steak", price: 900 },
      { name: "Peri Peri Steak", price: 900 },
      { name: "Stuffed Chicken Steak", price: 1050 },
    ],
  },
  {
    name: "Pizza",
    items: [
      { name: "Chicken Tikka", prices: { S: 550, M: 950, L: 1550 } },
      { name: "Chicken Fajita", prices: { S: 550, M: 950, L: 1600 } },
      { name: "Chicken Supreme", prices: { M: 1000, L: 1650 } },
      { name: "Malai Boti", prices: { S: 600, M: 1050, L: 1750 } },
      { name: "Quetta Signature", prices: { M: 1200, L: 1800 } },
    ],
  },
  {
    name: "Pasta",
    items: [
      { name: "Fettuccine Alfredo Pasta", price: 850 },
      { name: "California Crispy Pasta", price: 700 },
    ],
  },
  {
    name: "Chinese (Rice)",
    items: [
      { name: "Chicken Masala Rice", prices: { Half: 399, Full: 549 } },
      { name: "Egg Fried Rice", prices: { Half: 399, Full: 549 } },
      { name: "Chicken Fried Rice", prices: { Half: 449, Full: 549 } },
    ],
  },
  {
    name: "Chinese (Gravy)",
    items: [
      { name: "Almond Chicken", prices: { Half: 499, Full: 799 } },
      { name: "Garlic Chicken", prices: { Half: 499, Full: 799 } },
      { name: "Black Pepper Chicken", prices: { Half: 499, Full: 799 } },
      { name: "Manchurian Chicken", prices: { Half: 499, Full: 799 } },
      { name: "Chilli Dry Chicken", prices: { Half: 549, Full: 949 } },
      { name: "Cashew Nut Chicken", prices: { Half: 549, Full: 949 } },
      { name: "Chicken Chowmein", prices: { Full: 600 } },
    ],
  },
  {
    name: "Quetta Karahi Corner",
    items: [
      { name: "Chicken Karahi Black Pepper", prices: { Half: 1100, Full: 2050 } },
      { name: "Chicken White Karahi", prices: { Half: 1100, Full: 2050 } },
      { name: "Chicken Changezi", prices: { Half: 1100, Full: 2050 } },
      { name: "Chicken Hara Masala Karahi", prices: { Half: 1100, Full: 2050 } },
    ],
  },
  {
    name: "Chicken Handi",
    items: [
      { name: "Chicken Handi", price: 1100 },
      { name: "Chicken Achari Handi", price: 1300 },
      { name: "Chicken Jalfrezi", price: 1300 },
      { name: "Butter Handi", price: 1300 },
    ],
  },
  {
    name: "Tandoori",
    items: [
      { name: "Saada Roti", price: 30 },
      { name: "Roghni Naan", price: 150 },
      { name: "Kalwanji Naan", price: 150 },
      { name: "Garlic Naan", price: 180 },
      { name: "Hara Bhara Naan", price: 180 },
    ],
  },
  {
    name: "Beverages",
    items: [
      { name: "Mineral Water (Small)", price: 90 },
      { name: "Mineral Water (Large)", price: 130 },
      { name: "Cold Drink (350 ml)", price: 130 },
      { name: "Cold Drink (1.5 L)", price: 230 },
    ],
  },
  {
    name: "Salad",
    items: [
      { name: "Raita", price: 80 },
      { name: "Fresh Salad", price: 120 },
      { name: "Crushed Salad", price: 150 },
    ],
  },
];

// Attach a section-header image path to each category (printed-menu style: one
// photo per section). Files live in /public/media/menu/<slug>.webp. Missing
// files degrade gracefully (the <img> hides itself via onerror), so categories
// without a photo simply show the title. Expected filenames, e.g.:
//   starters.webp, tea.webp, quetta-coffee-house.webp, burger.webp, pizza.webp ...
const slugify = (s: string): string =>
  s.toLowerCase().replace(/[()]/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

for (const category of MENU_CATEGORIES) {
  category.image = `/media/menu/${slugify(category.name)}.webp`;
}
