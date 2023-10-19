import axios from "axios";

const BASE_URL = "";

export default UserLocationService = {
  createUserLocation: async (name, latitude, longitude) => {
    try {
        
      const response = await axios.post(BASE_URL + "/users", {
        name,
        latitude,
        longitude,
      });
      console.warn("deixa ver:", response.status)
      return (response.status > 200 && response.status < 300);

    } catch (error) {}
  },
  getListOfUsers: async () => {
    try {
      const response = await axios.get(BASE_URL + "user");
      return response.data;
    } catch (error) {}
  },
};
