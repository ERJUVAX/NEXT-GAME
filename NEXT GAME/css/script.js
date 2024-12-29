const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const userInput = document.getElementById('user-input');

// Simulación de respuesta del chatbot
function getChatbotResponse(userMessage) {
    return "Gracias por tu mensaje: " + userMessage + " 🚀";
}

// Manejar el envío del formulario
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = userInput.value;

    // Agregar mensaje del usuario
    const userBubble = document.createElement('div');
    userBubble.textContent = userMessage;
    userBubble.style.color = "blue"; // Diferenciar el texto del usuario
    chatMessages.appendChild(userBubble);

    // Obtener y agregar respuesta del chatbot
    const botResponse = getChatbotResponse(userMessage);
    const botBubble = document.createElement('div');
    botBubble.textContent = botResponse;
    botBubble.style.color = "green"; // Diferenciar el texto del bot
    chatMessages.appendChild(botBubble);

    // Limpiar el input
    userInput.value = "";

    // Desplazar hacia el último mensaje
    chatMessages.scrollTop = chatMessages.scrollHeight;
});
