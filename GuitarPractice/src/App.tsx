import { Component, createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { isLoggedIn, login, userName } from './utils/userManagement'
import AllExercises from './Views/AllExercises/AllExercises'
import Home from './Views/Home/Home'
import Routines from './Views/Routines/Routines'
import { QueryClient, QueryClientProvider } from "react-query";
import { PracticeExercise } from './Views/PracticeExercise/PracticeExercise'
import { NavBar } from './components/NavBar/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { EditRoutine } from './Views/Routines/EditRoutine'
import { PracticeRoutine } from './Views/Routines/PracticeRoutine'
import { CreateEditExercise } from './Views/AllExercises/CreateEditExercise'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools'

export const UserContext = createContext<UserContextType>({ userJWT: 'a', setUserJWT: (s) => { }, login: (a: string, b: string) => { }, isLoggedIn: () => { return false }, username: () => { return undefined } });

export interface UserContextType {
  userJWT: string | undefined,
  setUserJWT: (s: string) => void,
  login: (a: string, b: string) => void,
  isLoggedIn: () => boolean,
  username: () => string | undefined,
}



function App() {

  const localJwt = localStorage.getItem('guitarJWT');  
  const [userJWT, setUserJWT] = useState<string|undefined>(localJwt??undefined);

  const userObj = {
    userJWT: userJWT,
    setUserJWT: setUserJWT,
    login: (user: string, pass: string) => { login(user, pass, setUserJWT) },
    isLoggedIn: () => { return isLoggedIn(userJWT, setUserJWT) },
    username: () => {
      if (!userJWT) { return 'no jwt' }
      return userName(userJWT);
    }
  }

  const queryClient = new QueryClient();

  return (
    <UserContext.Provider value={userObj}>
      <QueryClientProvider client={queryClient}>
      <div className='bg-gray-600 h-screen absolute w-screen'>
        <BrowserRouter>
        <NavBar />
        <ToastContainer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercises' element={<AllExercises />} />
            <Route path='/routines' element={<Routines />} />
            <Route path='/exercise/:id' element={<PracticeExercise />} />
            <Route path='/routine/:id/edit' element={<EditRoutine />} />
            <Route path='/routine/:id' element={<PracticeRoutine />} />
            <Route path='/exercise/new' element={<CreateEditExercise />} />
            <Route path='/exercise/edit/:id' element={<CreateEditExercise />} />
          </Routes>
  
        </BrowserRouter>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserContext.Provider>
  )
}

export default App
