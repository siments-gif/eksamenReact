import axios from "axios";

export const apiErrorHandler = (error: unknown) => {
    if(axios.isAxiosError(error) && error.response) {
        const message = error.response.data?.message || "Unknown error from server";
        throw new Error(message);
    }
    throw new Error("Network error or unknown error detected");
} 