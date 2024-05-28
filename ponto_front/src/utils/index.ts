import api from "./axios.config";
import { isAuthenticated, login, getToken, logout } from "./auth";

export{
    api,
    isAuthenticated,
    login,
    getToken,
    logout
}