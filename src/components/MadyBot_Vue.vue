<!--
Path: src/components/MadyBot_Vue.vue
Este archivo es el componente Vue que se encarga de mostrar el chatbot en la interfaz de usuario.
-->
<template>
  <div class="container_main">
    <iframe src="http://127.0.0.1:8000" class="iframe"></iframe>
    <div class="chatbot_card">
      <div class="card_header"> <!-- agregar chatbot-icon.jpg-->
        <img src="../../src/assets/chatbot-icon.jpg" alt="Chatbot" class="chatbot_icon" />
        <h3>MadyBot</h3>
      </div>
      <div class="card_body">
          <p class="message-received">{{ responseMessage }}</p>
      </div>
      <div class="card_footer">
        <div class="input-group mb-2">
          <input v-model="userMessage" @keyup.enter="sendMessage" placeholder="Mensaje" class="form-control" />
          <button @click="sendMessage" :disabled="!userMessage" class="btn btn-primary">Enviar</button>
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
