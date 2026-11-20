/**
 * SAVORIA GOURMET BISTRO & FINE DINING
 * Main Application Logic - Interactive Cart, Live Menu Filtering,
 * Checkout Pipeline, Table Reservations & Modern UX.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==================== STATE MANAGEMENT ====================
  const state = {
    cart: JSON.parse(localStorage.getItem('savoria_cart') || '[]'),
    activeCategory: 'all',
    activeDiet: 'all',
    searchQuery: '',
    currentSort: 'recommended',
    appliedPromo: null,
    orderType: 'delivery', // 'delivery' or 'pickup'
    tipPercent: 15,
    quickViewItem: null,
    quickViewQty: 1,
    quickViewSelectedCustomizations: [],
    trackingStep: 2 // 1: Placed, 2: Kitchen, 3: Courier, 4: Delivered
  };

  // ==================== DOM ELEMENTS ====================
  const mainHeader = document.getElementById('mainHeader');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  const mobileNavReserveBtn = document.getElementById('mobileNavReserveBtn');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toastContainer = document.getElementById('toastContainer');

  // Announcement promo code
  const announcementPromoCode = document.getElementById('announcementPromoCode');

  // Hero Slider
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');
  let currentSlideIndex = 0;
  let heroSlideInterval = null;

  // Menu Elements
  const menuGrid = document.getElementById('menuGrid');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const menuSearchClear = document.getElementById('menuSearchClear');
  const menuSortSelect = document.getElementById('menuSortSelect');
  const categoryTabs = document.querySelectorAll('.category-tab');
  const dietaryChips = document.querySelectorAll('.dietary-chip');
  const menuResultsCount = document.getElementById('menuResultsCount');

  // Cart Elements
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const cartBadgeCount = document.getElementById('cartBadgeCount');
  const cartHeaderQty = document.getElementById('cartHeaderQty');
  const cartItemsList = document.getElementById('cartItemsList');
  const freeDeliveryMessage = document.getElementById('freeDeliveryMessage');
  const freeDeliveryFill = document.getElementById('freeDeliveryFill');
  const cartPromoInput = document.getElementById('cartPromoInput');
  const cartApplyPromoBtn = document.getElementById('cartApplyPromoBtn');
  const appliedPromoBadgeWrap = document.getElementById('appliedPromoBadgeWrap');
  const cartSubtotalAmount = document.getElementById('cartSubtotalAmount');
  const cartDiscountRow = document.getElementById('cartDiscountRow');
  const cartDiscountCodeLabel = document.getElementById('cartDiscountCodeLabel');
  const cartDiscountAmount = document.getElementById('cartDiscountAmount');
  const cartTaxAmount = document.getElementById('cartTaxAmount');
  const cartDeliveryFeeAmount = document.getElementById('cartDeliveryFeeAmount');
  const cartGrandTotal = document.getElementById('cartGrandTotal');
  const cartProceedCheckoutBtn = document.getElementById('cartProceedCheckoutBtn');

  // Quick View Modal Elements
  const quickViewModal = document.getElementById('quickViewModal');
  const closeQuickViewBtn = document.getElementById('closeQuickViewBtn');
  const quickViewImage = document.getElementById('quickViewImage');
  const quickViewBadge = document.getElementById('quickViewBadge');
  const quickViewTitle = document.getElementById('quickViewTitle');
  const quickViewPrice = document.getElementById('quickViewPrice');
  const quickViewRatingStars = document.getElementById('quickViewRatingStars');
  const quickViewRatingScore = document.getElementById('quickViewRatingScore');
  const quickViewReviewCount = document.getElementById('quickViewReviewCount');
  const quickViewDescription = document.getElementById('quickViewDescription');
  const quickViewPrep = document.getElementById('quickViewPrep');
  const quickViewCalories = document.getElementById('quickViewCalories');
  const quickViewIngredients = document.getElementById('quickViewIngredients');
  const quickViewAllergens = document.getElementById('quickViewAllergens');
  const quickViewCustomizations = document.getElementById('quickViewCustomizations');
  const quickViewMinusBtn = document.getElementById('quickViewMinusBtn');
  const quickViewPlusBtn = document.getElementById('quickViewPlusBtn');
  const quickViewQtyCount = document.getElementById('quickViewQtyCount');
  const quickViewAddToCartBtn = document.getElementById('quickViewAddToCartBtn');
  const quickViewComputedTotal = document.getElementById('quickViewComputedTotal');

  // Checkout Elements
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const checkoutMasterForm = document.getElementById('checkoutMasterForm');
  const checkoutFormContent = document.getElementById('checkoutFormContent');
  const orderSuccessContent = document.getElementById('orderSuccessContent');
  const orderTypeDeliveryBtn = document.getElementById('orderTypeDeliveryBtn');
  const orderTypePickupBtn = document.getElementById('orderTypePickupBtn');
  const checkoutAddressField = document.getElementById('checkoutAddressField');
  const paymentOptionBtns = document.querySelectorAll('.payment-option-btn');
  const cardFieldsWrap = document.getElementById('cardFieldsWrap');
  const tipBtns = document.querySelectorAll('.tip-btn');
  const tip15Value = document.getElementById('tip15Value');
  const checkoutFinalTotalDisplay = document.getElementById('checkoutFinalTotalDisplay');
  const confirmedOrderRef = document.getElementById('confirmedOrderRef');
  const confirmedCustomerName = document.getElementById('confirmedCustomerName');
  const confirmedOrderItemsSummary = document.getElementById('confirmedOrderItemsSummary');
  const confirmedOrderTotalDisplay = document.getElementById('confirmedOrderTotalDisplay');
  const trackOrderSimulateStepBtn = document.getElementById('trackOrderSimulateStepBtn');
  const finishOrderCloseBtn = document.getElementById('finishOrderCloseBtn');

  // Reservation Elements
  const tableReservationForm = document.getElementById('tableReservationForm');
  const reservationConfirmModal = document.getElementById('reservationConfirmModal');
  const closeReservationConfirmBtn = document.getElementById('closeReservationConfirmBtn');
  const dismissResModalBtn = document.getElementById('dismissResModalBtn');
  const resBookingCode = document.getElementById('resBookingCode');
  const resDetailName = document.getElementById('resDetailName');
  const resDetailDateTime = document.getElementById('resDetailDateTime');
  const resDetailGuests = document.getElementById('resDetailGuests');
  const resDetailArea = document.getElementById('resDetailArea');

  // Contact & Newsletter Forms
  const contactUsForm = document.getElementById('contactUsForm');
  const newsletterForm = document.getElementById('newsletterForm');

  // Set min date for reservation date picker to today
  const resDateInput = document.getElementById('resDate');
  if (resDateInput) {
    const today = new Date().toISOString().split('T')[0];
    resDateInput.min = today;
    resDateInput.value = today;
  }

  // ==================== TOAST NOTIFICATION UTILITY ====================
  function showToast(message, type = 'info', iconClass = 'fa-circle-info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i class="fa-solid ${iconClass}"></i>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 350);
    }, 3500);
  }

  // Copy Promo Code from announcement
  if (announcementPromoCode) {
    announcementPromoCode.addEventListener('click', () => {
      const code = announcementPromoCode.innerText.trim();
      navigator.clipboard.writeText(code).then(() => {
        showToast(`Promo code <strong>${code}</strong> copied to clipboard!`, 'success', 'fa-copy');
        applyCouponCode(code);
      }).catch(() => {
        applyCouponCode(code);
      });
    });
  }

  // ==================== HERO SLIDER LOGIC ====================
  function goToSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlideIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentSlideIndex + 1) % heroSlides.length;
    goToSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentSlideIndex - 1 + heroSlides.length) % heroSlides.length;
    goToSlide(prevIndex);
  }

  function startHeroAutoplay() {
    stopHeroAutoplay();
    heroSlideInterval = setInterval(nextSlide, 5000);
  }

  function stopHeroAutoplay() {
    if (heroSlideInterval) clearInterval(heroSlideInterval);
  }

  if (heroNextBtn && heroPrevBtn) {
    heroNextBtn.addEventListener('click', () => {
      nextSlide();
      startHeroAutoplay();
    });
    heroPrevBtn.addEventListener('click', () => {
      prevSlide();
      startHeroAutoplay();
    });
  }

  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      startHeroAutoplay();
    });
  });

  const heroSection = document.getElementById('home');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopHeroAutoplay);
    heroSection.addEventListener('mouseleave', startHeroAutoplay);
  }

  startHeroAutoplay();

  // ==================== STICKY HEADER & SCROLL BEHAVIOR ====================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader.classList.add('scrolled');
      backToTopBtn.classList.add('visible');
    } else {
      mainHeader.classList.remove('scrolled');
      backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu drawer
  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNavDrawer.classList.add('active');
      document.body.classList.add('modal-open');
    });

    closeMobileNavBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('active');
      document.body.classList.remove('modal-open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        document.body.classList.remove('modal-open');
      });
    });

    if (mobileNavReserveBtn) {
      mobileNavReserveBtn.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        document.body.classList.remove('modal-open');
      });
    }
  }

  // Footer category links
  document.querySelectorAll('[data-cat-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = e.currentTarget.getAttribute('data-cat-link');
      selectCategory(cat);
    });
  });

  // ==================== SPECIAL OFFERS RENDERING ====================
  function renderSpecialDeals() {
    const dealsGrid = document.getElementById('dealsGrid');
    if (!dealsGrid || typeof SPECIAL_OFFERS === 'undefined') return;

    dealsGrid.innerHTML = SPECIAL_OFFERS.map(offer => `
      <div class="deal-card">
        <div>
          <div class="deal-header">
            <span class="deal-badge"><i class="fa-solid fa-gift"></i> ${offer.badge}</span>
            <span style="font-size: 0.8rem; color: var(--color-gold);"><i class="fa-regular fa-clock"></i> ${offer.validUntil}</span>
          </div>
          <h3 class="deal-title">${offer.title}</h3>
          <p class="deal-desc">${offer.description}</p>
        </div>
        <div class="deal-footer">
          <div class="deal-code-pill" data-code="${offer.code}" title="Click to apply coupon">
            <i class="fa-solid fa-tag"></i> <span>${offer.code}</span>
          </div>
          <button class="btn btn-primary btn-sm apply-deal-btn" data-code="${offer.code}">
            Apply Code
          </button>
        </div>
      </div>
    `).join('');

    // Attach listeners
    dealsGrid.querySelectorAll('.deal-code-pill, .apply-deal-btn').forEach(el => {
      el.addEventListener('click', (e) => {
        const code = e.currentTarget.getAttribute('data-code');
        applyCouponCode(code);
        openCartDrawer();
      });
    });
  }

  // ==================== MENU RENDERING & FILTERING ====================
  function renderMenu() {
    if (!menuGrid || typeof MENU_ITEMS === 'undefined') return;

    let items = [...MENU_ITEMS];

    // Filter by category
    if (state.activeCategory !== 'all') {
      items = items.filter(item => item.category === state.activeCategory);
    }

    // Filter by dietary
    if (state.activeDiet !== 'all') {
      items = items.filter(item => item.dietary && item.dietary.includes(state.activeDiet));
    }

    // Filter by search query
    if (state.searchQuery.trim() !== '') {
      const query = state.searchQuery.toLowerCase().trim();
      items = items.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.ingredients && item.ingredients.some(ing => ing.toLowerCase().includes(query)))
      );
    }

    // Sort items
    if (state.currentSort === 'price-low') {
      items.sort((a, b) => a.price - b.price);
    } else if (state.currentSort === 'price-high') {
      items.sort((a, b) => b.price - a.price);
    } else if (state.currentSort === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    }

    // Update count display
    if (menuResultsCount) {
      menuResultsCount.innerText = `Showing ${items.length} ${items.length === 1 ? 'artisan creation' : 'artisan creations'}`;
    }

    // Empty state
    if (items.length === 0) {
      menuGrid.innerHTML = `
        <div class="menu-empty-state">
          <div class="menu-empty-icon"><i class="fa-solid fa-plate-wheat"></i></div>
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem; color: #fff;">No Dishes Found</h3>
          <p style="color: var(--color-text-secondary); margin-bottom: 1.5rem;">We couldn't find any culinary creations matching your selected filters or search query.</p>
          <button class="btn btn-outline btn-sm" id="resetMenuFiltersBtn">
            <i class="fa-solid fa-rotate-left"></i> Reset All Filters
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('resetMenuFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
      }
      return;
    }

    // Render cards
    menuGrid.innerHTML = items.map(dish => {
      const dietaryTagsHtml = (dish.dietary || []).map(tag => {
        let label = tag.toUpperCase();
        let tagClass = tag;
        if (tag === 'veg') label = '🌱 Veg';
        if (tag === 'vegan') label = '🌿 Vegan';
        if (tag === 'gf') label = '🌾 GF';
        if (tag === 'spicy') label = '🌶️ Spicy';
        return `<span class="diet-tag ${tagClass}">${label}</span>`;
      }).join('');

      return `
        <article class="food-card" data-id="${dish.id}">
          <div class="food-card-image-wrap">
            <img src="${dish.image}" alt="${dish.name}" class="food-card-img" loading="lazy">
            ${dish.badge ? `<span class="food-badge">${dish.badge}</span>` : ''}
            <button class="food-quickview-btn" data-id="${dish.id}" title="Quick View & Ingredients" aria-label="Quick View ${dish.name}">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
          <div class="food-card-content">
            <div class="food-meta">
              <div class="food-rating">
                <i class="fa-solid fa-star"></i>
                <span>${dish.rating.toFixed(1)}</span>
                <span style="color: var(--color-text-muted); font-weight: 400; font-size: 0.75rem;">(${dish.reviewsCount})</span>
              </div>
              <div class="food-meta-stats">
                <span><i class="fa-regular fa-clock"></i> ${dish.prepTime}</span>
                <span><i class="fa-solid fa-fire" style="color: var(--color-accent);"></i> ${dish.calories}</span>
              </div>
            </div>

            <h3 class="food-card-title">${dish.name}</h3>
            <p class="food-card-desc">${dish.description}</p>

            <div class="food-dietary-tags">
              ${dietaryTagsHtml}
            </div>

            <div class="food-card-footer">
              <div class="food-price-wrap">
                <span class="food-price">$${dish.price.toFixed(2)}</span>
                ${dish.originalPrice ? `<span class="food-original-price">$${dish.originalPrice.toFixed(2)}</span>` : ''}
              </div>
              <button class="add-to-cart-btn" data-id="${dish.id}">
                <i class="fa-solid fa-plus"></i> Add
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card event listeners
    menuGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dishId = e.currentTarget.getAttribute('data-id');
        quickAddToCart(dishId);
      });
    });

    menuGrid.querySelectorAll('.food-quickview-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dishId = e.currentTarget.getAttribute('data-id');
        openQuickView(dishId);
      });
    });
  }

  function resetAllFilters() {
    state.activeCategory = 'all';
    state.activeDiet = 'all';
    state.searchQuery = '';
    state.currentSort = 'recommended';

    menuSearchInput.value = '';
    menuSearchClear.classList.remove('visible');
    menuSortSelect.value = 'recommended';

    categoryTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-category') === 'all');
    });
    dietaryChips.forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-diet') === 'all');
    });

    renderMenu();
  }

  function selectCategory(category) {
    state.activeCategory = category;
    categoryTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-category') === category);
    });
    renderMenu();
  }

  // Category tab clicks
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const category = e.currentTarget.getAttribute('data-category');
      selectCategory(category);
    });
  });

  // Dietary chip clicks
  dietaryChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      dietaryChips.forEach(c => c.classList.remove('active'));
      e.currentTarget.classList.add('active');
      state.activeDiet = e.currentTarget.getAttribute('data-diet');
      renderMenu();
    });
  });

  // Search input events
  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (state.searchQuery.length > 0) {
        menuSearchClear.classList.add('visible');
      } else {
        menuSearchClear.classList.remove('visible');
      }
      renderMenu();
    });
  }

  if (menuSearchClear) {
    menuSearchClear.addEventListener('click', () => {
      menuSearchInput.value = '';
      state.searchQuery = '';
      menuSearchClear.classList.remove('visible');
      renderMenu();
    });
  }

  // Sort select event
  if (menuSortSelect) {
    menuSortSelect.addEventListener('change', (e) => {
      state.currentSort = e.target.value;
      renderMenu();
    });
  }

  // ==================== QUICK VIEW MODAL LOGIC ====================
  function openQuickView(dishId) {
    const dish = MENU_ITEMS.find(item => item.id === dishId);
    if (!dish) return;

    state.quickViewItem = dish;
    state.quickViewQty = 1;
    state.quickViewSelectedCustomizations = [];

    quickViewImage.src = dish.image;
    quickViewImage.alt = dish.name;
    quickViewBadge.innerText = dish.badge || 'Chef Selection';
    quickViewBadge.style.display = dish.badge ? 'inline-block' : 'none';
    quickViewTitle.innerText = dish.name;
    quickViewPrice.innerText = `$${dish.price.toFixed(2)}`;
    quickViewRatingScore.innerText = dish.rating.toFixed(1);
    quickViewReviewCount.innerText = `(${dish.reviewsCount} verified reviews)`;

    // Stars
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      starsHtml += `<i class="fa-solid fa-star"></i>`;
    }
    quickViewRatingStars.innerHTML = starsHtml;

    quickViewDescription.innerText = dish.longDescription || dish.description;
    quickViewPrep.innerText = dish.prepTime;
    quickViewCalories.innerText = dish.calories;

    // Ingredients tags
    quickViewIngredients.innerHTML = (dish.ingredients || []).map(ing => 
      `<span class="ingredient-tag"><i class="fa-solid fa-leaf" style="color: var(--color-gold); font-size: 0.7rem; margin-right: 0.3rem;"></i> ${ing}</span>`
    ).join('');

    // Allergens
    if (dish.allergens && dish.allergens.length > 0) {
      quickViewAllergens.innerHTML = dish.allergens.map(al => 
        `<span class="ingredient-tag" style="background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.3); color: #f87171;"><i class="fa-solid fa-triangle-exclamation" style="margin-right: 0.3rem;"></i> Contains ${al}</span>`
      ).join('');
      quickViewAllergens.style.display = 'flex';
    } else {
      quickViewAllergens.innerHTML = `<span class="ingredient-tag" style="color: #34d399; background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3);"><i class="fa-solid fa-check" style="margin-right: 0.3rem;"></i> No Common Allergens</span>`;
      quickViewAllergens.style.display = 'flex';
    }

    // Customizations
    renderQuickViewCustomizations(dish);

    updateQuickViewPrice();

    quickViewModal.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function renderQuickViewCustomizations(dish) {
    if (!dish.customizations || Object.keys(dish.customizations).length === 0) {
      quickViewCustomizations.innerHTML = '';
      return;
    }

    let customHtml = '<div class="quickview-section-label">Chef Preferences & Additions</div>';

    Object.entries(dish.customizations).forEach(([groupName, options]) => {
      const formattedTitle = groupName.charAt(0).toUpperCase() + groupName.slice(1);
      customHtml += `
        <div class="customization-group">
          <strong style="font-size: 0.88rem; color: #fff; display: block; margin-bottom: 0.5rem;">${formattedTitle}</strong>
          ${options.map((opt, idx) => `
            <label class="customization-option">
              <input type="radio" name="custom_${groupName}" value="${opt}" ${idx === 0 ? 'checked' : ''} class="custom-radio">
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      `;
    });

    quickViewCustomizations.innerHTML = customHtml;
  }

  function updateQuickViewPrice() {
    if (!state.quickViewItem) return;
    quickViewQtyCount.innerText = state.quickViewQty;
    const total = state.quickViewItem.price * state.quickViewQty;
    quickViewComputedTotal.innerText = `$${total.toFixed(2)}`;
  }

  if (quickViewMinusBtn && quickViewPlusBtn) {
    quickViewMinusBtn.addEventListener('click', () => {
      if (state.quickViewQty > 1) {
        state.quickViewQty--;
        updateQuickViewPrice();
      }
    });

    quickViewPlusBtn.addEventListener('click', () => {
      state.quickViewQty++;
      updateQuickViewPrice();
    });
  }

  if (quickViewAddToCartBtn) {
    quickViewAddToCartBtn.addEventListener('click', () => {
      if (!state.quickViewItem) return;

      // Extract selected options
      const selectedCustoms = [];
      const checkedRadios = quickViewCustomizations.querySelectorAll('input[type="radio"]:checked');
      checkedRadios.forEach(radio => {
        selectedCustoms.push(radio.value);
      });

      addToCart(state.quickViewItem, state.quickViewQty, selectedCustoms);
      closeQuickView();
      openCartDrawer();
    });
  }

  function closeQuickView() {
    quickViewModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    state.quickViewItem = null;
  }

  if (closeQuickViewBtn) {
    closeQuickViewBtn.addEventListener('click', closeQuickView);
  }

  quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) closeQuickView();
  });

  // ==================== CART LOGIC & STORAGE ====================
  function saveCart() {
    localStorage.setItem('savoria_cart', JSON.stringify(state.cart));
    updateCartUI();
  }

  function quickAddToCart(dishId) {
    const dish = MENU_ITEMS.find(item => item.id === dishId);
    if (!dish) return;
    addToCart(dish, 1, []);
  }

  function addToCart(dish, quantity = 1, customizations = []) {
    // Generate unique key based on item id and customizations
    const customKey = customizations.sort().join('|');
    const existingIndex = state.cart.findIndex(item => item.id === dish.id && (item.customKey || '') === customKey);

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image,
        quantity: quantity,
        customizations: customizations,
        customKey: customKey
      });
    }

    saveCart();
    animateCartBadge();
    showToast(`Added <strong>${dish.name}</strong> to your bag!`, 'success', 'fa-bag-shopping');
  }

  function updateItemQty(index, delta) {
    if (state.cart[index]) {
      state.cart[index].quantity += delta;
      if (state.cart[index].quantity <= 0) {
        const removedName = state.cart[index].name;
        state.cart.splice(index, 1);
        showToast(`Removed <strong>${removedName}</strong>`, 'info', 'fa-trash-can');
      }
      saveCart();
    }
  }

  function removeItem(index) {
    if (state.cart[index]) {
      const removedName = state.cart[index].name;
      state.cart.splice(index, 1);
      saveCart();
      showToast(`Removed <strong>${removedName}</strong>`, 'info', 'fa-trash-can');
    }
  }

  function animateCartBadge() {
    if (cartBadgeCount) {
      cartBadgeCount.classList.remove('bump');
      void cartBadgeCount.offsetWidth;
      cartBadgeCount.classList.add('bump');
    }
  }

  function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadgeCount) cartBadgeCount.innerText = totalItems;
    if (cartHeaderQty) cartHeaderQty.innerText = totalItems;

    // Subtotal calculation
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Free delivery progress ($50 goal)
    const freeDeliveryGoal = 50.00;
    if (subtotal >= freeDeliveryGoal || subtotal === 0) {
      freeDeliveryFill.style.width = '100%';
      freeDeliveryMessage.innerHTML = subtotal === 0 
        ? `Free Priority Delivery on orders above $50.00!` 
        : `<span style="color: #34d399; font-weight: 700;"><i class="fa-solid fa-circle-check"></i> Unlocked! You have qualified for FREE Priority Delivery.</span>`;
    } else {
      const diff = (freeDeliveryGoal - subtotal).toFixed(2);
      const percent = Math.min((subtotal / freeDeliveryGoal) * 100, 100);
      freeDeliveryFill.style.width = `${percent}%`;
      freeDeliveryMessage.innerHTML = `Add <strong>$${diff}</strong> more to unlock <strong>FREE Priority Delivery!</strong>`;
    }

    // Render items list
    if (state.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-view">
          <i class="fa-solid fa-basket-shopping"></i>
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: #fff; margin-bottom: 0.5rem;">Your Bag is Empty</h4>
          <p style="font-size: 0.88rem; max-width: 260px; margin-bottom: 1.5rem;">Discover our master chef creations and add your favorite dishes.</p>
          <button class="btn btn-primary btn-sm" id="cartExploreMenuBtn">
            Explore Menu
          </button>
        </div>
      `;
      const exploreBtn = document.getElementById('cartExploreMenuBtn');
      if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
          closeCartDrawer();
          const menuSection = document.getElementById('menu');
          if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
      cartProceedCheckoutBtn.disabled = true;
      cartProceedCheckoutBtn.style.opacity = '0.5';
    } else {
      cartProceedCheckoutBtn.disabled = false;
      cartProceedCheckoutBtn.style.opacity = '1';

      cartItemsList.innerHTML = state.cart.map((item, index) => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        const customsText = item.customizations && item.customizations.length > 0
          ? `<div class="cart-item-customizations"><i class="fa-solid fa-sliders"></i> ${item.customizations.join(', ')}</div>`
          : '';

        return `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                  <h4 class="cart-item-title">${item.name}</h4>
                  <button class="cart-item-remove-btn" data-index="${index}" aria-label="Remove item" title="Remove Item">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
                ${customsText}
              </div>
              <div class="cart-item-bottom">
                <span class="cart-item-price">$${itemTotal}</span>
                <div class="cart-item-qty-controls">
                  <button class="qty-btn" data-action="decrease" data-index="${index}" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
                  <span class="qty-count">${item.quantity}</span>
                  <button class="qty-btn" data-action="increase" data-index="${index}" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');

      // Cart item quantity actions
      cartItemsList.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const action = e.currentTarget.getAttribute('data-action');
          const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
          updateItemQty(index, action === 'increase' ? 1 : -1);
        });
      });

      cartItemsList.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
          removeItem(index);
        });
      });
    }

    // Calculations
    let discountAmount = 0;
    if (state.appliedPromo && subtotal > 0) {
      if (!state.appliedPromo.minSpend || subtotal >= state.appliedPromo.minSpend) {
        discountAmount = (subtotal * (state.appliedPromo.discountPercent / 100));
        cartDiscountRow.style.display = 'flex';
        cartDiscountCodeLabel.innerText = `${state.appliedPromo.code} -${state.appliedPromo.discountPercent}%`;
        cartDiscountAmount.innerText = `-$${discountAmount.toFixed(2)}`;
      } else {
        // Disqualify promo if spend fell below min spend
        cartDiscountRow.style.display = 'none';
        showToast(`Promo ${state.appliedPromo.code} requires minimum $${state.appliedPromo.minSpend} spend`, 'info', 'fa-triangle-exclamation');
        state.appliedPromo = null;
        appliedPromoBadgeWrap.innerHTML = '';
      }
    } else {
      cartDiscountRow.style.display = 'none';
    }

    const discountedSubtotal = Math.max(0, subtotal - discountAmount);
    const tax = discountedSubtotal * 0.08;
    
    // Delivery fee ($0 if orderType is pickup or subtotal >= 50 or cart is empty)
    let deliveryFee = 4.99;
    if (state.orderType === 'pickup' || subtotal >= 50.00 || subtotal === 0) {
      deliveryFee = 0;
    }

    const grandTotal = subtotal === 0 ? 0 : (discountedSubtotal + tax + deliveryFee);

    cartSubtotalAmount.innerText = `$${subtotal.toFixed(2)}`;
    cartTaxAmount.innerText = `$${tax.toFixed(2)}`;
    cartDeliveryFeeAmount.innerText = deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`;
    if (deliveryFee === 0 && subtotal > 0) {
      cartDeliveryFeeAmount.style.color = 'var(--color-success)';
      cartDeliveryFeeAmount.style.fontWeight = '700';
    } else {
      cartDeliveryFeeAmount.style.color = 'inherit';
      cartDeliveryFeeAmount.style.fontWeight = 'normal';
    }

    cartGrandTotal.innerText = `$${grandTotal.toFixed(2)}`;
  }

  // Promo Code Logic
  function applyCouponCode(code) {
    if (!code) return;
    const cleanCode = code.toUpperCase().trim();
    const foundOffer = (typeof SPECIAL_OFFERS !== 'undefined' ? SPECIAL_OFFERS : []).find(o => o.code === cleanCode);

    if (!foundOffer) {
      showToast(`Invalid promo code: "${cleanCode}". Try SAVOR20 or CHEF10`, 'error', 'fa-triangle-exclamation');
      return;
    }

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (foundOffer.minSpend && subtotal < foundOffer.minSpend) {
      showToast(`Code "${cleanCode}" requires minimum spend of $${foundOffer.minSpend.toFixed(2)}`, 'info', 'fa-circle-exclamation');
    }

    state.appliedPromo = foundOffer;
    appliedPromoBadgeWrap.innerHTML = `
      <div class="applied-promo-tag">
        <span><i class="fa-solid fa-check"></i> Code <strong>${cleanCode}</strong> applied (${foundOffer.discountPercent}% OFF)</span>
        <button id="removePromoBtn" style="color: var(--color-danger); margin-left: 0.5rem; font-size: 0.85rem;" title="Remove Promo"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `;

    const removeBtn = document.getElementById('removePromoBtn');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        state.appliedPromo = null;
        appliedPromoBadgeWrap.innerHTML = '';
        saveCart();
        showToast('Promo code removed', 'info');
      });
    }

    cartPromoInput.value = '';
    saveCart();
    showToast(`Success! ${foundOffer.discountPercent}% discount applied!`, 'success', 'fa-tag');
  }

  if (cartApplyPromoBtn) {
    cartApplyPromoBtn.addEventListener('click', () => {
      applyCouponCode(cartPromoInput.value);
    });
  }

  if (cartPromoInput) {
    cartPromoInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyCouponCode(cartPromoInput.value);
      }
    });
  }

  // Drawer open / close
  function openCartDrawer() {
    cartDrawerOverlay.classList.add('active');
    document.body.classList.add('modal-open');
    updateCartUI();
  }

  function closeCartDrawer() {
    cartDrawerOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);

  cartDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === cartDrawerOverlay) closeCartDrawer();
  });

  // ==================== CHECKOUT PIPELINE & SIMULATOR ====================
  function openCheckout() {
    if (state.cart.length === 0) {
      showToast('Your bag is empty! Please select dishes first.', 'info');
      return;
    }
    closeCartDrawer();
    checkoutModal.classList.add('active');
    document.body.classList.add('modal-open');

    // Reset checkout step view
    checkoutFormContent.style.display = 'block';
    orderSuccessContent.style.display = 'none';

    updateCheckoutSummary();
  }

  function closeCheckout() {
    checkoutModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  if (cartProceedCheckoutBtn) cartProceedCheckoutBtn.addEventListener('click', openCheckout);
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);
  if (finishOrderCloseBtn) finishOrderCloseBtn.addEventListener('click', closeCheckout);

  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) closeCheckout();
  });

  // Delivery vs. Pickup
  if (orderTypeDeliveryBtn && orderTypePickupBtn) {
    orderTypeDeliveryBtn.addEventListener('click', () => {
      orderTypeDeliveryBtn.classList.add('active');
      orderTypePickupBtn.classList.remove('active');
      state.orderType = 'delivery';
      checkoutAddressField.style.display = 'block';
      const addrInput = document.getElementById('checkoutAddress');
      if (addrInput) addrInput.required = true;
      updateCheckoutSummary();
      saveCart();
    });

    orderTypePickupBtn.addEventListener('click', () => {
      orderTypePickupBtn.classList.add('active');
      orderTypeDeliveryBtn.classList.remove('active');
      state.orderType = 'pickup';
      checkoutAddressField.style.display = 'none';
      const addrInput = document.getElementById('checkoutAddress');
      if (addrInput) addrInput.required = false;
      updateCheckoutSummary();
      saveCart();
    });
  }

  // Payment methods
  paymentOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      paymentOptionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const method = btn.getAttribute('data-method');
      if (method === 'card') {
        cardFieldsWrap.style.display = 'grid';
      } else {
        cardFieldsWrap.style.display = 'none';
      }
    });
  });

  // Tip Selector
  tipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tipBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.tipPercent = parseInt(btn.getAttribute('data-tip'), 10);
      updateCheckoutSummary();
    });
  });

  function updateCheckoutSummary() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discountAmount = 0;
    if (state.appliedPromo && subtotal > 0) {
      if (!state.appliedPromo.minSpend || subtotal >= state.appliedPromo.minSpend) {
        discountAmount = subtotal * (state.appliedPromo.discountPercent / 100);
      }
    }

    const discountedSubtotal = Math.max(0, subtotal - discountAmount);
    const tax = discountedSubtotal * 0.08;
    const deliveryFee = (state.orderType === 'pickup' || subtotal >= 50.00 || subtotal === 0) ? 0 : 4.99;
    
    // Tip
    const tipAmount = discountedSubtotal * (state.tipPercent / 100);
    if (tip15Value) {
      tip15Value.innerText = (discountedSubtotal * 0.15).toFixed(2);
    }

    const grandTotal = discountedSubtotal + tax + deliveryFee + tipAmount;
    if (checkoutFinalTotalDisplay) {
      checkoutFinalTotalDisplay.innerText = `$${grandTotal.toFixed(2)}`;
    }
  }

  // Form submit & Simulated order placement
  if (checkoutMasterForm) {
    checkoutMasterForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const customerName = document.getElementById('checkoutName').value.trim();
      const submitOrderBtn = document.getElementById('submitOrderBtn');

      // Loading state
      submitOrderBtn.disabled = true;
      submitOrderBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Securely...`;

      setTimeout(() => {
        submitOrderBtn.disabled = false;
        submitOrderBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Authorize & Place Order`;

        // Switch to Order Confirmation view
        checkoutFormContent.style.display = 'none';
        orderSuccessContent.style.display = 'block';

        // Update indicators
        document.getElementById('step1Indicator').classList.remove('active');
        document.getElementById('step2Indicator').classList.remove('active');
        document.getElementById('step3Indicator').classList.add('active');

        // Populate order success details
        const randomNum = Math.floor(10000 + Math.random() * 90000);
        const orderRef = `SAV-${randomNum}`;
        confirmedOrderRef.innerText = orderRef;
        confirmedCustomerName.innerText = customerName;

        // Populate items manifest
        confirmedOrderItemsSummary.innerHTML = state.cart.map(item => `
          <div style="display: flex; justify-content: space-between;">
            <span>${item.quantity}x ${item.name}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        `).join('');

        confirmedOrderTotalDisplay.innerText = checkoutFinalTotalDisplay.innerText;

        // Reset tracking step
        state.trackingStep = 2;
        updateOrderTrackerNodes();

        // Clear cart
        state.cart = [];
        state.appliedPromo = null;
        if (appliedPromoBadgeWrap) appliedPromoBadgeWrap.innerHTML = '';
        saveCart();

        showToast(`Order <strong>${orderRef}</strong> placed successfully!`, 'success', 'fa-check');
      }, 1400);
    });
  }

  // Order Tracker Simulator
  function updateOrderTrackerNodes() {
    const nodes = [
      document.getElementById('trackNode1'),
      document.getElementById('trackNode2'),
      document.getElementById('trackNode3'),
      document.getElementById('trackNode4')
    ];

    nodes.forEach((node, idx) => {
      const stepIndex = idx + 1;
      node.classList.remove('completed', 'active');
      if (stepIndex < state.trackingStep) {
        node.classList.add('completed');
      } else if (stepIndex === state.trackingStep) {
        node.classList.add('active');
      }
    });

    if (state.trackingStep === 4) {
      trackOrderSimulateStepBtn.innerText = 'Delivered & Completed';
      trackOrderSimulateStepBtn.disabled = true;
      trackOrderSimulateStepBtn.style.opacity = '0.6';
    } else {
      trackOrderSimulateStepBtn.innerHTML = `<i class="fa-solid fa-forward-step"></i> Simulate Next Step`;
      trackOrderSimulateStepBtn.disabled = false;
      trackOrderSimulateStepBtn.style.opacity = '1';
    }
  }

  if (trackOrderSimulateStepBtn) {
    trackOrderSimulateStepBtn.addEventListener('click', () => {
      if (state.trackingStep < 4) {
        state.trackingStep++;
        updateOrderTrackerNodes();

        if (state.trackingStep === 3) {
          showToast('Courier picked up your order! En route to your address.', 'info', 'fa-motorcycle');
        } else if (state.trackingStep === 4) {
          showToast('Order arrived! Bon Appétit.', 'success', 'fa-utensils');
        }
      }
    });
  }

  // ==================== TABLE RESERVATION LOGIC ====================
  if (tableReservationForm) {
    tableReservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName').value.trim();
      const phone = document.getElementById('resPhone').value.trim();
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const guests = document.getElementById('resGuests').value;
      const area = document.getElementById('resArea').value;

      if (!name || !phone || !date || !time) {
        showToast('Please complete all required reservation fields.', 'error');
        return;
      }

      // Generate simulated booking code
      const bookingCode = `RES-${Math.floor(1000 + Math.random() * 9000)}`;
      resBookingCode.innerText = bookingCode;
      resDetailName.innerText = name;
      resDetailDateTime.innerText = `${date} at ${time}`;
      resDetailGuests.innerText = `${guests} ${guests === '1' ? 'Guest' : 'Guests'}`;
      resDetailArea.innerText = area;

      // Show confirmation modal
      reservationConfirmModal.classList.add('active');
      document.body.classList.add('modal-open');

      tableReservationForm.reset();
      // Reset min date to today
      const today = new Date().toISOString().split('T')[0];
      resDateInput.value = today;

      showToast(`Reservation confirmed for ${name}!`, 'success', 'fa-champagne-glasses');
    });
  }

  function closeReservationModal() {
    reservationConfirmModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  if (closeReservationConfirmBtn) closeReservationConfirmBtn.addEventListener('click', closeReservationModal);
  if (dismissResModalBtn) dismissResModalBtn.addEventListener('click', closeReservationModal);

  reservationConfirmModal.addEventListener('click', (e) => {
    if (e.target === reservationConfirmModal) closeReservationModal();
  });

  // ==================== CONTACT FORM & NEWSLETTER ====================
  if (contactUsForm) {
    contactUsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      contactUsForm.reset();
      showToast(`Thank you, ${name}! Your inquiry has been dispatched to our concierge.`, 'success', 'fa-paper-plane');
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value.trim();
      newsletterForm.reset();
      showToast(`Welcome to the Savoria Circle! We sent your $15 voucher to ${email}`, 'success', 'fa-sparkles');
    });
  }

  // ==================== TESTIMONIALS RENDERING ====================
  function renderCustomerReviews() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid || typeof CUSTOMER_REVIEWS === 'undefined') return;

    testimonialsGrid.innerHTML = CUSTOMER_REVIEWS.map(rev => {
      let starsHtml = '';
      for (let i = 0; i < rev.rating; i++) {
        starsHtml += `<i class="fa-solid fa-star"></i> `;
      }

      return `
        <div class="testimonial-card">
          <div>
            <i class="fa-solid fa-quote-left testimonial-quote-icon"></i>
            <div class="testimonial-rating">${starsHtml}</div>
            <h4 class="testimonial-title">${rev.title}</h4>
            <p class="testimonial-body">"${rev.content}"</p>
            ${rev.dishOrdered ? `<span class="testimonial-ordered-tag"><i class="fa-solid fa-utensils"></i> Enjoyed: ${rev.dishOrdered}</span>` : ''}
          </div>
          <div class="testimonial-user">
            <img src="${rev.avatar}" alt="${rev.name}" class="testimonial-avatar">
            <div class="testimonial-user-info">
              <h5>${rev.name}</h5>
              <span>${rev.role} • ${rev.date}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Escape key handler for all active modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (quickViewModal.classList.contains('active')) closeQuickView();
      if (cartDrawerOverlay.classList.contains('active')) closeCartDrawer();
      if (checkoutModal.classList.contains('active')) closeCheckout();
      if (reservationConfirmModal.classList.contains('active')) closeReservationModal();
      if (mobileNavDrawer.classList.contains('active')) {
        mobileNavDrawer.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    }
  });

  // ==================== INITIALIZATION ====================
  renderSpecialDeals();
  renderMenu();
  renderCustomerReviews();
  updateCartUI();
});
