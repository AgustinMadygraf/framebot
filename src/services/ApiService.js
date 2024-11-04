// Path: src/services/ApiService.js
import axios from 'axios';

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
      return response.data.response_MadyBot; // Retorna solo el mensaje recibido
    } catch (error) {
      console.error("Error al enviar mensaje a la API:", error);
      throw new Error("Hubo un problema al enviar el mensaje a la API.");
    }
  }
}

export default ApiService;
