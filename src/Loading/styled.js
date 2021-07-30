import styled from "styled-components";

export const LoaderBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.desertStorm};
`;

export const Image = styled.img`
    max-width: 80%;
`;
