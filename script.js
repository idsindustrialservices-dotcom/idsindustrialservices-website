document.addEventListener('DOMContentLoaded',()=>{
  const button=document.querySelector('.menu-btn');
  const nav=document.querySelector('.nav-links');
  if(button&&nav){
    button.addEventListener('click',()=>{
      const open=nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded',String(open));
      if(open){Object.assign(nav.style,{display:'flex'});}else if(window.innerWidth<=820){nav.style.display='none';}
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded','false');
      if(window.innerWidth<=820)nav.style.display='none';
    }));
  }

  document.querySelectorAll('.brand').forEach(brand=>{
    const existing=brand.querySelector('.ids-approved-logo');
    if(!existing){
      const img=document.createElement('img');
      img.className='ids-approved-logo';
      img.src='assets/images/ids-logo-approved.png';
      img.alt='Ideal Solution Industrial Services';
      img.width=54; img.height=54;
      const oldMark=brand.querySelector('.logo-mark');
      if(oldMark)oldMark.remove();
      brand.prepend(img);
    }
  });

  const params=new URLSearchParams(window.location.search);
  if(params.get('sent')==='1'){
    const message=document.createElement('div');
    message.className='form-success';
    message.textContent='Thank you. Your service request has been sent. IDS will review your information and contact you.';
    const form=document.querySelector('.form');
    if(form)form.parentNode.insertBefore(message,form);
  }
});
