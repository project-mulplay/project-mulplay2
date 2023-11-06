import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./Cart.css";
import Button_funding from "../../components/elements/Button_funding";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import { Cookies } from "react-cookie";
import OutlinedCard from "../funding/RewardCard";
import dummyData from "../../model/dummyData";
import rewardData from "../../data/rewardData.json";
import ProductCard from "../../components/productcard/ProductCard";
import { useRecoilValue } from "recoil";
import {
  CartAtom,
  QuantitySelector,
  TotalPriceSelector,
} from "../../recoil/CartAtom";
import CartItem from "../../components/cartitem/CartItem";
import MainReward from "../store/MainReward";
import axios from "../../util/api";
import Swal from "sweetalert2";

const Cart = () => {
  const { prod_no } = useParams();
  // console.log(prod_no);

  // 후원자 정보
  const [userData, setUserData] = useState({}); // 데이터를 저장할 상태

  const onClick = () => {
    Swal.fire({
      icon: "success",
      title: "결제완료 되었습니다.",
      showCancelButton: false,
      confirmButtonColor: "#EE833E",
      confirmButtonText: "OK",
    });
  };

  const authCheck = () => {
    axios
      .get("user/info")
      .then((response) => {
        setUserData(response.data); // 데이터를 상태에 저장
        console.log(response.data);
      })
      .catch((error) => {
        console.error("요청 실패:", error);
      });
  };

  useEffect(() => {
    authCheck();
  }, []);

  // 모달창
  const [open, setOpen] = useState(false);

  // 라디오 박스
  const [x, setX] = useState(0);

  // const HandleClickRadioButton2 = (e) => {
  //   console.log(e.target.value);
  //   setX(e.target.value);
  // };

  // 장바구니
  const cartItem = useRecoilValue(CartAtom);
  const TotalQuantity = useRecoilValue(QuantitySelector);
  const TotalPrice = useRecoilValue(TotalPriceSelector);

  const intProdNo = parseInt(prod_no, 10);
  const filteredData = rewardData.filter((e) => e.prod_no === intProdNo);

  return (
    <div className="Cart">
      {/* <div className="nav">
                <LoggedOutHeader />
            </div> */}
      <div className="cart_container">
        <div className="ctitle">
          <h2>결제하기</h2>
        </div>
        <div className="ctitle-reward">
          <div className="reward-info-title">
            <span>리워드 정보</span>
          </div>
          <div className="modal">
            <Button
              style={{
                background: "#fff",
                borderColor: "#EE833E",
                color: "#EE833E",
              }}
              type="primary"
              onClick={() => setOpen(true)}
            >
              변경
            </Button>
            <Modal
              title="Reward Change"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={600}
            >
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
                리워드 선택
              </div>
              <div className="cart_MainReward">
                <MainReward prodNo={prod_no} />
              </div>
            </Modal>
          </div>
        </div>
        <div className="clist">
          <ul className="rewarditem">
            {cartItem.length ? (
              cartItem.map((e) => <CartItem data={e} key={e.reward_no} />)
            ) : (
              <div className="rewardnoitem">상품이 없습니다</div>
            )}
          </ul>
        </div>

        <span>후원자 정보</span>

        <div className="clist1">
          <div className="cuserbox">
            <div className="cuser">
              <span>
                <b>이름</b>
              </span>
              <div className="user-text text1">{userData.user_name}</div>
            </div>
            <div className="cuser">
              <span>
                <b>연락처</b>
              </span>
              <div className="user-text text2">{userData.user_phone}</div>
            </div>
            <div className="cuser">
              <span>
                <b>이메일</b>
              </span>
              <div className="user-text text3">{userData.user_id}</div>
            </div>
            <div className="cuser">
              <span>
                <b>주소</b>
              </span>
              <div className="user-text text4">{userData.user_address}</div>
            </div>
          </div>
        </div>

        {/* <span>결제 정보</span>

        <div className="clist1">
          <div className="cpayment">
            <div className="cpayment-input">
            <input
              type="radio"
              value="1"
              checked={x === "1"}
              onChange={HandleClickRadioButton2}
            />
            <label>카드 결제</label>
            </div>
            <div className="cpayment-input">
            <input
              type="radio"
              value="2"
              checked={x === "2"}
              onChange={HandleClickRadioButton2}
            />
            <label>계좌이체</label>
            </div>
          </div>
        </div> */}
        <div className="clist2">
          <div className="clist2-text">최종 펀딩 금액</div>
          <div className="clist2-price">{`${TotalPrice}원`}</div>
        </div>
        <div className="clist3" onClick={onClick}>
          <Link to="/">
            <Button_funding text={"결제하기"} minWidth={320} minHeight={50} />
          </Link>
        </div>
      </div>
      {/* <div>
                <Footer />
            </div> */}
    </div>
  );
};

export default Cart;
