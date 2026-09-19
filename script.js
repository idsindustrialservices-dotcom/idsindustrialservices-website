document.addEventListener('DOMContentLoaded',()=>{
  const button=document.querySelector('.menu-btn');
  const nav=document.querySelector('.nav-links');
  if(button&&nav){
    button.addEventListener('click',()=>{
      const open=nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded',String(open));
      if(open){
        Object.assign(nav.style,{display:'flex',position:'absolute',left:'14px',right:'14px',top:'68px',flexDirection:'column',alignItems:'stretch',gap:'0',padding:'12px 18px',background:'#080a0c',border:'1px solid rgba(230,170,32,.35)',zIndex:'60'});
        nav.querySelectorAll('a').forEach(a=>a.style.padding='11px 0');
      }else if(window.innerWidth<=820){nav.style.display='none';}
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');if(window.innerWidth<=820)nav.style.display='none';}));
  }

  /* Keep one approved, undistorted brand lockup everywhere, including legacy pages. */
  document.querySelectorAll('.brand').forEach(brand=>{
    const oldMark=brand.querySelector('.logo-mark,.brand-mark');
    if(oldMark) oldMark.remove();
    let logo=brand.querySelector('img');
    if(!logo){
      logo=document.createElement('img');
      brand.prepend(logo);
    }
    logo.src='assets/images/ids-logo-approved.svg';
    logo.removeAttribute('width');
    logo.removeAttribute('height');
    logo.classList.add('ids-approved-logo');
    logo.alt='Ideal Solution Industrial Services';
    logo.setAttribute('decoding','async');
    const brandCopy=brand.querySelector('.brand-copy');
    if(brandCopy) brandCopy.style.display='none';
  });

  /* Fill small technical SEO gaps on older pages without changing their visible design. */
  const canonical=document.querySelector('link[rel="canonical"]');
  const canonicalUrl=canonical?.href||window.location.href.split('#')[0].split('?')[0];
  const ensureMeta=(attr,value)=>{
    let el=document.head.querySelector('meta['+attr+']');
    if(!el){el=document.createElement('meta');el.setAttribute(attr,value);document.head.appendChild(el);}
    if(!el.content) el.content=value;
  };
  const title=document.title||'Ideal Solution Industrial Services';
  const description=document.querySelector('meta[name="description"]')?.content||'Industrial maintenance and packaging machinery service in Orlando and Central Florida from Ideal Solution Industrial Services.';
  ensureMeta('property="og:site_name"','Ideal Solution Industrial Services');
  ensureMeta('property="og:title"',title);
  ensureMeta('property="og:description"',description);
  ensureMeta('property="og:url"',canonicalUrl);
  if(!document.head.querySelector('meta[property="og:image"]')) ensureMeta('property="og:image"',new URL('assets/images/industrial-maintenance.webp',canonicalUrl).href);
  ensureMeta('name="twitter:card"','summary_large_image');
  ensureMeta('name="twitter:title"',title);
  ensureMeta('name="twitter:description"',description);
  if(!document.head.querySelector('meta[name="twitter:image"]')) ensureMeta('name="twitter:image"',new URL('assets/images/industrial-maintenance.webp',canonicalUrl).href);
  if(!document.head.querySelector('meta[name="theme-color"]')) ensureMeta('name="theme-color"','#07090b');
  if(!document.head.querySelector('link[rel="icon"]')){const icon=document.createElement('link');icon.rel='icon';icon.href='assets/favicon.svg';icon.type='image/svg+xml';document.head.appendChild(icon);}

  /* Breadcrumb structured data helps Google understand the site's page hierarchy. */
  if(!document.head.querySelector('script[data-ids-breadcrumbs]') && location.pathname!=='/' && !location.pathname.endsWith('/index.html')){
    const path=location.pathname.split('/').filter(Boolean).pop()||'';
    const label=(document.querySelector('.page-hero h1')?.textContent||document.title||path).replace(/\\s+/g,' ').trim();
    const data={
      '@context':'https://schema.org','@type':'BreadcrumbList',
      'itemListElement':[
        {'@type':'ListItem','position':1,'name':'Home','item':new URL('index.html',canonicalUrl).href},
        {'@type':'ListItem','position':2,'name':label,'item':canonicalUrl}
      ]
    };
    const node=document.createElement('script');node.type='application/ld+json';node.dataset.idsBreadcrumbs='true';node.textContent=JSON.stringify(data);document.head.appendChild(node);
  }

  const params=new URLSearchParams(window.location.search);
  if(params.get('sent')==='1'){
    const message=document.createElement('div');message.className='form-success';message.textContent='Thank you. Your service request has been sent. IDS will review your information and contact you.';
    const form=document.querySelector('.form');if(form)form.parentNode.insertBefore(message,form);
  }
});
