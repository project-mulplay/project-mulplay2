import React from "react";

const AddressInput = ({ handleZipCode, inputZipCodeValue, handleAddressChange, inputAddressValue, openModal }) => {
  return (
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
      </div>
      <input
        className="input_text detail_addr"
        value={inputAddressValue}
        name="user_address"
        onChange={handleAddressChange}
        placeholder="주소"
        type={"text"}
      />
    </div>
  );
};

export default AddressInput;