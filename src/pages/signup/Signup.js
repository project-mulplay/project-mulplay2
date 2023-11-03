import "./Signup.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DaumPostcode from 'react-daum-postcode';


// Daum 우편번호 조회 서비스
const AddressModal = ({ showModal, closeModal, setInputAddressValue, setInputZipCodeValue }) => {
  const onCompletePost = data => {
    closeModal();
    setInputAddressValue(data.address);
    setInputZipCodeValue(data.zonecode);
  };

  const postCodeStyle = {
    display: showModal ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    backgroundColor: '#fff',
    width: '400px',
    height: '400px',
    border: '1px solid #ccc',
  };

  return (
    <div style={postCodeStyle}>
      <DaumPostcode onComplete={onCompletePost} width={'100%'} height={'100%'} autoClose={true} animation={true} />
    </div>
  );
};


const Signup = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
  const navigate = useNavigate();

  const [data, setData] = useState({
    user_id: "",
    user_pw: "",
    user_name: "",
    user_phone: "",
    user_address: "",
    user_regdate: formattedDate,
    user_sns: 0,
    user_role: 1,
    img_no: 1,
  });

  // 주소 변경을 포함하여 모든 입력 변경을 다루는 handleChange 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:3300/register/signup",
        data
        );
        console.log("요청 성공:", response);
        alert("회원가입이 완료되었습니다. 로그인페이지로 이동합니다.");
        navigate("/login");
      } catch (error) {
        console.log(data);
        console.error("요청 실패:", error);
      }
    };
    
    // 주소 입력 값이 변경될 때 user_address에 해당 값을 설정합니다.
    const handleAddressChange = (e) => {
      setInputAddressValue(e.target.value);
      setData({
        ...data,
        user_address: e.target.value,
      });
    };
    
    // 주소 api
    const [modalState, setModalState] = useState(false);
    const [inputAddressValue, setInputAddressValue] = useState('');
    const [inputZipCodeValue, setInputZipCodeValue] = useState('');
    
    useEffect(() => {
      setData(prevData => ({
        ...prevData,
        user_address: inputAddressValue,
      }));
    }, [inputAddressValue]);
    const openModal = () => {
      setModalState(true);
    };

  const closeModal = () => {
    setModalState(false);
  };

  const handleZipCode = event => {
    setInputZipCodeValue(event.target.value);
  };
  


  return (
    <section id="container_signup">
      <h1>회원가입</h1>
      <form action="#" className="form_signup">
        <div className="input_box id">
          <label>아이디</label>
          <input
            className="input_text"
            type="text"
            placeholder="이메일 형식으로 입력해 주세요"
            required
            name="user_id"
            onChange={handleChange}
          />
        </div>
        <div className="input_box pw">
          <label>비밀번호</label>
          <input
            className="input_text"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            required
            name="user_pw"
            onChange={handleChange}
          />
        </div>
        <div className="input_box name">
          <label>이름</label>
          <input
            name="user_name"
            className="input_text"
            type="text"
            placeholder="이름을 입력해 주세요"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input_box tel">
          <label>전화번호</label>
          <input
            className="input_text"
            type="text"
            placeholder="전화번호를 입력해 주세요"
            required
            name="user_phone"
            onChange={handleChange}
          />
        </div>
        <div className="input_box adr">
          <label>주소</label>
          <div className="column">

            <input
              className="input_text"
              onChange={handleZipCode}
              value={inputZipCodeValue}
              placeholder="우편번호"
              type={"text"}
            />
            <button className="btn_search" type="button" onClick={openModal}>
              주소 검색
            </button>
            {/* <button className="btn_search" id="yourButtonId" onclick={openDaumPostcode}>검색</button> */}
          </div>
          <input
            className="input_text"
            value={inputAddressValue}
            name="user_address"
            onChange={handleAddressChange}
            placeholder="주소"
            type={"text"}
          />
           {/*
          <input className="input_text" onChange={handleZipCode} value={inputZipCodeValue} placeholder="우편번호" type={'text'} />
          <button className="btn_search" type="button"  onClick={openModal}>주소 검색</button>
            {/* <button className="btn_search" id="yourButtonId" onclick={openDaumPostcode}>검색</button> */}
          </div>
          <input className="input_text" value={inputAddressValue} name="user_address" onChange={handleAddressChange} placeholder="주소" type={'text'} />
          */}

          <AddressModal
            showModal={modalState}
            closeModal={closeModal}
            setInputAddressValue={setInputAddressValue}
            setInputZipCodeValue={setInputZipCodeValue}
          />
        </div>

        <button type="submit" className="btn_signup" onClick={handleSubmit}>
          완료
        </button>
      </form>
    </section>
  );
};

export default Signup;
