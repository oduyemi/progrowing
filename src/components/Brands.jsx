import Slider from "react-slick";
import "animate.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export const Brands = () => {
 var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    gutter: 10,
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
    };

    return(
      <>
      <div className="slidebox mt-[5%]" style={{marginBottom: "-8.8%"}}>
       <h2 class="text-white text-center text-2xl font-semibold animate-pulse topic-md">Learn important tools and master your software skills</h2>
        <Slider {...settings} className="logo-slider flex items-center justify-center">
          <div className="item mx-auto"><Link to=""><img src={require("../assets/images/logo/github.png")} className="brand-img px-6 md:px-12 w-50" alt="Github" /></Link></div>
          <div className="item"><Link to=""><img src={require("../assets/images/logo/atom.png")} className="brand-img px-6 md:px-12 w-50" alt="Atom" /></Link></div>
          <div className="item"><Link to=""><img src={require("../assets/images/logo/codenvy.png")} className="brand-img px-6 md:px-12 w-50" alt="Codenvy" /></Link></div>
          <div className="item"><Link to=""><img src={require("../assets/images/logo/azure.png")} className="brand-img px-6 md:px-12 w-50" alt="Azure" /></Link></div>
          <div className="item"><Link to=""><img src={require("../assets/images/logo/docker.png")} className="brand-img px-6 md:px-12 w-50" alt="Docker" /></Link></div>
          <div className="item"><Link to=""><img src={require("../assets/images/logo/linx.png")} className="brand-img px-6 md:px-12 w-50" alt="Linx" /></Link></div>
        </Slider>
      </div>
      </>
    )
}

