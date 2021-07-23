import { ResultParagraph, ResultWrapper, CurrentDayParagraph } from "./styled";
import React from "react";
const Result = ({ result }) => (
  <ResultWrapper>
    {result !== undefined && (
      <ResultParagraph>
        <CurrentDayParagraph>Kursy ładowane są na aktualny dzień</CurrentDayParagraph>
        {result.selectedCurrency}&nbsp;
      </ResultParagraph>
    )}
  </ResultWrapper>
);

export default Result;
