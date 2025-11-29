// Basic interactivity: parallax effect, nav toggle, simple form handler
document.addEventListener("DOMContentLoaded", function () {
  // Fill year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav toggle for mobile
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "light") {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    } else {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }
  }

  // Check local storage
  const savedTheme = localStorage.getItem("theme");
  // Default to dark if no preference
  if (savedTheme === "light") {
    setTheme("light");
  } else {
    setTheme("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      setTheme(newTheme);
    });
  }

  // Setup parallax backgrounds from data-bg attribute
  document.querySelectorAll(".parallax").forEach((section) => {
    const src = section.dataset.bg;
    if (src) section.style.backgroundImage = `url('${src}')`;
  });

  // Simple scroll-based parallax: move background position slightly for effect
  const parallaxSections = document.querySelectorAll(".parallax");
  function onScroll() {
    const scY = window.scrollY;
    parallaxSections.forEach((sec) => {
      const speed = 0.25; // adjustable
      const y = Math.round(sec.getBoundingClientRect().top * speed);
      sec.style.transform = `translateY(${y}px)`;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

function handleSubmit(e) {
  e.preventDefault();
  alert("Terima kasih — pesan Anda telah dikirim (demo).");
  e.target.reset();
  return false;
}
