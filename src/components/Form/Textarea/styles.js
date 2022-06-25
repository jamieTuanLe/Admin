import styled from "styled-components";

export const Textarea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 4rem;

  label,
  div {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.mainText};
  }

  textarea {
    border: 1px solid ${({ theme }) => theme.bgGray};
    border-radius: 6px;
    padding: 2rem 1.6rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.titleColor};
  }

  textarea.isvalid {
    outline: 1px solid red;
    border: 1px solid red !important;
  }

  .text-error {
    color: red;
  }
`;
