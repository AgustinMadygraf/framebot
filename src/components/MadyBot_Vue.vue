<!--
Path: src/components/MadyBot_Vue.vue
Este archivo es el componente Vue que se encarga de mostrar el chatbot en la interfaz de usuario.
-->
<template>
  <div class="container">
    <!-- Iframe -->
    <iframe src="http://127.0.0.1:8000" class="iframe"></iframe>
    
    <!-- Chatbot -->
    <div class="chatbot card">
      <h3 class="card-header">MadyBot</h3>
      <div class="card-body">
        <div v-if="responseMessage" class="mt-3">
          <p class="message-received"><strong>MadyBot:</strong> {{ responseMessage }}</p>
        </div>
        <input v-model="userMessage" placeholder="Escribe un mensaje" class="form-control mb-2" />
        <div class="button-right">
          <button @click="sendMessage" class="btn btn-primary">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MadyBot_VueScript from './MadyBot_Vue.js';
import './MadyBot_Vue.css';
export default MadyBot_VueScript;
</script>
