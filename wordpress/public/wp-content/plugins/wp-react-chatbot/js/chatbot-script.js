document.addEventListener('click', function(event) {
    const chatbotContainer = document.getElementById('chatbot-container');
    const toggleButton = document.getElementById('toggle-button');

    if (!chatbotContainer.contains(event.target)
         && !toggleButton.contains(event.target)
         && chatbotContainer.classList.contains('chatbot-open')) {
        // chatbotContainer.classList.toggle('chatbot-open');
        // chatbotContainer.classList.toggle('chatbot-closed');
        // toggleButton.classList.toggle('chatbot-toggle-closed')
        // toggleButton.classList.toggle('chatbot-toggle')
        toggleChatbot();
    }
});


function toggleChatbot() {
    const toggleButton = document.getElementById('toggle-button')
    toggleButton.classList.toggle('chatbot-toggle-closed')
    toggleButton.classList.toggle('chatbot-toggle')
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.classList.toggle('chatbot-open');
    chatbotContainer.classList.toggle('chatbot-closed');
}

document.addEventListener('DOMContentLoaded', function() {
    const messagesContainer = document.getElementById('messages-container');
    const inputField = document.getElementById('input-message');
    const sendButton = document.getElementById('send-button');

    const url = 'https://pmgkjqz4uug3tn2omtzspusky40ombls.lambda-url.ap-south-1.on.aws/';

    const sendMessage = async () => {
        const inputMessage = inputField.value.trim();
        if (inputMessage === '') return;

        displayMessage(inputMessage, 'user');

        inputField.value = '';

        showTypingIndicator();

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question: inputMessage })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const responseData = await response.json();
            // console.log(responseData);
            removeTypingIndicator();

            displayMessage(responseData, 'bot');
        } catch (error) {
            console.error('Error:', error);
            removeTypingIndicator();
        }
    };

    const displayMessage = (message, type) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        // messageDiv.textContent = message;
        let boldFlag = false;
        let formattedMessage = ""

        if(type == 'bot')
        {
            for(let i=0; i<message.length; i++)
            {
                if(message.substring(i, i+2) == '**' )
                {
                    if(!boldFlag)
                    {
                        formattedMessage += '<b>'
                        boldFlag = true
                    }
                    else
                    {
                        formattedMessage += '</b>'
                        boldFlag = false;
                    }
                    i++;
                }
                else
                {
                    formattedMessage+=message[i];
                }
            }
        }
        else
        {
            formattedMessage = message;
        }
        messageDiv.innerHTML = formattedMessage.replace(/\n/g, '<br/>');
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const showTypingIndicator = () => {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.id = 'typing-indicator';
        typingIndicator.innerHTML = '<div></div><div></div><div></div>';
        messagesContainer.appendChild(typingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const removeTypingIndicator = () => {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            messagesContainer.removeChild(typingIndicator);
        }
    };

    // Event listener for sending messages
    sendButton.addEventListener('click', sendMessage);

    // Event listener for pressing Enter key
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Display initial message
    displayMessage("Welcome to iBridge360! How can I help you?", 'bot');
});