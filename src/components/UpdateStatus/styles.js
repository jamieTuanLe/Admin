import styled from "styled-components"

export const UpdateWrapper = styled.div`
  display: flex;
  align-items: center;
  .active {
    color: #EDB01B;
  }

  .block {
    color: #4D4D4D;
  }
`
export const Status = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.4px;
  padding: 0 1rem;
`

export const ToggleButton = styled.div`
  position: relative;
  width: 160px;
  height: 42px;

  input {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #EDB01B;
    transition: all 0.4s;
    border-radius: 5px;

    span {
      position: absolute;
      width: 76px;
      height: 38px;
      border-radius: 4px;
      top: 2px;
      left: 2px;
      background: #ffffff;
      transition: all 0.4s;
    }
  }
  .slider::after {
    content: "Active";
    position: absolute;
    top: calc(50% - 12px);
    right: 20px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
  }

  .slider::before {
    content: "Block";
    position: absolute;
    top: calc(50% - 12px);
    left: 20px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
  }

  input:checked + .slider {
    background: #4D4D4D;
  }

  input:checked + .slider > span {
    transform: translateX(80px);
  }
`