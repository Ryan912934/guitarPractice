import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext, isLoggedIn, login } from "./utils/userManagement";
import Home from "./Views/Pages/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { Id, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./Views/Pages/Login/Login";

import "./css/toggle.css";
import "reactjs-popup/dist/index.css";
import { axiosInit } from "./api/axios";
import jwtDecode from "jwt-decode";
import { routes } from "./data/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const localJwt = localStorage.getItem("guitarJWT");
  const [userJWT, setUserJWT] = useState<string | undefined>(
    localJwt ?? undefined
  );
  const [waiting, setWaiting] = useState(false);
  const [userId, setUserId] = useState<number>();

  const toastId = useRef<Id | null>(null);
  const notify = () =>
    (toastId.current = toast("Logging In", {
      type: toast.TYPE.INFO,
      autoClose: false,
    }));

  const updateSuccess = () =>
    toast.update(toastId.current!, {
      render: "Logged In",
      type: toast.TYPE.SUCCESS,
      autoClose: 5000,
    });
  const updateFailure = () =>
    toast.update(toastId.current!, {
      render: "Error Logging In",
      type: toast.TYPE.ERROR,
      autoClose: 5000,
    });

  const setUserIdFromJwt = () => {
    if (!userJWT) return;
    const jwt: any = jwtDecode(userJWT);
    const id = jwt.id;
    setUserId(id);
  };

  const userObj = {
    userJWT: userJWT,
    setUserJWT: setUserJWT,
    login: (user: string, pass: string) => {
      setWaiting(true);
      notify();
      login(user, pass, setUserJWT)
        .then(() => {
          updateSuccess();
          setUserIdFromJwt();
        })
        .catch((e) => {
          updateFailure();
        })
        .finally(() => {
          setWaiting(false);
        });
    },
    isLoggedIn: () => {
      if (isLoggedIn(userJWT, setUserJWT)) {
        return true;
      }
      setUserId(undefined);
      return false;
    },
    userId,
    waiting,
  };

  if (isLoggedIn(userJWT, setUserJWT) && !userId) {
    setUserIdFromJwt();
  }

  const queryClient = new QueryClient();

  axiosInit();

  return (
    <UserContext.Provider value={userObj}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <DndProvider backend={HTML5Backend}>
            <div className=" h-screen absolute w-screen">
              <BrowserRouter>
                <NavBar
                  userId={userId}
                  logout={() => {
                    setUserJWT("");
                    setUserId(undefined);
                    localStorage.removeItem("guitarJWT");
                  }}
                  loggedIn={isLoggedIn(userJWT, setUserJWT)}
                />
                <ToastContainer />
                <Routes>
                  {routes.map((r) => (
                    <Route path={r.to} element={r.element} />
                  ))}
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </BrowserRouter>
            </div>

            <ReactQueryDevtools initialIsOpen={false} />
          </DndProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}

export default App;
