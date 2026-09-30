document.addEventListener('DOMContentLoaded',()=>{
  const button=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');
  if(button&&nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');button.setAttribute('aria-expanded',String(open));if(open){Object.assign(nav.style,{display:'flex',position:'absolute',left:'14px',right:'14px',top:'68px',flexDirection:'column',alignItems:'stretch',gap:'0',padding:'12px 18px',background:'#080a0c',border:'1px solid rgba(230,170,32,.35)',zIndex:'60'});nav.querySelectorAll('a').forEach(a=>a.style.padding='11px 0')}else if(window.innerWidth<=820)nav.style.display='none'});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');if(window.innerWidth<=820)nav.style.display='none'}))}

  /* Do not modify the approved header lockup. Each page already contains the correct logo image and wordmark. */

  const canonical=document.querySelector('link[rel="canonical"]');
  const canonicalUrl=canonical?.href||window.location.href.split('#')[0].split('?')[0];
  const ensureMeta=(selector,attr,value)=>{let el=document.head.querySelector(selector);if(!el){el=document.createElement('meta');el.setAttribute(attr,value);document.head.appendChild(el)}if(!el.content)el.content=value};
  const title=document.title||'Ideal Solution Industrial Services';
  const description=document.querySelector('meta[name="description"]')?.content||'Industrial maintenance and packaging machinery service in Orlando and Central Florida from Ideal Solution Industrial Services.';
  ensureMeta('meta[property="og:site_name"]','property','Ideal Solution Industrial Services');
  ensureMeta('meta[property="og:title"]','property',title);
  ensureMeta('meta[property="og:description"]','property',description);
  ensureMeta('meta[property="og:url"]','property',canonicalUrl);
  if(!document.head.querySelector('meta[property="og:image"]'))ensureMeta('meta[property="og:image"]','property',new URL('assets/images/industrial-maintenance.webp',canonicalUrl).href);
  ensureMeta('meta[name="twitter:card"]','name','summary_large_image');
  ensureMeta('meta[name="twitter:title"]','name',title);
  ensureMeta('meta[name="twitter:description"]','name',description);
  if(!document.head.querySelector('meta[name="twitter:image"]'))ensureMeta('meta[name="twitter:image"]','name',new URL('assets/images/industrial-maintenance.webp',canonicalUrl).href);
  if(!document.head.querySelector('meta[name="theme-color"]'))ensureMeta('meta[name="theme-color"]','name','#07090b');
  if(!document.head.querySelector('link[rel="icon"]')){const icon=document.createElement('link');icon.rel='icon';icon.href='assets/favicon.svg';icon.type='image/svg+xml';document.head.appendChild(icon)}

  if(!document.head.querySelector('script[data-ids-breadcrumbs]')&&location.pathname!=='/'&&!location.pathname.endsWith('/index.html')){
    const path=location.pathname.split('/').filter(Boolean).pop()||'';
    const label=(document.querySelector('.page-hero h1')?.textContent||document.title||path).replace(/\\s+/g,' ').trim();
    const data={'@context':'https://schema.org','@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Home','item':new URL('/',canonicalUrl).href},{'@type':'ListItem','position':2,'name':label,'item':canonicalUrl}]};
    const node=document.createElement('script');node.type='application/ld+json';node.dataset.idsBreadcrumbs='true';node.textContent=JSON.stringify(data);document.head.appendChild(node)
  }
  const params=new URLSearchParams(window.location.search);
  if(params.get('sent')==='1'){const message=document.createElement('div');message.className='form-success';message.textContent='Thank you. Your service request has been sent. IDS will review your information and contact you.';const form=document.querySelector('.form');if(form)form.parentNode.insertBefore(message,form)}
});
