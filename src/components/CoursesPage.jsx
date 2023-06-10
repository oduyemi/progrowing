import Slider from "react-slick";
import Button from "./elements/Button";
import "../CSS/CourseStyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const CoursesPage = () => {
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
     }

    return(
        <>
            <div className="mx-auto mt-4">
                <h1 className="text-5xl text-center font-semibold">Learn From The Experts</h1>
                <p className="mx-auto text-xl font-light text-center mt-6 w-1/2">
                    Unlock your potential with Pro<span className="text-yel">
                    <h1 className="inline">Gro</h1></span>wing Mentor Masterclass. Learn LIVE
                    from experts, collaborate with peers and create real-world impact.
                </p>
                <div className="mx-auto text-center">
                    <Button>Explore All Courses</Button>
                </div>
            </div>

            <div className="slidebox">
                    <Slider {...settings} className="logo-slider flex items-center justify-center">
                    <div className="item"><a href=""><img src={require("../assets/images/courses/course1.png")} className="course-img px-6 md:px-12 w-full" alt="Github" /></a></div>
                    <div className="item"><a href=""><img src={require("../assets/images/courses/course2.png")} className="course-img px-6 md:px-12 w-full" alt="Atom" /></a></div>
                    <div className="item"><a href=""><img src={require("../assets/images/courses/course3.png")} className="course-img px-6 md:px-12 w-full" alt="Codenvy" /></a></div>
                    <div className="item"><a href=""><img src={require("../assets/images/courses/course4.png")} className="course-img px-6 md:px-12 w-full" alt="Azure" /></a></div>
                    <div className="item"><a href=""><img src={require("../assets/images/courses/course5.png")} className="course-img px-6 md:px-12 w-full" alt="Docker" /></a></div>
                    </Slider>
                </div>
        </>
    )
}