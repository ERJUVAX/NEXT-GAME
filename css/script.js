const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const userInput = document.getElementById('user-input');

// Simulación de respuesta del chatbot

function getChatbotResponse(userMessage) {
    return "Gracias por tu mensaje: " + userMessage + " 🚀";
}

// Manejar el envío del formulario

chatForm.addEventListener('submit', (e) =>
 {
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

// generar el pdf

document.getElementById("generar-pdf").addEventListener("click", () =>
 {
    // Importar jsPDF

    const { jsPDF } = window.jspdf;

    // Crear una nueva instancia de jsPDF
    const pdf = new jsPDF();

    // Título del documento

    pdf.setFont("Helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text("Opciones de Diseño", 105, 20, { align: "center" });

    // Añadir contenido desde la lista

    const opciones = document.querySelectorAll("#lista-opciones li");
    pdf.setFont("Helvetica", "normal");
    pdf.setFontSize(12);

    let y = 40; // Posición inicial en Y
    opciones.forEach((opcion, index) => {
        pdf.text(`${index + 1}. ${opcion.textContent}`, 10, y);
        y += 10; // Espaciado entre líneas
    });


    // Descargar el archivo PDF

    pdf.save("opciones_diseño.pdf");
});