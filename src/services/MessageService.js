// Path: src/services/MessageService.js
import ApiService from './ApiService';

class MessageService {
  /**
   * Sends a message using the ApiService.
   * @param {string} userMessage - The message to be sent.
   * @returns {Promise<string>} - The response from the ApiService.
   * @throws {Error} - Throws an error if the message could not be sent.
   */
  async sendMessage(userMessage) {
    console.log("Iniciando el envío del mensaje:", userMessage);

    try {
      const response = await ApiService.sendMessage(userMessage, '12345');
      console.log("Mensaje enviado exitosamente:", response);
      return response;
    } catch (error) {
      console.error("Error al enviar el mensaje:", error.message);
      throw new Error("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
    }
  }
}

export default new MessageService();
