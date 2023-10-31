import React from "react";
import styled from "styled-components";
// import dummyImage from "../../assets/henry.jpg";
import { useSetRecoilState } from "recoil";
import { CartAtom } from "../../recoil/CartAtom";

const CartItem = ({ data }) => {
  const setCartItem = useSetRecoilState(CartAtom);
  const { id, title, description, price } = data;

  const removeFromCart = () => {
    setCartItem((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <>
    <Wrapper className="cartitemwrapper">
      <div>
        {/* <ImageWrapper src={dummyImage} alt={title}></ImageWrapper> */}
        <ColumnWrapper className="cartitemcolumn">
          <Title className="cartitemtitle">{title}</Title>
          <span>{Array.isArray(description) ? (
          <ul style={{listStyle: 'none'}}>
            {description.map((item, index) => (
              <li key={index}>ㆍ{item}</li>
            ))}
          </ul>
        ) : (
          <div>{description}</div>
        )}</span>
        </ColumnWrapper>
      </div>
      <RightWrapper className="cartitemright">
        <Title className="cartitemtitle">{`${price.toLocaleString()}원`}</Title>
        <Button className="cartitembutton" onClick={removeFromCart}>삭제</Button>
      </RightWrapper>
    </Wrapper>
    <hr style={{width: '0px', margin: '20px 0px'}}/>
    </>
  );
};

const Wrapper = styled.li`
&.cartitemwrapper {
  width: 100%;
  padding: 16px;
  border: 1px solid var(--line-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
`;
// const ImageWrapper = styled.img`
//   height: 60px;
//   width: 60px;
//   float: left;
//   margin-right: 16px;
//   border: 1px solid var(--line-gray);
//   border-radius: 8px;
// `;
const ColumnWrapper = styled.div`
&.cartitemcolumn {
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: center;
}
`;
const RightWrapper = styled.div`
&.cartitemright {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  > span {
    text-align: right;
  }
}
`;
const Title = styled.span`
&.cartitemtitle {
    text-align: left;
    margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
}
`;
const Button = styled.button`
&.cartitembutton {
  display: block;
  padding: 4px 8px;
  width: fit-content;
}
`;
export default CartItem;