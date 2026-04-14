import Login from "./components/login"  
import Register from "./components/register"  
import { Link, Outlet } from 'react-router-dom';



function App() {

  return (
    <>
    <div className="App">
      <nav>
        <Link to="/">Login</Link> | <Link to="/register">Register</Link>
      </nav>
      <Outlet />
    </div>
    </>

  )
}

export default App
