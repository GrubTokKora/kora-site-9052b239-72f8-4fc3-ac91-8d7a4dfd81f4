/** Official horizontal wordmark (CDN). */
const TACO_JOHNS_LOGO_URL =
  'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9052b239-72f8-4fc3-ac91-8d7a4dfd81f4/de8c94d8-887e-4625-825f-ec262dbc28df/1777350028_siy26l.png';

document.addEventListener('DOMContentLoaded', () => {
  const headerMount = document.getElementById('shared-header');
  const footerMount = document.getElementById('shared-footer');

  if (!headerMount || !footerMount) return;

  const pageType = document.body.dataset.pageType === 'home' ? 'home' : 'location';

  const headerHtml = getHomeHeader(pageType);
  const footerHtml = getSharedFooter(pageType);

  headerMount.innerHTML = headerHtml;
  footerMount.innerHTML = footerHtml;

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  if (!mobileMenuBtn || !mobileMenu || !menuIcon || !closeIcon) return;

  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');

    if (isOpen) {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
});

function getHomeHeader(pageType) {
  const locationsHref = pageType === 'home' ? '#locations' : 'index.html#locations';
  return `
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 scrolled">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="index.html" class="flex-shrink-0 block" aria-label="Taco John's home">
          <img src="${TACO_JOHNS_LOGO_URL}" alt="Taco John's" width="220" height="48" class="h-10 w-auto max-h-10 object-contain object-left" decoding="async" />
        </a>
        <div class="hidden md:flex items-center space-x-8">
          <a href="https://tacojohns.com/our-menu/" target="_blank" class="nav-link text-sm font-semibold uppercase tracking-wider hover:text-tj-red transition-colors">Menu</a>
          <a href="${locationsHref}" class="nav-link text-sm font-semibold uppercase tracking-wider hover:text-tj-red transition-colors">Locations</a>
          <a href="https://www.ezcater.com/brand/pvt/taco-johns-1" target="_blank" class="nav-link text-sm font-semibold uppercase tracking-wider hover:text-tj-red transition-colors">Catering</a>
          <a href="https://tacojohns.com/biggerbolderrewards/" target="_blank" class="nav-link text-sm font-semibold uppercase tracking-wider hover:text-tj-red transition-colors">Rewards</a>
          <a href="https://order.tacojohns.com/" target="_blank" class="bg-tj-red text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-tj-red-dark hover:scale-105 transition-all shadow-lg">Order Now</a>
        </div>
        <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Toggle navigation menu">
          <svg id="menu-icon" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg id="close-icon" class="w-7 h-7 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <div id="mobile-menu" class="md:hidden hidden bg-tj-burgundy/95 backdrop-blur-lg border-t border-white/10">
      <div class="px-4 py-6 space-y-4">
        <a href="https://tacojohns.com/our-menu/" target="_blank" class="block text-white text-lg font-semibold py-2 hover:text-tj-yellow transition-colors">Menu</a>
        <a href="${locationsHref}" class="block text-white text-lg font-semibold py-2 hover:text-tj-yellow transition-colors">Locations</a>
        <a href="https://www.ezcater.com/brand/pvt/taco-johns-1" target="_blank" class="block text-white text-lg font-semibold py-2 hover:text-tj-yellow transition-colors">Catering</a>
        <a href="https://tacojohns.com/biggerbolderrewards/" target="_blank" class="block text-white text-lg font-semibold py-2 hover:text-tj-yellow transition-colors">Rewards</a>
        <a href="https://order.tacojohns.com/" target="_blank" class="block bg-tj-red text-white text-center py-3 rounded-full font-bold uppercase tracking-wider mt-4 hover:bg-tj-red-dark transition-colors">Order Now</a>
      </div>
    </div>
  </nav>
  `;
}


function getSharedFooter(pageType) {
  const locationsLinks = `
      <li><a href="location-leominster.html" class="text-sm font-medium text-white/95 hover:text-white transition-colors">Leominster, MA</a></li>
      <li><a href="location-boston.html" class="text-sm font-medium text-white/95 hover:text-white transition-colors">Boston, MA</a></li>
      <li><a href="location-newington.html" class="text-sm font-medium text-white/95 hover:text-white transition-colors">Newington, CT</a></li>
    `;

  return `
  <footer class="bg-tj-red text-white ${pageType === 'home' ? 'py-14' : 'mt-16'}">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${pageType === 'home' ? '' : 'pt-16 pb-10'}">

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-10">
        <div>
          <h4 class="font-display font-bold text-sm uppercase tracking-wider mb-4 text-tj-yellow">Our Locations</h4>
          <ul class="space-y-2">
            ${locationsLinks}
          </ul>
        </div>
        <div>
          <h4 class="font-display font-bold text-sm uppercase tracking-wider mb-4 text-tj-yellow">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="https://tacojohns.com/our-menu/" target="_blank" class="text-sm font-medium text-white/95 hover:text-white transition-colors">Menu</a></li>
            <li><a href="https://tacojohns.com/biggerbolderrewards/" target="_blank" class="text-sm font-medium text-white/95 hover:text-white transition-colors">Rewards</a></li>
            <li><a href="https://tacojohns.wgiftcard.com/responsive/landing_responsive/landing/tacojohns/" target="_blank" class="text-sm font-medium text-white/95 hover:text-white transition-colors">Gift Cards</a></li>
            <li><a href="https://www.ezcater.com/brand/pvt/taco-johns-1" target="_blank" class="text-sm font-medium text-white/95 hover:text-white transition-colors">Catering</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-display font-bold text-sm uppercase tracking-wider mb-4 text-tj-yellow">Company</h4>
          <ul class="space-y-2">
            <li><a href="https://tacojohns.com/contact-us/" target="_blank" class="text-sm font-medium text-white/95 hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="https://tacojohns.com/privacy-policy/" target="_blank" class="text-sm font-medium text-white/95 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="https://tacojohns.com/terms-of-use/" target="_blank" class="text-sm font-medium text-white/95 hover:text-white transition-colors">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-display font-bold text-sm uppercase tracking-wider mb-4 text-tj-yellow">Follow Us</h4>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/tacojohns" target="_blank" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-tj-red transition-all"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a href="https://twitter.com/tacojohns" target="_blank" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-tj-red transition-all"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
            <a href="https://www.instagram.com/tacojohns/" target="_blank" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-tj-red transition-all"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg></a>
          </div>
        </div>
      </div>

      <div class="border-t border-white/20 pt-6 text-center">
        <p class="text-white/85 text-xs font-medium">&copy;2026 Taco John's International, Inc. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  `;
}
