export const isAuthenticated = () => localStorage.getItem('token') !== null;
export const getToken = () => localStorage.getItem('token');
export const login = (token:string) => {
    localStorage.setItem('token', token);
};
export const logout = () => {
    localStorage.removeItem('token');
};