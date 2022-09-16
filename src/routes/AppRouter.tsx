/* node-modules */
import { Route, Routes } from "react-router-dom";

/* components */
import Home from "../pages/Home";
import Login from "../components/popups/AuthPopups/LoginPopup";
import Registration from "../components/popups/AuthPopups/RegistrationPopup";

const AppRouter = () => {
    return(
        <Routes>
        <Route path='/' element={<Home />}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Route>
      </Routes>
    );
}

export default AppRouter;