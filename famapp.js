const loginSection = document.getElementById("login-section")
const nameInput = document.getElementById("name-input")
const enterBtn = document.getElementById("enter-Btn")
const appSection = document.getElementById("app-sction")
const welcomeText = document.getElementById("welcome-text")
const familyList = document.getElementById("family-list")
const messageInput = document.getElementById("message-input")
const sendBtn = document.getElementById("send-btn")
const messageList = document.getElementById("message-list")
const addEvent = document.getElementById("add-event")
const eventsBtn = document.getElementById("add-eventBtn")
const eventList = document.getElementById("event-list")

let familyMembers = []

enterBtn.addEventListener("click", function(){
    let name = nameInput.value
    if (name === " ") return
    localStorage.setItem("userName", name)
    showApp()
})

function showApp(){
    loginSection.style.display = "none"
    appSection.style.display = "block"
    let name = localStorage.getItem("userName")
    welcomeText.textContent = `Welcome ${name} ❤️`
    displayFamily()
    loadMessages()
    loadEvents()
} // do the following when this function is called