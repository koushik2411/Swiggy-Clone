import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Restaurants from "./pages/Restaurants"
import Footer from "./components/Footer"
import Grocery from "./pages/Grocery"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/grocery" element={<Grocery/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
