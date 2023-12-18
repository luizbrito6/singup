import { Header, Footer } from "./components"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Header logo='SingUp'/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
