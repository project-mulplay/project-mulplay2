import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/image/banner1.png";
import banner2 from "../../assets/image/banner2.png";
import banner3 from "../../assets/image/banner3.png";
import mobileBanner1 from "../../assets/image/mobileBanner1.png";
import mobileBanner2 from "../../assets/image/mobileBanner2.png";
import mobileBanner3 from "../../assets/image/mobileBanner3.png";

import prev from "../../assets/image/prev.png";
import next from "../../assets/image/next.png";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMain: true,
      isMobile: window.innerWidth <= 768, // 모바일 미디어 쿼리
    };
  }

  componentDidMount() {
    // 화면 크기가 변경될 때 isMobile 업데이트
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    // 화면 크기가 변경될 때 isMobile 업데이트
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

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

    const mainImages = [
      { src: banner1, alt: "Banner 1" },
      { src: banner2, alt: "Banner 2" },
      { src: banner3, alt: "Banner 3" },
    ];

    const mobileImages = [
      { src: mobileBanner1, alt: "Mobile Banner 1" },
      { src: mobileBanner2, alt: "Mobile Banner 2" },
      { src: mobileBanner3, alt: "Mobile Banner 3" },
    ];

    return (
      <div>
        {this.state.filterMain ? (
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {this.state.isMobile
              ? mobileImages.map((image, index) => (
                  <div key={index}>
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))
              : mainImages.map((image, index) => (
                  <div key={index}>
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
          </Slider>
        ) : null}

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

// 오픈예정& 메인  컴포넌트

// export default class SimpleSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterMain: false,
//       filterOpen: false,
//     };
//   }

//   // 이전 버튼 클릭 핸들러
//   handlePrev = () => {
//     this.slider.slickPrev();
//   };

//   // 다음 버튼 클릭 핸들러
//   handleNext = () => {
//     this.slider.slickNext();
//   };

//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 3000,
//     };
//     if (this.props.type === "main") {
//       this.state.filterMain = true;
//     } else if (this.props.type === "open") {
//       this.state.filterMain = false;
//     }

//     return (
//       <div>
//         {this.state.filterMain ? (
//           // 메인슬라이드
//           <Slider ref={(c) => (this.slider = c)} {...settings}>
//             <div>
//               <img src={banner1} alt="Banner 1" />
//             </div>
//             <div>
//               <img src={banner2} alt="Banner 2" />
//             </div>
//             <div>
//               <img src={banner3} alt="Banner 3" />
//             </div>
//           </Slider>
//         ) : (
//           // open 슬라이드
//           <Slider ref={(c) => (this.slider = c)} {...settings}>
//             <div>
//               <img src={open1} alt="open1" />
//             </div>
//             <div>
//               <img src={open2} alt="open2" />
//             </div>
//           </Slider>
//         )}
//         {/* 이전 버튼 */}
//         <button onClick={this.handlePrev} className="banner_prev">
//           <img src={prev} alt="이전" />
//         </button>
//         {/* 다음 버튼 */}
//         <button onClick={this.handleNext} className="banner_next">
//           <img src={next} alt="다음" />
//         </button>
//       </div>
//     );
//   }
// }
