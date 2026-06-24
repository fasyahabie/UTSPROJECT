// main.js - Toggle nav & modal project detail
document.addEventListener('DOMContentLoaded', () => {
  // Toggle navigation (hamburger) — supports multiple toggles on different pages
  document.querySelectorAll('.nav-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      // find sibling nav in same header
      const header = btn.closest('.nav-wrap') || btn.closest('.site-header');
      const nav = header ? header.querySelector('.nav') : document.querySelector('.nav');
      if (!nav) return;
      const visible = nav.style.display === 'flex' || nav.classList.contains('open');
      if (visible) {
        nav.style.display = '';
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        nav.style.display = 'flex';
        nav.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Modal for project details
  const modal = document.getElementById('projModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');

  document.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.title || '';
      const desc = btn.dataset.desc || '';
      const img = btn.dataset.img || '';
      if (!modal) return;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalImg.src = img;
      modalImg.alt = title;
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  // close modal when clicking outside content
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.setAttribute('aria-hidden', 'true');
    });
  }
});
