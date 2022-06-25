import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonUpload = styled(motion.button)`
  position: relative;

  height: 4.4rem;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.ecoColor};
  background: ${({ theme }) => theme.mainColor};
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.ecoColor};
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
