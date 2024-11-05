// Path: src/components/FrameBot.vue
import MessageService from '../services/MessageService';

export default {
  data() {
    return {
      userMessage: '',
      responseMessage: ''
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
        this.responseMessage = await MessageService.sendMessage(this.userMessage);
        console.log("Mensaje enviado exitosamente:", this.responseMessage);
      } catch (error) {
        this.responseMessage = error.message;
        console.error("Error al enviar el mensaje:", error.message);
      } finally {
        console.log("Operación de envío de mensaje finalizada.");
      }
    }
  }
};