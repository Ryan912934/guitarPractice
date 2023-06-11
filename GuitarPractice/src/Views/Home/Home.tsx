import { useContext } from "react";
import { UserContext, UserContextType } from "../../App";
import Login from "../Login/Login";
import { useQuery } from "@tanstack/react-query";
import { getUsername } from "../../utils/userManagement";
import jwtDecode from "jwt-decode";


function Home(){

    const userContext = useContext<UserContextType>(UserContext);


    const clickButton = () => {
        userContext.login('ryan', 'Pa55word')
    }

    const clickButton2 = () => {
        userContext.login('RealRyan', 'Pa55word')
    }

    if(userContext.waiting){
        return <p>Logging In</p>
    }
    

    return <div>
        <h1>Home</h1>
        <p>username: {userContext.userJWT && JSON.stringify(jwtDecode(userContext.userJWT))}</p>
        {/* <p>Is LoggedIn: {userContext.isLoggedIn().toString()}</p> */}
        <button className="bg-slate-800 text-white rounded-lg m-2 p-2" onClick={clickButton}>Login Test</button>
        <button className="bg-slate-800 text-white rounded-lg m-2 p-2" onClick={clickButton2}>Login Real</button>
        <div className="bg-slate-400 m-5 pt-4 pb-4 rounded-xl pl-5 pr-5"><Login /></div>
    </div>
}

export default Home;