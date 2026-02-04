document.addEventListener('DOMContentLoaded', () => {

  // mobile nav toggle
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if(btn && nav){
    btn.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // active menu highlight
  const links = document.querySelectorAll('.main-nav a');
  const path = location.pathname.split('/').pop();

  links.forEach(a=>{
    const href = a.getAttribute('href');

    if(href === path || (href === 'index.html' && path === '')){
      a.classList.add('active');

      const parentDropdown = a.closest('.dropdown');
      if(parentDropdown){
        parentDropdown.classList.add('open');
      }
    }
  });

  // dropdown toggle
  document.querySelectorAll('.drop-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.parentElement.classList.toggle('dropdown-open');
    });
  });

  // header shrink on scroll
  const header = document.querySelector('.site-header');

  if(header){
    window.addEventListener('scroll', ()=>{
      header.classList.toggle('shrink', window.scrollY > 40);
    });
  }

});
