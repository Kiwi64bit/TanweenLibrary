// Reveal sections on scroll
const sections = document.querySelectorAll('.section');
const reveal = () => {
    const trigger = window.innerHeight * 0.8;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger) {
            section.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Subscription interaction
function subscribe() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    if (email && email.includes('@')) {
        message.style.color = 'green';
        message.textContent = "شكرًا لوثوقك بنا!";
    } else {
        message.style.color = 'red';
        message.textContent = "الرجاء إدخال بريد إلكتروني صحيح.";
    }
}