
// ChatbotMessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("about you") || lowerCaseMessage.includes("who are you")) {
        this.actionProvider.handleAbout();
      } else if (lowerCaseMessage.includes("experience")) {
        this.actionProvider.handleExperience();
      } else if (lowerCaseMessage.includes("projects")) {
        this.actionProvider.handleProjects();
      } else if (lowerCaseMessage.includes("contact")) {
        this.actionProvider.handleContact();
      } else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;
  