import Slider from "../../components/layout/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FundingList from "../../components/layout/FundingList";

const OpenFundingList = () => {
  return (
    <div className="openfundinglist">
      <Slider />
      <FundingList />
    </div>
  );
};

export default OpenFundingList;
