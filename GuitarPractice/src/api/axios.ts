import axios from "axios"


export const axiosInit = () => {
    axios.interceptors.request.use((config) => {

        const jwt = localStorage.getItem('guitarJWT');

        if(jwt){
            config.headers['Authorization'] = `Bearer ${jwt}`
        }
        
        return {
            ...config,
            baseURL: import.meta.env.VITE_API_URL
        }
    })
}