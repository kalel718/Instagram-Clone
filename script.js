/* JAVASCRIPT SECTION: Adds interactive behavior */

// Get references to form elements
const form = document.getElementById('loginForm');        // Login form
const inputs = document.querySelectorAll('.form-input'); // All input fields
const loginBtn = document.querySelector('.login-btn');   // Login button

// FORM SUBMISSION HANDLER: What happens when user clicks "Log in"
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents actual form submission

    // Change button appearance to show loading state
    loginBtn.style.background = '#0095f6';
    loginBtn.innerHTML = 'Logging in...';

    // After 1.5 seconds, reset button and show demo message
    setTimeout(() => {
        loginBtn.innerHTML = 'Log in';
        alert('Demo mode - login functionality not implemented');
    }, 1500);
});

// INPUT FOCUS EFFECTS: Visual feedback when user interacts with inputs
inputs.forEach(input => {
    // When user clicks on input (focus)
    input.addEventListener('focus', function() {
        this.style.borderColor = '#0095f6'; // Blue border
        this.style.background = '#fff';     // White background
    });

    // When user clicks away from input (blur)
    input.addEventListener('blur', function() {
        this.style.borderColor = '#dbdbdb';  // Gray border
        this.style.background = '#fafafa';   // Light gray background
    });
});

// POST CYCLING ANIMATION: Automatically switches between Instagram posts
const posts = document.querySelectorAll('.instagram-post'); // All posts
let currentPost = 0; // Track which post is currently visible

// Every 4 seconds, switch to next post
setInterval(() => {
    posts[currentPost].classList.remove('active'); // Hide current post
    currentPost = (currentPost + 1) % posts.length; // Move to next post (loops back to 0)
    posts[currentPost].classList.add('active');     // Show new post
}, 4000);

// PARALLAX EFFECT: Floating icons follow mouse movement subtly
document.addEventListener('mousemove', function(e) {
    const icons = document.querySelectorAll('.floating-icon'); // All floating icons

    // Calculate mouse position as percentage of screen
    const x = e.clientX / window.innerWidth;  // 0 to 1 (left to right)
    const y = e.clientY / window.innerHeight; // 0 to 1 (top to bottom)

    // Move each icon slightly based on mouse position
    icons.forEach((icon, index) => {
        const speed = (index + 1) * 0.5; // Different speed for each icon
        icon.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
    });
});
