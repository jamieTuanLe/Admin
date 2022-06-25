import styled from "styled-components";

export const CreateButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid rgba(28, 37, 60, 0.19);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    
    &:hover {
        background: #EDB01B;
        svg {
            path {
                stroke: #ffffff;
            }
        }
        div {
            color: #FFFFFF;
        }
    }
`

export const NameButton = styled.div`
    font-size: 16px;
    font-weight: 700;
    font-family: "Inter";
    color: #EDB01B;
    margin-left: 14px;
`