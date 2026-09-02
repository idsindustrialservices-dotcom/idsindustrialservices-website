const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav-links');if(b&&n)b.addEventListener('click',()=>{const o=n.dataset.open==='1';n.dataset.open=o?'0':'1';if(o)n.style.display='none';else{Object.assign(n.style,{display:'flex',position:'absolute',left:'14px',right:'14px',top:'70px',flexDirection:'column',alignItems:'stretch',gap:'0',padding:'12px 18px',background:'#080a0c',border:'1px solid rgba(230,170,32,.35)'});[...n.querySelectorAll('a')].forEach(a=>a.style.padding='11px 0')}});

document.querySelectorAll('.quote-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(form),s=encodeURIComponent(`IDS Service Request - ${f.get('company')||f.get('name')||'Website'}`),m=encodeURIComponent(`Name: ${f.get('name')||''}\nCompany: ${f.get('company')||''}\nPhone: ${f.get('phone')||''}\nEmail: ${f.get('email')||''}\nService: ${f.get('service')||''}\nMachine / Model: ${f.get('machine')||''}\nLocation: ${f.get('location')||''}\n\nIssue / Request:\n${f.get('message')||''}`);location.href=`mailto:idsindustrialservices@gmail.com?subject=${s}&body=${m}`}));

// Layout-safe approved logo + single 26+ years line.
const fix=document.createElement('style');
fix.textContent=`
.brand::before{width:245px!important;height:52px!important;background-image:url("assets/images/ids-logo-approved.svg")!important;background-position:left center!important;background-size:contain!important;background-repeat:no-repeat!important}
.footer .brand::before{width:245px!important;height:52px!important}
.hero h1{margin-bottom:18px!important}
.hero h1::before,.hero h1::after{content:none!important;display:none!important}
.experience-highlight{margin:4px 0 14px;font-size:18px;font-weight:900;letter-spacing:.055em;color:#fff;text-transform:uppercase}
.experience-highlight strong{color:var(--gold2);font-size:21px}
@media(max-width:1180px){.brand::before{width:205px!important;height:46px!important}.nav{gap:18px!important}.nav-links{gap:18px!important}}
@media(max-width:720px){.brand::before{width:175px!important;height:40px!important}.footer .brand::before{width:210px!important;height:46px!important}.experience-highlight{font-size:14px;line-height:1.35;margin:2px 0 13px}.experience-highlight strong{font-size:17px}}
`;
document.head.appendChild(fix);

const heroTitle=document.querySelector('.hero h1');
if(heroTitle){document.querySelectorAll('.experience-highlight').forEach((el,i)=>{if(i>0)el.remove()});if(!document.querySelector('.experience-highlight')){const exp=document.createElement('div');exp.className='experience-highlight';exp.innerHTML='<strong>26+ YEARS</strong> OF INDUSTRIAL EXPERIENCE';heroTitle.insertAdjacentElement('afterend',exp);}}
