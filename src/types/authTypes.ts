export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    _uuid: string,
    role: "admin" | "user";
}

export interface AuthState {
    isAuth: boolean;
    userRole: "admin" | "user" | null;
    userID: string | null;
    error: string | null;
    isLoading: boolean;
}