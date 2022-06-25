import styled from "styled-components";

export const AddPageForm = styled.form``;

export const AddPageWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #dfe0eb;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 15px;
  padding: 2rem 5rem 3rem;
`;

export const AddPageAddThumbnailWrapper = styled.div``;

export const AddPageAddThumbnail = styled.h2`
  font-weight: 700;
  font-size: 19px;
  color: #252733;
`;

export const AddPageThumbnailImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
  padding-bottom: 2.5rem;
`;

export const AddPageThumbnailButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThumbnailIcon = styled.div``;

export const ThumbnailUp = styled.p`
  font-size: 14px;
  margin: 0;
  color: #000;
`;

export const AddPageThumbnailImage = styled.div`
  position: relative;
  width: 528px;
  height: 308px;
  background: #4d4d4d;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  img {
    border-radius: 10px;
  }
`;

export const AddPageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  padding-bottom: 2rem;
`

export const AddPageAddLink = styled.div`
  input {
    width: 100%;
    padding: 1rem;
  }
`;

export const AddPageChooseItem = styled.div`
  margin-top: 3rem;
`

export const AddPageStatus = styled.div`
  margin-top: 3rem;
`

export const AddPageAddLinkTitle = styled.h2`
  font-weight: 700;
  font-size: 19px;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
`;

export const AddPageInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AddPageButtonWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const AddPageCkeditor = styled.div`
  position: relative;
`;

export const AddPageChoosePartner = styled.div``

export const AddPageButton = styled.button`
  min-width: 100px;
  height: 50px;
  border: none;
  border-radius: 1rem;
  background: none;
  font-weight: 700;
  font-size: 16px;
`;

export const ButtonCancel = styled(AddPageButton)``;

export const ButtonSubmit = styled(AddPageButton)`
  color: #fff;
  background: #edb01b;
`;