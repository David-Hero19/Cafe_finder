// === EMBEDDED CAFE DATA (no API needed for local preview) ===
const CAFES_DATA = [
  {
    id: "1", name: "Analog Coffee", city: "San Francisco", address: "512 Hayes St",
    wifi: 5, outlets: 5, noise_level: "quiet", noise_score: 1, price: 2, overall_score: 4.8,
    description: "A minimalist Hayes Valley haven beloved by engineers and writers alike. Superfast gigabit WiFi, abundant outlets under every table, and a strict no-music policy keep the focus exactly where it should be.",
    amenities: ["Gigabit WiFi", "Standing desks", "All-day seating", "Cold brew on tap", "Single-origin espresso", "Filtered water"],
    hours: { "Mon–Fri": "7:00 AM – 8:00 PM", "Sat": "8:00 AM – 7:00 PM", "Sun": "9:00 AM – 6:00 PM" }
  },
  {
    id: "2", name: "Good Thanks", city: "San Francisco", address: "1230 Ocean Ave",
    wifi: 4, outlets: 3, noise_level: "moderate", noise_score: 3, price: 2, overall_score: 4.2,
    description: "Outer Sunset neighborhood gem with exposed brick and afternoon fog light. Popular with freelancers for its laid-back vibe and friendly baristas who don't rush you out.",
    amenities: ["WiFi", "Pastries", "Dog-friendly", "Outdoor seating", "Plant milk options"],
    hours: { "Mon–Fri": "6:30 AM – 5:00 PM", "Sat–Sun": "7:30 AM – 5:00 PM" }
  },
  {
    id: "3", name: "Prodigy Coffee", city: "New York", address: "33 W 19th St",
    wifi: 5, outlets: 4, noise_level: "moderate", noise_score: 3, price: 3, overall_score: 4.5,
    description: "Flatiron's top remote-work spot. High ceilings, long communal tables, and a serious espresso program. The afternoon rush gets loud, but mornings are golden.",
    amenities: ["Fast WiFi", "Communal tables", "Espresso bar", "Work-friendly policy", "USB outlets"],
    hours: { "Mon–Fri": "7:00 AM – 9:00 PM", "Sat": "8:00 AM – 8:00 PM", "Sun": "9:00 AM – 7:00 PM" }
  },
  {
    id: "4", name: "Think Coffee", city: "New York", address: "248 Mercer St",
    wifi: 4, outlets: 4, noise_level: "buzzy", noise_score: 5, price: 2, overall_score: 3.9,
    description: "A West Village institution favored by NYU students and startup founders. Social-impact sourced beans, good food menu, and reliably fast WiFi despite the buzz.",
    amenities: ["WiFi", "Food menu", "Socially sourced", "USB ports", "Laptop-friendly"],
    hours: { "Mon–Sun": "7:00 AM – 10:00 PM" }
  },
  {
    id: "5", name: "Cosmic Coffee + Beer Garden", city: "Austin", address: "121 Pickle Rd",
    wifi: 4, outlets: 3, noise_level: "moderate", noise_score: 3, price: 2, overall_score: 4.4,
    description: "Austin's most beloved outdoor workspace. Sprawling garden setting, excellent cold brew, and a beer-after-5-PM policy that makes deadline crunches more bearable.",
    amenities: ["Outdoor seating", "Beer garden", "Pet-friendly", "Food truck", "WiFi", "Live music Fri"],
    hours: { "Mon–Thu": "7:00 AM – 10:00 PM", "Fri": "7:00 AM – 11:00 PM", "Sat–Sun": "8:00 AM – 11:00 PM" }
  },
  {
    id: "6", name: "Figure 8 Coffee Purveyors", city: "Austin", address: "1111 E 11th St",
    wifi: 5, outlets: 5, noise_level: "quiet", noise_score: 1, price: 2, overall_score: 4.7,
    description: "East Austin's best-kept secret for deep-work sessions. Tucked into a converted house, no music, no meetings culture, and enough outlets that you'd swear they planned it.",
    amenities: ["Gigabit WiFi", "Abundant outlets", "Quiet policy", "Natural light", "Specialty coffee", "Water bar"],
    hours: { "Mon–Fri": "7:00 AM – 6:00 PM", "Sat": "8:00 AM – 5:00 PM", "Sun": "Closed" }
  },
  {
    id: "7", name: "Ozone Coffee", city: "London", address: "11 Leonard St, Shoreditch",
    wifi: 5, outlets: 4, noise_level: "moderate", noise_score: 3, price: 3, overall_score: 4.6,
    description: "A Shoreditch pioneer that somehow never lost its soul. Roastery on-site, fibre broadband, and a mixed crowd of designers, developers, and the occasional VC.",
    amenities: ["In-house roastery", "Fibre broadband", "Meeting room", "Full brunch menu", "USB-C outlets"],
    hours: { "Mon–Fri": "7:30 AM – 5:30 PM", "Sat–Sun": "9:00 AM – 5:00 PM" }
  },
  {
    id: "8", name: "Attendant Coffee", city: "London", address: "27A Foley St, Fitzrovia",
    wifi: 4, outlets: 2, noise_level: "quiet", noise_score: 2, price: 3, overall_score: 4.1,
    description: "Set inside a restored Victorian public toilet (really), this is London's quirkiest workspace. Small but powerful, with excellent pour-overs and a peaceful basement.",
    amenities: ["WiFi", "Historic interior", "Specialty pour-over", "Limited seating", "Quiet"],
    hours: { "Mon–Fri": "8:00 AM – 6:00 PM", "Sat": "9:00 AM – 5:00 PM", "Sun": "Closed" }
  },
  {
    id: "9", name: "The Barn", city: "Berlin", address: "Schönhauser Allee 8",
    wifi: 5, outlets: 4, noise_level: "quiet", noise_score: 2, price: 2, overall_score: 4.9,
    description: "Berlin's gold standard for specialty coffee and laptop culture. The Prenzlauer Berg flagship has a dedicated quiet floor, multiple brew methods, and WiFi that never drops.",
    amenities: ["Dedicated quiet floor", "Multiple brew methods", "High-speed WiFi", "Laptop-friendly", "Excellent filter coffee"],
    hours: { "Mon–Fri": "8:00 AM – 8:00 PM", "Sat–Sun": "9:00 AM – 7:00 PM" }
  },
  {
    id: "10", name: "Bonanza Coffee", city: "Berlin", address: "Oderberger Str. 35",
    wifi: 4, outlets: 3, noise_level: "moderate", noise_score: 3, price: 2, overall_score: 4.3,
    description: "Light-filled, high-ceilinged roastery cafe with a rotating cast of excellent single origins. Popular with the creative freelance crowd — get here by 10 AM for a seat.",
    amenities: ["In-house roastery", "WiFi", "Vegan options", "Natural light", "Lots of plants"],
    hours: { "Mon–Fri": "8:30 AM – 7:00 PM", "Sat–Sun": "9:30 AM – 7:00 PM" }
  },
  {
    id: "11", name: "Fuglen Tokyo", city: "Tokyo", address: "1-16-11 Tomigaya, Shibuya",
    wifi: 4, outlets: 3, noise_level: "quiet", noise_score: 2, price: 3, overall_score: 4.5,
    description: "A Norwegian import that perfectly matched Tokyo's cafe culture. Exceptional filter coffee, mid-century Scandinavian furniture, and an atmosphere so calm you'll produce your best work.",
    amenities: ["WiFi", "Specialty filter", "Design furniture", "Cocktails from 5PM", "Quiet ambiance"],
    hours: { "Mon–Thu": "8:00 AM – 10:00 PM", "Fri": "8:00 AM – 1:00 AM", "Sat–Sun": "9:00 AM – 1:00 AM" }
  },
  {
    id: "12", name: "About Life Coffee Brewers", city: "Tokyo", address: "1-19-8 Dogenzaka, Shibuya",
    wifi: 5, outlets: 5, noise_level: "quiet", noise_score: 1, price: 2, overall_score: 4.8,
    description: "A tiny, obsessively curated cafe that's become a pilgrimage site for Tokyo's remote workers. Maximum focus, minimum distraction — counter seating only, but every seat has power.",
    amenities: ["Outlets at every seat", "Fast WiFi", "Specialty coffee", "Counter seating", "Cash only"],
    hours: { "Mon–Fri": "9:00 AM – 8:00 PM", "Sat–Sun": "10:00 AM – 7:00 PM" }
  }
];

// === STATE ===
let allCafes = [];
let filtered = [];

// === LOAD (from embedded data instead of API) ===
function fetchCafes() {
  showLoading();
  allCafes = CAFES_DATA;
  filtered = [...allCafes];
  applySort();
  renderCards(filtered);
}

// === FILTERS ===
function getFilters() {
  return {
    city: document.getElementById('cityFilter').value,
    wifi: document.getElementById('wifiFilter').value,
    noise: document.getElementById('noiseFilter').value,
    outlets: document.getElementById('outletFilter').value,
  };
}

function applyFilters() {
  const f = getFilters();
  filtered = allCafes.filter(c => {
    if (f.city && c.city !== f.city) return false;
    if (f.wifi && c.wifi < parseInt(f.wifi)) return false;
    if (f.noise && c.noise_level !== f.noise) return false;
    if (f.outlets && c.outlets < parseInt(f.outlets)) return false;
    return true;
  });
  applySort();
  renderCards(filtered);
}

function applySort() {
  const sort = document.getElementById('sortBy').value;
  filtered.sort((a, b) => {
    if (sort === 'wifi')    return b.wifi - a.wifi;
    if (sort === 'quiet')   return a.noise_score - b.noise_score;
    if (sort === 'outlets') return b.outlets - a.outlets;
    return b.overall_score - a.overall_score;
  });
}

// === RENDER ===
function showLoading() {
  const grid = document.getElementById('cardGrid');
  grid.innerHTML = `<div class="loading-state"><div class="loading-spinner"></div><p>Brewing results…</p></div>`;
  document.getElementById('resultCount').textContent = 'Loading…';
}

function noiseLabel(level) {
  const map = { quiet: 'Quiet', moderate: 'Moderate', buzzy: 'Buzzy' };
  return map[level] || level;
}

function priceLabel(n) {
  return '$'.repeat(n);
}

const CAFE_COLORS = ['#C8A882','#8BAF8D','#6E9EB8','#C49A78','#9B8DB0','#7BA5A0'];

function cardHeaderHTML(cafe, index) {
  const color = CAFE_COLORS[index % CAFE_COLORS.length];
  const seed = cafe.name.charCodeAt(0) + cafe.name.charCodeAt(1);
  return `
    <svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg" class="card-header-bg" role="img" aria-label="${cafe.name} illustration">
      <rect width="340" height="160" fill="${color}" opacity="0.85"/>
      <circle cx="${(seed * 7) % 280 + 30}" cy="${(seed * 3) % 100 + 20}" r="${(seed % 40) + 30}" fill="white" opacity="0.07"/>
      <circle cx="${(seed * 11) % 260 + 40}" cy="${(seed * 5) % 80 + 60}" r="${(seed % 25) + 15}" fill="white" opacity="0.1"/>
      <rect x="0" y="100" width="340" height="60" fill="${color}" opacity="0.3"/>
      <g transform="translate(${340/2 - 22}, ${160/2 - 22})">
        <rect x="4" y="12" width="32" height="24" rx="4" fill="white" opacity="0.22"/>
        <path d="M36 18 Q46 18 46 24 Q46 30 36 30" stroke="white" stroke-width="2.5" fill="none" opacity="0.22"/>
        <rect x="8" y="36" width="24" height="3" rx="1.5" fill="white" opacity="0.22"/>
      </g>
    </svg>
  `;
}

function renderCards(cafes) {
  const grid = document.getElementById('cardGrid');
  const count = document.getElementById('resultCount');

  count.textContent = cafes.length === 0
    ? 'No cafes found'
    : `${cafes.length} cafe${cafes.length !== 1 ? 's' : ''} found`;

  if (cafes.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">No cafes match your filters</div>
        <p>Try adjusting your search criteria.</p>
      </div>`;
    return;
  }

  grid.innerHTML = cafes.map((c, i) => `
    <article class="cafe-card" tabindex="0" data-id="${c.id}" role="button" aria-label="View details for ${c.name}">
      <div class="card-header">
        ${cardHeaderHTML(c, i)}
        <span class="card-badge">${noiseLabel(c.noise_level)}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-city">${c.city}</span>
          <span class="card-price">${priceLabel(c.price)}</span>
        </div>
        <h2 class="card-name">${c.name}</h2>
        <p class="card-address">${c.address}</p>
        <div class="vibe-meters">
          <div class="vibe-row">
            <span class="vibe-label">WiFi</span>
            <div class="vibe-track"><div class="vibe-fill wifi" style="width:${c.wifi * 20}%"></div></div>
            <span class="vibe-value">${c.wifi}</span>
          </div>
          <div class="vibe-row">
            <span class="vibe-label">Quiet</span>
            <div class="vibe-track"><div class="vibe-fill noise" style="width:${(6 - c.noise_score) * 20}%"></div></div>
            <span class="vibe-value">${6 - c.noise_score}</span>
          </div>
          <div class="vibe-row">
            <span class="vibe-label">Power</span>
            <div class="vibe-track"><div class="vibe-fill power" style="width:${c.outlets * 20}%"></div></div>
            <span class="vibe-value">${c.outlets}</span>
          </div>
        </div>
        <div class="card-tags">
          ${c.amenities.slice(0, 3).map(a => `<span class="tag">${a}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.cafe-card').forEach(card => {
    const open = () => openModal(card.dataset.id);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });

  requestAnimationFrame(() => {
    grid.querySelectorAll('.vibe-fill').forEach(el => {
      const w = el.style.width;
      el.style.width = '0';
      requestAnimationFrame(() => { el.style.width = w; });
    });
  });
}

// === MODAL ===
function openModal(id) {
  const cafe = allCafes.find(c => c.id === id);
  if (!cafe) return;

  const body = document.getElementById('modalBody');
  const noiseInverse = 6 - cafe.noise_score;
  body.innerHTML = `
    <h2 class="modal-name">${cafe.name}</h2>
    <p class="modal-location">📍 ${cafe.address}, ${cafe.city} &nbsp;·&nbsp; ${priceLabel(cafe.price)}</p>
    <p class="modal-section-title">Vibe Meters</p>
    <div class="modal-meters">
      <div class="modal-meter-row">
        <span class="modal-meter-label">WiFi Speed</span>
        <div class="modal-track"><div class="modal-fill wifi" style="width:${cafe.wifi * 20}%"></div></div>
        <span class="modal-score">${cafe.wifi}/5</span>
      </div>
      <div class="modal-meter-row">
        <span class="modal-meter-label">Quiet Level</span>
        <div class="modal-track"><div class="modal-fill noise" style="width:${noiseInverse * 20}%"></div></div>
        <span class="modal-score">${noiseInverse}/5</span>
      </div>
      <div class="modal-meter-row">
        <span class="modal-meter-label">Outlets</span>
        <div class="modal-track"><div class="modal-fill power" style="width:${cafe.outlets * 20}%"></div></div>
        <span class="modal-score">${cafe.outlets}/5</span>
      </div>
    </div>
    <p class="modal-section-title">About</p>
    <p class="modal-description">${cafe.description}</p>
    <p class="modal-section-title">Hours</p>
    <div class="modal-hours">
      ${Object.entries(cafe.hours).map(([day, hrs]) => `<span class="day">${day}</span><span>${hrs}</span>`).join('')}
    </div>
    <p class="modal-section-title">Amenities</p>
    <div class="modal-tags">
      ${cafe.amenities.map(a => `<span class="modal-tag">${a}</span>`).join('')}
    </div>
    <a class="modal-map-link" href="https://maps.google.com/?q=${encodeURIComponent(cafe.name + ' ' + cafe.address + ' ' + cafe.city)}" target="_blank" rel="noopener">Open in Maps →</a>
  `;

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// === EVENTS ===
document.getElementById('searchBtn').addEventListener('click', applyFilters);
document.getElementById('sortBy').addEventListener('change', () => { applySort(); renderCards(filtered); });
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

window.addEventListener('scroll', () => {
  const hero = document.getElementById('heroText');
  if (hero) {
    const y = window.scrollY;
    hero.style.opacity = Math.max(0, 1 - y / 350);
    hero.style.transform = `translateY(${y * 0.18}px)`;
  }
}, { passive: true });

// === INIT ===
fetchCafes();
