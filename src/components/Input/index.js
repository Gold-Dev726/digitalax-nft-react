import React, { useEffect } from "react";
import Icon from '@material-ui/core/Icon';
import { InputBase } from '@material-ui/core';

function Input(props) {
  const { label } = props;
  return (
    <div className="flex flex-col mt-10">
      <span className="font-inter font-extrabold text-gray-50 text-sm mb-2">{label}</span>
      <InputBase className="border-1 border-third bg-white h-9" />
    </div>
  );
}

export default Input;
