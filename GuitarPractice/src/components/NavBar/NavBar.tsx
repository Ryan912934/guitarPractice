import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../data/routes";
import { UserContext } from "../../utils/userManagement";

interface INavBar {
  userId?: number;
  logout: () => void;
  loggedIn: boolean;
}

export function NavBar(props: INavBar) {
  const userContext = useContext(UserContext);

  return (
    <nav>
      <div className="flex h-16 items-center space-x-4 bg-gray-800 w-full">
        {routes.map((i) => {
          if (!i.navBar || (i.loggedIn && !props.loggedIn)) {
            return <></>;
          }
          return (
            <NavLink
              key={i.to}
              to={i.to}
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              {i.name}
            </NavLink>
          );
        })}
        <div className="flex w-full justify-end pr-4">
          {props.userId && (
            <div>
              <p className="text-white">{props.userId}</p>
              <button
                className="text-white bg-gray-400 rounded-md p-1"
                onClick={props.logout}
              >
                Logout
              </button>
            </div>
          )}

          {!props.userId && (
            <NavLink to={"login"} key={"login"}>
              <button className="text-white bg-gray-400 rounded-md p-1">
                Sign In
              </button>{" "}
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
