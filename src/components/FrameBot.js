// Path: src/components/FrameBot.vue
import axios from 'axios';

export default {
  data() {
    return {
      userMessage: '',
      responseMessage: ''
    };
  },
  methods: {
    async sendMessage() {
      console.log("Iniciando envío de mensaje...");
      console.log("Datos enviados:", {
        prompt_user: this.userMessage,
        user_id: '12345'
      });

      try {
        const response = await axios.post('http://127.0.0.1:5000/receive-data', {
          prompt_user: this.userMessage,
          user_id: '12345'
        });

        // Cambia `received_message` por `response_MadyBot` aquí
        console.log("Respuesta recibida de la API:", response.data);
        this.responseMessage = response.data.response_MadyBot; // Cambiado a `response_MadyBot`
      } catch (error) {
        console.error("Error al enviar mensaje:", error);
        this.responseMessage = "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.";
      } finally {
        console.log("Operación de envío de mensaje finalizada.");
      }
    }
  }
};
