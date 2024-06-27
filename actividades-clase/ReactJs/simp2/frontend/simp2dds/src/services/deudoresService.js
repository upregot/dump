import axios from "axios";

const API_URL = "http://localhost:4000/api/deudores";

const getDeudores = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error en el servicio de deudores", error);
    return [];
  }
};

const postDeudor = async (deudor) => {
  try {
    const response = await axios.post(API_URL, deudor);
    return response.data;
  } catch (error) {
    console.error("Error en el servicio de deudores", error);
    return [];
  }
};

const deleteDeudor = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error en el servicio de deudores", error);
    return [];
  }
};

const serviciosDeudores = {
  getDeudores,
  postDeudor,
  deleteDeudor
};

export default serviciosDeudores;
