import Slider from "react-slick";
import Button from "./elements/Button";
import "../CSS/CourseStyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


export const CoursesPage = () => {
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
            {
                breakpoint: 1024, 
                settings: {
                  slidesToShow: 2,
                },
            },
        ],
     }

    return(
        <>
            <div className="mx-auto">
                <h1 className="text-5xl text-center text-yel font-semibold">Learn From The Experts</h1>
                <p className="mx-auto text-xl font-light text-center mt-6 w-1/2">
                    Unlock your potential with Pro<span className="text-yel">
                    <h1 className="inline">Gro</h1></span>wing Mentor Masterclass. Learn LIVE
                    from experts, collaborate with peers and create real-world impact.
                </p>

                <div className="mx-auto text-center">
                    <Link to="/learn"><Button>Explore Courses</Button></Link>
                </div>
            </div>

            <div className="slidebox" style={{marginTop: "5.7%", marginBottom: "0"}}>
                <Slider {...settings} className="logo-slider flex items-center justify-center">
                <div className="item"><Link to=""><img src={require("../assets/images/courses/course1.png")} className="course-img px-6 md:px-12 w-full" alt="Github" /></Link></div>
                <div className="item"><Link to=""><img src={require("../assets/images/courses/course2.png")} className="course-img px-6 md:px-12 w-full" alt="Atom" /></Link></div>
                <div className="item"><Link to=""><img src={require("../assets/images/courses/course3.png")} className="course-img px-6 md:px-12 w-full" alt="Codenvy" /></Link></div>
                <div className="item"><Link to=""><img src={require("../assets/images/courses/course4.png")} className="course-img px-6 md:px-12 w-full" alt="Azure" /></Link></div>
                <div className="item"><Link to=""><img src={require("../assets/images/courses/course5.png")} className="course-img px-6 md:px-12 w-full" alt="Docker" /></Link></div>
                </Slider>
            </div>
        </>
    )
}