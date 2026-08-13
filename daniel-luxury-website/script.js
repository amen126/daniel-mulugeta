const loader=document.querySelector('#loader'),header=document.querySelector('header'),menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links'),topButton=document.querySelector('#to-top');
window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hidden'),500));
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);document.body.style.overflow=open?'hidden':''});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');document.body.style.overflow=''}));
const sections=document.querySelectorAll('main section[id]'),links=document.querySelectorAll('.nav-links a');
function update(){header.classList.toggle('scrolled',scrollY>25);topButton.classList.toggle('show',scrollY>600);let active='home';sections.forEach(section=>{if(scrollY>=section.offsetTop-125)active=section.id});links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+active));}window.addEventListener('scroll',update);update();
topButton.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));document.querySelector('#year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(item=>observer.observe(item));
