// Smooth scroll for navigation links

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

target.scrollIntoView({

behavior: 'smooth'

});

});

});

// Fade-in animation on scroll

const sections = document.querySelectorAll('.section');

function revealSections(){

sections.forEach(section=>{

const top = section.getBoundingClientRect().top;

const screen = window.innerHeight;

if(top < screen - 100){

section.style.opacity = "1";

section.style.transform = "translateY(0)";

}

});

}

sections.forEach(section=>{

section.style.opacity = "0";

section.style.transform = "translateY(40px)";

section.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealSections);

revealSections();

// Hero button effect

const btn = document.querySelector(".btn");

if(btn){

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

}
