import styled from "styled-components";

export const InputCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label,
  div {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.mainText};
  }

  .input-wrapper {
    position: relative;

    input {
      width: 100%;
      height: 5.6rem;
      border: 1px solid ${({ theme }) => theme.mainText};
      border-radius: 6px;
      padding: 2rem 1.6rem;
      padding-right: 10rem;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.titleColor};
    }

    div {
      position: absolute;
      right: 0;
      top: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      background: ${({ theme }) => theme.mainText};
      color: ${({ theme }) => theme.mainColor};
      border-radius: 8px;
      width: 82px;
      height: 100%;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;
