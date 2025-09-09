// ChatbotActionProvider.js
import { createChatBotMessage } from "react-chatbot-kit";
import { ABOUT_TEXT, EXPERIENCES, PROJECTS, CONTACT } from "../constants/index";

class ChatbotActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleAbout = () => {
    const message = this.createChatBotMessage(ABOUT_TEXT);
    this.updateChatbotState(message);
  };

  handleExperience = () => {
    const message = this.createChatBotMessage(
      EXPERIENCES.map(exp => `${exp.role} at ${exp.company} (${exp.year}) - ${exp.description}`).join("\n\n")
    );
    this.updateChatbotState(message);
  };

  handleProjects = () => {
    const message = this.createChatBotMessage(
      PROJECTS.map(proj => `${proj.title}: ${proj.description}`).join("\n\n")
    );
    this.updateChatbotState(message);
  };

  handleContact = () => {
    const message = this.createChatBotMessage(`Contact Ragav at ${CONTACT.email}, ${CONTACT.phoneNo}`);
    this.updateChatbotState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage("Could you rephrase that?");
    this.updateChatbotState(message);
  };

  updateChatbotState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ChatbotActionProvider;
