export enum Access {
    ADMIN,
    USER,
    GUEST,
}

export interface LoginResponse {
    authenticated: boolean,
    error?: string,
}