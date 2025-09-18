import axios from "axios";

const API = import.meta.env.VITE_API

const token: string = localStorage.getItem("token") || ""
const api = axios.create({
    baseURL: API,
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    },
});

export default api;
