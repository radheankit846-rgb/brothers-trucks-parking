// Smooth scroll

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade Animation

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

// Hero Background Slider

const images = [
"images/hero.jpg",
"images/1.jpg",
"images/2.jpg",
"images/3.jpg",
"images/4.jpg"
];

let i = 0;

setInterval(() => {
  i++;
  if(i >= images.length) i = 0;

  document.querySelector(".hero").style.backgroundImage =
  `url(${images[i]})`;

}, 4000);
