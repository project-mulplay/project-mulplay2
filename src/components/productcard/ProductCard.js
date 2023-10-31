import React from "react";
import { useState } from "react";
import styled from "styled-components";
// import dummyImage from "../../assets/henry.jpg";
import dummyImage from "../../assets/image/card1.png";
import { useRecoilState } from "recoil";
import { CartAtom } from "../../recoil/CartAtom";
import Canvas from "../../pages/funding/Canvas";
import { Button, Drawer } from "antd";
import MainReward from "../../pages/store/MainReward";
import Reward from "../../pages/store/Reward";

const ProductCard = ({ data }) => {
  // 구조분해할당을 통해 data.id, data.title 대신 간단하게 사용
  const { id, title, description, price } = data;

  // 아톰 불러오기
  const [cartItem, setCartItem] = useRecoilState(CartAtom);

  // 이미 장바구니에 들어있는지 확인
  const isAlreadyInCart = cartItem.filter((e) => e.id === id).length;

  /**
   * 장바구니에 있는지 확인후, 없을때만 아톰에 추가
   */
  const AddToCart = () => {
    if (!isAlreadyInCart) {
      setCartItem((prev) => [...prev, data]);
    }
  };

  //
  // 리워드 카드 배열
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Wrapper className="cardwrapper">
      {/* <img
        width={276}
        height={276}
        src={dummyImage}
        alt={`${id}의 더미이미지`}
      /> */}
      <Haeding className="cardheading">{title}</Haeding>
      <hr></hr>
      <Price className="cardprice">{price.toLocaleString()}원</Price>
      <MaxLine1 className="cardmax">
        {Array.isArray(description) ? (
          <ul>
            {description.map((item, index) => (
              <li key={index}>ㆍ{item}</li>
            ))}
          </ul>
        ) : (
          <div>{description}</div>
        )}
      </MaxLine1>
      <CardButton
        className="cardbutton"
        onClick={() => {
          showDrawer();
          AddToCart();
        }}
        disabled={isAlreadyInCart}
      >
        {isAlreadyInCart ? `장바구니에 추가됬습니다` : "장바구니에 추가"}
      </CardButton>
    </Wrapper>
    </>
  );
};

const Price = styled.span`
  &.cardprice {
    font-size: 16px;
    color: #000;
    font-weight: bold;
  }
`;
const Wrapper = styled.div`
  &.cardwrapper {
    margin-top: 20px;
    padding: 16px;
    width: 280px;
    min-height: 150px;
    height: 100%;
    border: 1px solid #cccccc;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
`;
const MaxLine1 = styled.p`
  &.cardmax {
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
`;
const CardButton = styled.button`
  &.cardbutton {
    position: relative;
    margin-top:50px;
    border: 1px solid #ee833e;
    border-radius: 5px;
    padding: 8px;
    color: #fff;
    width: 280px;
    background-color: #ee833e;
    &:disabled {
      background-color: #eeeeee;
      color: #000;
    }
  }
`;
export const Haeding = styled.span`
  &.cardheading {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;

export default ProductCard;
