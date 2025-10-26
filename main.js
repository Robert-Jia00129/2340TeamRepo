// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id && id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Close mobile menu after navigating
        links.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    }
  });
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
if (hamburger && links) {
  hamburger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(open));
  });
}
