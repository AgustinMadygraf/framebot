1. **Crear el archivo `src/assets/chatbot.css`**:
   - Definir estilos generales para el contenedor del chatbot.
   - Establecer estilos para los mensajes enviados y recibidos, similar a WhatsApp.

2. **Modificar MadyBot_Vue.vue**:
   - Importar el archivo `chatbot.css`.
   - Ajustar la estructura del template para incluir clases de Bootstrap y las nuevas clases de estilo.

3. **Modificar MadyBot_Vue.js**:
   - Añadir lógica para manejar el estado de los mensajes (enviados y recibidos).
   - Implementar métodos para agregar mensajes al historial de chat.

4. **Modificar MadyBot_Vue.css**:
   - Eliminar estilos antiguos que ya no sean necesarios.
   - Asegurarse de que los nuevos estilos de `chatbot.css` se apliquen correctamente.

5. **Modificar index.html**:
   - Incluir el enlace a la CDN de Bootstrap en la sección `<head>`.

6. **Crear el archivo `src/components/ChatMessage.vue`**:
   - Definir un componente para los mensajes individuales.
   - Establecer propiedades para el contenido del mensaje y el tipo (enviado o recibido).

7. **Modificar App.vue**:
   - Importar y utilizar el nuevo componente `ChatMessage`.
   - Ajustar el template para mostrar una lista de mensajes usando el nuevo componente.

8. **Modificar main.css**:
   - Asegurarse de que los estilos globales no interfieran con los estilos específicos del chatbot.

9. **Modificar MessageService.js**:
   - Añadir lógica para manejar el historial de mensajes.
   - Implementar métodos para recuperar y almacenar mensajes en el historial.

10. **Modificarmain.js**:
    - Asegurarse de que los nuevos estilos y componentes se carguen correctamente al iniciar la aplicación.