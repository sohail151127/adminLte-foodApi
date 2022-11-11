import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";

import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import { Protected } from "./components/Protected";


function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/adminLte" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/HomePage" element={<Protected HomeComp={HomePage} />} />
    </Routes>

        

    </div>
  );
}

export default App;
