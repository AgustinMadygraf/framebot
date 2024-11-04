// Path: src/components/FrameBot.vue
import ApiService from '../services/ApiService';

export default {
  data() {
    return {
      userMessage: '',
      responseMessage: ''
    };
  },
  methods: {
    async sendMessage() {
      console.log("Iniciando proceso de envío de mensaje...");

      try {
        // Llama al servicio para enviar el mensaje y obtener la respuesta
        this.responseMessage = await ApiService.sendMessage(this.userMessage, '12345');
      } catch (error) {
        console.error(error.message); // Muestra el mensaje de error al usuario
        this.responseMessage = "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.";
      } finally {
        console.log("Operación de envío de mensaje finalizada.");
      }
    }
  }
};
