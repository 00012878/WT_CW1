const header = document.querySelector("header")
const headerClass = document.querySelector(".header")
const headerTop = document.querySelector(".header-top")
const themeSwitcher = document.querySelector("#theme-switcher")

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

// Theme switching logic.
try {
    // Checking if theme value is stored in the local storage.
    if (window.localStorage.getItem("theme") === "dark") {
        document.body.classList.replace("light-theme", "dark-theme")
        themeSwitcher.textContent = "Light Mode"
        themeSwitcher.style.backgroundColor = "#e6e6e6"
        themeSwitcher.style.color = "black"
    } else if (window.localStorage.getItem("theme") === "light") {
        document.body.classList.replace("dark-theme", "light-theme")
        themeSwitcher.textContent = "Dark Mode"
        themeSwitcher.style.backgroundColor = "#242424"
        themeSwitcher.style.color = "#ebebeb"
    }
} catch (error)  {
    console.log("Could not retrieve localStorage item \"theme\"")
}

// Change theme on theme button click.
themeSwitcher.addEventListener("click", () => {
    if (document.body.className === "light-theme") {
        document.body.classList.replace("light-theme", "dark-theme")
        themeSwitcher.textContent = "Light Mode"
        themeSwitcher.style.backgroundColor = "#e6e6e6"
        themeSwitcher.style.color = "black"
        window.localStorage.setItem("theme", "dark")
    } else if (document.body.className === "dark-theme") {
        document.body.classList.replace("dark-theme", "light-theme")
        themeSwitcher.textContent = "Dark Mode"
        themeSwitcher.style.backgroundColor = "#242424"
        themeSwitcher.style.color = "#ebebeb"
        window.localStorage.setItem("theme", "light")
    }
})