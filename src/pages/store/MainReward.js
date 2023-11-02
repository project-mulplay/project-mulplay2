import styled from "styled-components";
import ProductCard from "../../components/productcard/ProductCard";
import dummyData from "../../model/dummyData";
import rewardData from "../../data/rewardData.json"

function MainReward({prodNo}) {
  const intProdNo = parseInt(prodNo, 10);
  const filteredData = rewardData.filter((e) => e.prod_no === intProdNo);

  return (
    <ListWrapper className="mainrewardlistwrapper">
      {filteredData.map((e) => {
        return (
          <li key={e.reward_no}>
            <ProductCard data={e} rewardData={rewardData}/>
          </li>
        );
      })}
    </ListWrapper>
  );
}
const ListWrapper = styled.ul`
.& mainrewardlistwrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
`;

export default MainReward;