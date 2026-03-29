export const MENU_CATEGORIES = [
  {
    name: "Tea",
    items: [
      { name: "Quetta Tea", price: "Rs. 250" },
      { name: "Cardamom Tea", price: "Rs. 250" },
      { name: "Zafrani Tea", price: "Rs. 250" },
      { name: "Karak Special Tea", price: "Rs. 250" },
      { name: "Chocolate Tea", price: "Rs. 280" },
      { name: "Doodh Patti Special", price: "Rs. 280" },
      { name: "Sulemani Tea Indian (kehwa)", price: "Rs. 200" },
      { name: "Masala Tea", price: "Rs. 280" },
      { name: "Malai Tea", price: "Rs. 280" },
      { name: "Karak Ginger Tea", price: "Rs. 280" },
      { name: "Green Tea", price: "Rs. 200" }
    ]
  },
  {
    name: "Mocktails",
    items: [
      { name: "Mint Margarita", price: "Rs. 300" },
      { name: "Pina Colada", price: "Rs. 350" },
      { name: "Blue Colada", price: "Rs. 350" },
      { name: "Pineapple Chiller", price: "Rs. 300" },
      { name: "Lemonade Chiller", price: "Rs. 300" },
      { name: "Strawberry Margarita", price: "Rs. 350" },
      { name: "Mojito (Blueberry / Strawberry)", price: "Rs. 350" },
      { name: "Shakes (Strawberry / Chocolate)", price: "Rs. 350" },
      { name: "Fresh Lime", price: "Rs. 200" }
    ]
  },
  {
    name: "Quetta Coffee House",
    items: [
      { name: "Hot Coffee", price: "Rs. 300" },
      { name: "Cappuccino", price: "Rs. 450" },
      { name: "Latte", price: "Rs. 450" },
      { name: "Beater", price: "Rs. 400" },
      { name: "Iced Coffee", price: "Rs. 400" }
    ]
  },
  {
    name: "Starters",
    items: [
      { name: "Plain Fries", price: "Rs. 300" },
      { name: "Masala Fries", price: "Rs. 330" },
      { name: "Cheese Fries", price: "Rs. 450" },
      { name: "Loaded Fries", price: "Rs. 500" },
      { name: "Chicken Strips (6 Pieces)", price: "Rs. 600" }
    ]
  },
  {
    name: "Burgers",
    items: [
      { name: "Zinger Burger", price: "Rs. 400" },
      { name: "Monster Zinger Burger", price: "Rs. 600" },
      { name: "Jalapeno Crunchy Burger", price: "Rs. 600" },
      { name: "Pizza Burger", price: "Rs. 500" },
      { name: "Quetta Stuffed Chicken Burger", price: "Rs. 700" }
    ]
  },
  {
    name: "Sandwiches",
    items: [
      { name: "Chicken Club Sandwich", price: "Rs. 450" },
      { name: "BBQ Sandwich", price: "Rs. 400" },
      { name: "Grilled Sandwich", price: "Rs. 450" },
      { name: "Cheese Sandwich", price: "Rs. 450" },
      { name: "Fajita Sandwich", price: "Rs. 450" }
    ]
  },
  {
    name: "Wraps & Shawarma",
    items: [
      { name: "Chicken Cheese Wrap", price: "Rs. 450" },
      { name: "BBQ Wrap", price: "Rs. 400" },
      { name: "Tortilla Wrap", price: "Rs. 400" },
      { name: "Chicken Shawarma", price: "Rs. 350" },
      { name: "Zinger Shawarma", price: "Rs. 400" },
      { name: "Quetta Signature Platter", price: "Rs. 650" }
    ]
  },
  {
    name: "Pizza",
    type: "pizza",
    items: [
      { name: "Chicken Tikka", prices: { S: 550, M: 950, L: 1550 } },
      { name: "Chicken Fajita", prices: { S: 550, M: 950, L: 1550 } },
      { name: "Chicken Supreme", prices: { S: 600, M: 1000, L: 1600 } },
      { name: "Malai Boti", prices: { S: 600, M: 1050, L: 1650 } },
      { name: "Quetta Signature", prices: { S: 1200, M: 1750, L: 1800 } }
    ]
  },
  {
    name: "Chinese Gravy",
    type: "dual",
    items: [
      { name: "Almond Chicken", prices: { Half: 499, Full: 799 } },
      { name: "Garlic Chicken", prices: { Half: 499, Full: 799 } },
      { name: "Black Pepper Chicken", prices: { Half: 499, Full: 799 } },
      { name: "Manchurian Chicken", prices: { Half: 499, Full: 799 } },
      { name: "Chilli Dry Chicken", prices: { Half: 549, Full: 949 } },
      { name: "Cashew Nut Chicken", prices: { Half: 549, Full: 949 } },
      { name: "Chicken Chowmein", price: "Rs. 600" }
    ]
  },
  {
    name: "Chinese Rice",
    type: "dual",
    items: [
      { name: "Chicken Masala Rice", prices: { Half: 399, Full: 549 } },
      { name: "Egg Fried Rice", prices: { Half: 399, Full: 549 } },
      { name: "Chicken Fried Rice", prices: { Half: 449, Full: 649 } }
    ]
  },
  {
    name: "Pasta & Steaks",
    items: [
      { name: "Fettuccine Alfredo Pasta", price: "Rs. 850" },
      { name: "California Crispy Pasta", price: "Rs. 700" },
      { name: "Tarragon Steak", price: "Rs. 900" },
      { name: "Mexican Steak", price: "Rs. 900" },
      { name: "Peri Peri Steak", price: "Rs. 900" },
      { name: "Stuffed Chicken Steak", price: "Rs. 1050" }
    ]
  },
  {
    name: "Quetta Karahi Corner",
    type: "dual",
    items: [
      { name: "Chicken Karahi Black Pepper", prices: { Half: 1100, Full: 2050 } },
      { name: "Chicken White Karahi", prices: { Half: 1100, Full: 2050 } },
      { name: "Chicken Changezi", prices: { Half: 1100, Full: 2050 } },
      { name: "Chicken Hara Masala Karahi", prices: { Half: 1100, Full: 2050 } }
    ]
  },
  {
    name: "Chicken Handi",
    type: "dual",
    items: [
      { name: "Chicken Handi", prices: { Half: 1100, Full: 2050 } },
      { name: "Chicken Achari Handi", price: "Rs. 1300" },
      { name: "Chicken Jalfrezi", price: "Rs. 1300" },
      { name: "Butter Handi", price: "Rs. 1300" }
    ]
  },
  {
    name: "Paratha & Tandoor",
    items: [
      { name: "Lacha Paratha", price: "Rs. 150" },
      { name: "Aloo Paratha", price: "Rs. 200" },
      { name: "Malai Paratha", price: "Rs. 350" },
      { name: "Chicken Paratha", price: "Rs. 400" },
      { name: "Chicken Cheese Paratha", price: "Rs. 450" },
      { name: "Quetta Special Paratha", price: "Rs. 500" },
      { name: "Saada Roti", price: "Rs. 30" },
      { name: "Roghni Naan", price: "Rs. 150" },
      { name: "Kalwanji Naan", price: "Rs. 150" },
      { name: "Garlic Naan", price: "Rs. 150" },
      { name: "Hara Bhara Naan", price: "Rs. 180" }
    ]
  },
  {
    name: "Rolls",
    items: [
      { name: "Chicken Tikka Roll", price: "Rs. 450" },
      { name: "Chicken Malai Boti Roll", price: "Rs. 450" }
    ]
  },
  {
    name: "Beverages & Salad",
    items: [
      { name: "Mineral Water (Small)", price: "Rs. 90" },
      { name: "Mineral Water (Large)", price: "Rs. 130" },
      { name: "Cold Drink (350ml)", price: "Rs. 130" },
      { name: "Cold Drink (1.5L)", price: "Rs. 230" },
      { name: "Raita", price: "Rs. 80" },
      { name: "Fresh Salad", price: "Rs. 120" },
      { name: "Crushed Salad", price: "Rs. 150" }
    ]
  }
];
