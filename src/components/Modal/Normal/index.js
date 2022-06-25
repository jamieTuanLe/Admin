import React from "react";
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Button from "/src/components/Form/Button";

import * as S from "./styles";

const Modal = ({
  toggle,
  onNo,
  onYes,
  children,
  title,
  size = "xl",
  TitleBtnLeft = "Cancel",
  TitleBtnRight = "Save changes",
  onToggle = onNo,
  isFooter = true,
  form,
  ...rest
}) => {
  return (
    <S.ModalWrapper
      isOpen={toggle}
      toggle={onToggle}
      centered
      size={size}
      {...rest}
    >
      {title && <ModalHeader toggle={onToggle}>{title}</ModalHeader>}
      <ModalBody>{children}</ModalBody>
      {isFooter && (
        <ModalFooter className={children ? "is-border" : ""}>
          <Button onClick={onNo} className="btn-left">
            {TitleBtnLeft}
          </Button>
          <Button
            onClick={onYes}
            className="btn-right"
            form={form}
          >
            {TitleBtnRight}
          </Button>
        </ModalFooter>
      )}
    </S.ModalWrapper>
  );
};

export default Modal;
