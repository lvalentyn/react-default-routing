import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'

import './App.css'
import MainLayout from './layouts/MainLayout'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path={'about'} element={<About />} />
                        <Route path={'contacts'} element={<Contacts />} />
                        <Route path={'*'} element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
