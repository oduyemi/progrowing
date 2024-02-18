import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Find from "../pages/Mentee";
import Mentee from "../pages/Mentee";
import Logout from "../pages/Logout";
import Mentor from "../pages/Mentor";
import MentorRegister from "../pages/MentorRegister";
import Forum from "../pages/Forum";
import Learning from "../pages/Learning";
import Taskify from "../pages/Taskify";



const Navigation = () => {
    return(
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/taskify" element={<Taskify />} />
                    <Route path="/learn" element={<Learning />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/find" element={<Find />} />
                    <Route path="/mentee" element={<Mentee />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/mentor" element={<Mentor />} />
                    <Route path="/mentor-form" element={<MentorRegister />} />
                </Routes>
           
        </>
    )
}


export default Navigation;