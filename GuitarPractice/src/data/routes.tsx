import { ViewAllExercises } from "../Views/Pages/Exercises/ViewAllExercises";
import Home from "../Views/Pages/Home/Home";
import { ViewAllRoutines } from "../Views/Pages/Routines/ViewAllRoutines";
import { ViewOneRoutine } from "../Views/Pages/Routines/ViewOneRoutine";
import { Songs } from "../Views/Pages/Songs/Songs";

interface RouteType {
  to: string;
  name: string;
  loggedIn: boolean;
  navBar: boolean;
  element: JSX.Element;
}

export const routes: RouteType[] = [
  {
    to: "/",
    name: "Home",
    loggedIn: false,
    navBar: true,
    element: <Home />,
  },
  {
    to: "/songs",
    name: "Songs",
    loggedIn: true,
    navBar: true,
    element: <Songs />,
  },
  {
    to: "exercises",
    name: "Exercises",
    loggedIn: true,
    navBar: true,
    element: <ViewAllExercises />,
  },
  {
    to: "routines",
    name: "Routines",
    loggedIn: true,
    navBar: true,
    element: <ViewAllRoutines />,
  },
  {
    to: "routines/:id",
    name: "Routines",
    loggedIn: true,
    navBar: false,
    element: <ViewOneRoutine />,
  },
];
