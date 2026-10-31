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
      <span class="timeline-icon">♡</span>
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
      <span class="timeline-icon">✦</span>
      <h3>Wedding Day</h3>
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
          <div class="event-time">2:00 PM</div>
          <div class="event-details">
            <strong>Getting-Ready Photos</strong>
            <span>Photos with Yada.</span>
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
      </div>
    </article>

    <article class="timeline-card itinerary-card reveal">
      <div class="date-chip">FRI · 10 PM</div>
      <span class="timeline-icon">☾</span>
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
      border-radius: 0 0 24px 24px;
    }
    .role-image img {
      height: 100%;
      object-fit: cover;
      image-rendering: auto;
    }
  }
`;
document.head.appendChild(portraitStyle);

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
