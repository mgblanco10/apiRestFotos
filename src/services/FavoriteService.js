import axios from "axios";

const urlFavorites = "http://localhost:5000"; 

axios.defaults.baseURL = urlFavorites;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const FavoriteService = () => {
  const getAllFavorites = () => {
    const response = axios.get(`${urlFavorites}/pictures`); 
    return response;
  };

  const getByIdFavorites = (id) => {
    const response = axios.get(`${urlFavorites}/pictures/${id}`); 
    console.log('Esta es la respuesta getByIdFavorites', response);
    return response;
  };

  const create = (favoriteData) => {
    const response = axios.post(`${urlFavorites}/pictures`, favoriteData); 
    return response;
  };

  const update = async (id, favoriteData) => {
    try {
      const response = await axios.put(`${urlFavorites}/pictures/${id}`, favoriteData);
      console.log('Respuesta de la solicitud PUT:', response);
      return response;
    } catch (error) {
      console.error('Error en la solicitud PUT:', error);
      throw error;
    }
  };

  const remove = (id) => {
    const response = axios.delete(`${urlFavorites}/pictures/${id}`); 
    return response;
  };

  return {
    getAllFavorites,
    getByIdFavorites,
    create,
    update,
    remove,
  };
};
