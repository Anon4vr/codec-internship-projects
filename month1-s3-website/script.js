// Display current timestamp
function updateTimestamp() {
    const timestampElement = document.getElementById('timestamp');
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    };
    timestampElement.textContent = `Page loaded: ${now.toLocaleDateString('en-US', options)}`;
}

// Add animation to service cards on scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.service-card, .stat-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
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
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateTimestamp();
    animateOnScroll();

    // Update timestamp every second
    setInterval(updateTimestamp, 1000);
});

console.log('AWS S3 Static Website - Successfully Loaded!');