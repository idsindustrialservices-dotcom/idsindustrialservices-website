const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav-links');if(b&&n)b.addEventListener('click',()=>{const o=n.dataset.open==='1';n.dataset.open=o?'0':'1';if(o)n.style.display='none';else{Object.assign(n.style,{display:'flex',position:'absolute',left:'14px',right:'14px',top:'70px',flexDirection:'column',alignItems:'stretch',gap:'0',padding:'12px 18px',background:'#080a0c',border:'1px solid rgba(230,170,32,.35)'});[...n.querySelectorAll('a')].forEach(a=>a.style.padding='11px 0')}});

// Approved IDS horizontal logo in header and footer
const logoSrc='assets/images/ids-logo-approved.svg';
document.querySelectorAll('.brand').forEach(brand=>{brand.innerHTML=`<img class="ids-brand-logo" src="${logoSrc}" alt="Ideal Solution Industrial Services">`;});
const logoStyle=document.createElement('style');logoStyle.textContent=`.ids-brand-logo{display:block;width:310px;max-width:36vw;height:auto}.footer .ids-brand-logo{width:300px;max-width:100%}@media(max-width:720px){.ids-brand-logo{width:220px;max-width:58vw}}.experience-highlight{margin:4px 0 14px;font-size:18px;font-weight:900;letter-spacing:.055em;color:#fff;text-transform:uppercase}.experience-highlight strong{color:var(--gold2);font-size:21px}@media(max-width:720px){.experience-highlight{font-size:14px;line-height:1.35;margin:2px 0 13px}.experience-highlight strong{font-size:17px}}`;document.head.appendChild(logoStyle);

// 26+ years directly below YOU CAN RELY ON on the home hero
const heroTitle=document.querySelector('.hero h1');if(heroTitle&&!document.querySelector('.experience-highlight')){const exp=document.createElement('div');exp.className='experience-highlight';exp.innerHTML='<strong>26+ YEARS</strong> OF INDUSTRIAL EXPERIENCE';heroTitle.insertAdjacentElement('afterend',exp);}
