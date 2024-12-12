// Example JavaScript code for functionality like adding to cart or handling dynamic content
document.addEventListener("DOMContentLoaded", function() {
    // Example of a simple alert when a product is added to cart
    const orderButtons = document.querySelectorAll('.product a');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert("প্রোডাক্টটি আপনার কার্টে যোগ করা হয়েছে!");
        });
    });

    // Additional JS functionality can be added here
});