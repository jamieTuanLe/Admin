import styled from "styled-components";
import { motion } from "framer-motion";

export const Input = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 4rem;

  label,
  div {
    font-size: 1.4rem;
    line-height: 2rem;
    color: #48586B;
  }

  input {
    height: 4.3rem;
    border: 1px solid #DDDDDD;
    padding: 2rem 1.6rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #48586B;
  }

  span {
    height: 2rem;
  }

  input.isvalid {
    outline: 1px solid red;
    border: 1px solid red !important;
  }

  .text-error {
    color: red;
  }
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 9;
  top: 50%;
  transform: translateY(-50%);
`;