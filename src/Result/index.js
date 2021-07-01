import {ResultParagraph, ResultWrapper} from "./styled";
import React from "react";
const Result = ({ result }) => (
  <ResultWrapper>
    {result !== undefined && (
      <ResultParagraph>
        Wynik: &nbsp;{result.targetAmount.toFixed(2)}&nbsp;
        {result.selectedCurrency}
      </ResultParagraph>
    )}
  </ResultWrapper>
);

export default Result;
