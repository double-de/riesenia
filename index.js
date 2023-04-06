const auditButtons = document.querySelectorAll(`.audit-button`)
const exitButton = document.querySelector(".exit-button")
const form = document.querySelector(".modal-form")

auditButtons.forEach(button => {
    button.addEventListener("click", handleOpenFormButton)
})
exitButton.addEventListener("click", handleCloseFormButton)
form.addEventListener("submit", handleFormSubmit)

function handleOpenFormButton(event) {
    const modal = document.querySelector("#modal")
    event.target.setAttribute("disabled", "disabled")

    /*Visibility visible + opacity 1 for animation*/
    modal.style.visibility = "visible"
    modal.style.opacity = "1"

    setTimeout(() => {
        event.target.removeAttribute("disabled")
    }, 1000)
}

function handleCloseFormButton(event) {
    event.target.setAttribute("disabled", "disabled")
    setTimeout(() => {
        modal.style.visibility = "hidden"
        event.target.removeAttribute("disabled")
    }, 1000)
    modal.style.opacity = "0"
}

function handleFormSubmit(event) {
    event.preventDefault()
    
    const loading = document.querySelector(".load-4")
    const contactName = document.querySelector("#contact-name")
    const contactEmail = document.querySelector("#contact-email")
    const contactTel = document.querySelector("#contact-tel")
    const contactWeb = document.querySelector("#contact-web")
    const contactText = document.querySelector("#contact-text")
    const recaptcha = document.querySelector("#recaptcha-checkbox")

    try {
        loading.style.visibility = "visible"
        console.log(`Name: ${contactName.value}\nE-mail: ${contactEmail.value}\nPhone: ${contactTel.value}\nWebsite: ${contactWeb.value}\nText: ${contactText.value}\n`)
        setTimeout(() => {
            loading.style.visibility = "hidden"
            //Reset
            contactName.value = ""
            contactEmail.value = ""
            contactTel.value = ""
            contactWeb.value = ""
            contactText.value = ""
            recaptcha.checked = false
        }, 1000)
    } catch (error) {
        loading.style.visibility = "hidden"
        window.alert("An error occured!")
        console.error(error)
    }
}