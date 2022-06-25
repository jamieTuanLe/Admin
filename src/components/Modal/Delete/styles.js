import styled from "styled-components";

export const DeleteWrapper = styled.div``;

export const DeleteContent = styled.div``;

export const DeleteIcon = styled.div`
  width: 60px;
  margin: 0 auto 1rem auto;
`;

export const DeleteTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: 600;
  color: #e10000;
  text-align: center;
  text-transform: uppercase;
`;

export const DeleteDescription = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  color: #c5c7cd;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Button = styled.button`
  background: transparent;
  color: #111;
  min-width: 75px;
  padding: 0.5rem 2rem;
  border: none;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const ButtonCancel = styled(Button)``;

export const ButtonDelete = styled(Button)`
  background: #edb01b;
  color: #fff;
  border-radius: 1rem;
`;
