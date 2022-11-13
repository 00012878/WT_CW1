const links = document.querySelectorAll(".nav-content-element-title a")
const arrows = document.querySelectorAll(".nav-content-element-title span")
const main = document.querySelector(".main-content")
const warrantyMain = document.querySelector(".main-content-element-wrapper")
const efficientMain = document.querySelectorAll(".main-content-element-wrapper")[1]
const flexibleMain = document.querySelectorAll(".main-content-element-wrapper")[2]
const nav = document.querySelector("nav")
const aiNav = document.querySelector(".nav-content-element")
const softwareNav = document.querySelectorAll(".nav-content-element")[1]
const consultNav = document.querySelectorAll(".nav-content-element")[2]

// Arrow sign movement animation.
links.forEach((item, i) => {
    item.addEventListener("mouseenter", () => arrows[i].style.transform = "translateX(1.5vw)")
    item.addEventListener("mouseleave", () => arrows[i].style.transform = "none")
})

// Animation for the "Warranty", "Efficient" and "Flexible" paragraphs.
// Animation runs when 60% of the main-content is in the viewport.
// Animation for the "Artificial Intelligence", "Dedicated Software" and  "Consultancy" links when on viewport.
// Animation runs when 60% of nav is in the viewport.
// Staggered animation effect.
const indexObserver = new IntersectionObserver((entries,  observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.className === "main-content") {
            animateX(warrantyMain)
            setTimeout(() => animateX(efficientMain), 200)
            setTimeout(() => animateX(flexibleMain), 300)
            observer.unobserve(main)
        } else if (entry.isIntersecting && entry.target.nodeName === "NAV") {
            animateY(aiNav)
            setTimeout(() => animateY(softwareNav), 200)
            setTimeout(() => animateY(consultNav), 300)
            observer.unobserve(nav)
        }
    })
}, {threshold: .6})
indexObserver.observe(main)
indexObserver.observe(nav)