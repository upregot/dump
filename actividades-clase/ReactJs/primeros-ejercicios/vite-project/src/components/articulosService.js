import axios from "axios";
const API_BASE_URL = "https://dds.frc.utn.edu.ar/api"; //URL de ejemplo
async function BuscarTodos() {
  try {
    const response = await axios.get(`${API_BASE_URL}/articulos`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
}
export const articulosService = {
  BuscarTodos,
};
