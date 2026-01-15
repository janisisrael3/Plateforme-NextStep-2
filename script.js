function sendMessage() {
    const inputField = document.getElementById('wa-input');
    const chatBox = document.getElementById('chat-box');
    const messageText = inputField.value.trim();

    if (messageText !== "") {
        // Création de la bulle
        const messageBubble = document.createElement('div');
        messageBubble.classList.add('msg-bubble', 'sent');

        // Heure actuelle
        const now = new Date();
        const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

        // Structure du message
        messageBubble.innerHTML = `
            ${messageText}
            <span class="msg-time">${time} <i class="fas fa-check-double"></i></span>
        `;

        // Ajout au chat
        chatBox.appendChild(messageBubble);

        // Reset et scroll
        inputField.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Envoyer avec la touche ENTRÉE
document.getElementById('wa-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});