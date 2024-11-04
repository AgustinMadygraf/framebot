<template>
    <div class="container">
      <!-- Iframe de ejemplo -->
      <iframe src="http://localhost:8000" class="iframe"></iframe>
      
      <!-- Chatbot -->
      <div class="chatbot">
        <h3>MadyBot</h3>
        <input v-model="userMessage" placeholder="Escribe un mensaje" />
        <button @click="sendMessage">Enviar</button>
        
        <div v-if="responseMessage">
          <p><strong>MadyBotPy:</strong> {{ responseMessage }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FrameBotScript from './FrameBot.js'; // Importa el script externo
  import './FrameBot.css';  // Importa el archivo CSS
  
  export default FrameBotScript;
  </script>
  