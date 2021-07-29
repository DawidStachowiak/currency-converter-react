import styled from "styled-components";

export const ResultParagraph = styled.p`
  font-size: 18px;
  font-family: "Lato", sans-serif;
  text-align: center;
  padding-top: 30px;
`;

export const ResultWrapper = styled.div`
  border-color: ${({ theme }) => theme.colors.mariner};
  border-radius: 3px;
  margin-top: 15px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.twilightBlue};
  height: 80px;
`;

