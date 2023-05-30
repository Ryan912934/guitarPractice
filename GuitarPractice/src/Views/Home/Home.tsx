import { useContext } from "react";
import { UserContext, UserContextType } from "../../App";


function Home(){

    const userContext = useContext<UserContextType>(UserContext);
    
    const clickButton = () => {
        userContext.login('ryan', 'Pa55word')
    }

    return <div>
        <h1>Home</h1>
        <p>UserJWT: {userContext.userJWT}</p>
        <p>username: {userContext.username()}</p>
        {/* <p>Is LoggedIn: {userContext.isLoggedIn().toString()}</p> */}
        <button onClick={clickButton}>Login</button>
    </div>
}

export default Home;