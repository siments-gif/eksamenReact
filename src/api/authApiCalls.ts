import fetching from "./axiosSetup";
import { LoginCredentials, LoginResponse } from "../types/authTypes";
import { apiErrorHandler } from "../utils/handleApiError";

export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const response = await fetching.post<LoginResponse>("/login", credentials);
      return response.data;  
    } catch (error) {
      throw new Error(apiErrorHandler(error));  
    }
}