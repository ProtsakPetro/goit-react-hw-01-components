import { styled } from "styled-components";

export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    gap: 200px;
    
    margin: 20px;
    border-bottom: 2px solid gray;
    
`;

export const FriendsStatus = styled('span')(({ $isOnline }) => {
    return {
    backgroundColor: $isOnline  ? '#fff': '#000',
    borderRadius: '50%',
    width: '15px',
    height: '15px',
}
})