import "./App.css";
import { Routes, Route, Link , useNavigate ,useParams } from "react-router-dom";
import {useEffect , useState , createContext} from "react"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return <div

   className="App">
<Routes>
      <Route path = "/login" element={<Login/> }  />
      <Route path = "/register" element={<Register/> }  />
</Routes>

   </div>;
}

export default App;
