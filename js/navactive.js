const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".links-nav a");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const linkAtivo = document.querySelector(
                `.links-nav a[href="#${entry.target.id}"]`
            );

            if (linkAtivo) {
                linkAtivo.classList.add("active");
            }
        }

    });

}, {
    threshold: 0.3
});

sections.forEach(section => {
    observer.observe(section);
});