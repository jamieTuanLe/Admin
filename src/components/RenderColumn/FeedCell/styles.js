import styled from "styled-components";

export const FeedCell = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

`

export const Image = styled.div`
    position: relative;
        img {
            border-radius: 10px;
        }

`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    color: #19212A;
    margin: 0;
    margin-left: 20px;

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`