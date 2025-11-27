// Fade in sections on load
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("fade-in");
    }, index * 200); // stagger effect
  });
});

// Highlight section on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const triggerPoint = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top < triggerPoint) {
      section.classList.add("fade-in");
    }
  });
});

// Glow effect on header when hovered
const header = document.querySelector("header");

header.addEventListener("mouseenter", () => {
  header.style.boxShadow = "0 0 20px rgba(160,160,255,0.5)";
});

header.addEventListener("mouseleave", () => {
  header.style.boxShadow = "none";
});
