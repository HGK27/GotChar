import axios from "axios";

const BASE_URL = "https://api.gameofthronesquotes.xyz";

export const getRandomChar = async () => {
    const response = await axios.get(BASE_URL + "/v1/random");
    return response.data;
};
export const getHouseList = async () => {
    const response = await axios.get(BASE_URL + "/v1/houses");
    return response.data;
}