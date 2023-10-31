import styled from "styled-components";
import ProductCard from "../../components/productcard/ProductCard";
import dummyData from "../../model/dummyData";
import rewardData from "../../data/rewardData.json"

function MainReward() {
  return (
    <ListWrapper className="mainrewardlistwrapper">
      {dummyData.map((e) => {
        return (
          <li key={e.id}>
            <ProductCard data={e} />
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