document.addEventListener('contextmenu', (event) => event.preventDefault(), { capture: true });

const bundleItems = [...document.querySelectorAll('.bundle-item')];
const bundleMotion = window.matchMedia('(max-width: 700px) and (prefers-reduced-motion: no-preference)');
let bundleObserver;

function syncBundleMotion() {
  bundleObserver?.disconnect();
  bundleItems.forEach((item) => item.classList.remove('is-centered'));
  if (!bundleMotion.matches) return;

  bundleObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      target.closest('.bundle-item').classList.toggle('is-centered', isIntersecting);
    });
  }, { rootMargin: '-43% 0px -43% 0px', threshold: 0 });

  bundleItems.forEach((item) => bundleObserver.observe(item.querySelector('.bundle-image')));
}

syncBundleMotion();
bundleMotion.addEventListener('change', syncBundleMotion);
