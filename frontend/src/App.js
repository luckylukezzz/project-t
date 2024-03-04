import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import { useCookies } from 'react-cookie'
const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const authToken = cookies.AuthToken

    return (
        <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              {authToken && <Route path="/dashboard" element={<Dashboard/>}/> }
              {authToken && <Route path="/onboarding" element={<Onboarding/>}/> }
            </Routes>
        </Router>
    )
}

export default App
