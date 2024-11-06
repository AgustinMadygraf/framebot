<template>
    <div class="container">
      <!-- Iframe de ejemplo -->
      <iframe src="http://127.0.0.1:8000" class="iframe"></iframe>
      
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
  import MadyBot_VueScript from './MadyBot_Vue.js'; // Importa el script externo
  import './MadyBot_Vue.css';  // Importa el archivo CSS
  
  export default MadyBot_VueScript;
  </script>
  