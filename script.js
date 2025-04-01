document.addEventListener("DOMContentLoaded", function() {
    const chatContainer = document.getElementById("chat-container");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");
    
    sendButton.addEventListener("click", sendMessage);
  
    function sendMessage() {
      const message = userInput.value.trim();  // trim function is used to remove whitespace in user input
      if (message === "") return;
  
      appendMessage("You", message, "user-message");
      respondToMessage(message);
  
      // Clear input field
      userInput.value = '';
  
      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    const ans1 = "Hello! I am Libex, How can I help you?";
    const ans2 = "What type of book are you looking for?";
    const ans3 = "It is on the J rack in the library.";
    const ans4 = "It is on the K rack in the library.";
    const ans5 = "It is on the L rack in the library.";
    const ans6 = "You're welcome! Feel free to ask any questions.";
    const ans7 = "The book you're looking for is currently checked out. Would you like to reserve it?";
    const ans8 = "That sounds interesting! Could you tell me more about the book you're interested in?";
    const ans9 = "The library has a wide collection of genres! What are you in the mood for?";
    const emoji = "😊😊";

    function respondToMessage(message) {
      const responses = {
        "hi": ans1,
        "hello": ans1,
        "i need a book": ans2,
        "adventurous related book": ans3,
        "comedy related book": ans4,
        "science fiction related book": ans5,
        "thank you": ans6,
        "okay": emoji,
        "where can I find adventurous books": ans3,
        "where can I find comedy books": ans4,
        "where can I find science fiction books": ans5,
        "is the book available": ans7,
        "tell me more about the book": ans8,
        "what are the available genres": ans9,
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

  // Chatbot toggle effect
  document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var toggleDiv = document.getElementById("toggleDiv");

    toggleButton.addEventListener("click", function() {
        toggleDiv.classList.toggle("hidden");
    });
  });

  // Menu toggle effect
  const menu = document.querySelector('.menu');
  const menuList = document.querySelector('nav ul');
  menu.addEventListener('click', () => {
    menuList.classList.toggle('show-menu');
  });

