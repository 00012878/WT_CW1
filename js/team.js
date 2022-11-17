const nav = document.querySelector("nav")
const titleNav = document.querySelector(".nav-content-title")
const listNav = document.querySelector("ul")
const titleLowerNav = document.querySelectorAll(".nav-content-title")[1]

// Animation effect for vacancies paragraph.
// Animation runs when 50% of the vacancies paragraph is in the viewport.
// Staggered animation effect.
const teamObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateY(titleNav)
            setTimeout(() => animateY(listNav), 200)
            setTimeout(() => animateY(titleLowerNav), 400)
            observer.unobserve(nav)
        }
    })
}, {threshold: .5})
teamObserver.observe(nav)