

//tooltip code

const tooltips = document.querySelectorAll('.tt');

tooltips.forEach(t => {
    new bootstrap.Tooltip(t);

});


document.addEventListener('DOMContentLoaded', function() {

    const growElements = document.querySelectorAll('.grow');

    // Loop through each element with the class 'grow'
    growElements.forEach(function(element) {
        // Store the original transform value
        const originalTransform = element.style.transform || 'scale(1)';

        // Add event listener for mouseover
        element.addEventListener('mouseover', function() {
            element.style.transform = 'scale(1.05)'; // Increase size by 5%
        });

        // Add event listener for mouseout
        element.addEventListener('mouseout', function() {
            element.style.transform = originalTransform; // Reset to original size
        });
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".fade-up").forEach(el => {
    observer.observe(el);
});



const video = document.getElementById("heroVideo");
video.playbackRate = .6; // half speed






// ===============================
// CASE STUDY CAPTION SWAP
// ===============================

function setupCaseStudy(carouselId, captionId) {

    const carousel = document.getElementById(carouselId);
    const caption = document.getElementById(captionId);

    if (!carousel || !caption) return;

    carousel.addEventListener('slide.bs.carousel', function (event) {

        const nextSlide = event.relatedTarget;
        const newCaption = nextSlide.dataset.caption;

        caption.style.opacity = 0;

        setTimeout(() => {
            caption.textContent = newCaption;
            caption.style.opacity = 1;
        }, 200);

    });

}

setupCaseStudy('moose-carousel', 'moose-caption');
setupCaseStudy('eyeon-carousel', 'eyeon-caption');
setupCaseStudy('steppingstone-carousel', 'steppingstone-caption');