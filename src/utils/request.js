import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:5000"
    // baseURL: "https://rmss.onrender.com"
});

export default request;