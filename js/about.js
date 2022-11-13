const leadersDiv = document.querySelector(".leaders")
const firstLeader = document.querySelector(".leaders-element")
const secondLeader = document.querySelectorAll(".leaders-element")[1]

// Animation effect for the leaders photos.
// Animation runs when 50% of the leadersDiv is in the viewport.
// Staggered animation effect.
const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            firstLeader.style.opacity = "1"
            setTimeout(() => secondLeader.style.opacity = "1", 200)
            observer.unobserve(leadersDiv)
        }
    })
}, {threshold: .5})
aboutObserver.observe(leadersDiv)