import React from "react";
import { PopoverBody } from "reactstrap";

import * as S from "./styles";

const Popover = ({
  toggle,
  onToggle,
  children,
  placement = "bottom",
  target,
}) => {
  return (
    <S.PopoverWrapper
      target={target}
      isOpen={toggle}
      toggle={onToggle}
      placement={placement}
      trigger="legacy"
    >
      <PopoverBody>{children}</PopoverBody>
    </S.PopoverWrapper>
  );
};

export default Popover;
