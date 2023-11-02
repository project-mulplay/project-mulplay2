import { useRecoilValue } from "recoil";
import {
  CartAtom,
  QuantitySelector,
  TotalPriceSelector,
} from "../../recoil/CartAtom";
import styled from "styled-components";
import CartItem from "../../components/cartitem/CartItem";
import { Link } from "react-router-dom";

function Reward() {
  const cartItem = useRecoilValue(CartAtom);
  const TotalQuantity = useRecoilValue(QuantitySelector);
  const TotalPrice = useRecoilValue(TotalPriceSelector);
  return (
    <>
      <ItemWrapper className="rewarditemwrapper">
        {cartItem.length ? (
          cartItem.map((e) => <CartItem data={e} key={e.reward_no} />)
        ) : (
          <NoItems className="rewardnoitem">상품이 없습니다</NoItems>
        )}
      </ItemWrapper>

      <TotalPriceWrapper className="rewardtotalprice">
        <ColumnWrapper className="rewardcolumnwrapper">
          <span>총 갯수</span>
          <Heading className="rewardheading">{`${TotalQuantity}개`}</Heading>
        </ColumnWrapper>
        <ColumnWrapper>
          <span>총 가격</span>
          <Heading className="rewardheading">{`${TotalPrice}원`}</Heading>
        </ColumnWrapper>
        {cartItem.length > 0 && (
          <div>
            <Link to={`/cart/${cartItem[0].prod_no}`}>
              <RewardButton>결제하기</RewardButton>
            </Link>
          </div>
        )}
      </TotalPriceWrapper>
    </>
  );
}
const ColumnWrapper = styled.div`
  &.rewardcolumnwrapper {
    margin-bottom: 16px;
  }
`;

const Heading = styled.span`
  &.rewardheading {
    font-size: 20px;
    font-weight: var(--bold);
  }
`;
const ItemWrapper = styled.ul`
  &.rewarditemwrapper {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 300px);
    gap: 8px;
    flex-direction: column;
  }
`;
const TotalPriceWrapper = styled.div`
  &.rewardtotalprice {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 16px;
    height: 150px;
    width: 100%;
    max-width: 1024px;
    border: 1px solid #cccccc;
    & span {
      text-align: right;
    }
  }
`;
const NoItems = styled.div`
  &.rewardnoitem {
    padding: 8px;
    width: fit-content;
    margin: 0 auto;
    border-radius: 4px;
    text-align: center;
    border: 1px solid var(--line-gray);
  }
`;

const RewardButton = styled.div`
  margin-top: 20px;
  border: 1px solid #ee833e;
  border-radius: 10px;
  width: 100px;
  text-align: center;
  background-color: #ee833e;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #ee833e;
  }
`;

export default Reward;
