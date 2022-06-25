import styled from "styled-components";

export const Wrapper = styled.div`
  
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  padding-bottom: 2rem;
`;

export const Content = styled.div`
  padding: 17px;
  border: 1px solid rgba(223, 224, 235, 1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 15px;
  background: #ffffff;
  margin-top: 25px;
`;


export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
`

export const TableTitle = styled.h2`
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #252733;
  margin: 0;
`

export const TableUtilities = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`


export const Filter = styled.button`
background-color: transparent;
border: none;
color: #1C253C;
font-size: 14px;
`

export const Delete = styled(Filter)`
  color: #C5C7CD;
  margin-right: 30px;
  svg {
    path {
      stroke: #C5C7CD;
    }
  }

  &.active {
    color: #1C253C;
    svg {
      path {
        stroke: #1C253C;
      }
    }
  }
`
export const CustomeTableWrapper = styled.div`
  padding: 0 2.5rem;
  margin-top: 25px;
`