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
    async sendMessage() {
      console.log("Iniciando proceso de envío de mensaje...");

      try {
        this.responseMessage = await MessageService.sendMessage(this.userMessage);
      } catch (error) {
        this.responseMessage = error.message;
      } finally {
        console.log("Operación de envío de mensaje finalizada.");
      }
    }
  }
};
