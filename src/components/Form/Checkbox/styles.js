import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  .text-error {
    color: red;
  }

  .horizontal {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2.4em;
  }
  .vertical {
    display: flex;
    flex-direction: column;
    gap: 2.4em;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  label {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: bold;
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
    }

    &:checked {
      border: 1px solid ${({ theme }) => theme.ecoColor};
      background-color: ${({ theme }) => theme.ecoColor};
    }
  }
`;

export const Title = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.mainText};

  margin-bottom: 1.2rem;
`;
