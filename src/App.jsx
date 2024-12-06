import "./App.css";
import Calculator from "./components/Calculator";
import {Routes, Route} from 'react-router-dom'

import UserList from "./components/UserList";

function App() {
  

  return(<>
      <Routes>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/users' element={<UserList/>}/>
      </Routes>
        </>) ;
}

export default App;
