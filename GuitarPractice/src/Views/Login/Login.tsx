import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Login(){

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const userContext = useContext(UserContext);

    useEffect(()=>{
        if(userContext.isLoggedIn()){
            navigate('/')
        }
    }, [userContext.userJWT])



    return <div className="grid col-span-1 bg-slate-400 m-5 pt-4 pb-4 rounded-xl pl-5 pr-5">
        <input placeholder="Username" className="w-56 mt-3 mb-3" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        <input placeholder="Password" className="w-56 mb-3" value={pass} onChange={(e)=>{setPass(e.target.value)}} type={"password"} />
        <button onClick={()=>{userContext.login(username, pass)}} className="bg-slate-800 text-white w-40 rounded-md">Submit</button>
    </div>
}

export default Login;
