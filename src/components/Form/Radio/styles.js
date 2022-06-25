import styled from "styled-components";

export const RadioWrapper = styled.div`
  .text-error {
    color: red;
  }
`;

export const Radio = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  margin-bottom: 1.6rem;

  label {
    font-size: 1.6rem;
    line-height: 2.4rem;
    cursor: pointer;
  }

  input {
    background-color: ${({ theme }) => theme.mainColor};
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.mainText};
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
    position: relative;
    -webkit-appearance: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
      content: "";
      display: block;
      border-radius: 25px;

      height: 1.2rem;
      width: 1.2rem;
    }

    &:checked {
      border: 1px solid ${({ theme }) => theme.ecoColor};
    }

    &:checked:after {
      background-color: ${({ theme }) => theme.ecoColor};
      border: 1px solid ${({ theme }) => theme.ecoColor};
    }
  }
`;

export const Title = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.mainText};

  margin-bottom: 1.2rem;
`;
