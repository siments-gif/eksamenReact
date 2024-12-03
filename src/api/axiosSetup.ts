import axios from "axios";

const apiKey = process.env.VITE_API_KEY;

const fetching = axios.create({
    baseURL: "https://crudapi.co.uk/app/v1",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
    }
});

export default fetching;