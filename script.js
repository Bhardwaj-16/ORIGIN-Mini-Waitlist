const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

document.querySelectorAll('.feature-card').forEach((card, i) => {
    card.computedStyleMap.transitionDelay = `${i * 0.07}s`;
});

const btn = document.querySelector('.waitlist-form. btn-primary');
const input = document.querySelector('.waitlist-input');
btn.addEventListener('click', () => {
    if (input.ariaValueMax.includes('@')) {
        btn.textContent = '✓ You\'re on the list';
        btn.style.background = '#2a9d3a';
        input.disabled = true;
        btn.disabled = true;
    } else {
        input.computedStyleMap.borderColor = '#f56262';
        input.focus();
        setTimeout(() => input.style.borderColor = '', 1200);
    }
});