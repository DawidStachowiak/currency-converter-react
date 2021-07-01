import styled from "styled-components";

export const FormWrapper = styled.div`
  color: rgb(71, 134, 250);
  text-align: center;
  width: 100%;
`;

export const FormInput = styled.input`
  padding: 10px;
  background-color: rgb(241, 241, 238);
  border-color: rgb(70, 130, 180);
  max-width: 350px;
  border-radius: 4px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const FormFieldset = styled.fieldset`
  border-color: rgb(30, 91, 224);
  border-radius: 3px;
  margin-top: 15px;
  margin-bottom: 20px;
  background-color: rgb(251, 255, 255);
`;

export const FormLabel = styled.label`
  font-size: 18px;
  color: hsl(0, 76%, 59%);
  display: inline-block;
  max-width: 300px;
  width: 100%;
  font-size: 18px;
  color: midnightblue;
  margin-left: 15px;
  margin-top: 10px;
  margin-right: 15px;
`;

export const FormButton = styled.button`
  width: 100%;
  border: none;
  padding: 15px;
  background-color: rgb(70, 130, 180);
  color: hsl(0, 0%, 96%);
  margin-top: 15px;
  font-family: "Lato", sans-serif;

  &:hover{
    background-color: rgb(69, 132, 248);
  }
`;

export const FormLegend = styled.legend`
background-color: rgb(70, 130, 180);
  border-radius: 3px;
  padding: 5px;
  border: 1px solid rgb(70, 130, 180);
  font-size: 18px;
  color: hsl(0, 0%, 96%);
  font-family: "Lato", sans-serif;
`;

export const FormSelect = styled.select`
padding: 10px;
background-color: rgb(70, 130, 180);
border-color: rgb(30, 91, 224);
max-width: 350px;
border-radius: 4px;
width: 100%;
margin-top: 20px;
margin-bottom: 20px;
color: hsl(0, 0%, 96%);
font-family: "Lato", sans-serif;
`
;