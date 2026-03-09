const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzNBQE7b-Obhdr4Tjual2zyu84EyfwPmtaOay6ICElCX-HJujGokEMpx5Gg_uLTxkBn/exec';

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
});
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => observer.observe(el));

document.querySelectorAll('.feature-card').forEach((card, i) => {
card.style.transitionDelay = `${i * 0.07}s`;
});

document.getElementById('wl-btn').addEventListener('click', async () => {
const nameEl  = document.getElementById('wl-name');
const emailEl = document.getElementById('wl-email');
const btn     = document.getElementById('wl-btn');
const name    = nameEl.value.trim();
const email   = emailEl.value.trim();

if (!name) {
    nameEl.style.borderColor = '#f56262';
    nameEl.focus();
    setTimeout(() => nameEl.style.borderColor = '', 1200);
    return;
}
if (!email.includes('@')) {
    emailEl.style.borderColor = '#f56262';
    emailEl.focus();
    setTimeout(() => emailEl.style.borderColor = '', 1200);
    return;
}

btn.textContent = 'Submitting…';
btn.disabled = true;

try {
    await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
    });

    btn.textContent = "✓ You're on the list";
    btn.style.background = '#2a9d3a';
    nameEl.disabled = true;
    emailEl.disabled = true;
} catch (err) {
    btn.textContent = 'Error — try again';
    btn.style.background = '#f56262';
    btn.disabled = false;
}
});