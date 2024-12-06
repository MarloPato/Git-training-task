import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import MethodsForCalc from "./components/MethodsForCalc";
import {Routes, Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0);

  return(<>
  <Routes>
    <Route path='/calculator' element={<Calculator/>}/>
  </Routes>
  </>) ;
}

export default App;
