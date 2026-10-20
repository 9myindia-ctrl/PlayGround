const categories = [
  {
    key: 'latest',
    title: 'Latest Jobs',
    icon: 'briefcase',
    color: '#3b82f6',
    items: [
      { title: 'Bank of Maharashtra Recruitment 2025', tag: 'New', tagType: 'new', dateLabel: 'Last Date', date: '10 May 2025', time: '1 day left', tone: 'urgent' },
      { title: 'Central Bank of India 200 Recruitment 2025', tag: 'Updated', tagType: 'updated', dateLabel: 'Last Date', date: '12 May 2025', time: '3 days left', tone: 'soon' },
      { title: 'SBI Clerk Selection Recruitment 2025', tag: 'Extended', tagType: 'extended', dateLabel: 'Last Date', date: '20 May 2025', time: '5 days left', tone: 'soon' },
      { title: 'Punjab National Bank Recruitment 2025', tag: 'New', tagType: 'new', dateLabel: 'Last Date', date: '20 May 2025', time: '12 days left', tone: 'far' },
      { title: 'RBI Assistant Recruitment 2025', tag: 'New', tagType: 'new', dateLabel: 'Last Date', date: '25 May 2025', time: '15 days left', tone: 'far' },
      { title: 'NABARD Grade A Officer Recruitment 2025', tag: 'Extended', tagType: 'extended', dateLabel: 'Last Date', date: '28 May 2025', time: '18 days left', tone: 'far' }
    ]
  },
  {
    key: 'admit-card',
    title: 'Admit Card',
    icon: 'id-card',
    color: '#f97316',
    items: [
      { title: 'SSC CGL Tier 1 Admit Card 2025', tag: 'New', tagType: 'new', dateLabel: 'Last Date', date: '10 May 2025', time: '1 day left', tone: 'urgent' },
      { title: 'IBPS PO Prelims Admit Card 2025', tag: 'Updated', tagType: 'updated', dateLabel: 'Last Date', date: '20 May 2025', time: '3 days left', tone: 'soon' },
      { title: 'RRB NTPC Admit Card 2025', tag: 'Extended', tagType: 'extended', dateLabel: 'Last Date', date: '20 May 2025', time: '5 days left', tone: 'soon' },
      { title: 'UP Police Constable Admit Card 2025', tag: 'New', tagType: 'new', dateLabel: 'Last Date', date: '20 May 2025', time: '12 days left', tone: 'far' },
      { title: 'SBI PO Mains Admit Card 2025', tag: 'New', tagType: 'new', dateLabel: 'Last Date', date: '25 May 2025', time: '18 days left', tone: 'far' },
      { title: 'CTET July Admit Card 2025', tag: 'Updated', tagType: 'updated', dateLabel: 'Last Date', date: '28 May 2025', time: '20 days left', tone: 'far' }
    ]
  },
  {
    key: 'result',
    title: 'Result',
    icon: 'chart',
    color: '#22c55e',
    items: [
      { title: 'SSC CGL Tier 1 Result 2025', tag: 'New', tagType: 'new', dateLabel: 'Declared', date: '10 May 2025', time: '1 day ago', tone: 'far' },
      { title: 'IBPS PO Prelims Result 2025', tag: 'Updated', tagType: 'updated', dateLabel: 'Declared', date: '20 May 2025', time: '3 days ago', tone: 'far' },
      { title: 'RRB NTPC Result 2025', tag: 'Declared', tagType: 'declared', dateLabel: 'Declared', date: '20 May 2025', time: '5 days ago', tone: 'far' },
      { title: 'UPSC CDS 1 Result 2025', tag: 'New', tagType: 'new', dateLabel: 'Declared', date: '20 May 2025', time: '12 days ago', tone: 'far' },
      { title: 'SSC CHSL Tier 1 Result 2025', tag: 'New', tagType: 'new', dateLabel: 'Declared', date: '24 May 2025', time: '16 days ago', tone: 'far' },
      { title: 'IBPS Clerk Prelims Result 2025', tag: 'Declared', tagType: 'declared', dateLabel: 'Declared', date: '28 May 2025', time: '20 days ago', tone: 'far' }
    ]
  },
  {
    key: 'college',
    title: 'College',
    icon: 'cap',
    color: '#a855f7',
    items: [
      { title: 'DU UG Admission 2025 Notice', tag: 'New', tagType: 'new', dateLabel: 'Last Date', date: '10 May 2025', time: '1 day left', tone: 'urgent' },
      { title: 'JNU Admission 2025 Notification', tag: 'Updated', tagType: 'updated', dateLabel: 'Last Date', date: '20 May 2025', time: '3 days left', tone: 'soon' },
      { title: 'IIT JAM 2025 Counselling Notice', tag: 'Ongoing', tagType: 'ongoing', dateLabel: 'Last Date', date: '20 May 2025', time: '5 days left', tone: 'soon' },
      { title: 'BHU Admission 2025 Update', tag: 'New', tagType: 'new', dateLabel: 'Last Date', date: '20 May 2025', time: '12 days left', tone: 'far' },
      { title: 'Jamia Millia Admission 2025 Notice', tag: 'Updated', tagType: 'updated', dateLabel: 'Last Date', date: '25 May 2025', time: '16 days left', tone: 'far' },
      { title: 'NEET UG Counselling 2025', tag: 'Ongoing', tagType: 'ongoing', dateLabel: 'Last Date', date: '28 May 2025', time: '20 days left', tone: 'far' }
    ]
  },
  {
    key: 'answer-key',
    title: 'Answer Key',
    icon: 'key',
    color: '#eab308',
    items: [
      { title: 'SSC CGL Tier 1 Answer Key 2025', tag: 'New', tagType: 'new', dateLabel: 'Published', date: '10 May 2025', time: '1 day ago', tone: 'far' },
      { title: 'IBPS PO Prelims Answer Key 2025', tag: 'Updated', tagType: 'updated', dateLabel: 'Published', date: '20 May 2025', time: '2 days ago', tone: 'far' },
      { title: 'RRB NTPC Answer Key 2025', tag: 'Ongoing', tagType: 'ongoing', dateLabel: 'Published', date: '20 May 2025', time: '5 days ago', tone: 'far' },
      { title: 'UP Police Constable Answer Key 2025', tag: 'New', tagType: 'new', dateLabel: 'Published', date: '20 May 2025', time: '12 days ago', tone: 'far' },
      { title: 'SSC CHSL Tier 1 Answer Key 2025', tag: 'New', tagType: 'new', dateLabel: 'Published', date: '24 May 2025', time: '16 days ago', tone: 'far' },
      { title: 'NEET UG Answer Key 2025', tag: 'Updated', tagType: 'updated', dateLabel: 'Published', date: '28 May 2025', time: '20 days ago', tone: 'far' }
    ]
  },
  {
    key: 'school',
    title: 'School',
    icon: 'school',
    color: '#ef4444',
    items: [
      { title: 'KVS Admission 2025 Notification', tag: 'New', tagType: 'new', dateLabel: 'Last Date', date: '10 May 2025', time: '1 day left', tone: 'urgent' },
      { title: 'NVS Class 6 Admission 2025', tag: 'Updated', tagType: 'updated', dateLabel: 'Last Date', date: '20 May 2025', time: '3 days left', tone: 'soon' },
      { title: 'CBSE Compartment Exam 2025', tag: 'Ongoing', tagType: 'ongoing', dateLabel: 'Last Date', date: '20 May 2025', time: '5 days left', tone: 'soon' },
      { title: 'State Board 10th Result 2025', tag: 'New', tagType: 'new', dateLabel: 'Declared', date: '20 May 2025', time: '12 days ago', tone: 'far' },
      { title: 'Navodaya Class 9 Admission 2025', tag: 'New', tagType: 'new', dateLabel: 'Last Date', date: '25 May 2025', time: '16 days left', tone: 'far' },
      { title: 'CBSE Class 12 Revaluation 2025', tag: 'Updated', tagType: 'updated', dateLabel: 'Last Date', date: '28 May 2025', time: '20 days left', tone: 'far' }
    ]
  }
];

const state = {
  query: '',
  category: 'all'
};

const grid = document.getElementById('categoryGrid');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const categoryChips = document.getElementById('categoryChips');
const filterPanel = document.getElementById('filterPanel');
const filterToggle = document.getElementById('filterToggle');
const toastEl = document.getElementById('toast');
const bookmarkKey = 'naukridesk-bookmarks';
let toastTimer;

function icon(name) {
  return `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

function searchKeywords(title) {
  const value = title.toLowerCase();
  const words = [];
  if (/bank|rbi|nabard|sbi/.test(value)) words.push('bank banking finance');
  if (/rrb|railway/.test(value)) words.push('railway rrb');
  if (/ssc/.test(value)) words.push('ssc');
  if (/upsc|cds/.test(value)) words.push('upsc defence defense');
  if (/ctet|teacher|kvs|nvs|school|cbse|board/.test(value)) words.push('teaching teacher school');
  if (/police/.test(value)) words.push('police defence defense');
  if (/neet|medical/.test(value)) words.push('medical neet');
  return words.join(' ');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function getBookmarks() {
  try {
    const stored = JSON.parse(localStorage.getItem(bookmarkKey) || '[]');
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveBookmarks(items) {
  try {
    localStorage.setItem(bookmarkKey, JSON.stringify(items));
  } catch {
    return;
  }
}

function renderCards() {
  const bookmarks = getBookmarks();
  grid.innerHTML = categories.map((category) => {
    const jobs = category.items.map((item, index) => {
      const isExtra = index >= 4;
      const saved = bookmarks.includes(item.title);
      return `
        <li class="job-item${isExtra ? ' extra hidden' : ''}" data-title="${escapeHtml(item.title)}" data-keywords="${searchKeywords(item.title)}">
          <div class="job-info">
            <div class="job-title-row">
              <button class="job-title" type="button">${escapeHtml(item.title)}</button>
              <span class="tag tag-${item.tagType}">${item.tag}</span>
            </div>
            <div class="job-sub">${icon('calendar')} ${item.dateLabel}: ${item.date}</div>
          </div>
          <div class="job-side">
            <span class="time-pill tone-${item.tone}">${item.time}</span>
            <button class="bookmark${saved ? ' active' : ''}" type="button" aria-label="Bookmark ${escapeHtml(item.title)}" aria-pressed="${saved}">${icon('bookmark')}</button>
          </div>
        </li>`;
    }).join('');

    return `
      <article class="cat-card" id="${category.key}" data-category="${category.key}" style="--cat:${category.color}">
        <div class="cat-head">
          <div class="cat-title">
            <span class="cat-icon">${icon(category.icon)}</span>
            <h3>${category.title}</h3>
          </div>
          <div class="cat-meta">
            <span class="cat-count">6</span>
            <button class="view-all" type="button">View All ${icon('chevron-down')}</button>
          </div>
        </div>
        <ul class="job-list">${jobs}</ul>
        <button class="show-more" type="button">Show more (2)</button>
      </article>`;
  }).join('');
}

function totalItems() {
  return categories.reduce((total, category) => total + category.items.length, 0);
}

function applyFilters() {
  const query = state.query.trim().toLowerCase();
  let matches = 0;

  document.querySelectorAll('.cat-card').forEach((card) => {
    const categoryOk = state.category === 'all' || card.dataset.category === state.category;
    let categoryMatches = 0;

    card.querySelectorAll('.job-item').forEach((item) => {
      const title = (item.dataset.title || '').toLowerCase();
      const keywords = (item.dataset.keywords || '').toLowerCase();
      const hit = categoryOk && (!query || title.includes(query) || keywords.includes(query));
      item.classList.toggle('search-hide', !hit);
      if (hit) categoryMatches += 1;
    });

    const visible = categoryOk && categoryMatches > 0;
    card.classList.toggle('filtered-out', !visible);
    matches += categoryMatches;
  });

  resultCount.textContent = matches;
  emptyState.classList.toggle('visible', matches === 0);
  grid.style.display = matches === 0 ? 'none' : '';
}

function setCategory(key, scroll = false) {
  state.category = key;
  categoryFilter.value = key;
  categoryChips.querySelectorAll('.chip').forEach((chip) => {
    const active = chip.dataset.filter === key;
    chip.classList.toggle('active', active);
    chip.setAttribute('aria-selected', String(active));
  });
  applyFilters();
  if (scroll) {
    document.getElementById('updates').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function setQuery(value, scroll = false) {
  state.query = value;
  searchInput.value = value;
  applyFilters();
  if (scroll) {
    document.getElementById('updates').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function resetFilters() {
  state.query = '';
  searchInput.value = '';
  ['stateFilter', 'typeFilter', 'examFilter'].forEach((id) => {
    document.getElementById(id).value = '';
  });
  categoryFilter.value = 'all';
  setCategory('all');
  showToast('Filters cleared');
}

function showToast(message) {
  clearTimeout(toastTimer);
  toastEl.textContent = message;
  toastEl.classList.add('show');
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2800);
}

renderCards();

document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  setQuery(searchInput.value, true);
});

searchInput.addEventListener('input', () => {
  state.query = searchInput.value;
  applyFilters();
});

document.getElementById('headerSearch').addEventListener('click', () => {
  document.querySelector('.hero').scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => searchInput.focus(), 350);
});

document.querySelectorAll('.trend-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    setQuery(chip.textContent.trim(), true);
  });
});

document.querySelectorAll('[data-jump]').forEach((button) => {
  button.addEventListener('click', () => {
    setCategory(button.dataset.jump, true);
  });
});

categoryChips.addEventListener('click', (event) => {
  const chip = event.target.closest('.chip');
  if (!chip) return;
  setCategory(chip.dataset.filter);
});

document.getElementById('applyFilters').addEventListener('click', () => {
  const selected = categoryFilter.value;
  setCategory(selected);
  const type = document.getElementById('typeFilter').value;
  const stateValue = document.getElementById('stateFilter').value;
  const exam = document.getElementById('examFilter').value;
  const chosen = [type, stateValue, exam].filter(Boolean);
  showToast(chosen.length ? `Filters applied: ${chosen.join(', ')}` : 'Showing all updates');
});

document.getElementById('clearFilters').addEventListener('click', resetFilters);
document.getElementById('emptyReset').addEventListener('click', resetFilters);

filterToggle.addEventListener('click', () => {
  const expanded = filterToggle.getAttribute('aria-expanded') === 'true';
  filterToggle.setAttribute('aria-expanded', String(!expanded));
  filterPanel.hidden = expanded;
});

grid.addEventListener('click', (event) => {
  const bookmark = event.target.closest('.bookmark');
  if (bookmark) {
    const active = bookmark.classList.toggle('active');
    bookmark.setAttribute('aria-pressed', String(active));
    const label = bookmark.getAttribute('aria-label').replace('Bookmark ', '');
    const saved = new Set(getBookmarks());
    if (active) saved.add(label);
    else saved.delete(label);
    saveBookmarks([...saved]);
    showToast(active ? 'Saved to bookmarks' : 'Removed from bookmarks');
    return;
  }

  const showMore = event.target.closest('.show-more');
  if (showMore) {
    const card = showMore.closest('.cat-card');
    const expanded = showMore.dataset.expanded === 'true';
    card.querySelectorAll('.job-item.extra').forEach((item) => {
      item.classList.toggle('hidden', expanded);
    });
    showMore.dataset.expanded = String(!expanded);
    showMore.textContent = expanded ? 'Show more (2)' : 'Show less';
    return;
  }

  const viewAll = event.target.closest('.view-all');
  if (viewAll) {
    const card = viewAll.closest('.cat-card');
    card.querySelectorAll('.job-item.extra').forEach((item) => item.classList.remove('hidden'));
    const showMoreButton = card.querySelector('.show-more');
    showMoreButton.dataset.expanded = 'true';
    showMoreButton.textContent = 'Show less';
    showToast(`Showing all ${card.querySelector('.cat-title h3').textContent} updates`);
    return;
  }

  const title = event.target.closest('.job-title');
  if (title) {
    showToast(`Opening details for ${title.textContent}`);
  }
});

document.getElementById('themeToggle').addEventListener('click', (event) => {
  const root = document.documentElement;
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try {
    localStorage.setItem('naukridesk-theme', next);
  } catch {
    return;
  }
  event.currentTarget.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', next === 'dark' ? '#0b1220' : '#ffffff');
});

document.getElementById('notifyBtn').addEventListener('click', () => {
  showToast('2 new updates: SSC CGL admit card and IBPS PO result');
  const badge = document.getElementById('notifyBadge');
  if (badge) badge.remove();
});

document.getElementById('profileBtn').addEventListener('click', () => {
  showToast('Profile and saved updates are coming soon');
});

const waNumber = document.getElementById('waNumber');
const waMessage = document.getElementById('waMessage');
const waForm = document.getElementById('waForm');
const waError = document.getElementById('waError');
const charCount = document.getElementById('charCount');

waNumber.addEventListener('input', () => {
  waNumber.value = waNumber.value.replace(/\D/g, '').slice(0, 10);
  waNumber.closest('.phone-field').classList.remove('invalid');
  waError.textContent = '';
});

waMessage.addEventListener('input', () => {
  charCount.textContent = waMessage.value.length;
});

waForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!/^[6-9]\d{9}$/.test(waNumber.value)) {
    waNumber.closest('.phone-field').classList.add('invalid');
    waError.textContent = 'Please enter a valid 10 digit WhatsApp number.';
    waNumber.focus();
    return;
  }
  waError.textContent = '';
  waNumber.closest('.phone-field').classList.remove('invalid');
  const button = document.getElementById('waSubmit');
  button.disabled = true;
  button.innerHTML = `${icon('check-circle')} Alerts On`;
  showToast('Subscribed! You will now receive free NaukriDesk alerts.');
});

document.querySelectorAll('a[href="#"]:not(.brand)').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showToast('This link is part of the NaukriDesk demo');
  });
});

try {
  const savedTheme = localStorage.getItem('naukridesk-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    document.documentElement.dataset.theme = savedTheme;
    document.getElementById('themeToggle').setAttribute('aria-label', savedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
} catch {
  document.documentElement.dataset.theme = 'dark';
}

resultCount.textContent = totalItems();
