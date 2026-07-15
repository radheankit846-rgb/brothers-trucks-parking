// ==========================
// Brothers Truck Parking
// Premium Script
// ==========================

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if(target){
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Hero Background Slider

const hero = document.querySelector(".hero");

const images = [
  "parking1.jpg",
  "parking2.jpg",
  "parking3.jpg",
  "parking4.jpg",
  "parking5.jpg",
  "parking6.jpg",
  "parking7.jpg"
];

let current = 0;

function changeBackground(){

  if(hero){

    hero.style.backgroundImage =
    `url('${images[current]}')`;

    current++;

    if(current >= images.length){
      current = 0;
    }

  }

}

changeBackground();

setInterval(changeBackground,4000);

// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section,.card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// Gallery Image Zoom

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});

// Header Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}else{

header.style.boxShadow="none";

}

});

// Loading Animation

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition=".6s";

// Console Message

console.log("Brothers Truck Parking Website Loaded Successfully");
