export type Category = {
  id: string;
  name: string;
  icon: string;
  note: string;
  accent: string;
};

export const runtime = 'edge';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  ingredients: string[];
  image: string;
  badge?: string;
  popular?: boolean;
  accent?: string;
  unit?: string;
};

export const categories: Category[] = [
  {
    id: "cakes",
    name: "Cakes",
    icon: "✿",
    note: "Made for milestones",
    accent: "#9d492b",
  },
  {
    id: "pastries",
    name: "Pastries",
    icon: "◒",
    note: "Buttery & delicate",
    accent: "#b87543",
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "♡",
    note: "Little sweet moments",
    accent: "#7c805d",
  },
  {
    id: "breads",
    name: "Bakery",
    icon: "⌁",
    note: "Fresh from the oven",
    accent: "#8a6749",
  },
  {
    id: "savory",
    name: "Savory",
    icon: "◇",
    note: "Baked, not ordinary",
    accent: "#8b5c48",
  },
  {
    id: "beverages",
    name: "Beverages",
    icon: "☕",
    note: "Warm & refreshing",
    accent: "#5f6650",
  },
  {
    id: "gifts",
    name: "Gift Boxes",
    icon: "▣",
    note: "Beautifully boxed",
    accent: "#9d492b",
  },
];

export const products: Product[] = [
  {
    id: "signature-chocolate-cake",
    slug: "signature-chocolate-cake",
    name: "Signature Chocolate Cake",
    category: "cakes",
    price: 4200,
    oldPrice: 4600,
    rating: 4.9,
    reviews: 138,
    description:
      "Silky chocolate sponge, dark chocolate ganache and a soft cream finish, layered for celebrations.",
    ingredients: [
      "Chocolate sponge",
      "Dark chocolate",
      "Fresh cream",
      "Cocoa",
      "Vanilla",
    ],
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    badge: "SIGNATURE",
    popular: true,
    accent: "#8f452f",
  },

  {
    id: "red-velvet-cake",
    slug: "red-velvet-cake",
    name: "Velvet Red Cake",
    category: "cakes",
    price: 3900,
    rating: 4.8,
    reviews: 112,
    description:
      "Moist red velvet layers with smooth cream-cheese frosting and a refined crumb finish.",
    ingredients: [
      "Cocoa",
      "Cream cheese",
      "Vanilla",
      "Buttermilk",
    ],
    image:
      "https://i.pinimg.com/1200x/63/ce/84/63ce84cf5b948ecf95304a25ce8b5834.jpg?auto=format&fit=crop&w=1200&q=85",
    badge: "BESTSELLER",
    popular: true,
    accent: "#9d492b",
  },

  {
    id: "vanilla-berry-cake",
    slug: "vanilla-berry-cake",
    name: "Vanilla Berry Celebration",
    category: "cakes",
    price: 4400,
    rating: 4.9,
    reviews: 86,
    description:
      "Vanilla chiffon, whipped cream and bright berry layers finished with a delicate garden look.",
    ingredients: [
      "Vanilla",
      "Fresh cream",
      "Berries",
      "Butter",
    ],
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1200&q=85",
    badge: "NEW",
    popular: true,
    accent: "#7c805d",
  },

  {
    id: "croissant-butter",
    slug: "croissant-butter",
    name: "Classic Butter Croissant",
    category: "pastries",
    price: 420,
    rating: 4.8,
    reviews: 74,
    description:
      "Laminated dough baked until deeply golden, crisp outside and feather-light inside.",
    ingredients: [
      "Butter",
      "Flour",
      "Milk",
      "Yeast",
      "Sea salt",
    ],
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
    badge: "FRESH DAILY",
    popular: true,
  },

  {
    id: "cinnamon-roll",
    slug: "cinnamon-roll",
    name: "Brown Sugar Cinnamon Roll",
    category: "pastries",
    price: 520,
    rating: 4.9,
    reviews: 91,
    description:
      "Soft spiral dough, warm cinnamon sugar and a light vanilla glaze.",
    ingredients: [
      "Cinnamon",
      "Brown sugar",
      "Butter",
      "Vanilla",
    ],
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1200&q=85",
    badge: "HOUSE FAVOURITE",
    popular: true,
  },

  {
    id: "berry-danish",
    slug: "berry-danish",
    name: "Berry Cream Danish",
    category: "pastries",
    price: 480,
    rating: 4.7,
    reviews: 51,
    description:
      "Flaky Danish pastry filled with vanilla cream and seasonal berry compote.",
    ingredients: [
      "Puff pastry",
      "Vanilla cream",
      "Berries",
      "Butter",
    ],
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    badge: "SEASONAL",
  },

  {
    id: "fudge-brownie",
    slug: "fudge-brownie",
    name: "Dark Fudge Brownie",
    category: "desserts",
    price: 350,
    rating: 4.9,
    reviews: 127,
    description:
      "Dense, glossy and deeply chocolatey with a tender centre and crisp top.",
    ingredients: [
      "Dark chocolate",
      "Cocoa",
      "Butter",
      "Brown sugar",
    ],
    image:
      "https://i.pinimg.com/1200x/2c/30/24/2c302496197d48115f20a161aa49a9ea.jpg?auto=format&fit=crop&w=1200&q=85",
    badge: "BESTSELLER",
    popular: true,
  },

  {
    id: "pistachio-cheesecake",
    slug: "pistachio-cheesecake",
    name: "Pistachio Cheesecake",
    category: "desserts",
    price: 650,
    rating: 4.8,
    reviews: 62,
    description:
      "Creamy baked cheesecake with pistachio, biscuit crumb and a gentle nutty finish.",
    ingredients: [
      "Cream cheese",
      "Pistachio",
      "Biscuit",
      "Vanilla",
    ],
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85",
    badge: "PREMIUM",
  },

  {
    id: "chocolate-chip-cookie",
    slug: "chocolate-chip-cookie",
    name: "Sea Salt Chocolate Cookie",
    category: "desserts",
    price: 280,
    rating: 4.8,
    reviews: 89,
    description:
      "Thick-baked cookie with molten chocolate pockets and a tiny sea-salt finish.",
    ingredients: [
      "Dark chocolate",
      "Butter",
      "Flour",
      "Sea salt",
    ],
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=85",
    badge: "FRESH DAILY",
  },

  {
    id: "sourdough-loaf",
    slug: "sourdough-loaf",
    name: "Country Sourdough",
    category: "breads",
    price: 650,
    rating: 4.7,
    reviews: 43,
    description:
      "Slow-fermented loaf with a crisp crust, open crumb and a gently tangy finish.",
    ingredients: [
      "Wheat flour",
      "Water",
      "Starter",
      "Sea salt",
    ],
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=85",
    badge: "BAKERY PICK",
  },

  {
    id: "garlic-herb-bread",
    slug: "garlic-herb-bread",
    name: "Garlic Herb Pull-Apart",
    category: "breads",
    price: 580,
    rating: 4.8,
    reviews: 55,
    description:
      "Soft pull-apart bread layered with garlic butter, parsley and roasted herbs.",
    ingredients: [
      "Flour",
      "Garlic",
      "Butter",
      "Parsley",
    ],
    image:
      "https://i.pinimg.com/736x/31/43/46/314346bf2c8b89191e82a07f26d199e5.jpg?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "chicken-puff",
    slug: "chicken-puff",
    name: "Creamy Chicken Puff",
    category: "savory",
    price: 420,
    rating: 4.7,
    reviews: 48,
    description:
      "Golden flaky puff filled with creamy seasoned chicken and herbs.",
    ingredients: [
      "Chicken",
      "Puff pastry",
      "Cream",
      "Herbs",
    ],
    image:
      "https://i.pinimg.com/1200x/30/c7/56/30c75644623ac4b1ac5ee06acba5f9df.jpg?auto=format&fit=crop&w=1200&q=85",
    badge: "SAVORY PICK",
  },

  {
    id: "party-sandwiches",
    slug: "party-sandwiches",
    name: "Mini Celebration Sandwiches",
    category: "savory",
    price: 1450,
    rating: 4.8,
    reviews: 31,
    description:
      "A neat platter of petite sandwiches for meetings, parties and family tables.",
    ingredients: [
      "Bread",
      "Chicken",
      "Cheese",
      "Fresh vegetables",
    ],
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=85",
    badge: "PARTY BOX",
  },

  {
    id: "signature-latte",
    slug: "signature-latte",
    name: "MamMameyo Signature Latte",
    category: "beverages",
    price: 480,
    rating: 4.8,
    reviews: 67,
    description:
      "Silky espresso with steamed milk and a gentle house caramel note.",
    ingredients: [
      "Espresso",
      "Milk",
      "House caramel",
    ],
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=85",
    badge: "HOUSE DRINK",
  },

  {
    id: "hot-chocolate",
    slug: "hot-chocolate",
    name: "Velvet Hot Chocolate",
    category: "beverages",
    price: 520,
    rating: 4.9,
    reviews: 58,
    description:
      "Rich drinking chocolate finished with soft cream for slow evenings.",
    ingredients: [
      "Dark chocolate",
      "Milk",
      "Cream",
      "Vanilla",
    ],
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1200&q=85",
    badge: "COZY PICK",
  },

  {
    id: "celebration-gift-box",
    slug: "celebration-gift-box",
    name: "The Celebration Box",
    category: "gifts",
    price: 3950,
    oldPrice: 4400,
    rating: 5.0,
    reviews: 44,
    description:
      "A curated mix of brownies, cookies and mini pastries, finished in our signature gift packaging.",
    ingredients: [
      "Brownies",
      "Cookies",
      "Mini pastries",
      "Gift card",
    ],
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1200&q=85",
    badge: "GIFTING FAVOURITE",
    popular: true,
  },

  {
    id: "birthday-dessert-box",
    slug: "birthday-dessert-box",
    name: "Birthday Dessert Box",
    category: "gifts",
    price: 3250,
    rating: 4.9,
    reviews: 36,
    description:
      "A celebration-ready box with individual desserts and a handwritten message card.",
    ingredients: [
      "Mini cakes",
      "Brownies",
      "Cookies",
      "Message card",
    ],
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=85",
    badge: "CELEBRATION",
  },
];

export const offers = [
  {
    code: "MAMMEYO10",
    title: "10% OFF",
    sub: "On celebration orders above Rs. 3,000",
    label: "WELCOME TREAT",
  },
  {
    code: "GIFTLOVE",
    title: "GIFT READY",
    sub: "Complimentary message card on gift boxes",
    label: "GIFTING",
  },
  {
    code: "WEEKEND",
    title: "WEEKEND BOX",
    sub: "A curated selection for family tables",
    label: "HOUSE SPECIAL",
  },
];

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}