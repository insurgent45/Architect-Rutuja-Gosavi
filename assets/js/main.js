/* ═══════════════════════════════════════════════════════════════════════
   Rutuja Gosavi — Portfolio JS
   Scroll animations, nav, project grid, modal, lightbox
   ═══════════════════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  // Reset scroll on load
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  // Dynamic Scroll Speed Animation
  let lastScrollY = window.scrollY;
  let lastTime = performance.now();
  
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const currentTime = performance.now();
    const dt = currentTime - lastTime;
    
    if (dt > 0) {
      const dy = Math.abs(currentScrollY - lastScrollY);
      const speed = dy / dt; // pixels per ms
      
      // Base duration 0.8s. High scroll speed lowers duration.
      let duration = 0.8 - (speed * 0.15);
      if (duration < 0.15) duration = 0.15; // fastest animation
      if (duration > 0.8) duration = 0.8;   // normal animation
      
      document.documentElement.style.setProperty('--scroll-anim-duration', `${duration.toFixed(2)}s`);
    }
    
    lastScrollY = currentScrollY;
    lastTime = currentTime;
  }, { passive: true });

  // Initialize Lucide icons
  if (window.lucide) lucide.createIcons();

  initNav();
  initScrollAnimations();
  initBackToTop();
  renderFilters();
  renderProjects();
  init3DViewer();
});

/* ─── Navigation ─────────────────────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById("main-nav");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  const allLinks = links.querySelectorAll("a");

  // Scroll effect
  const onScroll = () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 60);
    highlightActiveSection();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !open);
    links.classList.toggle("is-open", !open);
    document.body.style.overflow = !open ? "hidden" : "";
  });

  // Close on link click
  allLinks.forEach((a) =>
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("is-open");
      document.body.style.overflow = "";
    })
  );

  function highlightActiveSection() {
    const sections = document.querySelectorAll(".section, .hero");
    let current = "hero";
    const scrollPos = window.scrollY + window.innerHeight / 3;

    // Check if at the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
      current = "contact";
    } else {
      sections.forEach((s) => {
        if (scrollPos >= s.offsetTop) current = s.id;
      });
    }

    allLinks.forEach((a) => {
      a.classList.toggle(
        "active",
        a.getAttribute("href") === `#${current}`
      );
    });
  }
}

/* ─── Scroll Animations (IntersectionObserver) ───────────────────────── */
function initScrollAnimations() {
  // Respect reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document
      .querySelectorAll(".anim-fade, .anim-slide-up")
      .forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
    const delay = parseInt(entry.target.dataset.delay || "0", 10);
    
    // Auto-stagger grid items that don't have explicit delays
    let staggerDelay = delay;
    if (entry.target.classList.contains("project-card")) {
      const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
      staggerDelay = (index % 3) * 150;
    }

    setTimeout(
      () => entry.target.classList.add("is-visible"),
      staggerDelay
    );
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document
    .querySelectorAll(".anim-fade, .anim-slide-up")
    .forEach((el) => observer.observe(el));

  // Parallax for hero background
  const heroBg = document.querySelector(".hero__bg");
  if (heroBg) {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      if (scrollPos < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrollPos * 0.4}px)`;
      }
    }, { passive: true });
  }
}

/* ─── Back To Top ────────────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener(
    "scroll",
    () => btn.classList.toggle("visible", window.scrollY > 600),
    { passive: true }
  );
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

/* ─── Render Category Filters ────────────────────────────────────────── */
function renderFilters() {
  const container = document.getElementById("works-filters");
  if (!container || typeof CATEGORIES === "undefined") return;

  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = `filter-btn${cat.id === "all" ? " active" : ""}`;
    btn.dataset.filter = cat.id;
    btn.textContent = cat.label;
    btn.addEventListener("click", () => filterProjects(cat.id));
    container.appendChild(btn);
  });
}

function filterProjects(categoryId) {
  // Update active button
  document.querySelectorAll(".filter-btn").forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.filter === categoryId)
  );

  // Show/hide cards
  document.querySelectorAll(".project-card").forEach((card) => {
    const match =
      categoryId === "all" || card.dataset.category === categoryId;
    card.style.display = match ? "" : "none";
  });
}

/* ─── Render Project Cards ───────────────────────────────────────────── */
function renderProjects() {
  const grid = document.getElementById("works-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  PROJECTS.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card anim-slide-up";
    card.dataset.category = project.category;
    card.dataset.slug = project.slug;

    const categoryLabel =
      CATEGORIES.find((c) => c.id === project.category)?.label || "";

    card.innerHTML = `
      <div class="project-card__img">
        <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
        <div class="project-card__overlay">
          <span class="project-card__view">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            View Project
          </span>
        </div>
      </div>
      <div class="project-card__body">
        <p class="project-card__category">${categoryLabel}</p>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__meta">${project.firm} · ${project.year}</p>
      </div>
    `;

    card.addEventListener("click", () => open3DViewer(project));
    grid.appendChild(card);
  });

  // Observe new cards for animation
  initScrollAnimations();
}

/* ─── 2D Horizontal Viewer with Pan/Zoom ──────────────────────────────── */
let viewerOpen = false;
let sceneSheets = [];
let activeSheetIndex = 0;

// Pan & Zoom State
let currentScale = 1;
let currentPanX = 0;
let currentPanY = 0;
let isPanning = false;
let startPanX = 0;
let startPanY = 0;

function applyTransform() {
  if (sceneSheets[activeSheetIndex]) {
     // Auto-snap back to center when fully zoomed out
     if (currentScale <= 1.05) {
       currentScale = 1;
       currentPanX = 0;
       currentPanY = 0;
     }
     sceneSheets[activeSheetIndex].style.transform = `scale(${currentScale}) translate(${currentPanX / currentScale}px, ${currentPanY / currentScale}px)`;
  }
}

function resetTransform() {
  currentScale = 1;
  currentPanX = 0;
  currentPanY = 0;
  sceneSheets.forEach(sheet => sheet.style.transform = '');
}

function changeSlide(direction) {
  if (!viewerOpen || sceneSheets.length === 0) return;
  resetTransform(); // reset zoom on old slide
  
  activeSheetIndex += direction;
  if (activeSheetIndex < 0) activeSheetIndex = 0;
  if (activeSheetIndex >= sceneSheets.length) activeSheetIndex = sceneSheets.length - 1;
  
  const scene = document.getElementById("viewer-scene");
  const targetSheet = sceneSheets[activeSheetIndex];
  
  // Center the target sheet. offsetLeft includes the 4rem (64px) padding left.
  scene.scrollTo({ left: targetSheet.offsetLeft - 64, behavior: 'smooth' }); 
  
  document.getElementById("viewer-progress").textContent = `${activeSheetIndex + 1} / ${sceneSheets.length}`;
}

function init3DViewer() {
  const viewer = document.getElementById("project-3d-viewer");
  const closeBtn = document.getElementById("viewer-close");
  const scene = document.getElementById("viewer-scene");
  
  const prevBtn = document.getElementById("viewer-prev");
  const nextBtn = document.getElementById("viewer-next");

  closeBtn?.addEventListener("click", close3DViewer);
  prevBtn?.addEventListener("click", () => changeSlide(-1));
  nextBtn?.addEventListener("click", () => changeSlide(1));

  // Mouse wheel Zoom
  scene.addEventListener("wheel", (e) => {
    if (!viewerOpen) return;
    e.preventDefault(); // Stop native scrolling
    
    // Zoom factor based on wheel delta
    const zoomFactor = -e.deltaY * 0.003; 
    currentScale += zoomFactor;
    
    if (currentScale < 1) {
       currentScale = 1;
       currentPanX = 0;
       currentPanY = 0;
    }
    if (currentScale > 6) currentScale = 6; // Max 6x zoom
    
    applyTransform();
  }, { passive: false });
  
  // Mouse Drag (Pan)
  scene.addEventListener("mousedown", (e) => {
    if (!viewerOpen || currentScale <= 1) return;
    isPanning = true;
    startPanX = e.clientX - currentPanX;
    startPanY = e.clientY - currentPanY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isPanning) return;
    e.preventDefault();
    currentPanX = e.clientX - startPanX;
    currentPanY = e.clientY - startPanY;
    applyTransform();
  });

  window.addEventListener("mouseup", () => {
    isPanning = false;
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!viewerOpen) return;
    if (e.key === "Escape") close3DViewer();
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
       e.preventDefault();
       changeSlide(1);
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
       e.preventDefault();
       changeSlide(-1);
    }
  });
}

function open3DViewer(project) {
  const viewer = document.getElementById("project-3d-viewer");
  const scene = document.getElementById("viewer-scene");
  
  // Set UI
  document.getElementById("viewer-category").textContent = CATEGORIES.find(c => c.id === project.category)?.label || "";
  document.getElementById("viewer-title").textContent = project.title;
  document.getElementById("viewer-summary").textContent = project.summary;
  
  document.getElementById("viewer-meta").innerHTML = `
    <div class="viewer-3d__meta-item"><label>Typology</label><span>${project.typology}</span></div>
    <div class="viewer-3d__meta-item"><label>Location</label><span>${project.location}</span></div>
    <div class="viewer-3d__meta-item"><label>Role</label><span>${project.role}</span></div>
    <div class="viewer-3d__meta-item"><label>Year</label><span>${project.year}</span></div>
    <div class="viewer-3d__meta-item"><label>Firm</label><span>${project.firm}</span></div>
  `;

  // Build Scene Sheets
  scene.innerHTML = '';
  sceneSheets = [];
  
  project.images.forEach((img) => {
    const el = document.createElement("img");
    el.src = img;
    el.className = "scene-sheet";
    el.draggable = false; // Disable native image drag
    scene.appendChild(el);
    sceneSheets.push(el);
  });
  
  // Reset scroll & zoom state
  activeSheetIndex = 0;
  resetTransform();
  scene.scrollLeft = 0;
  document.getElementById("viewer-progress").textContent = `1 / ${sceneSheets.length}`;
  
  viewerOpen = true;
  viewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function close3DViewer() {
  viewerOpen = false;
  resetTransform();
  document.getElementById("project-3d-viewer").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
