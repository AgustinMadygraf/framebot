/*
Path: vue.config.js
El archivo vue.config.js se utiliza para configurar el servidor de desarrollo de Vue.js.
*/

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  
  // Configuración del servidor de desarrollo
  devServer: {
    host: '192.168.0.118', // Cambia 'localhost' a la IP deseada
    port: 8080, // Puerto donde corre el servidor de desarrollo
    hot: true, // Habilita la recarga en caliente (Hot Module Replacement)
    liveReload: true, // Recarga la página al detectar cambios
    client: {
      webSocketURL: 'ws://192.168.0.118:8080/ws', // URL del WebSocket para el cliente
    },
    proxy: {
      // Redirecciona las solicitudes API para evitar problemas de CORS
      '/api': {
        target: 'http://localhost:5000', // Cambia a la URL de tu servidor Flask
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // Elimina el prefijo /api de la solicitud
      },
    },
  },
});