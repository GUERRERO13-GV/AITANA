document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scroll for the discover button ---
    const discoverButton = document.querySelector('.btn');
    if (discoverButton) {
        discoverButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#historia').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // --- Lightbox Functionality ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryImages = document.querySelectorAll('.gallery-img');
    const closeBtn = document.querySelector('.close-lightbox');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
        });
    });

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    // Close lightbox when clicking outside the image
    if(lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }


    // --- Animate timeline on scroll ---
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 1s ease-out forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    timelineItems.forEach(item => {
        item.style.opacity = '0'; // Hide them initially
        observer.observe(item);
    });

    // Add CSS for the animation dynamically
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(styleSheet);


    // --- Floating Hearts Animation for Hero Banner ---
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        const particleCount = 30; // Fewer particles for a more subtle effect
        for (let i = 0; i < particleCount; i++) {
            let particle = document.createElement('div');
            particle.classList.add('particle');
            particle.innerHTML = '❤️'; // Use heart emoji
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`; // Vary size
            particle.style.animationDuration = `${Math.random() * 8 + 7}s`; // Slower, more romantic
            particle.style.animationDelay = `${Math.random() * 7}s`;
            particlesContainer.appendChild(particle);
        }
    }
});
