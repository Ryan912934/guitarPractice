import { useContext } from "react";
import { UserContext, UserContextType } from "../../App";
import Login from "../Login/Login";
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

    </div>
}

export default Home;