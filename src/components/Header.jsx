import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <nav id="header" className="text-white bg-transparent">
            <div className="w-full mx-auto container flex flex-wrap items-center justify-between mt-0 py-1">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor no-underline hover-no-underline font-bold text-2xl lg:text-4xl">
                        <img src={logo} alt="logo" className="w-40 h-40 object-cover" />
                    </Link>
                    
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-l">Home</Link>
                    <Link to="/courses" className="text-l">Courses</Link>
                    <Link to="/find" className="text-l">Find a Mentor</Link>
                
                </div>
                <div className="flex items-center justify-between space-x-6 pr-4">
                    <Link to="/mentor" className="text-l">Be a Mentor</Link>
                    <Link to="/login" className="text-l">Login</Link>
                    <Link to="/signup" className="text-l">Register</Link>

                    <div class="relative m-6 inline-flex w-fit pr-4">
                    <div
                        class="absolute bottom-auto left-0 right-auto top-0 z-10 inline-block -translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-pink-700 p-2.5 text-xs"></div>
                    <div
                        class="flex items-center justify-center rounded bg-ppl px- text-center text-white shadow-lg dark:text-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-8 w-8">
                        <path
                            fill-rule="evenodd"
                            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                            clip-rule="evenodd" />
                        </svg>
                    </div>
                    </div>
                </div>
            </div>
            
           
        </nav>
        
    )
}



export default Header;