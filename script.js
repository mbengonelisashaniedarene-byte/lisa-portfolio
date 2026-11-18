// Animation d'apparition des sections

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
});