# cognevance_Restaurant-Food-Ordering-Website

# 🍽️ Savoria - Fine Dining & Gourmet Food Ordering Web Platform

> A modern, visually stunning, fully responsive Restaurant & Food Ordering website crafted with pure **HTML5**, **CSS3**, and **Vanilla ES6+ JavaScript**. Designed for luxury bistros, fine dining establishments, and high-end culinary kitchens.

---

## 🌟 Key Highlights & Features

### 1. 🏆 Luxury Aesthetics & Modern UI/UX
- **Visual Design:** Dark obsidian backdrop (`#0b0f14`), warm gold/amber accents (`#d4a359`), glassmorphism card surfaces, and subtle typography hierarchy combining **Cinzel**, **Playfair Display**, and **Plus Jakarta Sans**.
- **Hero Showcase & Slider:** 3 high-definition culinary slides with automatic progression (5-second cycle), manual controls (arrow navigation, touch swipe & dot indicators), and pause-on-hover.
- **Micro-Interactions:** Smooth card hover elevations, dynamic badge popping on cart additions, ripple effects, and non-intrusive floating toast notifications.

### 2. 📋 Interactive Seasonal Food Menu
- **20 Gourmet Culinary Creations:** Includes Starters, Michelin-Inspired Mains, 72-Hour Sourdough Pizzas, Handcrafted Pastas, A5 Wagyu Truffle Burgers, Decadent French Desserts, and Zero-Proof/Craft Cocktails.
- **Multi-Level Categorization:**
  - Category tabs: *All Dishes*, *Starters & Bites*, *Signature Mains*, *Pasta & Pizza*, *Wagyu & Burgers*, *Decadent Desserts*, *Artisan Drinks*.
  - Dietary chips: *🌱 Vegetarian*, *🌿 100% Vegan*, *🌾 Gluten-Free (GF)*, *🌶️ Spicy*.
- **Live Search & Dynamic Sorting:**
  - Real-time search by title, ingredient, or craving with instant clear button.
  - Sorting options: *Chef Recommended*, *Price: Low to High*, *Price: High to Low*, and *Top Rated*.
- **Quick View Modal:** Displays high-res photography, complete culinary story, ingredient breakdown, allergen notices, preparation time, calorie counts, and customizable additions (doneness, artisanal sauces, and sides).

### 3. 🛍️ Advanced Food Ordering & Cart System
- **Sliding Slide-Over Drawer:** Accessible from any section via the floating navigation bag with dynamic count badge.
- **Quantity Controls & Customizations:** Increment/decrement quantity, remove items, and preserve chosen chef options.
- **Real-Time Financial Breakdown:**
  - Automatic calculation of Subtotal, Tax (8%), and Delivery Fee.
  - **Free Priority Delivery Progress Bar:** Unlocks complimentary shipping on orders over $50.00 with visual meter.
  - **Interactive Promo Codes:** Instant discount verification against active coupons:
    - `SAVOR20` — 20% OFF orders over $40.
    - `CHEF10` — 10% OFF all items.
    - `WEEKENDVIP` — 15% OFF orders over $50.
- **Tip Gratuity Selector:** One-click tip selection (10%, 15%, 20%, or No Tip) with live recalculation.

### 4. 🛵 Checkout Pipeline & Live Order Tracking
- **Order Fulfillment Modes:** Toggle between *Priority Home Delivery (30-40 min)* and *Kitchen Curbside Pickup*.
- **Payment Method Selection:** Credit/Debit Card (with formatted input simulator), Apple/Google Pay, and Cash on Delivery.
- **Interactive 4-Stage Live Order Tracker:**
  - Step 1: Order Placed & Confirmed ✓
  - Step 2: Kitchen Crafting & Plating 🍳
  - Step 3: Out for Delivery with Thermal Courier 🛵
  - Step 4: Arrived & Bon Appétit 🎉
  - Features an interactive **"Simulate Next Step"** action for realistic order lifecycle demonstration.

### 5. 🍷 Table Reservation & Guest Hospitality
- **Dedicated Booking Engine:** Form fields for Date (with today's date boundary validation), Preferred Dining Time, Party Size (1 to 10+ guests), and Seating Preference (*Main Dining Hall*, *Outdoor Garden Terrace*, *Chef's Interactive Counter*, *Private Wine Cellar*).
- **Instant Booking Confirmation:** Produces a unique reservation token (e.g., `#RES-8921`) and itemized guest itinerary modal.

### 6. 💬 Customer Endorsements, Contact & VIP Circle
- **Verified Diner Reviews:** Highlights reviews from culinary critics, sommeliers, and food bloggers with star ratings and dishes enjoyed.
- **Contact Inquiries:** Form with front-end validation and instant feedback toast.
- **VIP Gastronomy Club:** Newsletter subscription with automated $15 welcome voucher coupon notification.

---

## 📁 Project Structure

```text
food ordering page/
├── index.html            # Semantic HTML5 markup, ARIA accessibility, modals
├── css/
│   └── style.css         # Modern CSS3 stylesheet, design tokens, responsive queries
├── js/
│   ├── menu-data.js      # Complete menu catalog, deals, reviews, and nutritional data
│   └── app.js            # Reactive application logic, cart state, modals, tracker
├── assets/               # Local icons and media assets
└── README.md             # Project documentation & setup instructions
```

---

## 🚀 Quick Setup & Local Launch

The website is built entirely with client-side standards. No npm build steps or compilation are required!

### Option A: Open directly in your browser
Simply double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Safari, Firefox).

### Option B: Run via Python Local HTTP Server
```bash
# In the project directory:
python -m http.server 3000
```
Then visit: `http://localhost:3000`

### Option C: Run via Node.js `npx serve`
```bash
npx serve .
```

### Option D: Run with VS Code Live Server
Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🧪 Testing Guide & Promo Codes

Try the following interactive features:
1. **Search & Filter:** Type `"Truffle"` or `"Octopus"` into the menu search bar or click the **"🌱 Vegetarian"** chip.
2. **Quick View:** Hover over **"Prime Dry-Aged Ribeye Steak"** and click the eye icon to see ingredients, doneness selections, and allergens.
3. **Add to Cart & Apply Coupon:**
   - Add items totaling over $40.
   - Enter `SAVOR20` in the promo box and click **Apply** to see 20% deducted.
4. **Complete Checkout:**
   - Click **Proceed to Checkout**, choose Delivery or Pickup, select a Tip percentage, and click **Authorize & Place Order**.
   - Watch the live 4-stage order tracker change states via the **"Simulate Next Step"** button!
5. **Reserve a Table:**
   - Scroll to **Reserve Your Table**, fill in the guest information, and receive your instant `#RES-XXXX` confirmation ticket.

---

## 🌐 Live Deployment Instructions

### Deploy to GitHub Pages:
1. Create a new repository on [GitHub](https://github.com/new) named `savoria-restaurant`.
2. Push this project to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/savoria-restaurant.git
   git branch -M main
   git push -u origin main
   ```
3. In GitHub, navigate to **Settings > Pages** and select **Branch: main** / **Folder: / (root)**.
4. Your site will be live at: `https://<your-username>.github.io/savoria-restaurant/`

### Deploy to Netlify / Vercel:
- **Netlify:** Drag and drop the project folder directly into [Netlify Drop](https://app.netlify.com/drop).
- **Vercel:** Run `npx vercel` in the project root or import the GitHub repository on Vercel.

---

## 📄 License & Credits
- **Designed & Developed for:** Savoria Gourmet Kitchen & Fine Dining
- **Photography:** Curated via Unsplash high-resolution food photography CDN
- **Icons:** Font Awesome 6.5
- **Fonts:** Google Fonts (*Cinzel*, *Playfair Display*, *Plus Jakarta Sans*)
