import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <nav id="header" className="text-white">
            <div className="w-full mx-auto container flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor no-underline hover-no-underline font-bold text-2xl lg:text-4xl">
                        <img src={logo} alt="logo" className="w-40 h-40 object-cover" />
                    </Link>
                    
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/home" className="text-l">Home</Link>
                    <Link to="#courses" className="text-l">Courses</Link>
                    <Link to="#find" className="text-l">Find a Mentor</Link>
                
                </div>
                <div className="flex items-center justify-between space-x-6 pr-4">
                    <Link to="#mentor" className="text-l">Be a Mentor</Link>
                    <Link to="/login" className="text-l">Login</Link>
                    <Link to="/signup" className="text-l">Register</Link>
                </div>
            </div>
           
        </nav>
        
    )
}



export default Header;