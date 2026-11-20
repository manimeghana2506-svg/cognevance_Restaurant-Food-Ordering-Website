/**
 * Savoria Gourmet Kitchen - Menu Data Repository
 * High-definition imagery, dietary categorization, and detailed nutritional info.
 */

const MENU_ITEMS = [
  // --- STARTERS ---
  {
    id: "dish-1",
    name: "Truffle Arancini di Riso",
    category: "starters",
    categoryLabel: "Starters & Small Bites",
    price: 14.50,
    originalPrice: 17.00,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Chef's Special",
    dietary: ["veg"],
    prepTime: "15 min",
    calories: "380 kcal",
    description: "Crispy saffron risotto spheres infused with black winter truffle and melted fontina cheese center.",
    longDescription: "Hand-rolled Carnaroli rice infused with saffron threads, stuffed with imported fontina cheese and freshly shaved black truffles, panko-crusted and fried to golden perfection. Served over our house-simmered San Marzano marinara.",
    ingredients: ["Carnaroli Rice", "Black Winter Truffle", "Fontina Cheese", "San Marzano Tomatoes", "Panko", "Fresh Basil"],
    allergens: ["Dairy", "Gluten"],
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=80",
    customizations: {
      sauces: ["San Marzano Marinara (Included)", "Garlic Truffle Aioli (+$1.50)", "Spicy Calabrian Chili Oil (+$1.00)"],
      options: ["Extra Fontina Cheese (+$2.00)", "Double Truffle Shavings (+$4.00)"]
    }
  },
  {
    id: "dish-2",
    name: "Charred Mediterranean Octopus",
    category: "starters",
    categoryLabel: "Starters & Small Bites",
    price: 19.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 98,
    badge: "Signature",
    dietary: ["gf"],
    prepTime: "20 min",
    calories: "320 kcal",
    description: "Spanish octopus char-grilled over embers, fingerling potato confit, smoked paprika emulsion, caper berries.",
    longDescription: "Tender Spanish octopus slowly braised with herbs then blistered over open charcoal embers. Accompanied by creamy fingerling potato confit, smoked Pimentón de la Vera emulsion, and sun-kissed caper berries.",
    ingredients: ["Spanish Octopus", "Fingerling Potatoes", "Smoked Paprika", "Extra Virgin Olive Oil", "Capers", "Lemon"],
    allergens: ["Molluscs"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    customizations: {
      sauces: ["Smoked Paprika Emulsion", "Salsa Verde (+$1.00)"],
      options: ["Extra Grilled Tentacle (+$7.00)", "Warm Artisanal Pita (+$2.50)"]
    }
  },
  {
    id: "dish-3",
    name: "Burrata Pugliese & Heirloom Tomato",
    category: "starters",
    categoryLabel: "Starters & Small Bites",
    price: 16.00,
    originalPrice: 18.50,
    rating: 4.9,
    reviewsCount: 210,
    badge: "Popular",
    dietary: ["veg", "gf"],
    prepTime: "10 min",
    calories: "410 kcal",
    description: "Creamy hand-tied Italian burrata with multi-color heirloom tomatoes, aged Modena balsamic, basil pesto.",
    longDescription: "Directly flown from Puglia, Italy, our decadent burrata rests on a bed of sweet multi-colored heirloom tomatoes, dressed with 25-year aged traditional Modena balsamic vinegar, micro-basil, and toasted pine nut pesto.",
    ingredients: ["Pugliese Burrata", "Organic Heirloom Tomatoes", "Modena Balsamic Vinegar", "Pine Nuts", "Sweet Basil", "Fleur de Sel"],
    allergens: ["Dairy", "Tree Nuts"],
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80",
    customizations: {
      sauces: ["Aged Balsamic Glaze", "Basil Pesto Infusion"],
      options: ["Add Prosciutto di Parma (+$4.50)", "Grilled Ciabatta Crostini (+$2.00)"]
    }
  },

  // --- MAINS ---
  {
    id: "dish-4",
    name: "Prime Dry-Aged Ribeye Steak (12oz)",
    category: "mains",
    categoryLabel: "Signature Mains",
    price: 44.00,
    originalPrice: 52.00,
    rating: 5.0,
    reviewsCount: 312,
    badge: "Award Winner",
    dietary: ["gf"],
    prepTime: "25 min",
    calories: "780 kcal",
    description: "45-day dry-aged USDA Prime beef, rosemary bone-marrow butter, roasted garlic shallot jus, parsnip purée.",
    longDescription: "Our showcase cut is aged for 45 days in Himalayan salt-lined chambers for supreme tenderness and nutty depth. Cast-iron seared with fresh rosemary sprigs, basted in bone marrow butter, and plated with silky parsnip mousseline and red wine reduction.",
    ingredients: ["USDA Prime Ribeye", "Rosemary Bone Marrow Butter", "Parsnip Purée", "Caramelized Shallots", "Red Wine Demi-Glace"],
    allergens: ["Dairy"],
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    customizations: {
      doneness: ["Medium Rare (Recommended)", "Rare", "Medium", "Medium Well", "Well Done"],
      sides: ["Truffle Parmesan Fries (+$4.00)", "Charred Asparagus (+$3.50)", "Garlic Mash (+$3.00)"],
      options: ["Seared Foie Gras Topper (+$12.00)", "Garlic Butter Prawns (+$8.00)"]
    }
  },
  {
    id: "dish-5",
    name: "Pan-Seared Chilean Sea Bass",
    category: "mains",
    categoryLabel: "Signature Mains",
    price: 38.50,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 175,
    badge: "Catch of the Day",
    dietary: ["gf"],
    prepTime: "22 min",
    calories: "520 kcal",
    description: "Sustainably caught sea bass fillet, saffron velouté, baby bok choy, lemongrass ginger infused oil.",
    longDescription: "Buttery, flaky wild Chilean sea bass crisped to perfection on the skin side while keeping the center melt-in-mouth succulent. Plated atop a velvety saffron-infused fumet broth, wilted baby bok choy, and crispy lotus root crisps.",
    ingredients: ["Chilean Sea Bass", "Saffron Fumet Broth", "Baby Bok Choy", "Lemongrass", "Ginger Essence", "Lotus Root"],
    allergens: ["Fish"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    customizations: {
      sides: ["Saffron Jasmine Rice (Included)", "Steamed Broccolini (+$3.00)"],
      options: ["Extra Saffron Velouté (+$2.00)", "Caviar Garnish (+$9.00)"]
    }
  },
  {
    id: "dish-6",
    name: "Duck Confit with Cherry Balsamic Reduction",
    category: "mains",
    categoryLabel: "Signature Mains",
    price: 32.00,
    originalPrice: 36.00,
    rating: 4.8,
    reviewsCount: 120,
    badge: "French Classic",
    dietary: ["gf"],
    prepTime: "20 min",
    calories: "690 kcal",
    description: "Slow-rendered crispy duck leg, sweet potato and thyme mash, sour cherry gastrique, wilted swiss chard.",
    longDescription: "Prepared over 14 hours in aromatic duck fat with fresh thyme and juniper berries until fork-tender with crackling golden skin. Accompanied by velvety roasted sweet potato puree and a luscious Michigan tart cherry balsamic gastrique.",
    ingredients: ["Moulard Duck Leg", "Tart Cherries", "Balsamic Glaze", "Sweet Potato", "Fresh Thyme", "Swiss Chard"],
    allergens: ["Dairy"],
    image: "https://images.unsplash.com/photo-1514944298352-78d12e69315b?auto=format&fit=crop&w=800&q=80",
    customizations: {
      sides: ["Sweet Potato Mash (Included)", "Herb Butter Potatoes (+$2.50)"],
      options: ["Extra Cherry Gastrique (+$1.50)"]
    }
  },
  {
    id: "dish-7",
    name: "Wild Mushroom & Truffle Risotto",
    category: "mains",
    categoryLabel: "Signature Mains",
    price: 27.00,
    originalPrice: 30.00,
    rating: 4.9,
    reviewsCount: 284,
    badge: "Vegetarian Gold",
    dietary: ["veg", "gf"],
    prepTime: "20 min",
    calories: "560 kcal",
    description: "Creamy Acquerello rice, sautéed morel, chanterelle, and porcini mushrooms, 24-month Parmigiano Reggiano.",
    longDescription: "A luxurious Italian specialty slow-stirred with vegetable broth infused with dried porcini mushrooms, aged Acquerello carnaroli rice, and a bountiful blend of sautéed forest mushrooms. Finished with cold butter and shaved white truffle carpaccio.",
    ingredients: ["Acquerello Rice", "Morel & Porcini Mushrooms", "White Truffle Oil", "24-mo Parmigiano Reggiano", "White Wine"],
    allergens: ["Dairy"],
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    customizations: {
      options: ["Make it 100% Vegan (Plant Butter & Cheeze)", "Add Shaved Fresh Black Truffle (+$6.00)", "Add Grilled Herb Chicken (+$5.00)"]
    }
  },

  // --- PASTA & PIZZA ---
  {
    id: "dish-8",
    name: "Handmade Pappardelle al Cinghiale",
    category: "pasta-pizza",
    categoryLabel: "Wood-Fired & Handcrafted Pasta",
    price: 26.50,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 167,
    badge: "Tuscan Heirloom",
    dietary: ["non-veg"],
    prepTime: "18 min",
    calories: "640 kcal",
    description: "Silk ribbons of fresh egg pasta tossed with 8-hour slow-braised wild boar ragù, rosemary, and pecorino toscano.",
    longDescription: "Rolled and cut by hand every morning in our open pasta lab. Tossed vigorously in a rich, slow-simmered Chianti wild boar ragù, fragrant rosemary leaves, juniper berries, and topped with shaved Pecorino Toscano DOP cheese.",
    ingredients: ["Housemade Egg Pappardelle", "Braised Wild Boar", "Chianti Classico", "Rosemary", "Pecorino Toscano"],
    allergens: ["Dairy", "Gluten", "Eggs"],
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80",
    customizations: {
      pastaType: ["Fresh Pappardelle (Included)", "Gluten-Free Penne (+$2.00)"],
      cheese: ["Shaved Pecorino Toscano (Included)", "Extra Pecorino (+$1.50)"]
    }
  },
  {
    id: "dish-9",
    name: "Wood-Fired Tartufata & Prosciutto Pizza",
    category: "pasta-pizza",
    categoryLabel: "Wood-Fired & Handcrafted Pasta",
    price: 24.00,
    originalPrice: 28.00,
    rating: 5.0,
    reviewsCount: 390,
    badge: "Best Seller",
    dietary: ["non-veg"],
    prepTime: "12 min",
    calories: "820 kcal",
    description: "72-hour fermented sourdough crust, Fior di Latte mozzarella, black truffle cream, Prosciutto di Parma, wild arugula.",
    longDescription: "Baked at 900°F in our Neapolitan wood-fired brick oven for 90 seconds. Topped with a silky truffle crema, artisan Fior di Latte, aged Prosciutto di Parma laid fresh upon removal, wild baby arugula, and shaved Parmigiano.",
    ingredients: ["72h Sourdough Base", "Fior di Latte Mozzarella", "Truffle Crema", "Prosciutto di Parma 24mo", "Organic Baby Arugula"],
    allergens: ["Dairy", "Gluten"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    customizations: {
      crust: ["Traditional Sourdough Neapolitan", "Gluten-Free Crust (+$3.50)", "Double Fermented Thick Crust (+$2.00)"],
      toppings: ["Hot Honey Drizzle (+$1.50)", "Extra Fresh Mozzarella (+$2.50)", "Spicy Nduja Crumbles (+$3.00)"]
    }
  },
  {
    id: "dish-10",
    name: "Lobster Ravioli in Champagne Butter Sauce",
    category: "pasta-pizza",
    categoryLabel: "Wood-Fired & Handcrafted Pasta",
    price: 29.50,
    originalPrice: 34.00,
    rating: 4.8,
    reviewsCount: 145,
    badge: "Seafood Deluxe",
    dietary: ["non-veg"],
    prepTime: "20 min",
    calories: "590 kcal",
    description: "Handmade ravioli stuffed with sweet Maine lobster and ricotta, finished in a Meyer lemon champagne emulsion.",
    longDescription: "Delicate pasta pillows filled with succulent chunks of cold-water Maine lobster claw and creamy hand-dipped ricotta. Sautéed with sweet shallots, tarragon, crisp haricots verts, and an ethereal Veuve Clicquot champagne reduction.",
    ingredients: ["Maine Lobster", "Egg Pasta Dough", "Whole Milk Ricotta", "Champagne Reduction", "Meyer Lemon Zest", "Fresh Tarragon"],
    allergens: ["Crustaceans", "Dairy", "Gluten", "Eggs"],
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    customizations: {
      options: ["Extra Champagne Butter Sauce (+$2.00)", "Add 2 Jumbo Grilled Shrimp (+$6.00)"]
    }
  },
  {
    id: "dish-11",
    name: "Diavola & Calabrian Hot Honey Pizza",
    category: "pasta-pizza",
    categoryLabel: "Wood-Fired & Handcrafted Pasta",
    price: 22.50,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 215,
    badge: "Spicy Favorite",
    dietary: ["spicy", "non-veg"],
    prepTime: "12 min",
    calories: "790 kcal",
    description: "San Marzano sauce, smoked provolone, artisanal spicy soppressata, chili flakes, infused wildflower hot honey.",
    longDescription: "A spicy culinary masterpiece. Crispy bubbly crust loaded with tangy San Marzano tomato sauce, smoked provolone, crispy cup pepperoni and spicy soppressata, drizzled with raw wildflower honey infused with hot Calabrian peppers.",
    ingredients: ["San Marzano Sauce", "Spicy Soppressata", "Smoked Provolone", "Calabrian Hot Honey", "Fresh Oregano"],
    allergens: ["Dairy", "Gluten"],
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
    customizations: {
      spiceLevel: ["Mild", "Medium Kick", "Authentic Fire"],
      options: ["Extra Hot Honey Dip (+$1.50)", "Burrata Ball in Center (+$4.50)"]
    }
  },

  // --- GOURMET BURGERS & GRILLS ---
  {
    id: "dish-12",
    name: "The Royal Wagyu Truffle Burger",
    category: "burgers",
    categoryLabel: "Gourmet Burgers & Grills",
    price: 23.50,
    originalPrice: 27.00,
    rating: 5.0,
    reviewsCount: 420,
    badge: "Crowd Favorite",
    dietary: ["non-veg"],
    prepTime: "15 min",
    calories: "890 kcal",
    description: "A5 Miyazaki Wagyu beef patty, black truffle mayo, caramelized balsamic onions, cave-aged Gruyère on brioche.",
    longDescription: "Juicy half-pound patty made of 100% Japanese A5 Wagyu blend, griddled to medium with a caramelized crust. Topped with bubbling cave-aged Swiss Gruyère, slow-stewed sweet balsamic onions, black winter truffle aioli, tucked into a toasted butter brioche bun with crispy fries.",
    ingredients: ["A5 Wagyu Beef", "Brioche Bun", "Cave-Aged Gruyère", "Truffle Aioli", "Caramelized Red Onions", "Baby Spinach"],
    allergens: ["Dairy", "Gluten", "Eggs"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    customizations: {
      temperature: ["Medium Rare", "Medium", "Medium Well"],
      fries: ["Rosemary Sea Salt Fries (Included)", "Truffle Parm Fries (+$2.50)", "Sweet Potato Fries (+$2.00)"],
      extras: ["Applewood Smoked Bacon (+$2.50)", "Over-Easy Fried Duck Egg (+$2.00)"]
    }
  },
  {
    id: "dish-13",
    name: "Crispy Korean Glazed Fried Chicken Burger",
    category: "burgers",
    categoryLabel: "Gourmet Burgers & Grills",
    price: 19.50,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 195,
    badge: "Spicy Hit",
    dietary: ["spicy", "non-veg"],
    prepTime: "15 min",
    calories: "740 kcal",
    description: "Double-dredged crispy chicken thigh in Gochujang honey glaze, quick-pickled cucumbers, sesame kimchi slaw.",
    longDescription: "Tender buttermilk marinated chicken thigh fried ultra-crispy, drenched in sweet and fiery fermented gochujang chili glaze. Layered with zesty sesame kimchi slaw, homemade bread-and-butter pickles, and garlic kewpie mayo on an artisanal potato roll.",
    ingredients: ["Crispy Chicken Thigh", "Gochujang Honey Glaze", "Artisan Potato Bun", "Kimchi Slaw", "Pickled Cucumbers", "Kewpie Mayo"],
    allergens: ["Gluten", "Soy", "Eggs"],
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    customizations: {
      heatLevel: ["Mild Zing", "Medium Korean Spice", "Ghost Pepper Rush"],
      fries: ["House Fries (Included)", "Garlic Chili Fries (+$2.00)"],
      extras: ["Extra Melty Cheddar (+$1.50)", "Fried Pickles on Side (+$3.00)"]
    }
  },
  {
    id: "dish-14",
    name: "The Green Earth Botanical Burger",
    category: "burgers",
    categoryLabel: "Gourmet Burgers & Grills",
    price: 18.50,
    originalPrice: 21.00,
    rating: 4.7,
    reviewsCount: 110,
    badge: "100% Plant-Based",
    dietary: ["vegan", "veg"],
    prepTime: "15 min",
    calories: "510 kcal",
    description: "Smoked black bean & quinoa house patty, smashed avocado, heirloom tomato, vegan garlic cashew mayo, pretzel bun.",
    longDescription: "Our signature scratch-made patty crafted from ancient quinoa, black beans, charred corn, and chipotle peppers. Nestled inside a warm toasted pretzel bun with ripe smashed Hass avocado, heirloom tomato slices, and tangy garlic cashew aioli.",
    ingredients: ["Quinoa & Black Bean Patty", "Pretzel Bun", "Hass Avocado", "Cashew Garlic Aioli", "Heirloom Tomatoes", "Watercress"],
    allergens: ["Tree Nuts", "Gluten"],
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80",
    customizations: {
      bun: ["Toasted Pretzel Bun (Included)", "Gluten-Free Bun (+$2.00)", "Lettuce Wrap (No Carbs)"],
      sides: ["Kale & Cranberry Slaw (Included)", "Sweet Potato Fries (+$2.00)"]
    }
  },

  // --- DESSERTS ---
  {
    id: "dish-15",
    name: "Valrhona Molten Lava Chocolate Sphere",
    category: "desserts",
    categoryLabel: "Decadent Desserts",
    price: 15.00,
    originalPrice: 18.00,
    rating: 5.0,
    reviewsCount: 388,
    badge: "Showstopper",
    dietary: ["veg"],
    prepTime: "12 min",
    calories: "520 kcal",
    description: "70% Dark Valrhona chocolate cake with warm flowing ganache center, Madagascar vanilla bean gelato, gold dust.",
    longDescription: "Warm molten cake made exclusively from sustainably sourced French Valrhona Guanaja 70% dark chocolate. When pierced, a stream of silky hazelnut praline ganache spills out, paired with churned Tahitian vanilla gelato and spun sugar gold leaf.",
    ingredients: ["Valrhona 70% Chocolate", "Tahitian Vanilla Gelato", "Hazelnut Praline", "Organic Eggs", "Edible Gold Leaf"],
    allergens: ["Dairy", "Eggs", "Gluten", "Tree Nuts"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    customizations: {
      gelato: ["Madagascar Vanilla Bean (Included)", "Pistachio Bronte Gelato (+$1.50)", "Espresso Gelato (+$1.50)"],
      options: ["Extra Warm Chocolate Ganache Pitcher (+$2.00)"]
    }
  },
  {
    id: "dish-16",
    name: "Classic Sicilian Tiramisù Tradizionale",
    category: "desserts",
    categoryLabel: "Decadent Desserts",
    price: 13.50,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 270,
    badge: "Authentic",
    dietary: ["veg"],
    prepTime: "5 min",
    calories: "440 kcal",
    description: "Savoiardi ladyfingers soaked in Illy espresso & Marsala wine, whipped mascarpone zabaione, raw Dutch cacao.",
    longDescription: "Prepared using Nonna's generational recipe. Crispy ladyfingers lightly dipped in single-origin Illy espresso and aged Florio Marsala wine, layered between cloud-like whipped mascarpone cream and dusted generously with bittersweet Dutch cocoa.",
    ingredients: ["Italian Savoiardi", "Illy Espresso", "Florio Marsala Wine", "Galbani Mascarpone", "Valrhona Cocoa Powder"],
    allergens: ["Dairy", "Eggs", "Gluten"],
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    customizations: {
      options: ["Decaf Espresso Soak", "Extra Shaved Dark Chocolate on Top (+$1.00)"]
    }
  },
  {
    id: "dish-17",
    name: "Madagascar Vanilla Bean Crème Brûlée",
    category: "desserts",
    categoryLabel: "Decadent Desserts",
    price: 13.00,
    originalPrice: 15.00,
    rating: 4.8,
    reviewsCount: 180,
    badge: "Signature",
    dietary: ["veg", "gf"],
    prepTime: "8 min",
    calories: "390 kcal",
    description: "Rich baked custard speckled with Madagascar vanilla beans, topped with a glass-like caramelized sugar crust.",
    longDescription: "Velvety smooth baked cream infused with fragrant Madagascar vanilla pods, chilled overnight, and torched to order with turbinado sugar to create that satisfying crisp glass crack. Accompanied by fresh farm berries.",
    ingredients: ["Heavy Cream", "Madagascar Vanilla Pods", "Turbinado Sugar", "Egg Yolks", "Fresh Raspberries & Blueberries"],
    allergens: ["Dairy", "Eggs"],
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa3bc3?auto=format&fit=crop&w=800&q=80",
    customizations: {
      options: ["Berry Compote (+$1.00)", "Whipped Chantilly Cream (+$1.00)"]
    }
  },

  // --- ARTISAN DRINKS & COCKTAILS ---
  {
    id: "dish-18",
    name: "Smoked Rosemary Old Fashioned",
    category: "drinks",
    categoryLabel: "Artisan Drinks & Cocktails",
    price: 16.00,
    originalPrice: null,
    rating: 5.0,
    reviewsCount: 310,
    badge: "Craft Cocktail",
    dietary: ["gf", "vegan"],
    prepTime: "5 min",
    calories: "180 kcal",
    description: "Woodford Reserve Bourbon, Angostura bitters, demerara syrup, torched rosemary sprig under a glass dome.",
    longDescription: "Crafted by our resident mixologist: small-batch bourbon stirred over hand-carved crystal clear ice with rich demerara syrup and aromatic bitters. Presented in a smoke-infused cloche with scorched organic rosemary.",
    ingredients: ["Woodford Reserve Bourbon", "Angostura Bitters", "Demerara Sugar", "Orange Peel", "Charred Rosemary"],
    allergens: [],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    customizations: {
      spirit: ["Bourbon (Default)", "Rye Whiskey", "Non-Alcoholic Spiced Spirit"],
      options: ["Extra Luxardo Maraschino Cherry (+$1.00)"]
    }
  },
  {
    id: "dish-19",
    name: "Blood Orange & Hibiscus Mocktail Spritz",
    category: "drinks",
    categoryLabel: "Artisan Drinks & Cocktails",
    price: 10.50,
    originalPrice: 12.00,
    rating: 4.8,
    reviewsCount: 164,
    badge: "Zero Proof",
    dietary: ["vegan", "veg", "gf"],
    prepTime: "4 min",
    calories: "95 kcal",
    description: "Cold-pressed Sicilian blood orange, steeped Egyptian hibiscus tea, yuzu bubbles, fresh mint leaves.",
    longDescription: "An invigorating sparkling elixir that balances deep ruby tartness and fragrant citrus aroma. Shaken with brewed organic hibiscus flowers, freshly juiced blood oranges, and topped off with sparkling yuzu soda.",
    ingredients: ["Blood Orange Juice", "Brewed Hibiscus Flowers", "Yuzu Soda", "Fresh Garden Mint", "Agave Nectar"],
    allergens: [],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    customizations: {
      sweetness: ["Regular Sweetness", "Half Sweet", "Unsweetened"],
      options: ["Add Splash of Gin (Alcoholic +$5.00)", "Add Chia Seeds (+$1.00)"]
    }
  },
  {
    id: "dish-20",
    name: "Matcha Lavender White Chocolate Iced Latte",
    category: "drinks",
    categoryLabel: "Artisan Drinks & Cocktails",
    price: 8.50,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 220,
    badge: "Barista Special",
    dietary: ["veg", "gf"],
    prepTime: "5 min",
    calories: "210 kcal",
    description: "Ceremonial Uji matcha, French lavender blossom syrup, oat milk, melted Belgian white chocolate swirl.",
    longDescription: "First-harvest shade-grown green tea powder from Uji, Kyoto whisked by hand. Layered above ice with creamy organic oat milk, subtle organic lavender blossom reduction, and lined with melted ivory chocolate drizzle.",
    ingredients: ["Ceremonial Uji Matcha", "Organic Oat Milk", "Lavender Reduction", "Belgian White Chocolate", "Ice"],
    allergens: ["Dairy"],
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    customizations: {
      milk: ["Oat Milk (Included)", "Almond Milk", "Whole Organic Dairy", "Coconut Milk"],
      sweetness: ["Balanced (Default)", "Low Sweet", "Extra Sweet"]
    }
  }
];

// Special Promotion Offers
const SPECIAL_OFFERS = [
  {
    code: "SAVOR20",
    discountPercent: 20,
    title: "Gourmet Welcome Feast",
    description: "Get 20% OFF your first delivery or pickup order on orders over $40.",
    validUntil: "Limited Time Offer",
    badge: "20% OFF",
    minSpend: 40.00
  },
  {
    code: "CHEF10",
    discountPercent: 10,
    title: "Signature Tasting Discount",
    description: "Enjoy 10% OFF any order featuring Chef's Special & Signature items.",
    validUntil: "All Week Long",
    badge: "10% OFF",
    minSpend: 25.00
  },
  {
    code: "WEEKENDVIP",
    discountPercent: 15,
    title: "Weekend Indulgence",
    description: "Exclusive 15% discount on all Pastas, Steaks, and Craft Cocktails.",
    validUntil: "Friday - Sunday",
    badge: "15% OFF",
    minSpend: 50.00
  }
];

// Verified Customer Reviews
const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "Elena Rostova",
    role: "Michelin Guide Food Blogger",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "2 days ago",
    title: "The Dry-Aged Ribeye is in a League of its Own!",
    content: "Savoria has redefined luxury dining for me. The 45-day dry-aged ribeye melted like butter on the palate, and the wood-fired truffle pizza was crispy perfection. The online ordering was seamless, arriving hot in 28 minutes!",
    dishOrdered: "Prime Dry-Aged Ribeye Steak"
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Executive Architect & Sommelier",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "1 week ago",
    title: "Best Table Reservation Experience in the City",
    content: "Booked an anniversary table on the outdoor terrace. The ambiance, jazz music, and attentive staff made our evening unforgettable. Do not leave without trying the Smoked Rosemary Old Fashioned and Lava Cake!",
    dishOrdered: "Smoked Rosemary Old Fashioned"
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Culinary Critic & Photographer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "2 weeks ago",
    title: "Truffle Arancini and Pappardelle were sensational!",
    content: "Every single dish is a work of art. The packaging for takeout was eco-friendly, insulated, and presented with Michelin-level attention to detail. Savoria is officially my go-to weekly indulgence.",
    dishOrdered: "Handmade Pappardelle al Cinghiale"
  },
  {
    id: 4,
    name: "David K. Reynolds",
    role: "Verified Local Diner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "3 weeks ago",
    title: "Unmatched flavor and swift customer care",
    content: "The Wagyu Truffle burger with garlic rosemary fries is arguably the top burger in the tri-state area. Fast ordering checkout, real-time tracking, and courteous delivery team.",
    dishOrdered: "The Royal Wagyu Truffle Burger"
  }
];

// Restaurant FAQ
const RESTAURANT_FAQS = [
  {
    question: "What are your delivery hours and radius?",
    answer: "We deliver 7 days a week from 11:30 AM to 10:30 PM within a 12-mile radius. Orders over $50 qualify for complimentary priority delivery."
  },
  {
    question: "Do you cater to dietary restrictions and allergies?",
    answer: "Absolutely. Our menu features clear markers for Gluten-Free (GF), Vegetarian, Vegan, and Spicy items. You can also specify special allergen notes upon checkout or table reservation."
  },
  {
    question: "Can I modify or cancel my reservation?",
    answer: "Yes, you can modify or cancel reservations up to 2 hours prior via your confirmation code or by reaching our host stand directly at (555) 849-3920."
  },
  {
    question: "Where are your ingredients sourced from?",
    answer: "We partner exclusively with certified organic regional farms, line-caught sustainable seafood purveyors, and select heritage Italian artisans for olive oils, truffles, and cheeses."
  }
];
