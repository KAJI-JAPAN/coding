import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import { UseUser } from './components/useUser'
import { searchApi } from './components/searchApi.js'

export default function App() {
    return (
        <>
            <h1>練習</h1>
            <ul>
                <li><Link to="/set-user">useUser</Link></li>
                <li><Link to="/searh-api">searchApi</Link></li>
            </ul>
            <Routes>
                <Route path="/set-user" element={<UseUser />} />
                <Route path="/searh-api" element={<searchApi />} />
            </Routes>
        </>
    )
}