<template>
    <div class="container">
      <!-- Iframe de ejemplo -->
      <iframe src="http://localhost:8000" class="iframe"></iframe>
      
      <!-- Chatbot -->
      <div class="chatbot">
        <h3>Chat con MadyBotPy</h3>
        <input v-model="userMessage" placeholder="Escribe un mensaje" />
        <button @click="sendMessage">Enviar</button>
        
        <div v-if="responseMessage">
          <p><strong>MadyBotPy:</strong> {{ responseMessage }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
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
  </script>
  
  <style scoped>
  /* Contenedor principal que ocupa el 100% de la altura */
  .container {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    height: 100%; /* Hace que ocupe toda la altura disponible */
  }
  
  /* Estilos para el iframe y el chatbot */
  .iframe {
    width: 80%;
    height: 98vh;
    border: none;
  }
  .chatbot {
    width: 20%;
    height: 98vh;
  }
  </style>
  