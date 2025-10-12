


    

// Detect scroll to portfolio section and start slideshow
document.addEventListener("scroll", function () {
    const portfolioSection = document.getElementById('portfolio');
    const bounding = portfolioSection.getBoundingClientRect();
    
    if (bounding.top < window.innerHeight && bounding.bottom > 0) {
        startSlideshow();
    }
});

let currentSlide = 0; // Track the current slide

function startSlideshow() {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Hide all slides initially
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Show the first slide
    slides[currentSlide].style.display = "block";

    // Set interval for automatic slideshow
    const interval = setInterval(() => {
        slides[currentSlide].style.display = "none"; // Hide current slide
        currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
        slides[currentSlide].style.display = "block"; // Show the next slide

        // Check if we are still in the portfolio section
        const portfolioSection = document.getElementById('portfolio');
        const bounding = portfolioSection.getBoundingClientRect();
        if (bounding.top > window.innerHeight || bounding.bottom < 0) {
            clearInterval(interval); // Stop the slideshow if out of view
            slides.forEach(slide => {
                slide.style.display = "none"; // Hide all slides
            });
        }
    }, 3000); // Change slide every 3 seconds
}



// Reference
