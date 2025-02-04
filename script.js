

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