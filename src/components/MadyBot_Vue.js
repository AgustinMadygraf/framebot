// Path: src/components/MadyBot_Vue.js
import ChatService from '../services/ChatService';

export default {
  data() {
    return {
      userMessage: '',
      messages: ChatService.getMessages()
    };
  },
  methods: {
    /**
     * Sends a message using the MessageService and updates the responseMessage.
     * Logs the process of sending the message.
     */
    async sendMessage() {
      console.log("Iniciando proceso de envío de mensaje...");

      try {
        await ChatService.sendMessage(this.userMessage);
        this.messages = ChatService.getMessages();
        console.log("Mensaje enviado exitosamente:", this.userMessage);
        this.userMessage = ''; // Limpiar el campo de entrada después de enviar el mensaje
      } catch (error) {
        console.error("Error al enviar el mensaje:", error.message);
      } finally {
        console.log("Operación de envío de mensaje finalizada.");
      }
    }
  }
};