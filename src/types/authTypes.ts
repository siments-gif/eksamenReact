export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    role: "admin" | "user";
    userID: string;
}

export interface AuthState {
    isAuth: boolean;
    userRole: "admin" | "user" | null;
    userID: string | null;
    error: string | null;
}