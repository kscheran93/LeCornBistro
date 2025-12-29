export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  tags?: string[]; // V, VG, GF, DF
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  note?: string;
}

export const menuData: MenuCategory[] = [
  {
    title: "Popcorn",
    items: [
      { name: "Classic Salted", description: "Light, warm, cinema-style salt.", price: "£3.00", tags: ["V", "GF"] },
      { name: "Sweet & Salty", description: "Balanced, addictive crunch.", price: "£3.50", tags: ["V", "GF"] },
      { name: "Caramel Gold", description: "Sticky caramel glaze.", price: "£4.00", tags: ["V", "GF"] },
      { name: "Choco Drizzle", description: "Chocolate drizzle finish.", price: "£4.50", tags: ["V", "GF"] },
      { name: "Cheddar Burst", description: "Cheesy flavour hit.", price: "£4.00", tags: ["V", "GF"] },
      { name: "Spicy Paprika", description: "Smoky heat, not too hot.", price: "£4.00", tags: ["V", "GF"] },
    ],
  },
  {
    title: "Sweetcorn Cups",
    items: [
      { name: "Classic Butter & Salt", description: "Dairy-free option available.", price: "£3.50", tags: ["V"] },
      { name: "Chilli & Lime", description: "Zesty, street-style kick.", price: "£4.00", tags: ["V", "VG", "GF"] },
      { name: "Peri-Peri", description: "Mild/Hot choice.", price: "£4.00", tags: ["V", "VG", "GF"] },
      { name: "Garlic Herb", description: "Comfort flavour, super popular.", price: "£4.00", tags: ["V", "GF"] },
      { name: "Mexican Style", description: "Creamy, tangy, spice dust.", price: "£4.50", tags: ["V"] },
      { name: "Curry Spice", description: "Warm spice blend + lemon.", price: "£4.00", tags: ["V", "VG", "GF"] },
    ],
  },
  {
    title: "Hot Drinks (Coffee & Tea)",
    note: "Oat milk available for +£0.40",
    items: [
      { name: "Espresso", description: "Strong and smooth.", price: "£2.00", tags: ["V"] },
      { name: "Americano", description: "Bold, classic.", price: "£2.80", tags: ["V"] },
      { name: "Latte", description: "Creamy comfort.", price: "£3.80", tags: ["V"] },
      { name: "Cappuccino", description: "Foamy top, rich taste.", price: "£3.80", tags: ["V"] },
      { name: "Flat White", description: "Silky and strong.", price: "£3.90", tags: ["V"] },
      { name: "Tea (Builders / Earl Grey / Green)", description: "Ask for options.", price: "£2.20", tags: ["V", "VG"] },
    ],
  },
  {
    title: "Cold Drinks",
    items: [
      { name: "Sparkling Water", price: "£1.80", tags: ["V", "VG", "GF"] },
      { name: "Still Water", price: "£1.50", tags: ["V", "VG", "GF"] },
      { name: "Canned Cola", price: "£2.00", tags: ["V", "VG", "GF"] },
      { name: "Lemonade", price: "£2.00", tags: ["V", "VG", "GF"] },
      { name: "Iced Coffee", price: "£3.80", tags: ["V"] },
      { name: "Iced Tea (Peach/Lemon)", price: "£2.80", tags: ["V", "VG", "GF"] },
    ],
  },
  {
    title: "Crisps",
    items: [
      { name: "Ready Salted", price: "£1.20", tags: ["V", "VG"] },
      { name: "Salt & Vinegar", price: "£1.20", tags: ["V", "VG"] },
      { name: "Cheese & Onion", price: "£1.20", tags: ["V"] },
      { name: "Prawn Cocktail", price: "£1.20", tags: ["V"] },
      { name: "BBQ", price: "£1.20", tags: ["V", "VG"] },
      { name: "Sweet Chilli", price: "£1.20", tags: ["V", "VG"] },
    ],
  },
  {
    title: "Smoothies",
    items: [
      { name: "Berry Blast", description: "Mixed berries + apple juice.", price: "£4.50", tags: ["V", "VG", "GF"] },
      { name: "Mango Sunrise", description: "Mango + pineapple.", price: "£4.50", tags: ["V", "VG", "GF"] },
      { name: "Green Boost", description: "Spinach + apple + banana.", price: "£4.80", tags: ["V", "VG", "GF"] },
      { name: "Tropical Mix", description: "Passionfruit vibes.", price: "£4.80", tags: ["V", "VG", "GF"] },
      { name: "Banana Oat", description: "Oats + banana (energy).", price: "£4.80", tags: ["V", "VG"] },
      { name: "Strawberry Classic", description: "Simple & sweet.", price: "£4.50", tags: ["V", "VG", "GF"] },
    ],
  },
  {
    title: "Milkshakes",
    items: [
      { name: "Vanilla Shake", price: "£4.50", tags: ["V"] },
      { name: "Chocolate Shake", price: "£4.80", tags: ["V"] },
      { name: "Strawberry Shake", price: "£4.80", tags: ["V"] },
      { name: "Oreo Shake", price: "£5.20", tags: ["V"] },
      { name: "Banana Shake", price: "£4.80", tags: ["V"] },
      { name: "Salted Caramel Shake", price: "£5.20", tags: ["V"] },
    ],
  },
];
