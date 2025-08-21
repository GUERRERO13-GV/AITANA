document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scroll for navigation links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Carousel Logic ---
    const slides = document.querySelector('.carousel-slides');
    if (slides) {
        const slideElements = document.querySelectorAll('.carousel-slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        let currentIndex = 0;
        const totalSlides = slideElements.length;

        function updateCarousel() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        // Optional: Auto-play functionality
        setInterval(() => {
            nextBtn.click();
        }, 5000); // Change slide every 5 seconds
    }
});
