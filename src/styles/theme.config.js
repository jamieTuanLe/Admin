import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FCFCFD;",
  main: "#5C14DB",
  mainColor: "#FFFFFF",
  mainText: "#777E90",
  titleColor: "#1C253C",
  ecoColor: "#EDB01B",
  bgGray: "#F4F5F6",
};

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0 !important;
    background: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.titleColor};
    font-family: 'Inter', sans-serif !important;
    font-weight: 400;
    font-style: normal;
    transition: all 0.50s linear;
  }
  
  input, textarea, button {font-family: inherit}

  ol,ul{
    list-style:none;
    padding: 0;
    margin: 0;

  }
  caption,th{
    text-align:left;
  }
  h1,h2,h3,h4,h5,h6{
    font-size:100%; 
    font-weight:400;

  }
  q:before,q:after{
    content:'';
  }
  abbr,acronym{
    border:0;
  }

  a{
    text-decoration:none;
    color: ${({ theme }) => theme.mainColor};
  }
  a:hover {
    color: ${({ theme }) => theme.ecoColor} !important;
  }
  a:active,a:focus{
    outline:none;
  } 

  a:hover svg path  {
    stroke: ${({ theme }) => theme.ecoColor};
  }


  input:focus-visible, 
  input:active,
  input:focus,
  textarea:focus-visible, 
  textarea:active,
  textarea:focus,
  select:focus-visible, 
  select:active,
  select:focus {
    outline: 1px solid ${({ theme }) => theme.ecoColor};
    border: 1px solid ${({ theme }) => theme.ecoColor} !important; 
  }

  table {
    border-collapse: inherit;
    width: 100%;
    border: 1px solid #eaeaea;
    border-radius: 1rem;
    margin-top: 3.2rem;

    thead {
      tr th {
        font-weight: bold;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.mainText};
        padding: 2rem;
        padding-bottom: 1.2rem;
        border-bottom: 1px solid ${({ theme }) => theme.bgGray};
      }
    }

    tbody {
      tr td {
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding: 2rem;
        padding-bottom: 1.2rem;
        border-bottom: 1px solid ${({ theme }) => theme.bgGray};
      }

      tr td:last-child {
        cursor: pointer;
      }

      tr:last-child td {
        border-bottom: none;
      }
    }
  }

  .Toastify__toast .Toastify__toast-body {
    font-size: 1.6rem;
  }

   /* Variables */
  :root{
    
    /* Reset 1rem = 10px */
      font-size: 11px;
    /* Basic colors
      --white:#ffffff;
      --black:#000000;
    /* ... */
    
    /* Project colors */
    /* --yellow:hsl(57,88%,58%);
    --blue:hsl(220,88%,58%);
    
    /* Layout variables */
    /* --content-width:90rem; */
    /* --content-padding:1rem; */
    
    /* --header-height:10rem; */
    /* --keyvisual-height:60rem; */
  }
`;
