import { useContext } from "react";
import { UserContext, UserContextType } from "../../App";


function Home(){

    const userContext = useContext<UserContextType>(UserContext);

    if(userContext.waiting){
        return <p>Logging In</p>
    }
    

    return <div>
        <h1>Home</h1>
        <p>Logged In {userContext.isLoggedIn()}</p>
        <p>Who am i? {userContext.username}</p>

    </div>
}

export default Home;