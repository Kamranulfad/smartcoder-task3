import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css"; 

const Home = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    cssEase: "linear",
    arrows: false, 
    dots: false, 
    pauseOnHover: true,
  };

  const images = [
    "https://wt-prod-euwest1-genie-assets.s3.eu-west-1.amazonaws.com/wetransfer/2506/static-teams-chain/1_yJMghf/bg3.webp",
    "https://backgrounds.wetransfer.net/creator/wepresent-25/2505-p7/wp1_fs/1_jMFLHJ/img.1e7076cfbb65c9760f75.jpg",
    "https://backgrounds.wetransfer.net/creator/wepresent-25/2502-p12/wp1_fs/1_YNWKyY/img.a9f4c016695982b9b4df.jpg",
    "https://wt-prod-euwest1-genie-assets.s3.eu-west-1.amazonaws.com/wetransfer/2506/static-teams-black/1_m3ctBX/bg4.webp",
  ];

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="slider-image-container" key={index}>
            <img src={img} alt={`slide-${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
      <div className="card">
        <div className="video-container">
            <video src="/videos/sample.mp4" controls />
        </div>
        <h4>Oh, no</h4>
        <p>
          This transfer has expired.Go Ultimate ot teams or Enterprize to
          recover it!
        </p>
        <div className="button-container">
            <button>Recover file</button>
        </div>
        <a className="custom-link" href="https://www.google.com" >Read More </a>
        </div>
    </div>
  );
};

export default Home;
