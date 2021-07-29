import styled from "styled-components";

export const FormWrapper = styled.form`
  color: ${({ theme }) => theme.colors.dodgerBlue};
  text-align: center;
  width: 100%;
`;

export const FormInput = styled.input`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.desertStorm};
  border-color: ${({ theme }) => theme.colors.cornflowerBlue};
  max-width: 350px;
  border-radius: 4px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const FormFieldset = styled.fieldset`
  border-color: ${({ theme }) => theme.colors.mariner};
  border-radius: 3px;
  margin-top: 15px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.twilightBlue};
`;

export const FormLabel = styled.label`
  font-size: 18px;
  display: inline-block;
  max-width: 300px;
  width: 100%;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.midnightBlue};
  margin-left: 15px;
  margin-top: 10px;
  margin-right: 15px;
`;

export const FormButton = styled.button`
  width: 100%;
  border: none;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.steelBlue};
  color: ${({ theme }) => theme.colors.wildSand};
  margin-top: 15px;
  font-family: "Lato", sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.colors.indigo};
  }
`;

export const FormLegend = styled.legend`
  background-color: ${({ theme }) => theme.colors.blackOlive};
  border-radius: 3px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.steelBlue};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.wildSand};
  font-family: "Lato", sans-serif;
`;

export const FormSelect = styled.select`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.steelBlue};
  border-color: ${({ theme }) => theme.colors.mariner};
  max-width: 350px;
  border-radius: 4px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.wildSand};
  font-family: "Lato", sans-serif;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.mariner};
`;

export const LoadingData = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const CurrentDayParagraph = styled.p`
  color: ${({ theme }) => theme.colors.wildSand};
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 15px;
`;
