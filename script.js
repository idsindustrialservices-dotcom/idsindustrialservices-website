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

  /* Keep exactly one approved IDS logo per brand. The approved PNG already
     contains the complete horizontal logo, so do not create a second logo. */
  document.querySelectorAll('.brand').forEach(brand=>{
    const logo=brand.querySelector('img');
    const oldMark=brand.querySelector('.logo-mark');
    if(oldMark) oldMark.remove();

    if(logo){
      logo.classList.add('ids-approved-logo');
      logo.alt='Ideal Solution Industrial Services';
      logo.removeAttribute('width');
      logo.removeAttribute('height');
    }else{
      const img=document.createElement('img');
      img.className='ids-approved-logo';
      img.src='assets/images/ids-logo-approved.png';
      img.alt='Ideal Solution Industrial Services';
      brand.prepend(img);
    }

    const brandCopy=brand.querySelector('.brand-copy');
    if(brandCopy) brandCopy.style.display='none';

    const style=logo||brand.querySelector('.ids-approved-logo');
    if(style){
      style.style.width='min(220px,62vw)';
      style.style.height='auto';
      style.style.maxHeight='58px';
      style.style.objectFit='contain';
      style.style.objectPosition='left center';
    }
  });

  const params=new URLSearchParams(window.location.search);
  if(params.get('sent')==='1'){
    const message=document.createElement('div');message.className='form-success';message.textContent='Thank you. Your service request has been sent. IDS will review your information and contact you.';
    const form=document.querySelector('.form');if(form)form.parentNode.insertBefore(message,form);
  }
});
