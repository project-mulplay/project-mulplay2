import SubSlider from "../../components/layout/SubSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FundingList from "../../components/layout/FundingList";
import "./OpenFundingList.css";

const OpenFundingList = () => {
  return (
    <div className="openfundinglist">
      <SubSlider />
      <FundingList />
    </div>
  );
};

export default OpenFundingList;
