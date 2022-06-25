import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Status = styled.div`
  width: 120px;
  height: 30px;
  border-radius: 15px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
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