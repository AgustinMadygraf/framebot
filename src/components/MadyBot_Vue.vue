<template>
  <div class="container">
    <!-- Iframe de ejemplo -->
    <iframe src="http://127.0.0.1:8000" class="iframe"></iframe>
    
    <!-- Chatbot -->
    <div class="chatbot card">
      <h3 class="card-header">MadyBot</h3>
      <div class="card-body">
        <div v-if="responseMessage" class="mt-3">
          <p class="message-received"><strong>MadyBotPy:</strong> {{ responseMessage }}</p>
        </div>
        <input v-model="userMessage" placeholder="Escribe un mensaje" class="form-control mb-2" />
        <button @click="sendMessage" class="btn btn-primary">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
import MadyBot_VueScript from './MadyBot_Vue.js'; // Importa el script externo
import './MadyBot_Vue.css';  // Importa el archivo CSS

export default MadyBot_VueScript;
</script>
