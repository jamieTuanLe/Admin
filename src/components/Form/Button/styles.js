import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 4.4rem;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.mainText};
  background: ${({ theme }) => theme.mainColor};
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.mainText};
`;
