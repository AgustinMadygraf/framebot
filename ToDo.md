Modificar "vue.config.js" para que trabaje con un archivo ".env" en lugar de tener en el código la IP.



10 pasos detallados para mejorar tu CSS utilizando Bootstrap:

1. **Revisar y Limpiar el CSS Existente**:
   - Elimina cualquier estilo redundante o no utilizado en tu archivo CSS. Esto ayudará a reducir el tamaño del archivo y a mejorar la mantenibilidad.
   - Asegúrate de que los estilos globales no interfieran con los estilos específicos del chatbot.

2. **Utilizar Clases de Bootstrap para la Disposición**:
   - Aprovecha las clases de Bootstrap para la disposición de los elementos (`container`, `row`, `col`). Esto te permitirá crear un diseño responsivo sin necesidad de escribir mucho CSS personalizado.
   - Reemplaza las clases existentes con clases de Bootstrap para la disposición general del contenedor.

3. **Aplicar Utilidades de Bootstrap**:
   - Utiliza las utilidades de Bootstrap para el espaciado (`m-`, `p-`, `mt-`, `mb-`, etc.), alineación (`text-center`, `align-items-center`, etc.) y visibilidad (`d-none`, `d-block`, etc.). Esto te permitirá aplicar estilos comunes de manera rápida y consistente.

4. **Personalizar Variables de Bootstrap**:
   - Personaliza las variables de Bootstrap para ajustar los colores, fuentes y otros estilos globales a las necesidades de tu proyecto. Puedes hacerlo creando un archivo SCSS y sobrescribiendo las variables predeterminadas de Bootstrap.

5. **Crear Componentes Reutilizables**:
   - Divide tu CSS en componentes reutilizables. Por ejemplo, crea clases específicas para los botones, tarjetas, encabezados, etc. Esto te permitirá mantener un código más limpio y modular.

6. **Utilizar Mixins y Funciones de SCSS**:
   - Si estás utilizando SCSS, aprovecha los mixins y funciones para evitar la repetición de código. Por ejemplo, puedes crear un mixin para los botones que incluya todos los estilos comunes y luego extenderlo en tus clases específicas.

7. **Optimizar para la Accesibilidad**:
   - Asegúrate de que tus estilos no comprometan la accesibilidad. Utiliza colores con suficiente contraste, tamaños de fuente legibles y asegúrate de que todos los elementos interactivos sean accesibles mediante el teclado.

8. **Implementar Media Queries para la Responsividad**:
   - Utiliza media queries para ajustar los estilos en diferentes tamaños de pantalla. Bootstrap ya incluye breakpoints predefinidos (`sm`, `md`, `lg`, `xl`), pero puedes personalizarlos según tus necesidades.

9. **Documentar tu CSS**:
   - Documenta tu CSS para que otros desarrolladores (o tú mismo en el futuro) puedan entender fácilmente qué hace cada clase y cómo se espera que se utilice. Esto puede incluir comentarios en el código o una guía de estilos separada.

10. **Probar y Depurar**:
   - Prueba tu CSS en diferentes navegadores y dispositivos para asegurarte de que se vea y funcione correctamente en todos ellos. Utiliza herramientas de depuración como las DevTools de Chrome para identificar y solucionar problemas rápidamente.
