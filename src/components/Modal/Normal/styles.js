import styled from "styled-components";
import { Modal } from "reactstrap";

export const ModalWrapper = styled(Modal)`
  .modal-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    padding-bottom: 2.4rem;
    border-bottom: 1px solid ${({ theme }) => theme.bgGray};

    .modal-title {
      flex: 1;
      text-align: center;

      font-weight: bold;
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    button {
      font-weight: bold;
      border: 2px solid ${({ theme }) => theme.mainText};
      border-radius: 50%;
      font-size: 12px;
      padding: 7px;
    }
  }
  .modal-content {
    border: 2px solid ${({ theme }) => theme.ecoColor};
    border-radius: 1rem;
    padding: 1.6rem;
  }

  .modal-footer {
    display: flex;
    justify-content: center;
    border-top: none;
    gap: 2rem;
    padding-top: 2.4rem;

    &.is-border {
      border-top: 1px solid ${({ theme }) => theme.bgGray};
    }

    .btn-left {
      border: 1px solid ${({ theme }) => theme.ecoColor};
      color: ${({ theme }) => theme.ecoColor};
      max-width: 110px;
    }

    .btn-right {
      border: none;
      color: ${({ theme }) => theme.mainColor};
      background: ${({ theme }) => theme.ecoColor};
      max-width: 160px;
    }
  }

  @media (min-width: 992px) {
    .modal-content {
      padding: 3.2rem;
    }
  }
`;
