import { Link } from "react-router-dom";
import "animate.css";
import Button from "./elements/Button";



export const Banner = () => {
    return(
        <>
            <div className="banner mt-5 w-full md-1/3 px-7 mx-auto relative flex items-stretch justify-between">
                <div className="banner-description w-full md-1/3 p-3 upped">
                <h1 className="pl-4 mt-5 font-light text-5xl topic lg:pl-8">Find a <span><h1 className="emphasis topic" id="emp_">mentor</h1></span> to help you</h1>
                    <p id="introSubTitle" className="mt-1 pl-6 lg:pl-8 text-gray-400 py-1 text-l  animate__animated animate__fadeIn animated__delay__4 animate-pulse">Start now. Become a better programmer</p>
                    <div className="btn-container pl-5">
                        <p className="pl-0 lg:pl-4 mt-5 text-2xl font-light topic-md">Find world-class mentors <br/>for live mentorship and freelance projects.</p>
                        <Link to="https://chat.whatsapp.com/CwXJQItHh3d6yviZlTa8Iz" className="lg:pl-4">
                                <Button
                                    className="mt-6 rounded bg-yel px-4 py-2 text-l hover:bg-blu hover:text-gray-900 border border-yel hover:border-blu"
                                >
                                    Join WhatsApp Community
                                </Button>
                        </Link>
                    </div>
                </div>
                <div className="banner-image video-wrapper embed-responsive-item w-full flex mx-auto mt-[-2%] p-3 mr-14">
                    <video autoplay muted playsInline autoPlay="true" loop="true" className="video">
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

