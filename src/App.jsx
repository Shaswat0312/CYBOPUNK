import React from 'react'
import Header from './Components/Header'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from "./Pages/WelcomePage";
import Quiz from './Pages/Quiz'
import Result from './Pages/Result';
import WaitPage from "./Pages/WaitPage";

const App = () => {
   const [username, setUsername] = useState("") 
  return (
    <>
    <Header name={username} />
    <Routes>
     <Route path="/" element={<Welcome setUsername={setUsername} />} />
       <Route path="/wait" element={<WaitPage />} />
        <Route path="/quiz" element={<Quiz name={username} />} />
        <Route path="/result" element={<Result name={username} />} />
        </Routes>
    </>

  )
}

export default App

