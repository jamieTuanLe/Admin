import styled from "styled-components";
import { Popover } from "reactstrap";

export const PopoverWrapper = styled(Popover)`
  .popover {
    background: ${({ theme }) => theme.mainColor};
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);

    z-index: 99;
    overflow: hidden !important;
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    min-width: 15rem;

    .popover-body {
      padding: 0;

      display: flex;
      flex-direction: column;

      div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem 2rem;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.mainText};
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.ecoColor};
          background-color: rgba(196, 196, 196, 0.23);
        }
        &:hover svg path {
          stroke: ${({ theme }) => theme.ecoColor};
        }
      }
    }

    .arrow {
      &::before,
      &::after {
        display: none;
      }
    }
  }
`;
