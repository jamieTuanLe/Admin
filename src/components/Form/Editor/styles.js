import styled from "styled-components";

export const EditorWrapper = styled.div`
  
  .ck-editor__main h2 {
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 0.4px;
    color: #313F64;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  .ck-editor__main h3 {
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.4px;
    color: #313F64;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .ck-editor__main h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: #313F64;
    margin-bottom: 1rem;
  }

  .ck-editor__main p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #313F64;
    margin-bottom: 1rem;
  }

  .ck-editor__main figcaption {
    font-size: 12px !important;
    line-height: 15px !important;
    text-align: center !important;
    letter-spacing: 0.4px !important;
    color: #313F64 !important;
    background-color: #ffffff !important;
    font-weight: 600 !important;
  }
`

export const Error = styled.span`
  color: red;
`;
