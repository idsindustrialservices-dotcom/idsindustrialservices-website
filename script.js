
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.dataset.open === 'true';
    navLinks.dataset.open = String(!open);
    navLinks.style.display = open ? 'none' : 'flex';
    if (!open) {
      navLinks.style.position='absolute';
      navLinks.style.left='14px';
      navLinks.style.right='14px';
      navLinks.style.top='74px';
      navLinks.style.flexDirection='column';
      navLinks.style.alignItems='stretch';
      navLinks.style.padding='18px';
      navLinks.style.background='#0b0e11';
      navLinks.style.border='1px solid rgba(255,255,255,.10)';
      navLinks.style.borderRadius='12px';
    }
  });
}

const quoteForm = document.querySelector('#quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(quoteForm);
    const subject = encodeURIComponent(`IDS Service Request - ${f.get('company') || f.get('name') || 'Website'}`);
    const body = encodeURIComponent(
`Name: ${f.get('name') || ''}
Company: ${f.get('company') || ''}
Phone: ${f.get('phone') || ''}
Email: ${f.get('email') || ''}
Machine / Model: ${f.get('machine') || ''}
Service: ${f.get('service') || ''}

Issue / Request:
${f.get('message') || ''}`
    );
    window.location.href = `mailto:idsindustrialservices@gmail.com?subject=${subject}&body=${body}`;
  });
}
