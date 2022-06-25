import styled from "styled-components";

export const TableUserWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Avatar = styled.div`
  padding: 0 1rem 0 0;
  img {
    border-radius: 50%;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const UserName = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #252733;
  margin: 0;
`
export const StatusDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${props => props.status == "active" ? "#15CF74" : "#F12B2C"};
`
export const UserId = styled.span`
  padding-left: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1.2px;
  color: #C5C7CD;
` 

export const Status = styled(UserId)``