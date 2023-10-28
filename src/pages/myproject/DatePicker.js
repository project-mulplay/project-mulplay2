import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

function MyDatePicker() {
  const [openDate, setOpenDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <DatePicker
        selected={openDate}
        onChange={(date) => setOpenDate(date)}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        selectsStart
        startDate={openDate}
        endDate={endDate}
        showYearDropdown
      />{" "}
      ~{" "}
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        selectsEnd
        startDate={openDate}
        endDate={endDate}
        minDate={openDate}
        showYearDropdown
      />
    </div>
  );
}

export default MyDatePicker;
