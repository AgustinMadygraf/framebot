/*
Path: src/services/MessageService.js
El servicio MessageService se encarga de enviar mensajes al servicio ApiService.
*/

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

      if (error.message.includes('convertToHtml')) {
        console.error("Error relacionado con la función convertToHtml de MarkdownService:", error);
      }

      throw new Error("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      console.log("Operación de envío de mensaje finalizada.");
    }
  }
}

export default new MessageService();
