import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage"
// import {Routes, Route} from "react-router-dom";
import SignInPage from "./Pages/SignInPage"
import SignUpPage from "./Pages/SignUpPage"
import CartItem from "./Components/CartItem"
import AllDesserts from "./Components/AllDesserts"
import SingleDessert from "./Components/SingleDessert"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signinpage" element={<SignInPage/>}/>
      <Route path="/signuppage" element={<SignUpPage/>}/>
      <Route path="/cartitem" element={<CartItem/>}/>
      <Route path="/alldesserts" element={<AllDesserts/>}/>
      <Route path="/singledessert" element={<SingleDessert/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
