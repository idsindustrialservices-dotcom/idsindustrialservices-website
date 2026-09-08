document.addEventListener('DOMContentLoaded',()=>{
  const button=document.querySelector('.menu-btn');
  const nav=document.querySelector('.nav-links');
  if(button&&nav){
    button.addEventListener('click',()=>{
      const open=nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded',String(open));
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded','false');
    }));
  }

  const params=new URLSearchParams(window.location.search);
  if(params.get('sent')==='1'){
    const message=document.createElement('div');
    message.className='form-success';
    message.textContent='Thank you. Your service request has been sent. IDS will review your information and contact you.';
    const form=document.querySelector('.form');
    if(form)form.parentNode.insertBefore(message,form);
  }
});
