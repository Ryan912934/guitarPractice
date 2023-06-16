import axios from 'axios';
import jwt_decode from "jwt-decode";
import { apiUrl } from './apiUrl';

export async function login(username:string, password:string, setUserJWT:(jwt:string)=>void){

    const res = await axios
      .post(`${apiUrl()}/auth/local`, {
        identifier: username,
        password: password,
      });

    const jwt = res.data.jwt;

    setUserJWT(jwt);

    localStorage.setItem('guitarJWT', jwt);

}

export function isLoggedIn(userJWT:string|undefined, setJwt:(s:string|undefined)=>void):boolean{
    let jwt;

    jwt = userJWT ?? jwt;

    if(!jwt){return false;};

    const token = jwt_decode<token>(jwt);
    const exp = new Date(0); // The 0 there is the key, which sets the date to the epoch
    exp.setUTCSeconds(token.exp);

    const now = new Date();

    if (exp < now){
        setJwt(undefined);
        return false;
    }

    return true;
    
}

interface token {
    id: number,
    iat: number,
    exp: number
}
export function userName(jwt:string|undefined):string|undefined{
    if(!jwt){return undefined};

    // const token = jwt_decode<token>(jwt);

    // return token.user.username;

    return '?'

}

interface IUsername{

}

export async function getUsername(jwt: string, id: number): Promise<IUsername> {
    const data = await axios.get(`${apiUrl()}/username/${id}`,
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })

    return data.data;
}