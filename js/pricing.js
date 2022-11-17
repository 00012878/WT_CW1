const form = document.querySelector("form")
const nameField = document.querySelector("#name")
const emailField = document.querySelector("#email")
const phoneField = document.querySelector("#phone")
const subjectField = document.querySelector("#subject")
const messageField = document.querySelector("#message")
const sendButton = document.querySelector("form button")
const clearButton = document.querySelectorAll("form button")[1]
const loadingMessage = document.querySelector("form div")
const successMessage = document.querySelectorAll("form div")[1]

// Form validation.
sendButton.addEventListener("click", (e) => {
    if (nameField.value.length >= 3 && nameField.value.length <= 40
    && emailField.value.length >= 7 && emailField.value.length <= 25
    && phoneField.value.length >= 13 && phoneField.value.length <= 17
    && messageField.value.length >= 30 && messageField.value.length <= 2000) {
        e.preventDefault()
        loadingMessage.style.display = "block"
        successMessage.style.height = "0px"
        successMessage.style.opacity = "0"
        setTimeout(() => {
            loadingMessage.style.display = "none"
            successMessage.style.height = "5vh"
            successMessage.style.opacity = "1"
        }, 200)
    }
})
clearButton.addEventListener("click", () => {
    successMessage.style.height = "0px"
    successMessage.style.opacity = "0"
})

// Animation effect for form input fields.
// Animation runs when 30% of form element in the viewport.
// Staggered animation effect.
const pricingObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateY(nameField)
            setTimeout(() => animateY(emailField), 300)
            setTimeout(() => animateY(phoneField), 600)
            setTimeout(() => animateY(subjectField), 900)
            setTimeout(() => animateY(messageField), 1200)
            observer.observe(form)
        }
    })
}, {threshold: .3})
pricingObserver.observe(form)