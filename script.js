// Repo-native photo wiring. The GitHub connector writes text files, so the uploaded
// photos live inside SVG wrappers and are served normally by GitHub Pages.
const photoMap = {
  'assets/destinie.jpg': 'assets/destinie.svg',
  'assets/moleda.jpg': 'assets/moleda.svg',
  'assets/jenny.jpg': 'assets/jenny.svg',
  'assets/christine.jpg': 'assets/christine.svg',
  'assets/menelope.jpg': 'assets/menelope.svg',
};

document.querySelectorAll('img').forEach((img) => {
  const mapped = photoMap[img.getAttribute('src')];
  if (mapped) img.setAttribute('src', mapped);
});

// Menelope should always use normal capitalization.
document.querySelectorAll('body *').forEach((node) => {
  if (node.childNodes.length === 1 && node.firstChild?.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replaceAll('MENELOPE', 'Menelope');
  }
});

// Add a featured bride + groom moment after the hero.
const hero = document.querySelector('.hero');
if (hero && !document.querySelector('.couple-feature')) {
  const section = document.createElement('section');
  section.className = 'couple-feature';
  section.setAttribute('aria-label', 'Yada and Antonie');
  section.innerHTML = `
    <div class="wrap couple-frame reveal">
      <div class="couple-photo">
        <img src="assets/yada-antonie.svg" alt="Yada and Antonie smiling together">
        <span class="couple-sticker">the reason we're all here ♡</span>
      </div>
      <div class="couple-copy">
        <p class="eyebrow">The Bride + Groom</p>
        <p class="script">Yada & Antonie</p>
        <h2>Phuket,<br><em>here we come.</em></h2>
        <p>Thank you for standing beside us, loving us, and making the trip across the world to celebrate this chapter with us.</p>
      </div>
    </div>`;
  hero.insertAdjacentElement('afterend', section);

  const style = document.createElement('style');
  style.textContent = `
    .couple-feature{padding:76px 0;background:#fff;position:relative;overflow:hidden}
    .couple-feature::before{content:"♡";position:absolute;left:-30px;top:-70px;font-family:serif;font-size:15rem;color:rgba(100,23,47,.035);transform:rotate(-12deg)}
    .couple-frame{display:grid;grid-template-columns:1.18fr .82fr;gap:48px;align-items:center}
    .couple-photo{position:relative;padding:12px;background:var(--ivory);border:1px solid rgba(100,23,47,.1);box-shadow:var(--shadow);transform:rotate(-1.2deg)}
    .couple-photo img{aspect-ratio:4/3;object-fit:cover}
    .couple-sticker{position:absolute;right:-18px;bottom:22px;padding:10px 15px;border-radius:999px;background:var(--wine);color:#fff;font-family:"Parisienne",cursive;font-size:1.35rem;transform:rotate(3deg);box-shadow:0 12px 26px rgba(74,16,35,.18)}
    .couple-copy .script{display:block;margin:0 0 5px;color:var(--berry);font-size:3rem;line-height:1}
    .couple-copy h2{font-size:clamp(3.2rem,6vw,5.2rem)}
    .couple-copy>p:last-child{max-width:500px;color:var(--muted);line-height:1.8}
    @media(max-width:800px){.couple-feature{padding:58px 0}.couple-frame{grid-template-columns:1fr;gap:28px}.couple-copy{order:-1}.couple-sticker{right:8px;bottom:-14px;font-size:1.15rem}.couple-copy .script{font-size:2.6rem}}
  `;
  document.head.appendChild(style);
}

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
