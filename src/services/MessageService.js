// Path: src/services/MessageService.js
import ApiService from './ApiService';

class MessageService {
  async sendMessage(userMessage) {
    try {
      const response = await ApiService.sendMessage(userMessage, '12345');
      return response;
    } catch (error) {
      console.error(error.message);
      throw new Error("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
    }
  }
}

export default new MessageService();