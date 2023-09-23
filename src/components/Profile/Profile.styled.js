import { styled } from "styled-components";

export const ProfilePhoto = styled.img`
    margin: 0 auto;
    height: 133px;
    width: 133px;
    border-radius: 30%;
    border: 50px solid rgb(166,166,166, 0.25);
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0 10px 50px gray;
`;

export const ProfileText = styled.p`
    margin: 15px;
    text-align: center;
`;

export const StatsList = styled.ul`
    margin-top: 33px;
    gap: 99px;
    display: flex;
    font-size: 20px;
    color: gray;
    border-top: 1px solid gray;
    justify-content: center;
  
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 33px;
margin-bottom: 33px;
margin-top: 33px;
`
;

 