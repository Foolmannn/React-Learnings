import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
  <UserContextProvider>
  <h1>Theme Changer Mini Project </h1>
  <div style={{width:500}}>

  <Login/>
  </div>
  <Profile/>
  </UserContextProvider>
  )
}

export default App
