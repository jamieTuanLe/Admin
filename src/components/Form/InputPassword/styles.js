import styled from "styled-components";
import { motion } from "framer-motion";

export const InputPassword = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-bottom: 2rem;

  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #EDB01B;
  }

  div {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.mainText};
  }

  .input-wrapper {
    position: relative;
    max-width: 470px;
    
    input {
      width: 100%;
      height: 4rem;
      border: 1px solid ${({ theme }) => theme.mainText};
      border-radius: 6px;
      padding: 2rem 1.6rem;
      padding-right: 10rem;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.titleColor};
    }

    input.isvalid {
      outline: 1px solid red;
      border: 1px solid red !important;
    }

    div {
      position: absolute;
      right: 0;
      top: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      color: ${({ theme }) => theme.mainColor};
      border-radius: 8px;
      width: 82px;
      height: 100%;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    .isHide svg {
      .line-hide {
        display: none;
      }
    }
  }

  .text-error {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #EF0000;
  }
`;
