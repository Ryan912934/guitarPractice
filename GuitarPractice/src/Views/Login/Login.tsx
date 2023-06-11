import { useContext, useState } from "react";
import { login } from "../../utils/userManagement";
import { UserContext } from "../../App";

function Login(){

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const userContext = useContext(UserContext);

    return <div className="grid col-span-1">
        <input placeholder="Username" className="w-56 mt-3 mb-3" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        <input placeholder="Password" className="w-56 mb-3" value={pass} onChange={(e)=>{setPass(e.target.value)}} type={"password"} />
        <button onClick={()=>{userContext.login(username, pass)}} className="bg-slate-800 text-white w-40 rounded-md">Submit</button>
    </div>
}

export default Login;