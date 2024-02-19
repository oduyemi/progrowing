import React, { useState} from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import Button from "./elements/Button";


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

    const renderMobileMenu = () => {
      return (
        isMobileMenuOpen && (
          <div className="mobile-menu-popup">
            <div className="mobile-menu-content sm:block md:hidden">           
                <button className="close-button" onClick={closeMobileMenu}>
                X
                </button>
                <Link to="/" className="mobile-menu-link text-l" onClick={closeMobileMenu}>Home</Link>
                <Link to="/forum" className="mobile-menu-link text-l" onClick={closeMobileMenu}>Forum</Link>
                <Link to="/courses" className="mobile-menu-link text-l" onClick={closeMobileMenu}>Learning Center</Link>
                <Link to="/taskify" className="mobile-menu-link text-l" onClick={closeMobileMenu}>Taskify</Link>
                <Link to="/mentor-form" className="mobile-menu-link"onClick={closeMobileMenu}><Button variant="outline">Be A Mentor</Button></Link>
                <Link to="/mentee" className="mobile-menu-link"onClick={closeMobileMenu}><Button>Be A Mentee</Button></Link>
            </div>
          </div>
        )
      );
    };
    return(
        <header className="bg-transparent main_header">
            <nav id="header" className="text-white bg-transparent">
                <div className="w-full mx-auto container justify-between mt-0 py-1 md:flex items-center nav-icon justify-between" onClick={toggleMobileMenu}>
                    <div className="md:hidden flex items-center">
                        <svg
                        className="w-12 h-12"
                        fill="currentColor"
                        viewdiv="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M12 4H4a1 1 0 100 2h8a1 1 0 100-2zM4 10a1 1 0 110-2h8a1 1 0 110 2H4zm8 3a1 1 0 100 2H4a1 1 0 100-2h8z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </div>
                    <div className="logo">
                        <Link to="/" className="toggleColor no-underline hover-no-underline font-bold text-2xl lg:text-4xl">
                            <img src={logo} alt="logo" className="w-45 h-50 mt-[-15%]" />
                        </Link>
                    </div>
                    <ul
                        className={`nav-menu-wrapper mx-auto flex-col md:flex-row flex md:space-x-8 mt-[-3%]  text-sm`}
                        id="mobile-menu"
                    >
                        <li><Link to="/" className="text-l">Home</Link></li>
                        <li><Link to="/forum" className="text-l">Forum</Link></li>
                        <li><Link to="/courses" className="text-l">Learning Center</Link></li>
                        <li><Link to="/taskify" className="text-l">Taskify</Link></li>
                    </ul>
                    <div className="sidebtns flex items-center justify-between space-x-6 pr-8 mt-[-5%]">
                        <Link to="/mentor-form" className="text-l"><Button variant="outline">Be A Mentor</Button></Link>
                        <Link to="/mentee" className="text-l"><Button>Be A Mentee</Button></Link>      
                    </div>    
                </div>
            </nav>
            {renderMobileMenu()}
        </header>   
    )
}



export default Header;