import React from "react";

import * as S from "./styles";
const Button = ({ children, loading, className, ...rest }) => {
  return (
    <S.Button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={className}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

export default Button;
