import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'

const App = () => {


    return (
        <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/onboarding" element={<Onboarding/>}/> 
            </Routes>
        </Router>
    )
}

export default App
