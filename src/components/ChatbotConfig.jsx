// ChatbotConfig.js
import { createChatBotMessage } from "react-chatbot-kit";

const botName = "PortfolioBot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello! I'm here to answer questions about Ragav.`),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#006d77",
    },
    chatButton: {
      backgroundColor: "#008080",
    },
  },
};

export default config;
