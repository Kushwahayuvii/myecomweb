// Shared product data — Home, Shop, ProductDetail sab yahan se lenge
export const allProducts = [
  // ── Watches ──
  {
    id: 1, name: "Apple Watch Series 9", price: "₹41,999", numericPrice: 41999,
    category: "watches", rating: 4.6, reviews: 2341, stock: 12,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrDkwIMdorBq_1r6dO7CFw8z7Y6tG2CJUmYzYZehlAzpwriX8H_e00XpLsWmjNWKPDZDOleWtCRy9fBE1MRjK_Q6_3UptuUg8pLkkzaO8",
    description: "Apple Watch Series 9 features the powerful S9 chip with double tap gesture, always-on Retina display, and advanced health sensors including ECG and blood oxygen monitoring.",
    highlights: ["S9 SiP chip", "Always-On Retina display", "ECG & Blood Oxygen", "Crash Detection", "WR50 Water Resistant", "18hr battery"],
    specs: { Display: "41mm OLED", Chip: "Apple S9", Battery: "18 hours", Water: "WR50", OS: "watchOS 10", Connectivity: "WiFi + Bluetooth 5.3" },
    userReviews: [
      { name: "Arjun M.", rating: 5, comment: "Best smartwatch I've ever used! The double tap feature is amazing.", date: "Jan 2025" },
      { name: "Priya S.", rating: 4, comment: "Great build quality and health tracking. Battery could be better.", date: "Dec 2024" },
      { name: "Rohit K.", rating: 5, comment: "Seamless Apple ecosystem integration. Worth every rupee!", date: "Nov 2024" },
    ],
  },
  {
    id: 2, name: "Samsung Galaxy Watch 6", price: "₹28,999", numericPrice: 28999,
    category: "watches", rating: 4.3, reviews: 1876,  stock: 8,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrDkwIMdorBq_1r6dO7CFw8z7Y6tG2CJUmYzYZehlAzpwriX8H_e00XpLsWmjNWKPDZDOleWtCRy9fBE1MRjK_Q6_3UptuUg8pLkkzaO8",
    description: "Samsung Galaxy Watch 6 with advanced health monitoring, sleep coaching, and a stunning Super AMOLED display for Android users.",
    highlights: ["Advanced Sleep Coaching", "Body Composition Analysis", "Super AMOLED Display", "5ATM Water Resistant", "Exynos W930 chip"],
    specs: { Display: "44mm Super AMOLED", Chip: "Exynos W930", Battery: "40hr", Water: "5ATM", OS: "Wear OS 4", Connectivity: "WiFi + BT 5.3" },
    userReviews: [
      { name: "Sneha R.", rating: 4, comment: "Great Android companion. Sleep tracking is very accurate.", date: "Jan 2025" },
      { name: "Vikram P.", rating: 5, comment: "Love the rotating bezel and health features!", date: "Dec 2024" },
    ],
  },
  {
    id: 3, name: "Fitbit Versa 4", price: "₹19,999", numericPrice: 19999,
    category: "watches", rating: 4.1, reviews: 987, stock: 20,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrDkwIMdorBq_1r6dO7CFw8z7Y6tG2CJUmYzYZehlAzpwriX8H_e00XpLsWmjNWKPDZDOleWtCRy9fBE1MRjK_Q6_3UptuUg8pLkkzaO8",
    description: "Fitbit Versa 4 is a fitness-first smartwatch with built-in GPS, stress management, and 6-day battery life.",
    highlights: ["Built-in GPS", "6-day battery", "Stress Management Score", "Google Maps & Wallet", "Daily Readiness Score"],
    specs: { Display: "AMOLED", GPS: "Built-in", Battery: "6 days", Water: "50m", OS: "Fitbit OS", Connectivity: "WiFi + BT 5.0" },
    userReviews: [
      { name: "Anjali T.", rating: 4, comment: "Perfect for fitness enthusiasts. GPS is very accurate.", date: "Dec 2024" },
    ],
  },
  {
    id: 4, name: "Noise ColorFit Pro 4", price: "₹3,499", numericPrice: 3499,
    category: "watches", rating: 3.9, reviews: 5432, stock: 50,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrDkwIMdorBq_1r6dO7CFw8z7Y6tG2CJUmYzYZehlAzpwriX8H_e00XpLsWmjNWKPDZDOleWtCRy9fBE1MRjK_Q6_3UptuUg8pLkkzaO8",
    description: "Noise ColorFit Pro 4 offers Bluetooth calling, SpO2 monitoring, and 100+ sports modes at an unbeatable price.",
    highlights: ["Bluetooth Calling", "1.72\" HD Display", "SpO2 & Heart Rate", "100+ Sports Modes", "7-day battery"],
    specs: { Display: '1.72" TFT LCD', Battery: "7 days", Water: "IP68", Calling: "Bluetooth", GPS: "Connected" },
    userReviews: [
      { name: "Rahul G.", rating: 4, comment: "Amazing value for money! Bluetooth calling works great.", date: "Jan 2025" },
      { name: "Meena S.", rating: 3, comment: "Good for the price. Build quality is decent.", date: "Dec 2024" },
    ],
  },
  // ── Shoes ──
  {
    id: 5, name: "Nike Air Max 270", price: "₹12,999", numericPrice: 12999,
    category: "shoes", rating: 4.5, reviews: 3210, stock: 15,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgH-a_MeOy5ie7ixiEvLuHqdPixYnQwucMDhyySuhuYOEK5OrjxYu9ouJ7GbPdz9gMRSb6OtS08Hu3fc4mnkqL8M9vrcIanVVziHzWG5yh",
    description: "Nike Air Max 270 features Nike's biggest heel Air unit yet for an incredibly plush feel that's perfect for all-day wear.",
    highlights: ["Largest heel Air unit", "Lightweight mesh upper", "Foam midsole", "Rubber outsole", "Available in 10+ colors"],
    specs: { Upper: "Engineered mesh", Midsole: "Foam + Air", Outsole: "Rubber", Weight: "298g", Sizes: "UK 6-12" },
    userReviews: [
      { name: "Dev B.", rating: 5, comment: "Super comfortable! Wearing them all day without any discomfort.", date: "Jan 2025" },
      { name: "Kiran N.", rating: 4, comment: "Great looks and comfort. A bit pricey but worth it.", date: "Dec 2024" },
    ],
  },
  {
    id: 6, name: "Adidas Ultraboost 22", price: "₹15,999", numericPrice: 15999,
    category: "shoes", rating: 4.7, reviews: 2109, stock: 10,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgH-a_MeOy5ie7ixiEvLuHqdPixYnQwucMDhyySuhuYOEK5OrjxYu9ouJ7GbPdz9gMRSb6OtS08Hu3fc4mnkqL8M9vrcIanVVziHzWG5yh",
    description: "Adidas Ultraboost 22 with responsive BOOST cushioning and a Linear Energy Push system returns energy with every stride.",
    highlights: ["BOOST midsole", "Primeknit+ upper", "Linear Energy Push", "Continental rubber outsole", "Recycled materials"],
    specs: { Upper: "Primeknit+", Midsole: "BOOST", Outsole: "Continental Rubber", Weight: "312g", Sizes: "UK 6-13" },
    userReviews: [
      { name: "Sanjay K.", rating: 5, comment: "Best running shoes ever! The boost cushioning is incredible.", date: "Jan 2025" },
    ],
  },
  {
    id: 7, name: "Puma RS-X3", price: "₹8,999", numericPrice: 8999,
    category: "shoes", rating: 4.2, reviews: 1543, stock: 25,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgH-a_MeOy5ie7ixiEvLuHqdPixYnQwucMDhyySuhuYOEK5OrjxYu9ouJ7GbPdz9gMRSb6OtS08Hu3fc4mnkqL8M9vrcIanVVziHzWG5yh",
    description: "Puma RS-X3 reinvents the RS running system with oversized RS cushioning for a bold retro-futuristic look.",
    highlights: ["RS cushioning system", "Chunky retro design", "Mesh & synthetic upper", "Rubber outsole", "Padded collar"],
    specs: { Upper: "Mesh + Synthetic", Midsole: "RS Foam", Outsole: "Rubber", Style: "Retro", Sizes: "UK 6-12" },
    userReviews: [
      { name: "Aisha P.", rating: 4, comment: "Love the chunky design. Very comfortable for casual wear.", date: "Dec 2024" },
    ],
  },
  {
    id: 8, name: "Campus North Plus", price: "₹2,499", numericPrice: 2499,
    category: "shoes", rating: 3.8, reviews: 8765, stock: 100,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgH-a_MeOy5ie7ixiEvLuHqdPixYnQwucMDhyySuhuYOEK5OrjxYu9ouJ7GbPdz9gMRSb6OtS08Hu3fc4mnkqL8M9vrcIanVVziHzWG5yh",
    description: "Campus North Plus offers excellent grip and comfort for everyday use at a budget-friendly price.",
    highlights: ["Lightweight design", "EVA midsole", "Anti-skid outsole", "Breathable mesh", "Budget-friendly"],
    specs: { Upper: "Mesh", Midsole: "EVA", Outsole: "Rubber", Weight: "240g", Sizes: "UK 6-11" },
    userReviews: [
      { name: "Rohan M.", rating: 4, comment: "Great value! Comfortable for daily use.", date: "Jan 2025" },
    ],
  },
  // ── Smartphones ──
  {
    id: 9, name: "iPhone 15 Pro Max", price: "₹1,59,900", numericPrice: 159900,
    category: "smartphones", rating: 4.8, reviews: 4521, stock: 5,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNbqQq2Umlm6VO7EQOY8UfrXmBB6Vnexm-J9Ka-UHGxtKmK9lzr9jdxhfbU1cmod_pPvuDOJgJ3QySwoJ1SDuhgT3QJJW76kbkqEOT9riauSCv4KPPWMy2IA",
    description: "iPhone 15 Pro Max with A17 Pro chip, titanium design, Action Button, and the most advanced iPhone camera system.",
    highlights: ["A17 Pro chip", "Titanium body", "5x Optical zoom", "Action Button", "USB 3 speeds", "ProMotion 120Hz"],
    specs: { Display: "6.7\" Super Retina XDR", Chip: "A17 Pro", Camera: "48MP + 12MP + 12MP", Battery: "4422mAh", Storage: "256GB-1TB", OS: "iOS 17" },
    userReviews: [
      { name: "Nikhil S.", rating: 5, comment: "Simply the best iPhone ever made. Camera is mind-blowing!", date: "Jan 2025" },
      { name: "Pooja R.", rating: 5, comment: "The titanium body feels premium. Worth the price!", date: "Dec 2024" },
      { name: "Amit T.", rating: 4, comment: "Great phone but battery life could be better.", date: "Nov 2024" },
    ],
  },
  {
    id: 10, name: "Samsung Galaxy S24 Ultra", price: "₹1,29,999", numericPrice: 129999,
    category: "smartphones", rating: 4.7, reviews: 3876, stock: 8,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNbqQq2Umlm6VO7EQOY8UfrXmBB6Vnexm-J9Ka-UHGxtKmK9lzr9jdxhfbU1cmod_pPvuDOJgJ3QySwoJ1SDuhgT3QJJW76kbkqEOT9riauSCv4KPPWMy2IA",
    description: "Samsung Galaxy S24 Ultra with built-in S Pen, 200MP camera, and Galaxy AI for a truly intelligent smartphone experience.",
    highlights: ["Built-in S Pen", "200MP main camera", "Galaxy AI features", "Snapdragon 8 Gen 3", "5000mAh battery", "Titanium frame"],
    specs: { Display: "6.8\" Dynamic AMOLED 2X", Chip: "Snapdragon 8 Gen 3", Camera: "200MP+12MP+10MP+50MP", Battery: "5000mAh", Storage: "256GB-1TB", OS: "Android 14" },
    userReviews: [
      { name: "Kartik V.", rating: 5, comment: "S Pen + AI features = productivity beast! Love this phone.", date: "Jan 2025" },
    ],
  },
  {
    id: 11, name: "OnePlus 12", price: "₹64,999", numericPrice: 64999,
    category: "smartphones", rating: 4.5, reviews: 2134, stock: 15,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNbqQq2Umlm6VO7EQOY8UfrXmBB6Vnexm-J9Ka-UHGxtKmK9lzr9jdxhfbU1cmod_pPvuDOJgJ3QySwoJ1SDuhgT3QJJW76kbkqEOT9riauSCv4KPPWMy2IA",
    description: "OnePlus 12 with Snapdragon 8 Gen 3, Hasselblad cameras, and 100W SUPERVOOC charging for the fastest charging flagship.",
    highlights: ["Snapdragon 8 Gen 3", "Hasselblad cameras", "100W SUPERVOOC", "5400mAh battery", "120Hz LTPO4 AMOLED"],
    specs: { Display: "6.82\" LTPO4 AMOLED", Chip: "Snapdragon 8 Gen 3", Camera: "50MP+64MP+48MP", Battery: "5400mAh", Charging: "100W", OS: "OxygenOS 14" },
    userReviews: [
      { name: "Rahul D.", rating: 5, comment: "Fastest charging phone! 0 to 100% in under 30 mins.", date: "Jan 2025" },
    ],
  },
  {
    id: 12, name: "Nothing Phone 2", price: "₹44,999", numericPrice: 44999,
    category: "smartphones", rating: 4.3, reviews: 1654, stock: 20,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNbqQq2Umlm6VO7EQOY8UfrXmBB6Vnexm-J9Ka-UHGxtKmK9lzr9jdxhfbU1cmod_pPvuDOJgJ3QySwoJ1SDuhgT3QJJW76kbkqEOT9riauSCv4KPPWMy2IA",
    description: "Nothing Phone 2 with iconic Glyph Interface, clean Nothing OS, and Snapdragon 8+ Gen 1 for a unique smartphone experience.",
    highlights: ["Glyph Interface", "Snapdragon 8+ Gen 1", "Clean Nothing OS", "4700mAh battery", "50W fast charging"],
    specs: { Display: "6.7\" LTPO OLED", Chip: "Snapdragon 8+ Gen 1", Camera: "50MP+50MP", Battery: "4700mAh", Charging: "50W", OS: "Nothing OS 2.5" },
    userReviews: [
      { name: "Zara A.", rating: 4, comment: "Most unique phone design! Glyph lights are very functional.", date: "Dec 2024" },
    ],
  },
  // ── Perfumes ──
  {
    id: 13, name: "Dior Sauvage EDT", price: "₹8,999", numericPrice: 8999,
    category: "perfumes", rating: 4.6, reviews: 1234, stock: 30,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg",
    description: "Dior Sauvage EDT — a powerful masculine fragrance inspired by wide-open Southwestern landscapes. Fresh, raw, and radically free.",
    highlights: ["Top: Calabrian Bergamot", "Heart: Sichuan Pepper", "Base: Ambroxan", "100ml bottle", "Long-lasting 8-10hrs"],
    specs: { Type: "Eau de Toilette", Volume: "100ml", Longevity: "8-10 hours", Sillage: "Heavy", Season: "All seasons" },
    userReviews: [
      { name: "Ankit J.", rating: 5, comment: "THE best male fragrance. Always get compliments!", date: "Jan 2025" },
    ],
  },
  {
    id: 14, name: "Chanel Bleu de Chanel", price: "₹11,999", numericPrice: 11999,
    category: "perfumes", rating: 4.8, reviews: 987, stock: 20,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg",
    description: "Bleu de Chanel — a woody aromatic fragrance for the man who forges his own destiny. A symbol of freedom.",
    highlights: ["Citrus & Aromatic notes", "Woody Cedar base", "100ml bottle", "Iconic blue bottle", "10-12hr longevity"],
    specs: { Type: "Eau de Parfum", Volume: "100ml", Longevity: "10-12 hours", Sillage: "Moderate-Heavy", Season: "Fall/Winter" },
    userReviews: [
      { name: "Suresh M.", rating: 5, comment: "Timeless elegance. My go-to formal fragrance.", date: "Dec 2024" },
    ],
  },
  {
    id: 15, name: "Versace Eros", price: "₹6,499", numericPrice: 6499,
    category: "perfumes", rating: 4.4, reviews: 2341, stock: 40,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg",
    description: "Versace Eros — inspired by the Greek God of Love, a powerful and sensual fragrance that leaves a lasting impression.",
    highlights: ["Mint & Green Apple top", "Tonka Bean heart", "Vanilla base", "100ml bottle", "8hrs longevity"],
    specs: { Type: "Eau de Toilette", Volume: "100ml", Longevity: "8 hours", Sillage: "Heavy", Season: "Spring/Summer" },
    userReviews: [
      { name: "Isha K.", rating: 4, comment: "Great party fragrance. Very fresh and appealing.", date: "Jan 2025" },
    ],
  },
  {
    id: 16, name: "Hugo Boss Bottled", price: "₹4,999", numericPrice: 4999,
    category: "perfumes", rating: 4.2, reviews: 1876, stock: 60,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg",
    description: "Hugo Boss Bottled — the iconic fragrance for men. A timeless classic with apple, cinnamon, and sandalwood notes.",
    highlights: ["Apple & Plum top", "Cinnamon heart", "Sandalwood base", "100ml", "Office-friendly scent"],
    specs: { Type: "Eau de Toilette", Volume: "100ml", Longevity: "6-8 hours", Sillage: "Moderate", Season: "All seasons" },
    userReviews: [
      { name: "Vijay R.", rating: 4, comment: "Classic office fragrance. Very professional and clean.", date: "Dec 2024" },
    ],
  },
  // ── Backpacks ──
  {
    id: 17, name: "The North Face Borealis", price: "₹7,999", numericPrice: 7999,
    category: "backpacks", rating: 4.5, reviews: 876, stock: 18,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg",
    description: "The North Face Borealis — a versatile daypack with FlexVent suspension system and dedicated laptop sleeve for daily commuters.",
    highlights: ["28L capacity", "FlexVent suspension", "15\" laptop sleeve", "Multiple organizer pockets", "Recycled materials"],
    specs: { Volume: "28L", Material: "600D Recycled Polyester", Laptop: '15"', Weight: "1.04kg", Water: "Water-resistant" },
    userReviews: [
      { name: "Tanvi S.", rating: 5, comment: "Perfect college bag! Extremely comfortable to carry.", date: "Jan 2025" },
    ],
  },
  {
    id: 18, name: "Nike Heritage Backpack", price: "₹2,999", numericPrice: 2999,
    category: "backpacks", rating: 4.0, reviews: 2134, stock: 35,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg",
    description: "Nike Heritage Backpack with classic design, spacious main compartment, and padded straps for everyday use.",
    highlights: ["25L capacity", "Padded back panel", "Zippered front pocket", "Adjustable straps", "Iconic Nike design"],
    specs: { Volume: "25L", Material: "Polyester", Laptop: "Not included", Weight: "0.5kg", Water: "Splash-resistant" },
    userReviews: [
      { name: "Mohan L.", rating: 4, comment: "Stylish and practical. Good for gym and college.", date: "Dec 2024" },
    ],
  },
  {
    id: 19, name: "Wildcraft Laptop Backpack", price: "₹1,799", numericPrice: 1799,
    category: "backpacks", rating: 3.9, reviews: 4321, stock: 75,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg",
    description: "Wildcraft Laptop Backpack designed for Indian consumers with dedicated laptop compartment and ergonomic design.",
    highlights: ["30L capacity", "15.6\" laptop compartment", "Rain cover included", "Ergonomic back support", "USB port"],
    specs: { Volume: "30L", Material: "Nylon", Laptop: '15.6"', Weight: "0.7kg", Extra: "USB charging port" },
    userReviews: [
      { name: "Deepak A.", rating: 4, comment: "Best budget laptop bag! Rain cover is very useful.", date: "Jan 2025" },
    ],
  },
  {
    id: 20, name: "American Tourister Zip", price: "₹1,299", numericPrice: 1299,
    category: "backpacks", rating: 3.7, reviews: 6543, stock: 120,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStHekzBqzVcVyaO4BU2IU8H8-6fCN3om9gYWQfBhPWytsamYhQ5huqB93zW2_crQ98JpqxNI05ANSWnagsQRqbAKKx8h0JzOVa-X8jprZAU4OdtVsOgM5vaQg",
    description: "American Tourister Zip backpack — lightweight and affordable daily commuter bag with multiple compartments.",
    highlights: ["20L capacity", "Multiple compartments", "Lightweight design", "Padded straps", "Brand warranty"],
    specs: { Volume: "20L", Material: "Polyester", Laptop: "Not dedicated", Weight: "0.4kg", Warranty: "1 year" },
    userReviews: [
      { name: "Lata K.", rating: 3, comment: "Decent bag for the price. Does the job.", date: "Dec 2024" },
    ],
  },
];