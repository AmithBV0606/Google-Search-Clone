import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const params = {
    key: import.meta.env.VITE_KEY,
    cx: import.meta.env.VITE_CX,
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};