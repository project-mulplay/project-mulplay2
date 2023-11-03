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
import { useEffect } from "react";
import { useCookies } from 'react-cookie';


const ProductCard = ({ data, rewardData }) => {
  // 구조분해할당을 통해 data.id, data.title 대신 간단하게 사용
  const { reward_no: rewardno, reward_price: rewardprice, reward_name: rewardname, reward_info: rewardinfo, reward_categori: rewardcategori} = data;

  // 아톰 불러오기
  const [cartItem, setCartItem] = useRecoilState(CartAtom);

  // 이미 장바구니에 들어있는지 확인
  const isAlreadyInCart = cartItem.filter((e) => e.reward_no === rewardno).length;

  /**
   * 장바구니에 있는지 확인후, 없을때만 아톰에 추가
   */
  const AddToCart = () => {
    if (!isAlreadyInCart) {
      setCartItem((prev) => [...prev, data]);
    }
  };


  const [cookies, setCookie] = useCookies();

  const LoginState = cookies.token;

  //
  // 리워드 카드 배열
  const [open, setOpen] = useState(false);
  const [categori, setCategori] = useState("");
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if(rewardcategori === 0) {
      setCategori("베이직");
    } else if (rewardcategori === 1) {
      setCategori("얼리버드");
    } else if (rewardcategori === 2) {
      setCategori("슈퍼얼리버드");
    } else {
      setCategori("상품이 없습니다.");
    }
  },[rewardcategori])

  

  return (
    <>
    <Wrapper className="cardwrapper">
      {/* <img
        width={276}
        height={276}
        src={dummyImage}
        alt={`${id}의 더미이미지`}
      /> */}
      <Heading className="cardheading">{categori}</Heading>
      <Price className="cardprice">{rewardprice.toLocaleString()}원</Price>
      <hr></hr>
      <Title className="cardtitle">{rewardname}</Title>
      <MaxLine1 className="cardmax">
        {Array.isArray(rewardinfo) ? (
          <ul>
            {rewardinfo.map((item, index) => (
              <li key={index}>ㆍ{item}</li>
            ))}
          </ul>
        ) : (
          <div>{rewardinfo}</div>
        )}
      </MaxLine1>
      {LoginState ?
      <CardButton
        className="cardbutton"
        onClick={() => {
          showDrawer();
          AddToCart();
        }}
        disabled={isAlreadyInCart}
      >
        {isAlreadyInCart ? `장바구니에 추가됬습니다` : "장바구니에 추가"}
      </CardButton> :
      <MustLogin className="mustlogin">로그인이 필요한 서비스입니다.</MustLogin>
      }
    </Wrapper>
    </>
  );
};

const MustLogin = styled.p`
  &.mustlogin {
    font-size: 13px;
    position: relative;
    margin-top:50px;
    margin-left:0px;
    border: 1px solid #ee833e;
    border-radius: 15px;
    padding: 8px;
    color: #000;
    width: 260px;
    text-align: center;
  }
`

const Price = styled.span`
  &.cardprice {
    position: absolute;
    font-size: 14px;
    color: #333333;
    font-weight: bold;
    right: 0;
    margin-top: 5px;
    margin-right: 90px;
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
    border-radius: 15px;
    display: flex;
    flex-direction: column;
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
    border-radius: 15px;
    padding: 8px;
    color: #fff;
    width: 280px;
    background-color: #ee833e;
    cursor: pointer;
    &:disabled {
      background-color: #eeeeee;
      color: #000;
      cursor: default;
    }
  }
  &:hover {
    background-color: #FF8E3F;
    color: #fff;
  }
`;
const Title = styled.span`
  &.cardtitle {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 14px;
    color: #333333;
    font-weight: bold;
  }
`

export const Heading = styled.span`
  &.cardheading {
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;

export default ProductCard;
