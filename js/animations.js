document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".service-card, .project-card, .stat-card, .about-section, .skills-section, .why-card, .info-card, .cta-section"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});