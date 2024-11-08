/*
Path: src/services/ApiService.js
El servicio ApiService se encarga de enviar mensajes a la API de MadyBot.
*/

import axios from 'axios';
import MarkdownService from './MarkdownService'; // Importar la clase completa

class ApiService {
  static async sendMessage(prompt_user, user_id) {
    console.log("Iniciando envío de mensaje a la API...");
    console.log("Datos enviados:", { prompt_user, user_id });

    try {
      const response = await axios.post('http://localhost:5000/receive-data', {
        prompt_user,
        user_id
      });
      console.log("Respuesta recibida de la API:", response.data);

      try {
        // Verificar si convertToHtml es una función antes de intentar usarla
        if (typeof MarkdownService.convertToHtml !== 'function') {
          throw new TypeError("convertToHtml no es una función en MarkdownService. Verifica la definición del método.");
        }

        // Convertir la respuesta a HTML usando MarkdownService
        const htmlResponse = MarkdownService.convertToHtml(response.data.response_MadyBot);
        console.log("Respuesta convertida a HTML:", htmlResponse);
        return htmlResponse;
      } catch (conversionError) {
        console.error("Error al convertir la respuesta a HTML:", conversionError);
        throw new Error("Error en la conversión a HTML en ApiService: " + conversionError.message);
      }
    } catch (apiError) {
      console.error("Error al enviar el mensaje a la API:", apiError);
      throw new Error("Error en la solicitud a la API en ApiService: " + apiError.message);
    }
  }
}

export default ApiService;
