import { useState } from 'react'
import './App.css'
import {Link, Routes} from "react-router-dom";
import { useUser } from "react/my-app/src/components/useUser.tsx"

function App() {
  return (
    <>
      <h1>練習</h1>
        <ul>
           <li><Link to="/set-user">useUser</Link></li>
        </ul>
    </>
  )
}

export default function App() {
    return (
        <Routes>
            <Routes path={"/set-user"} element={<useUser />} />
        </Routes>
    )
}
