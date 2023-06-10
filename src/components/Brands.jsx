import Slider from "react-slick";
import $ from "jquery";
import "../CSS/animate.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const Brands = () => {
 var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
 }
    return(
      <>
     
      <div className="slidebox">
      <div className="mt-10">
       <h2 class="mt-10 text-white text-center text-2xl font-semi-bold animate__animated animate__fadeIn animate__delay-1s">Learn important tools and master your software skills</h2>
      </div>
        <Slider {...settings} className="logo-slider flex items-center justify-center">
          <div className="item"><a href=""><img src={require("../assets/images/logo/github.png")} className="brand-img px-6 md:px-12 w-40" alt="Github" /></a></div>
          <div className="item"><a href=""><img src={require("../assets/images/logo/atom.png")} className="brand-img px-6 md:px-12 w-40" alt="Atom" /></a></div>
          <div className="item"><a href=""><img src={require("../assets/images/logo/codenvy.png")} className="brand-img px-6 md:px-12 w-40" alt="Codenvy" /></a></div>
          <div className="item"><a href=""><img src={require("../assets/images/logo/azure.png")} className="brand-img px-6 md:px-12 w-40" alt="Azure" /></a></div>
          <div className="item"><a href=""><img src={require("../assets/images/logo/docker.png")} className="brand-img px-6 md:px-12 w-40" alt="Docker" /></a></div>
          <div className="item"><a href=""><img src={require("../assets/images/logo/linx.png")} className="brand-img px-6 md:px-12 w-40" alt="Linx" /></a></div>
        </Slider>
      </div>
      </>
    )
}

