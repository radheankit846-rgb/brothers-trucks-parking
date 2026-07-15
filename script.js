// Brothers Premium Parking

document.addEventListener("DOMContentLoaded", () => {

    console.log("Brothers Premium Parking Loaded");

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", () => {
            alert("Thank you! Your booking request has been received.");
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
