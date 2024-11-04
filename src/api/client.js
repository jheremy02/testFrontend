import axios from "axios";
const apiBase=import.meta.env.VITE_API_BASE_URL
const client= axios.create({
    baseURL:apiBase
})


// me saca la data especifica del response
client.interceptors.response.use(response=>response.data , error=> {
   // const dispatch = useDispatch();
    if (!error.response) {
        return Promise.reject({message:error.message})
    } else {
        
        return Promise.reject({
            message:error.response.statusText,
            ...error.response,
            
        })
    }

}
)
//setea al cliente para que el token viaje en la cabezera en cada llamada a la peticion
export const setAuthorizationHeader=(token)=>client.defaults.headers.common['Authorization']='Bearer '+token

export const removeAuthorizationHeader=()=>{
    delete client.defaults.headers.common['Authorization']
}

export default client