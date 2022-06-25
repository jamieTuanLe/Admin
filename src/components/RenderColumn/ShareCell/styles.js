import styled from "styled-components";

export const ShareCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const Total = styled.div`
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 1.2px;
  color: #252733;
`

export const Line = styled.div`
  width: ${props => `${props.percent}px`};
  height: 4px;
  background-color: #C4C4C4;
  border-radius: 2px;
  margin-top: 0.5rem;
`