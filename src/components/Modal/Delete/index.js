import React from "react";
import * as S from "./styles";
import Modal from "/src/components/Modal/Normal";
import TrashIcon from "/public/svgs/trash";

const ModalDelete = ({ toggle, onNo, nameModal, handleDelete }) => {
  console.log
  return (
    <>
      <Modal toggle={!!toggle} onNo={onNo} title="" size="md" isFooter={false}>
        <S.DeleteWrapper>
          <S.DeleteContent>
            <S.DeleteIcon>
              <TrashIcon width="60" height="60" />
            </S.DeleteIcon>

            <S.DeleteTitle>{nameModal}</S.DeleteTitle>
            <S.DeleteDescription>
              Bạn có chắc muốn xóa dữ liệu này?
            </S.DeleteDescription>

            <S.ButtonWrapper>
              <S.ButtonCancel onClick={onNo}>Hủy</S.ButtonCancel>
              <S.ButtonDelete onClick={() => handleDelete(toggle)}>
                Xóa
              </S.ButtonDelete>
            </S.ButtonWrapper>
          </S.DeleteContent>
        </S.DeleteWrapper>
      </Modal>
    </>
  );
};

export default ModalDelete;
