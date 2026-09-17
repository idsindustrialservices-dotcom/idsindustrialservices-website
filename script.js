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

  /* The HTML already contains the approved IDS mark + wordmark text.
     Do not create, remove, hide, or resize the brand elements with JS. */
  document.querySelectorAll('.brand').forEach(brand=>{
    const logo=brand.querySelector('img');
    const oldMark=brand.querySelector('.logo-mark');
    if(oldMark) oldMark.remove();
    if(logo){
      logo.classList.add('ids-approved-logo');
      logo.alt='Ideal Solution Industrial Services';
    }
    const brandCopy=brand.querySelector('.brand-copy');
    if(brandCopy) brandCopy.style.display='';
  });

  const params=new URLSearchParams(window.location.search);
  if(params.get('sent')==='1'){
    const message=document.createElement('div');message.className='form-success';message.textContent='Thank you. Your service request has been sent. IDS will review your information and contact you.';
    const form=document.querySelector('.form');if(form)form.parentNode.insertBefore(message,form);
  }
});
