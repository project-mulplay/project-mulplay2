import React, { useState, useEffect } from "react";
import banner4 from "../../assets/image/banner4.png";
import middle_banner from "../../assets/image/middle_banner.png";

function MiddleBanner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    // 창 크기가 변경될 때마다 모바일 여부를 업데이트
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sub_banner">
      {isMobile ? (
        <img src={middle_banner} alt="Mobile Banner" />
      ) : (
        <img src={banner4} alt="Desktop Banner" />
      )}
    </div>
  );
}

export default MiddleBanner;
