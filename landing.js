// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to add/remove class when scrolling
function changeNavbarOnScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add background color when scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove background color when at top
    }
}

// Add event listener for scroll
window.addEventListener('scroll', changeNavbarOnScroll);