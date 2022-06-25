import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonUpload = styled(motion.button)`
  position: relative;
  height: 300px;
  width: 300px;
  background: #ffffff;
  border: 1px dashed #dadada;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 4px;

  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #000;

  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
  }
`;

export const Error = styled.span`
  color: red;
`;
