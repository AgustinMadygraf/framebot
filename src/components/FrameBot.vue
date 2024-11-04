<template>
    <div>
      <!-- Iframe de ejemplo -->
      <iframe src="localhost:8000" width="100%" height="200px"></iframe>
      
      <!-- Chatbot -->
      <div>
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
            user_id: '12345' // O el ID que quieras utilizar
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
  /* Estilos opcionales para el chatbot */
  iframe {
    border: none;
  }
  h3 {
    font-family: Arial, sans-serif;
    color: #333;
  }
  input {
    padding: 8px;
    margin-right: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 8px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  