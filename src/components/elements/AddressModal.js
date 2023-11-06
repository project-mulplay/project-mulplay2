import React from "react";
import DaumPostcode from "react-daum-postcode";

const AddressModal = ({ showModal, closeModal, setInputAddressValue, setInputZipCodeValue }) => {
  const onCompletePost = (data) => {
    closeModal();
    setInputAddressValue(data.address);
    setInputZipCodeValue(data.zonecode);
  };

  const postCodeStyle = {
    display: showModal ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    backgroundColor: "#fff",
    width: "400px",
    height: "400px",
    border: "1px solid #ccc",
  };

  return (
    <div style={postCodeStyle}>
      <DaumPostcode
        onComplete={onCompletePost}
        width={"100%"}
        height={"100%"}
        autoClose={true}
        animation={true}
      />
    </div>
  );
};

export default AddressModal;