import axios from "axios";

const apiInstance = axios.create({
    baseURL:"http://localhost:3001/api",
    headers :{id:"Hola"}
});

export default apiInstance;