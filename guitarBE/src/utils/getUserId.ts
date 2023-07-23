import jwtDecode from "jwt-decode";



export function getUserId(ctx){
    const jwt = ctx.request.header.authorization.split(' ')[1];

    return (jwtDecode(jwt) as any).id;
}