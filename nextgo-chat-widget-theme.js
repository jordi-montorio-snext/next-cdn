const theme = {
    button: {
        backgroundColor: '#ff8200',
        bottom: 32,
        size: 48,
        dragAndDrop: false,
        iconColor: 'white',
        customIconSrc: 'help-icon.svg',
        autoWindowOpen: {
            autoOpen: true,
            openDelay: 2,
            autoOpenOnMobile: false
        }
    },
    customCSS: `
        button[part=button] {
            left: 29px !important;
            border-radius: 5px !important;
            color: white !important;
            height: 42px !important;
        }

        div[part=bot] {
            left: 29px !important;
            transform-origin: left bottom !important;
            font-family: 'Inter', sans-serif !important;
            line-height: 1.5 !important;
        }

        .chatbot-guest-bubble {
            box-shadow: 0 0 #0000, 0 0 #0000, 0 .25rem 6px #32325d14, 0 1px 3px #0000000d;
            border-bottom-right-radius: 5px !important;
            border-bottom-left-radius: 20px !important;
            border-top-right-radius: 20px !important;
            border-top-left-radius: 20px !important;
            font-family: 'Inter', sans-serif !important;
            line-height: 1.5 !important;
        }

        .chatbot-host-bubble {
            box-shadow: 0 0 #0000, 0 0 #0000, 0 .25rem 6px #32325d14, 0 1px 3px #0000000d;
            border-bottom-right-radius: 20px !important;
            border-bottom-left-radius: 5px !important;
            border-top-right-radius: 20px !important;
            border-top-left-radius: 20px !important;
            font-family: 'Inter', sans-serif !important;
            line-height: 1.5 !important;
        }

        figure {
            display: none !important;
        }

        .chatbot-container {
            border-radius: 5px !important;
        }
    `,
    chatWindow: {
        showTitle: true,
        showAgentMessages: false,
        title: 'TXEN AI',
        titleAvatarSrc: 'help-icon.svg',
        welcomeMessage: '¡Hola! ¿En qué puedo ayudarte?',
        errorMessage: '¡Ups! Parece que algo salió mal. Por favor, intenta nuevamente.',
        backgroundColor: '#f9f9fb',
        height: 700,
        width: 400,
        fontSize: 14,
        starterPrompts: [
            "¿Como hago una factura?",
            "¿Cómo configurar mi NextGO?"
        ],
        starterPromptFontSize: 14,
        clearChatOnReload: false,
        sourceDocsTitle: 'Sources:',
        renderHTML: true,
        botMessage: {
            backgroundColor: '#fdfdfd',
            textColor: '25211F',
            showAvatar: false,
            avatarSrc: 'sn.svg'
        },
        userMessage: {
            backgroundColor: '#ff8200',
            textColor: '#ffffff',
            showAvatar: false,
            avatarSrc: 'user-solid-rounded.svg'
        },
        textInput: {
            placeholder: 'Escribe tu consulta',
            backgroundColor: '#ffffff',
            textColor: '#303235',
            sendButtonColor: '#ff8200',
            maxChars: 100,
            maxCharsWarningMessage: 'Has superado el límite de caracteres. Por favor, ingresa menos de 100.',
            autoFocus: true,
            sendMessageSound: true,
            sendSoundLocation: 'send_message.mp3',
            receiveMessageSound: true,
            receiveSoundLocation: 'receive_message.mp3'
        },
        feedback: {
            color: '#303235'
        },
        dateTimeToggle: {
            date: true,
            time: true
        },
        footer: {
            textColor: '#303235',
            text: 'Powered by',
            company: 'ServiceNext',
            companyLink: 'https://servicenext.eu'
        }
    }
};

export default theme; 
