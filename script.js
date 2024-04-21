document.addEventListener("DOMContentLoaded", function() {
    const chatContainer = document.getElementById("chat-container");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");
    
    sendButton.addEventListener("click", sendMessage);
  
    function sendMessage() {
      const message = userInput.value.trim();  //as of my knowledge trim function used to remove whitespace in user msg
      if (message === "") return;
  
      appendMessage("You", message, "user-message");
      respondToMessage(message);
  
      // Clear input field
      userInput.value = '';
  
      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    const ans1="Hello I am Libex,How can I Help You?";
    const ans2="what type of book you need";
    const ans3="It is on the j rack in the library";
    const ans4="It is on the k rack in the library";
    const ans5="It is on the l rack in the library";
    const ans6="Your welcome,Feels free to ask any doubt";
    const emoji="😊😊"
    function respondToMessage(message) {
      const responses = {
        "hi":ans1,
        "i need a book":ans2,
        "adventurous related book":ans3,
        "comedy related book":ans4,
        "science fiction related book":ans5,
        "thank you":ans6,
        "okay":emoji,
        "enna":ans10.word,
        "default": "I'm sorry, I don't understand that."
      };
      const response = responses[message.toLowerCase()] || responses["default"];
      setTimeout(() => {
        appendMessage("Libex", response, "bot-message");
      }, 500);
    }
  
    function appendMessage(sender, message, messageType) {
      const messageContainer = document.createElement("div");
      messageContainer.textContent = `${sender}: ${message}`;
      messageContainer.classList.add("message-container", messageType);
      chatMessages.appendChild(messageContainer);
    }
  });
  //chatbot toggle effect mdt
  document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var toggleDiv = document.getElementById("toggleDiv");

    toggleButton.addEventListener("click", function() {
        toggleDiv.classList.toggle("hidden");
    });
});
//end of chatbot toggle

//menu toggle effect by mdt
const menu=document.querySelector('.menu');
const menuList=document.querySelector('nav ul');
menu.addEventListener('click',()=>{
  menuList.classList.toggle('show-menu');
});
//end of menu toggle effect by mdt
