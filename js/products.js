const makeOrderButton = document.querySelector(".main-wrapper button")
const toolsTitles = document.querySelectorAll(".tools-title")
const toolsTitlesSpans = document.querySelectorAll(".tools-title span")
const toolsContents = document.querySelectorAll("div.tools-content")
const nav = document.querySelector("nav")
const listNav = document.querySelector(".list")
const toolsNav = document.querySelector(".tools")

// Redirect to pricing.html when clicking "Make Order" button.
makeOrderButton.addEventListener("click", () => window.location.href = "./pricing.html")

// Drop-down menu for "Tools We Use" and "Languages We Code In" tabs.
for (let i = 0; i < toolsTitles.length; i++) {
    toolsTitles[i].addEventListener("click", () => {
        // manipulating with element's class list.
        toolsContents[i].classList.contains("open") ? toolsContents[i].classList.replace("open", "closed")
            : toolsContents[i].classList.replace("closed", "open")
        // manipulating with "+" and "-" signs.
        toolsTitlesSpans[i].textContent === "+" ? toolsTitlesSpans[i].textContent = "-" :
            toolsTitlesSpans[i].textContent = "+"
    })
}

// Animation effect for nav.
// Animation runs when 50% of the nav is in the viewport.
// Staggered animation effect.
const productsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            animateY(listNav)
            setTimeout(() => animateY(toolsNav), 200)
            observer.unobserve(nav)
        }
    })
}, {threshold: .5})
productsObserver.observe(nav)