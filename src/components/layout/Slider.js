import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/image/banner1.png";
import banner2 from "../../assets/image/banner2.png";
import banner3 from "../../assets/image/banner3.png";
import prev from "../../assets/image/prev.png";
import next from "../../assets/image/next.png";

export default class SimpleSlider extends Component {
  // 이전 버튼 클릭 핸들러
  handlePrev = () => {
    this.slider.slickPrev();
  };

  // 다음 버튼 클릭 핸들러
  handleNext = () => {
    this.slider.slickNext();
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // autoplay 속성 추가
      autoplaySpeed: 3000, // 5초(5000 밀리초)마다 전환
    };

    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <img src={banner1} alt="Banner 1" />
          </div>
          <div>
            <img src={banner2} alt="Banner 2" />
          </div>
          <div>
            <img src={banner3} alt="Banner 3" />
          </div>
        </Slider>

        {/* 이전 버튼 */}
        <button onClick={this.handlePrev} className="banner_prev">
          <img src={prev} alt="이전" />
        </button>

        {/* 다음 버튼 */}
        <button onClick={this.handleNext} className="banner_next">
          <img src={next} alt="다음" />
        </button>
      </div>
    );
  }
}
