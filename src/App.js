import DashBoard from "./components/DashBoard";
// import MyNavbar from "./components/MyNavbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      {/* sohail */}
      {/* <MyNavbar /> */}
       
      <Routes>
      <Route path="/adminLte" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/DashBoard" element={<DashBoard />} />
    </Routes>

        

    </div>
  );
}

export default App;
