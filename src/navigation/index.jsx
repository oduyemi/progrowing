import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Find from "../pages/Find";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Mentor from "../pages/Mentor";
import Register from "../pages/Register";
import PaymentSuccess from "../pages/PaymentSuccess";


const Navigation = () => {
    return(
        <>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/find" element={<Find />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/mentor" element={<Mentor />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/payment-success" element={<PaymentSuccess />} />
                    </Routes>
            </BrowserRouter>
        </>
    )
}


export default Navigation;