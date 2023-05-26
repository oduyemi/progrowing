import { Link } from "react-router-dom";
import "../CSS/animate.min.css";
import Button from "./elements/Button";



export const Banner = () => {
    return(
        <>
            <div className="banner  mt-10 w-full md-1/3 px-7 mx-auto relative flex items-stretch justify-between">
                <div className="banner-description w-full md-1/3 p-3">
                <h1 className="pl-4 mt-0 font-light text-5xl">Find a <span><h1 className="emphasis" id="emp_">mentor</h1></span> to help you</h1>
                    <p id="introSubTitle" className="mt-1 pl-6 text-gray-400 py-1 text-xxl animate__animated animate__fadeIn animated__delay__4">Start now. Become a better programmer</p>
                    <div className="btn-container pl-5">
                        <p className="pl-0 mt-5 text-2xl font-light">Find world-class mentors <br/>for live mentorship and freelance projects.</p>
                        <Link to="/find">
                            <Button>Find a Mentor</Button>
                        </Link>
                    </div>
                </div>
                <div className="banner-image video-wrapper embed-responsive-item w-full flex mx-auto p-3 mr-10">
                    <video autoplay muted playsInline>
                        <source src={require("../assets/images/motion/wall.mp4")} />
                        Your browser does not support the video tag.
                    </video>
                <div className="video-wrapper flex items-center justify-center" id="heroImage">
                    
                    <div className="">
                        <div className=""><img src={require("../assets/images/photos/hero_img.jpg")} alt="hero banner"
                        className="h-40 max-w-sm flex items-center justify-right shadow dark:shadow-black/30 py-2" /></div>
                    </div>
                    </div>
                    
                </div>
            </div>
            
        
    </>
    )
}

