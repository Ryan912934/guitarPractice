import { NavLink } from "react-router-dom";

interface ItemsType {
    to: string,
    name: string
}

const items:ItemsType[] = [
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

export function NavBar(){
    return <nav >
        <div className="flex h-16 items-center space-x-4 bg-gray-800">

            {items.map(i => <NavLink key={i.to} to={i.to} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{i.name}</NavLink>)}
        </div>

    </nav>
}