/* ========================================
   MAIN JS — Rajnish ❤️ Khushi
   ======================================== */

'use strict';

/* ============================
   NAVBAR SCROLL EFFECT
   ============================ */
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Hamburger toggle
  if (hamburger && navLinks) {
    // Create backdrop for mobile nav
    const backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);

    function openNav() {
      navLinks.classList.add('open');
      hamburger.classList.add('active');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    // Close on backdrop tap
    backdrop.addEventListener('click', closeNav);

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeNav);
    });
  }
})();

/* ============================
   SCROLL ANIMATIONS
   ============================ */
(function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on sibling index
        const delay = (i % 4) * 80;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
})();

/* ============================
   FLOATING HEARTS BACKGROUND
   ============================ */
(function initFloatingHearts() {
  const container = document.querySelector('.hearts-bg');
  if (!container) return;

  const symbols = ['❤️', '💕', '💖', '💗', '🌸', '✨', '💝', '💞'];

  function createHeart() {
    const heart = document.createElement('span');
    heart.className = 'heart-particle';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 0.8 + 0.7) + 'rem';
    const duration = Math.random() * 10 + 12;
    const delay    = Math.random() * 8;
    heart.style.animationDuration = duration + 's';
    heart.style.animationDelay    = delay + 's';
    container.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
      heart.remove();
      createHeart();
    }, (duration + delay) * 1000);
  }

  // Spawn a batch of hearts
  for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 600);
  }
})();

/* ============================
   TYPEWRITER EFFECT (exported)
   ============================ */
window.typeWriter = function(element, text, speed = 60) {
  element.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  type();
};

/* ============================
   CONFETTI (exported)
   ============================ */
window.launchConfetti = function() {
  const colors = ['#e8527a', '#f9d5e5', '#f2c06c', '#c9956c', '#fff'];
  const container = document.body;

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.style.cssText = `
      position: fixed;
      top: -10px;
      left: ${Math.random() * 100}vw;
      width: ${Math.random() * 8 + 5}px;
      height: ${Math.random() * 8 + 5}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      pointer-events: none;
      z-index: 9999;
      animation: confettiFall ${Math.random() * 3 + 2}s ease-in forwards;
      animation-delay: ${Math.random() * 1.5}s;
    `;
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }

  // Inject keyframe once
  if (!document.getElementById('confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
      @keyframes confettiFall {
        0%   { transform: translateY(0) rotate(0deg);   opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
};

/* ============================
   GALLERY LIGHTBOX
   ============================ */
(function initLightbox() {
  // Only run on gallery page
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!galleryItems.length) return;

  // Create lightbox
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.innerHTML = `
    <div class="lb-backdrop"></div>
    <div class="lb-content">
      <button class="lb-close">✕</button>
      <div class="lb-img-wrap">
        <img class="lb-img" src="" alt="">
        <div class="lb-placeholder">💕</div>
      </div>
      <p class="lb-caption script"></p>
    </div>
  `;
  lightbox.style.cssText = `
    position: fixed; inset: 0; z-index: 9000;
    display: none; align-items: center; justify-content: center;
  `;
  document.body.appendChild(lightbox);

  const style = document.createElement('style');
  style.textContent = `
    #lightbox { background: rgba(44,26,46,0.92); backdrop-filter: blur(8px); }
    #lightbox.active { display: flex; }
    .lb-content {
      position: relative; max-width: 90vw; max-height: 90vh;
      display: flex; flex-direction: column; align-items: center; gap: 1rem;
      animation: fadeInUp 0.3s ease;
    }
    .lb-img-wrap {
      border-radius: 12px; overflow: hidden;
      box-shadow: 0 30px 80px rgba(0,0,0,0.5);
      background: linear-gradient(135deg, #fce4ec, #f9d5e5);
      display: flex; align-items: center; justify-content: center;
      min-width: 200px; min-height: 200px;
    }
    .lb-img { max-width: 80vw; max-height: 70vh; object-fit: contain; display: block; }
    .lb-img[src=""] { display: none; }
    .lb-placeholder { font-size: 5rem; }
    .lb-caption { color: white; font-size: 1.4rem; text-align: center; }
    .lb-close {
      position: absolute; top: -3rem; right: 0;
      background: rgba(255,255,255,0.15); border: none;
      color: white; font-size: 1.2rem; cursor: pointer;
      width: 40px; height: 40px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.2s;
    }
    .lb-close:hover { background: rgba(232,82,122,0.6); }
  `;
  document.head.appendChild(style);

  function openLightbox(item) {
    const img = item.querySelector('img');
    const caption = item.dataset.caption || '';
    const lbImg = lightbox.querySelector('.lb-img');
    const lbCaption = lightbox.querySelector('.lb-caption');
    const lbPlaceholder = lightbox.querySelector('.lb-placeholder');

    if (img) {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbImg.style.display = 'block';
      lbPlaceholder.style.display = 'none';
    } else {
      lbImg.src = '';
      lbImg.style.display = 'none';
      lbPlaceholder.style.display = 'block';
    }

    lbCaption.textContent = caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Track current open index for prev/next
  let currentIndex = 0;
  const itemsArr = Array.from(galleryItems);

  function openLightboxByIndex(idx) {
    currentIndex = idx;
    openLightbox(itemsArr[idx]);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + itemsArr.length) % itemsArr.length;
    openLightbox(itemsArr[currentIndex]);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % itemsArr.length;
    openLightbox(itemsArr[currentIndex]);
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightboxByIndex(idx));
  });

  lightbox.querySelector('.lb-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Touch swipe support for lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showNext();
      } else {
        showPrev();
      }
    }
  }, { passive: true });
})();

/* ============================
   SMOOTH SECTION STAGGER
   ============================ */
(function addStaggerToChildren() {
  const staggerParents = document.querySelectorAll(
    '.facts-grid, .promises-grid, .love-quotes-grid, .scrapbook-grid'
  );
  staggerParents.forEach(parent => {
    Array.from(parent.children).forEach((child, i) => {
      if (child.classList.contains('animate-on-scroll')) {
        child.style.transitionDelay = (i * 80) + 'ms';
      }
    });
  });
})();

/* ============================
   CURSOR TRAIL (on desktop)
   ============================ */
(function initCursorTrail() {
  if (window.innerWidth < 768) return; // skip mobile

  const trail = [];
  const trailLen = 6;
  const symbols = ['❤', '♡', '✦'];

  for (let i = 0; i < trailLen; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed; pointer-events: none; z-index: 9998;
      font-size: 0.7rem; color: rgba(232,82,122,0.5);
      transition: all ${0.05 + i * 0.03}s ease;
      transform: translate(-50%, -50%);
    `;
    dot.textContent = symbols[i % symbols.length];
    document.body.appendChild(dot);
    trail.push(dot);
  }

  document.addEventListener('mousemove', (e) => {
    trail.forEach((dot, i) => {
      setTimeout(() => {
        dot.style.left = e.clientX + 'px';
        dot.style.top  = e.clientY + 'px';
        dot.style.opacity = (1 - i / trailLen) * 0.6;
      }, i * 30);
    });
  });
})();

/* ============================
   CONSOLE LOVE NOTE
   ============================ */
console.log('%c❤️ Made with love by Rajnish Kumar Verma', 'color:#e8527a;font-size:1.2rem;font-family:Georgia;');
console.log('%cFor Khushi Kumari — Happy Girlfriend Day! 🌸', 'color:#c9956c;font-size:1rem;font-style:italic;');
