import React from "react";

import * as S from "./styles";
import LoadingButton from "/src/components/LoadingButton";

const Button = ({ children, loading, className, ...rest }) => {
  return (
    <S.Button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={className}
      {...rest}
    >
      {loading ? <LoadingButton /> : children}
    </S.Button>
  );
};

export default Button;
