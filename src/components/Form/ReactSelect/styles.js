import styled from "styled-components";

export const SelectOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2rem;

  label,
  div {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.titleColor};
  }

  .select__control {
    height: 5.6rem;
    border: 1px solid ${({ theme }) => theme.mainText};
    border-radius: 6px;
    padding: 1rem 1.6rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.titleColor};

    &:hover {
      border: 1px solid ${({ theme }) => theme.ecoColor};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.ecoColor};
    }
  }

  .select__menu {
    .select__menu-list {
      .select__option--is-focused,
      .select__option--is-selected {
        background: ${({ theme }) => theme.bgGray};
      }
    }
  }

  .isvalid .select__control {
    outline: 2px solid red;
    border: 2px solid red !important;

    &:hover {
      border: 1px solid red;
      box-shadow: 0 0 0 1px red;
    }
  }

  .text-error {
    color: red;
  }
`;
