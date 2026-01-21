import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import { UseUser } from './components/useUser'

export default function App() {
    return (
        <>
            <h1>練習</h1>
            <ul>
                <li><Link to="/set-user">useUser</Link></li>
            </ul>
            <Routes>
                <Route path="/set-user" element={<UseUser />} />
            </Routes>
        </>
    )
}