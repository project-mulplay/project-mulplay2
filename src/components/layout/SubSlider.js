import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import open1 from "../../assets/image/opening1.png";
import open2 from "../../assets/image/opening2.png";
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
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <img src={open1} alt="open1" />
          </div>
          <div>
            <img src={open2} alt="open2" />
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
