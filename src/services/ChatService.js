/* 
Path: src/services/ChatService.js
El servicio ChatService se encarga de gestionar los mensajes del chat.
*/

import MessageService from '../services/MessageService';

class ChatService {
  constructor() {
    this.messages = [
      { text: '¡Bienvenido al chat de MadyBot! ¿En qué puedo ayudarte hoy?', type: 'bot' }
    ];
  }

  async sendMessage(userMessage) {
    try {
      const responseMessage = await MessageService.sendMessage(userMessage);
      this.messages.push({ text: userMessage, type: 'user' });
      this.messages.push({ text: responseMessage, type: 'bot' });
      return responseMessage;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getMessages() {
    return this.messages;
  }
}

export default new ChatService();