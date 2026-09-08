document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');

  // Mobile navigation
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

  // Use exactly one approved IDS logo in every brand link.
  // This replaces the old icon + text combination that caused the logo to appear twice.
  document.querySelectorAll('.brand').forEach(brand => {
    brand.querySelectorAll('.logo-mark, .brand-copy, .ids-approved-logo').forEach(el => el.remove());

    const img = document.createElement('img');
    img.className = 'ids-approved-logo';
    img.src = 'assets/images/ids-logo-approved.svg';
    img.alt = 'Ideal Solution Industrial Services';
    img.width = 285;
    img.height = 57;
    img.loading = 'eager';
    img.decoding = 'async';
    brand.appendChild(img);
  });

  // Smoothly close the mobile menu when resizing back to desktop.
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
