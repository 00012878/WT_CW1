const header = document.querySelector("header")
const headerClass = document.querySelector(".header")
const headerTop = document.querySelector(".header-top")

// Using Intersection Observer Object to change height and backdrop-filter when header becomes sticky.
const observer = new IntersectionObserver((entries) => {
    // "When header becomes sticky".
    if (entries[0].intersectionRatio === 0) {
        header.style.backdropFilter = "blur(10px) brightness(70%)"
        headerClass.style.height = "10vh"
    } else if (entries[0].intersectionRatio > 0) { // "When header becomes non-sticky".
        header.style.backdropFilter = "none"
        headerClass.style.height = "20vh"
    }
})
observer.observe(headerTop)

// Preventing image drag.
document.querySelectorAll("img").forEach(item => {
    item.addEventListener("dragstart", e => e.preventDefault())
})
document.querySelectorAll("a").forEach(item => {
    item.addEventListener("dragstart", e => e.preventDefault())
})

// X and Y translate functions.
function animateX(element) {
    element.style.transform = "translateX(0)"
    element.style.opacity = "1"
}
function animateY(element) {
    element.style.transform = "translateY(0)"
    element.style.opacity = "1"
}