function Hello(){
    alert("Hello!Welcome Guys.")
}
  document.addEventListener
  ("DOMContentLoaded",function() {
    const yearspan=document.getElementById("currentYear");
    if(yearspan) { 
        const currentyear= new Date().getfullyear();
         yearspan.textcontent = currentyear;
    }
  });
  function checkAvailability(stockId){
    let ST = document.getElementById(stockId).textContent;
    if(ST.includes("In stock")){
        alert("Item is in stock.");
    }else{
        alert("Item is in out of stock.");
    }
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name.length < 3) {
    formMessage.textContent = "Name must be at least 3 characters!";
    formMessage.style.color = "red";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Enter a valid email address!";
    formMessage.style.color = "red";
    return;
  }

  if (message.length < 5) {
    formMessage.textContent = "Message must be at least 5 characters!";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";

  
  document.getElementById("contactForm").reset();
});

function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value.trim();
  if (message === "") return;

  let chatWindow = document.getElementById("chatWindow");

  let userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = message;
  chatWindow.appendChild(userMsg);

  let botMsg = document.createElement("div");
  botMsg.className = "bot-message";
  botMsg.textContent = getBotReply(message);
  chatWindow.appendChild(botMsg);

  chatWindow.scrollTop = chatWindow.scrollHeight;
  input.value = "";
}

function getBotReply(userText) {
  userText = userText.toLowerCase();

  if (userText.includes("hello")) return "Hi there! How can I assist you today?";
  if (userText.includes("contact")) return "You can fill the contact form to reach us!";
  if (userText.includes("bye")) return "Goodbye! Have a nice day!";
  return "I'm just a dummy AI, but I'm here to chat with you!";
}