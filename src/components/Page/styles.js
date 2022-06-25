import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;

  display: flex;
`;

export const Right = styled.div`
  margin-left: 1px;
  width: calc(100% - 255px);
`;

export const Main = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  transition: all 0.5s;

  padding: 4rem 1.5rem;
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.mainColor};
  box-shadow: 0px 1px 0px #f4f5f6;
  padding: 1.2rem 1.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }

  .custom-header {
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .custom-button {
    background: ${({ theme }) => theme.ecoColor};
    color: ${({ theme }) => theme.mainColor};
    border: none;
    height: 40px;
    min-width: 175px;
    max-width: fit-content;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 1024px) {
      justify-content: space-between;
      width: 100%;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .custom-input {
      width: 225px;
      height: 40px;

      @media (max-width: 1024px) {
        width: 100%;
      }

      input {
        height: 25px !important;
        background: #f4f5f6;
        box-shadow: 0px 0px 40px rgba(48, 73, 191, 0.05);
        border: none;
        border-radius: 2.5rem;
      }
    }

    .avatar {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      font-weight: 700;
      font-size: 1.6rem;
      line-height: 2.4rem;
      cursor: pointer;

      white-space: nowrap;
    }
  }
`;

export const SearchHeader = styled.div`
  width: 295px;
  height: 40px;
  background: #F4F7FE;
  border-radius: 49px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 70%;
    height: 40px;
    background: transparent;
    border: none;
    &:focus {
      border: none !important;
      outline: none !important;
    }
    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #8F9BBA;
    }
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  top: calc(50%-10px);
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavLeft = styled.section`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 999;

  background: ${({ theme }) => theme.mainColor};
  border-right: 1px solid ${({ theme }) => theme.mainColor};
  box-shadow: 1px 0px 9px rgba(0, 0, 0, 0.25);

  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 250px;
  height: 100vh;

  a {
    .icon {
      position: relative;
      width: 20px;
      height: 20px;
      svg {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
    }

    .title {
      transition-delay: 0.2s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.2s;
      text-align: left;
      width: 100%;
      opacity: 1;
      z-index: 1;
    }
  }
`;


export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.2rem 4.6rem;
  border-bottom: 1px solid #F4F7FE;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const LogoTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111;
  .main-color {
    color: ${({ theme }) => theme.ecoColor};
  }
`;

export const MenuBody = styled.div`
  flex: 1 1 60%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0 1rem 0;

  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      width: 100%;
      text-align: center;
      padding: 15px 8px;
      position: relative;
      display: flex;

      &:after {
        content: "";
        display: none;
        width: 4px;
        height: 60%;
        background-color: ${({ theme }) => theme.ecoColor};
        position: absolute;
        top: 10px;
        right: 0;
        border-radius: 8px;
      }

      &:hover:after {
        display: inline-block;
      }

      a {
        display: flex;
        gap: 2.5rem;

        width: 100%;
        border-radius: 8px;
        padding: 0px 10px;

        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2rem;
        color: ${({ theme }) => theme.mainText};

        &:hover svg path {
          fill: ${({ theme }) => theme.ecoColor};
          stroke: ${({ theme }) => theme.ecoColor};
        }
      }
    }



    .active {
      &:after {
        display: inline-block;
      }

      a {
        color: #111;
        font-weight: 700;
      }

      a svg path {
        fill: ${({ theme }) => theme.ecoColor};
        stroke: ${({ theme }) => theme.ecoColor};
      }
    }
  }
`;

export const BreadCrumb = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #707eae;
  margin: 0;
`;

export const Icon = styled.div``;
