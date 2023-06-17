import { NavLink } from "react-router-dom";

interface ItemsType {
    to: string,
    name: string
}

const items: ItemsType[] = [
    {
        to: '/',
        name: 'Home'
    },
    {
        to: '/exercises',
        name: 'Exercises'
    },
    {
        to: '/routines',
        name: 'Routines'
    }
]

interface INavBar {
    username: string,
    logout: ()=>void;
}

export function NavBar(props: INavBar) {
    return <nav >
        <div className="flex h-16 items-center space-x-4 bg-gray-800 w-full">

            {items.map(i => <NavLink key={i.to} to={i.to} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{i.name}</NavLink>)}
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