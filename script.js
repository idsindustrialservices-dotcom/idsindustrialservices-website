document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');

  if (menuButton && nav) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? 'CLOSE' : 'MENU';
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = 'MENU';
      });
    });
  }

  // Use the approved SVG logo with its exact 760:150 aspect ratio.
  document.querySelectorAll('.brand').forEach(brand => {
    brand.querySelectorAll('.logo-mark, .brand-copy, .ids-approved-logo').forEach(el => el.remove());

    const img = document.createElement('img');
    img.className = 'ids-approved-logo';
    img.src = 'assets/images/ids-logo-approved.svg';
    img.alt = 'Ideal Solution Industrial Services';
    img.width = 760;
    img.height = 150;
    img.loading = 'eager';
    img.decoding = 'async';
    img.style.aspectRatio = '760 / 150';
    img.style.height = 'auto';
    img.style.width = '100%';
    img.style.maxWidth = '285px';
    brand.appendChild(img);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && nav) {
      nav.classList.remove('is-open');
      if (menuButton) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = 'MENU';
      }
    }
  });
});
