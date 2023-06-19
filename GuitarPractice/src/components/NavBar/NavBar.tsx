import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../App";

interface ItemsType {
    to: string,
    name: string,
    loggedIn: boolean,
}

const items: ItemsType[] = [
    {
        to: '/',
        name: 'Home',
        loggedIn: false,
    },
    {
        to: '/exercises',
        name: 'Exercises',
        loggedIn: true,
    },
    {
        to: '/routines',
        name: 'Routines',
        loggedIn: true,
    },
    {
        to: '/songs',
        name: 'Songs',
        loggedIn: true,
    }
]

interface INavBar {
    username: string,
    logout: () => void;
    loggedIn: boolean,
}

export function NavBar(props: INavBar) {

    const userContext = useContext(UserContext);

    return <nav >
        <div className="flex h-16 items-center space-x-4 bg-gray-800 w-full">

            {items.map(i => {
                if(i.loggedIn && !props.loggedIn){
                    return <></>
                }
                return <NavLink key={i.to} to={i.to} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    {i.name}
                </NavLink>
            }
            )
            }
            <div className="flex w-full justify-end pr-4">

                {props.username.length > 0 && <div>
                    <p className="text-white">{props.username}</p>
                    <button className="text-white bg-gray-400 rounded-md p-1" onClick={props.logout} >Logout</button>
                </div>}

                {!props.username && <NavLink to={'login'} key={'login'}><button className="text-white bg-gray-400 rounded-md p-1">Sign In</button> </NavLink>}

            </div>
        </div>

    </nav>
}