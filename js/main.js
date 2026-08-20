/**
 * Taco John's Franchise Landing Page
 * Main JavaScript - All interactions, animations, and logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Mobile nav is handled in shared-layout.js (header is injected there).

  // ========== HERO PARALLAX ON SCROLL ==========
  gsap.to('#hero-slider', {
    y: -300,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  // ========== VALUE CARDS SCROLL REVEAL ==========
  const valueCards = document.querySelectorAll('.value-card');
  valueCards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // ========== QUICK ACTION CARDS SCROLL REVEAL ==========
  const quickCards = document.querySelectorAll('.quick-card');
  quickCards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        once: true,
      },
    });
  });

  const appDownloadBox = document.querySelector('.app-download-banner__box');
  if (appDownloadBox) {
    gsap.to(appDownloadBox, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.app-download-banner',
        start: 'top 88%',
        once: true,
      },
    });
  }

  // ========== LOCATION CARDS SCROLL REVEAL ==========
  const locationCards = document.querySelectorAll('.location-card');
  locationCards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // ========== ABOUT SECTION SCROLL REVEAL ==========
  const aboutElements = document.querySelectorAll('.about-title, .about-text, .about-cta');
  aboutElements.forEach((el, index) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // ========== OPEN/CLOSED STATUS CHECK ==========
  const locationHours = {
    leominster: {
      0: { open: 7, close: 24 },   // Sunday
      1: { open: 7, close: 24 },   // Monday
      2: { open: 7, close: 24 },   // Tuesday
      3: { open: 7, close: 24 },   // Wednesday
      4: { open: 7, close: 24 },   // Thursday
      5: { open: 7, close: 25 },   // Friday (1 AM = 25)
      6: { open: 7, close: 25 },   // Saturday (1 AM = 25)
    },
    boston: {
      0: { open: 8, close: 24 },   // Sunday
      1: { open: 7, close: 24 },   // Monday
      2: { open: 7, close: 24 },   // Tuesday
      3: { open: 7, close: 24 },   // Wednesday
      4: { open: 7, close: 24 },   // Thursday
      5: { open: 7, close: 24 },   // Friday
      6: { open: 7, close: 24 },   // Saturday
    },
  };

  function checkOpenStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours() + now.getMinutes() / 60;

    Object.keys(locationHours).forEach(location => {
      const statusEl = document.querySelector(`.location-status[data-location="${location}"]`);
      const hoursEl = document.querySelector(`.today-hours[data-location="${location}"]`);

      if (!statusEl || !hoursEl) return;

      const todayHours = locationHours[location][day];
      const isOpen = hour >= todayHours.open && hour < todayHours.close;

      // Format hours display
      const openStr = formatHour(todayHours.open);
      const closeStr = formatHour(todayHours.close);
      hoursEl.textContent = `Today's Hours: ${openStr} - ${closeStr}`;

      if (isOpen) {
        statusEl.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>Open';
        statusEl.className = 'location-status inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 mb-1';
      } else {
        statusEl.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5"></span>Closed';
        statusEl.className = 'location-status inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 mb-1';
      }
    });
  }

  function formatHour(decimalHour) {
    if (decimalHour >= 24) {
      const hour = Math.floor(decimalHour - 24);
      const suffix = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
      return `${displayHour}:00 ${suffix}`;
    }
    const hour = Math.floor(decimalHour);
    const suffix = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
    return `${displayHour}:00 ${suffix}`;
  }

  checkOpenStatus();
  // Update every minute
  setInterval(checkOpenStatus, 60000);

  // ========== MOBILE STICKY BAR SCROLL BEHAVIOR ==========
  const stickyBar = document.querySelector('.mobile-sticky-order');
  let stickyLastScroll = 0;

  function handleStickyBar() {
    if (!stickyBar) return;
    const currentScroll = window.scrollY;
    const scrollDelta = currentScroll - stickyLastScroll;

    // Hide when scrolling down, show when scrolling up
    // Also hide if near bottom of page
    const nearBottom = (window.innerHeight + currentScroll) >= (document.body.scrollHeight - 100);

    if (scrollDelta > 5 && currentScroll > 500 && !nearBottom) {
      stickyBar.classList.add('hidden-bar');
    } else {
      stickyBar.classList.remove('hidden-bar');
    }

    stickyLastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleStickyBar, { passive: true });

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});
