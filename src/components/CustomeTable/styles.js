import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  table {
    border: none;
    margin: 0;
    thead {
      tr {
        th {
          font-size: 14px;
          line-height: 18px;
          color: #9fa2b4;
          font-weight: 600;
          text-align: left;
          letter-spacing: 0.2px;
          padding: 1rem 0;

          &:first-child {
            text-align: left;
            /* padding-right: 20px; */
          }
          &:nth-child(2) {
            text-align: left;
            padding-left: 20px;
          }
          /* &:last-child {
            text-align: right;
          } */
        }
      }
    }

    tbody {
      tr {
        td {
          font-size: 14px;
          line-height: 20px;
          text-align: left;
          letter-spacing: 1.2px;
          color: #252733;
          padding: 2rem 0;

          &:first-child {
            text-align: left;
          }
          &:nth-child(2) {
            padding-left: 20px;
            text-align: left;
            max-width: 300px;
          }
          &:nth-child(6) {
            color: #ff3a44;
          }
          &:last-child {
            margin-right: 2rem;
          }
        }
      }
    }
  }
`;
