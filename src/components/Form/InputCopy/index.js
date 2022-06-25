import React, { useCallback, useState } from "react";
import * as S from "./styles";

const InputCopy = ({ label, type, name, placeholder, className, ...rest }) => {
  const [btnText, setBtnText] = useState("Copy");

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(rest.value);
    setBtnText("Copied");
  }, [rest.value]);

  return (
    <S.InputCopy className={className}>
      <label>{label}</label>
      <div className="input-wrapper">
        <input
          disabled
          type={type}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
        <div onClick={handleCopy}>{btnText}</div>
      </div>
    </S.InputCopy>
  );
};

export default InputCopy;
