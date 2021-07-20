import { ResultParagraph, ResultWrapper, setCurrentDay } from "./styled";
import React from "react";
const Result = ({ result }) => (
  <ResultWrapper>
    {result !== undefined && (
      <ResultParagraph>
        <setCurrentDay>Kursy ładowane są na aktualny dzień</setCurrentDay>
        Wynik: &nbsp;{result.targetAmount.toFixed(2)}&nbsp;
        {result.selectedCurrency}&nbsp;
      </ResultParagraph>
    )}
  </ResultWrapper>
);

export default Result;
