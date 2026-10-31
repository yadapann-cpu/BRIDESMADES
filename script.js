const wedding = new Date('2026-11-20T16:00:00+07:00').getTime();

function updateCountdown() {
  const diff = Math.max(0, wedding - Date.now());
  const values = {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
  Object.entries(values).forEach(([key, value]) => {
    const el = document.getElementById(key);
    if (el) el.textContent = String(value).padStart(key === 'days' ? 1 : 2, '0');
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelectorAll('.role-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.role-card');
    const open = card.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.childNodes[0].nodeValue = open ? 'Show less ' : 'Show all duties ';
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...document.querySelectorAll('.nav a')];
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });
