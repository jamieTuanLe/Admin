import styled from "styled-components";

export const PostCell = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 270px;
    height: ${props => props.config.height};
    align-items: center;

`

export const Image = styled.div`
    flex: 2 1 0;
    height: ${props => props.config.height};
    position: relative;
        img {
            border-radius: 10px;
        }

`

export const Title = styled.div`
    flex: 3 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    color: #19212A;
    margin: 0;
    margin-left: 20px;
`