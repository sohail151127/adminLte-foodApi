import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";

import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import { Protected } from "./components/Protected";
import BlankPage from "./components/blankPage/BlankPage";
import Form from "./components/form/Form";


function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/HomePage" element={<Protected HomeComp={HomePage} />} />

      <Route path="/BlankPage" element={<Protected HomeComp={BlankPage} />} />
      <Route path="/Form" element={<Protected HomeComp={Form} />} />

    </Routes>

        

    </div>
  );
}

export default App;
