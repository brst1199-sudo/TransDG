/**
 * TransDG Main JavaScript
 * Handles: Smooth Scrolling and Card Interactions.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. SMOOTH SCROLL FOR CONTACT BUTTON
    const contactBtn = document.querySelector('.btn-blue');
    const footer = document.querySelector('footer');

    if (contactBtn && footer) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents jump if it's a link
            footer.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. SERVICE CARD FEEDBACK
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log("User is interested in: " + card.querySelector('h3').innerText);
        });
    });

});