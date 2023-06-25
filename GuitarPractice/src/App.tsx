import { Component, createContext, useContext, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { getUsername, isLoggedIn, login } from './utils/userManagement'
import AllExercises from './Views/AllExercises/AllExercises'
import Home from './Views/Home/Home'
import Routines from './Views/Routines/Routines'
import { NavBar } from './components/NavBar/NavBar'
import { Id, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { EditRoutine } from './Views/Routines/EditRoutine'
import { PracticeRoutine } from './Views/Routines/PracticeRoutine'
import { CreateEditExercise } from './Views/AllExercises/CreateEditExercise'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Footer } from './components/Footer/Footer'
import Login from './Views/Login/Login'
import AllSongs from './Views/AllSongs/AllSongs'

import './css/toggle.css'
import 'reactjs-popup/dist/index.css';
import { axiosInit } from './api/axios'

export const UserContext = createContext<UserContextType>({ userJWT: 'a', setUserJWT: (s) => { }, login: (a: string, b: string) => { }, isLoggedIn: () => { return false }, username: '', waiting: false });

export interface UserContextType {
  userJWT: string | undefined,
  setUserJWT: (s: string) => void,
  login: (a: string, b: string) => void,
  isLoggedIn: () => boolean,
  username: string,
  waiting: boolean
}



function App() {

  const localJwt = localStorage.getItem('guitarJWT');
  const [userJWT, setUserJWT] = useState<string | undefined>(localJwt ?? undefined);
  const [waiting, setWaiting] = useState(false);
  const [username, setUsername] = useState('');

  const toastId = useRef<Id | null>(null);
  const notify = () => toastId.current = toast("Logging In", { type: toast.TYPE.INFO, autoClose: false });

  const updateSuccess = () => toast.update(toastId.current!, { render: "Logged In", type: toast.TYPE.SUCCESS, autoClose: 5000 });
  const updateFailure = () => toast.update(toastId.current!, { render: "Error Logging In", type: toast.TYPE.ERROR, autoClose: 5000 });

  const userObj = {
    userJWT: userJWT,
    setUserJWT: setUserJWT,
    login: (user: string, pass: string) => {
      setWaiting(true);
      notify();
      login(user, pass, setUserJWT).then(() => {
        updateSuccess()
        getUsername(userJWT!).then(d => {
          setUsername(d.username);

        })
      }).catch((e) => {
        updateFailure()
      })
        .finally(() => {
          setWaiting(false);
        })
    },
    isLoggedIn: () => {
      if (isLoggedIn(userJWT, setUserJWT)) {
        return true
      }
      setUsername('');
      return false;
    },
    username,
    waiting
  }

  if(isLoggedIn(userJWT, setUserJWT) && username.length === 0){
    getUsername(userJWT!).then(d => {
      setUsername(d.username);
    })
  }

  const queryClient = new QueryClient();

  axiosInit();

  return (
    <UserContext.Provider value={userObj}>
      <QueryClientProvider client={queryClient}>
        <div className=' h-screen absolute w-screen'>
          <BrowserRouter>
            <NavBar username={userObj.username} logout={()=>{setUserJWT(''); setUsername(''); localStorage.removeItem('guitarJWT')}} loggedIn={isLoggedIn(userJWT, setUserJWT)}/>
            <ToastContainer />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path ='/login' element={<Login />} />
              <Route path='/exercises' element={<AllExercises />} />
              <Route path='/routines' element={<Routines />} />
              <Route path='/routine/:id/edit' element={<EditRoutine />} />
              <Route path='/routine/:id' element={<PracticeRoutine />} />
              <Route path='/exercise/new' element={<CreateEditExercise />} />
              <Route path='/exercise/edit/:id' element={<CreateEditExercise />} />
              <Route path='/songs' element={<AllSongs />} />
            </Routes>

          </BrowserRouter>
        </div>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserContext.Provider>
  )
}

export default App
