// Brothers Truck Parking Premium Website

// Sticky Header Effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "rgba(0,0,0,0.85)";
        header.style.boxShadow = "none";
    }
});

// Smooth Fade-in Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Gallery Image Click Effect
const images = document.querySelectorAll(".gallery img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        window.open(img.src, "_blank");
    });
});

// Console Message
console.log("Brothers Truck Parking Website Loaded Successfully");
