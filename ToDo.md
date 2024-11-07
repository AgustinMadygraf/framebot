

1. **Configurar Bootstrap en Vue.js**:
1.1  - [x] **Instalar Bootstrap y Bootstrap-Vue**:
     - Utilizar npm para instalar Bootstrap y Bootstrap-Vue.
     - `npm install bootstrap bootstrap-vue`
1.2 - [x] **Importar Bootstrap y Bootstrap-Vue en el proyecto**:
     - Importar los archivos CSS de Bootstrap en main.js.
     - Importar y configurar Bootstrap-Vue en main.js.
1.3  - [x] **Verificar la configuración**:
     - Asegurarse de que los estilos de Bootstrap se apliquen correctamente en la aplicación.

2. **Crear el archivo `src/assets/chatbot.css`**:
2.1  - [ ] **Definir estilos generales para el contenedor del chatbot**:
     - Establecer el tamaño y la posición del contenedor.
     - Definir el color de fondo y los márgenes/padding.
     - Aplicar bordes redondeados y sombras para darle un aspecto moderno.
2.2  - [ ] **Establecer estilos para los mensajes enviados y recibidos, similar a WhatsApp**:
     - Crear clases específicas para los mensajes enviados y recibidos.
2.3  - [ ] **Asegurarse de que los estilos globales no interfieran con los estilos específicos del chatbot**:
     - Revisar y ajustar main.css.

3. **Modificar MadyBot_Vue.vue**:
3.1  - [ ] **Importar el archivo `chatbot.css`**:
     - Asegurarse de que el archivo `chatbot.css` se importe correctamente en el componente.
3.2  - [ ] **Ajustar la estructura del template para incluir clases de Bootstrap y las nuevas clases de estilo**:
     - Reemplazar las clases existentes con clases de Bootstrap para la disposición general del contenedor.
3.3  - [ ] **Añadir clases de Bootstrap para la alineación y el espaciado de los elementos dentro del contenedor**:
     - Aplicar las nuevas clases de estilo definidas en `chatbot.css` a los elementos del chat.

4. **Modificar MadyBot_Vue.js**:
4.1  - [ ] **Añadir lógica para manejar el estado de los mensajes (enviados y recibidos)**:
     - Implementar métodos para agregar mensajes al historial de chat.
4.2  - [ ] **Implementar métodos para recuperar y almacenar mensajes en el historial**:
     - Añadir lógica para manejar el historial de mensajes.
4.3  - [ ] **Asegurarse de que los nuevos estilos y componentes se carguen correctamente al iniciar la aplicación**:
     - Revisar y ajustar main.js.

5. **Modificar MessageService.js**:
5.1  - [ ] **Añadir lógica para manejar el historial de mensajes**:
     - Implementar métodos para recuperar y almacenar mensajes en el historial.
5.2  - [ ] **Implementar métodos para agregar mensajes al historial de chat**:
     - Añadir lógica para manejar el estado de los mensajes (enviados y recibidos).
5.3  - [ ] **Asegurarse de que los nuevos estilos y componentes se carguen correctamente al iniciar la aplicación**:
     - Revisar y ajustar main.js.

6. **Modificar App.vue**:
6.1  - [ ] **Importar y utilizar el nuevo componente `ChatMessage`**:
     - Ajustar el template para mostrar una lista de mensajes usando el nuevo componente.
6.2  - [ ] **Asegurarse de que los estilos de Bootstrap se apliquen correctamente en la aplicación**:
     - Revisar y ajustar main.js.
6.3  - [ ] **Asegurarse de que los nuevos estilos y componentes se carguen correctamente al iniciar la aplicación**:
     - Revisar y ajustar main.js.

7. **Modificar main.css**:
7.1  - [ ] **Asegurarse de que los estilos globales no interfieran con los estilos específicos del chatbot**:
     - Revisar y ajustar main.css.
7.2  - [ ] **Eliminar estilos antiguos que ya no sean necesarios**:
     - Revisar y ajustar main.css.
7.3  - [ ] **Asegurarse de que los nuevos estilos de `chatbot.css` se apliquen correctamente**:
     - Revisar y ajustar main.css.

8. **Modificar index.html**:
8.1  - [ ] **Incluir el enlace a la CDN de Bootstrap en la sección `<head>`**:
     - Revisar y ajustar index.html.
8.2  - [ ] **Asegurarse de que los estilos de Bootstrap se apliquen correctamente en la aplicación**:
     - Revisar y ajustar index.html.
8.3  - [ ] **Asegurarse de que los nuevos estilos y componentes se carguen correctamente al iniciar la aplicación**:
     - Revisar y ajustar index.html.

9. **Crear el archivo `src/components/ChatMessage.vue`**:
9.1  - [ ] **Definir un componente para los mensajes individuales**:
     - Crear el archivo src/components/ChatMessage.vue.
9.2  - [ ] **Establecer propiedades para el contenido del mensaje y el tipo (enviado o recibido)**:
     - Definir el template y el script del componente.
9.3  - [ ] **Aplicar las nuevas clases de estilo definidas en `chatbot.css` a los elementos del chat**:
     - Asegurarse de que los mensajes enviados y recibidos utilicen las clases correspondientes para los estilos de WhatsApp.

10. **Modificar main.js**:
10.1  - [ ] **Asegurarse de que los nuevos estilos y componentes se carguen correctamente al iniciar la aplicación**:
      - Revisar y ajustar main.js.
10.2  - [ ] **Importar y configurar Bootstrap-Vue en el archivo principal de entrada**:
      - Revisar y ajustar main.js.
10.3  - [ ] **Asegurarse de que los estilos de Bootstrap se apliquen correctamente en la aplicación**:
      - Revisar y ajustar main.js.