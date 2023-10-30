import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

function MyDatePicker({ onDateChange }) {
  const [openDate, setOpenDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleOpenDateChange = (date) => {
    setOpenDate(date);
    onDateChange('openDate', format(date, 'yyyy-MM-dd'));
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onDateChange('endDate', format(date, 'yyyy-MM-dd'));
  };

  return (
    <div>
      <DatePicker
        selected={openDate}
        onChange={handleOpenDateChange}
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
        onChange={handleEndDateChange}
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
