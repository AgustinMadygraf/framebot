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
      try {
        const response = await axios.post('http://127.0.0.1:5000/receive-data', {
          message: this.userMessage,
          user_id: '12345'
        });
        this.responseMessage = response.data.received_message;
      } catch (error) {
        console.error("Error al enviar mensaje:", error);
      }
    }
  }
};
