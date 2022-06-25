import styled from 'styled-components';

export const Status = styled.div`
  width: 84px;
  height: 24px;
  border-radius: 12px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => {
    switch(props.color) {
      case "successColor":
        return "#15CF74"
      case "failedColor":
        return "#F12B2C"
      case "pendingColor":
        return "#FFBD00"
      case "cancelColor":
        return "#C4C4C4"
      default:
        return "transparent"
    }
  }};

`