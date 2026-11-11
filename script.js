const wedding = new Date('2026-11-20T17:00:00+07:00').getTime();

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

// Bridesmaids-only weekend timeline. This intentionally keeps the information
// short and actionable while preserving the official event times from Zola.
const weekendTimeline = document.querySelector('#weekend .timeline');
if (weekendTimeline) {
  weekendTimeline.classList.add('detailed-timeline');
  weekendTimeline.innerHTML = `
    <article class="timeline-card itinerary-card reveal">
      <div class="date-chip">THU · NOV 19</div>
      <span class="timeline-icon">—</span>
      <h3>Rehearsal + Welcome Party</h3>
      <div class="event-list">
        <div class="event-row">
          <div class="event-time">4:00 PM</div>
          <div class="event-details">
            <strong>Bridesmaids Rehearsal</strong>
            <span>Cape Sienna Resort · Vanilla Sky Bar</span>
            <a class="location-link" href="https://www.google.com/maps/search/?api=1&query=18%2F40%20Moo%206%2C%20Layi-Nakalay%20Road%2C%20Kamala%2C%20Kathu%20District%2C%20Phuket%2083150%2C%20Thailand" target="_blank" rel="noopener noreferrer">Open Cape Sienna / Vanilla Sky in Maps ↗</a>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">6:00 PM</div>
          <div class="event-details">
            <strong>Welcome Party · Blue Sea Restaurant</strong>
            <span>6:00–8:00 PM. We’ll head there immediately after rehearsal. Help hand out welcome bags, mingle with guests, make introductions, and set the tone for the weekend.</span>
            <a class="location-link" href="https://www.google.com/maps/search/?api=1&query=17%2F38%20Blue%20Sea%20Cafe%20Building%20Moo%206%2C%20Kamala%20Beach%2C%20Amphur%2C%20Kathu%20District%2C%20Phuket%2083150%2C%20Thailand" target="_blank" rel="noopener noreferrer">17/38 Blue Sea Cafe Building Moo 6, Kamala Beach, Amphur, Kathu District, Phuket 83150, Thailand ↗</a>
          </div>
        </div>
        <div class="event-row overnight-row">
          <div class="event-time">After</div>
          <div class="event-details">
            <strong>Overnight at Cape Sienna</strong>
            <span>Destinie + Moleda stay with Yada after the welcome party. Christine + Jenny will already be staying at the resort.</span>
          </div>
        </div>
      </div>
    </article>

    <article class="timeline-card featured itinerary-card reveal">
      <div class="date-chip">FRI · NOV 20</div>
      <span class="timeline-icon">—</span>
      <h3>Wedding Day</h3>
      <div style="position:relative;z-index:2;margin:18px 0 6px;padding:16px;border:1px solid rgba(255,255,255,.2);border-radius:12px;background:rgba(255,255,255,.07)">
        <strong style="display:block;font-size:.88rem;margin-bottom:9px;letter-spacing:.04em">Before Your Glam Appointment</strong>
        <p style="margin:0 0 8px;font-size:.79rem;line-height:1.6;color:#ead9de"><strong style="color:white">Hair:</strong> Wash and fully blow-dry your hair before your appointment — for hair-only and hair + makeup alike.</p>
        <p style="margin:0;font-size:.79rem;line-height:1.6;color:#ead9de"><strong style="color:white">Makeup:</strong> Arrive with a clean, bare face. No moisturizer, serum, or skincare products — your artist will prep your skin.</p>
      </div>
      <div class="event-list">
        <div class="event-row">
          <div class="event-time">9:30 AM</div>
          <div class="event-details">
            <strong>Breakfast with the Bride</strong>
            <span>Cape Sienna Resort.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">11:30 AM</div>
          <div class="event-details">
            <strong>Get Ready with the Bride</strong>
            <span>Meet in the bridal suite and be fully ready for the getting-ready portion of the day.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">12:00 PM</div>
          <div class="event-details">
            <strong>Yada · Bridal Hair + Makeup</strong>
            <span>The bride’s glam begins.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">12:30 PM</div>
          <div class="event-details">
            <strong>Menelope · Hair</strong>
            <span>Hair-only appointment.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">1:00 PM</div>
          <div class="event-details">
            <strong>Moleda · Hair + Makeup</strong>
            <span>Full glam appointment. Christine on standby for hair at 1:00 PM.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">1:30 PM</div>
          <div class="event-details">
            <strong>Jenny · Hair Standby</strong>
            <span>Be ready for your hair-only appointment.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">2:00 PM</div>
          <div class="event-details">
            <strong>Getting-Ready Photos</strong>
            <span>Photos with Yada.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">2:00 PM</div>
          <div class="event-details">
            <strong>Moleda · Bridal Suite Drinks</strong>
            <span>A little refreshment run for the girls — keep the bridal suite stocked and the good vibes flowing.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">3:00 PM</div>
          <div class="event-details">
            <strong>Bridesmaid Portraits</strong>
            <span>Be photo-ready and stay nearby until portraits are complete.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">4:00 PM</div>
          <div class="event-details">
            <strong>Christine · iPhone Detail Shots</strong>
            <span>Christine captures ceremony details and behind-the-scenes content on Yada’s iPhone.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">4:15 PM</div>
          <div class="event-details">
            <strong>Destinie · Bridal Suite Reset</strong>
            <span>Start tidying up and packing Yada’s belongings so nothing gets left behind.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">4:45 PM</div>
          <div class="event-details">
            <strong>Wedding Party Lineup</strong>
            <span>Be fully ready and follow Belle’s direction for lineup.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">5:00 PM</div>
          <div class="event-details">
            <strong>Wedding Begins</strong>
            <span>Ceremony begins promptly at Cape Sienna. Wedding celebration runs until 10:00 PM.</span>
          </div>
        </div>
        <div class="event-row">
          <div class="event-time">9:30 PM</div>
          <div class="event-details">
            <strong>Moleda + Destinie · After-Party Look</strong>
            <span>Help Yada slip into her after-party fit — then it’s time to dance.</span>
          </div>
        </div>
      </div>
    </article>

    <article class="timeline-card itinerary-card reveal">
      <div class="date-chip">FRI · 10 PM</div>
      <span class="timeline-icon">—</span>
      <h3>After Party</h3>
      <div class="event-list">
        <div class="event-row">
          <div class="event-time">10:00 PM</div>
          <div class="event-details">
            <strong>Catch Beach Club</strong>
            <span>10:00 PM–12:00 AM. Outfit change, touch-ups, drinks, music, dancing, and photos by the sea.</span>
            <a class="location-link" href="https://www.google.com/maps/search/?api=1&query=Catch%20Beach%20Club%2C%20Choeng%20Thale%2C%20Phuket%2083110%2C%20Thailand" target="_blank" rel="noopener noreferrer">Open Catch Beach Club in Maps ↗</a>
          </div>
        </div>
        <div class="event-row overnight-row">
          <div class="event-time">Reminder</div>
          <div class="event-details">
            <strong>Once formal duties are done: HAVE FUN.</strong>
            <span>Destinie + Moleda help Yada change into her after-party look. Christine handles final beauty/content touch-ups as needed.</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

// Preserve portrait sharpness by keeping the role-card photos near their native
// rendered size instead of stretching them across the full card width.
const portraitStyle = document.createElement('style');
portraitStyle.textContent = `
  @media (min-width: 901px) {
    .role-card:not(.wide) {
      display: grid;
      grid-template-columns: minmax(220px, 280px) 1fr;
      align-items: stretch;
    }
    .role-card:not(.wide) .role-image {
      height: 100%;
      min-height: 390px;
    }
    .role-card.wide {
      grid-template-columns: 300px 1fr;
    }
    .role-card.wide .role-image {
      height: 100%;
      min-height: 430px;
    }
    .role-image img {
      image-rendering: auto;
      object-position: center center;
    }
  }
  @media (max-width: 900px) {
    .role-image {
      width: min(100%, 420px);
      margin-inline: auto;
      height: auto !important;
      aspect-ratio: 4 / 5;
      border-radius: 0;
    }
    .role-image img {
      height: 100%;
      object-fit: cover;
      image-rendering: auto;
    }
  }
`;
document.head.appendChild(portraitStyle);

// Chic editorial styling layer: same wedding palette, less overtly feminine.
const chicStyle = document.createElement('style');
chicStyle.textContent = `
  :root{
    --wine:#4b1726;
    --wine-2:#241c1f;
    --berry:#7b4a57;
    --rose:#b9aaa8;
    --pink:#e9e4df;
    --blush:#f3f0eb;
    --ivory:#f8f6f2;
    --cream:#ece7e0;
    --ink:#1e1b1c;
    --muted:#70686a;
    --gold:#9b8565;
    --shadow:0 18px 45px rgba(30,27,28,.08);
    --radius:12px;
  }
  body{background:#f8f6f2;color:var(--ink)}
  body::before{opacity:.08;background-size:28px 28px}
  .cursor-glow{opacity:.18;background:radial-gradient(circle,rgba(75,23,38,.12),transparent 68%)}
  .nav-wrap{border-radius:6px;background:rgba(248,246,242,.92);border-color:rgba(30,27,28,.1);box-shadow:0 8px 22px rgba(0,0,0,.05)}
  .nav a{border-radius:3px;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase}
  .brand span{letter-spacing:.13em}

  .script,.hero-copy h1 em,h2 em,.countdown-title .script,.couple-copy .script,footer .script{font-family:"Italiana",serif!important;font-style:italic!important;transform:none!important;letter-spacing:-.02em}
  h1,h2,h3{letter-spacing:-.025em}
  .hero{background:linear-gradient(180deg,#f8f6f2 0%,#fff 72%,#ece7e0 100%)}
  .hero-copy h1{color:#1e1b1c;letter-spacing:-.045em}
  .hero-copy h1 em{color:var(--wine);font-size:.62em;margin-left:.18em}
  .lede{font-size:.98rem;line-height:1.75}
  .button{border-radius:4px;text-transform:uppercase;letter-spacing:.08em;font-size:.7rem;padding:13px 17px}
  .button-solid{background:#1e1b1c}
  .button-ghost{border-color:rgba(30,27,28,.18);background:transparent;color:#1e1b1c}

  .spark{display:none}
  .polaroid{padding:7px 7px 26px;border:1px solid rgba(30,27,28,.1);box-shadow:0 16px 36px rgba(30,27,28,.12)}
  .polaroid figcaption{font-family:"DM Sans",sans-serif;text-transform:uppercase;letter-spacing:.14em;font-size:.58rem;color:#1e1b1c;font-weight:700}
  .p1{transform:rotate(-3deg)}.p2{transform:rotate(2deg)}.p3{transform:rotate(-2deg)}.p4{transform:rotate(2deg)}.p5{transform:rotate(-2deg)}
  .hero-stamp{border-radius:3px;width:112px;height:112px;border:1px solid #f8f6f2;transform:none;background:#1e1b1c}
  .hero-stamp span{font-size:1.7rem}
  .hero-stamp small{letter-spacing:.2em}

  .countdown-card{border-radius:8px;background:#1e1b1c;box-shadow:none}
  .countdown-title .script{color:#d6ccc2;font-size:2rem}
  .marquee{background:#1e1b1c;border:0}
  .marquee span{color:#f8f6f2;font-weight:500;letter-spacing:.18em}

  .section{padding:112px 0}
  .section-head{border-bottom:1px solid rgba(30,27,28,.12);padding-bottom:30px}
  .section-head h2{color:#1e1b1c}
  .section-head h2 em{color:var(--wine)}
  .weekend,.shared-duty{background:#f3f0eb}
  .timeline{gap:14px}
  .timeline-card{border-radius:8px;box-shadow:none;border-color:rgba(30,27,28,.11);background:#faf9f7}
  .timeline-card::after{display:none}
  .timeline-card.featured{background:#1e1b1c}
  .date-chip{border-radius:3px;background:#e7e1da;color:#4b1726;letter-spacing:.16em}
  .featured .date-chip{background:rgba(255,255,255,.08);color:#eee8e1}
  .timeline-icon{font-size:1rem;color:#8f7f77;margin:20px 0 12px}
  .event-time{color:#4b1726}
  .featured .event-time{color:#d7cbc3}
  .location-link{color:#4b1726}

  .shared-card{border-radius:8px;background:#1e1b1c;box-shadow:none}
  .shared-card::after{display:none}
  .shared-copy h2 em{color:#d7cbc3}
  .shared-list div{border-radius:4px;background:rgba(255,255,255,.035)}
  .shared-list span{color:#c9bbb2}

  .roles-section{background:#f8f6f2}
  .roles-grid{gap:16px}
  .role-card{border-radius:8px;box-shadow:none;border-color:rgba(30,27,28,.11)}
  .role-card:hover{transform:translateY(-2px)}
  .role-content{padding:30px 32px}
  .role-kicker{color:#6f5f62;letter-spacing:.18em}
  .role-content h3{color:#1e1b1c}
  .priority{border-radius:3px;background:#f1eee9;color:#4b1726;border-left:3px solid #4b1726}
  .priority span{display:none}
  .role-content li{grid-template-columns:12px 1fr}
  .role-content li::before{content:"—";color:#8b7b75}
  .role-toggle{color:#1e1b1c;text-transform:uppercase;letter-spacing:.08em;font-size:.7rem}

  .quickref{background:#ece7e0}
  .quick-grid{gap:14px}
  .quick-card{border-radius:8px;background:#faf9f7}
  .quick-card.planner{background:#1e1b1c}
  .quick-card h3{color:#1e1b1c}

  .couple-feature{background:#fff}
  .couple-frame{gap:64px}
  .couple-photo{border-radius:2px!important}
  .couple-sticker{border-radius:2px!important;background:#1e1b1c!important;color:#f8f6f2!important;font-family:"DM Sans",sans-serif!important;font-size:.68rem!important;text-transform:uppercase;letter-spacing:.12em;padding:10px 12px!important}
  .couple-copy .script{font-size:2.1rem!important;color:#6f5f62!important}

  footer{background:#1e1b1c!important}
  footer .script{color:#d6ccc2!important}
  .footer-hearts{display:none}

  @media(max-width:760px){
    .nav-wrap{border-radius:4px}
    .hero-copy h1{font-size:clamp(4.5rem,21vw,7rem)}
    .hero-stamp{width:88px;height:88px}
    .section{padding:82px 0}
    .role-content{padding:24px}
    .countdown-card{border-radius:6px}
  }
`;
document.head.appendChild(chicStyle);

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
