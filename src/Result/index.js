import { ResultParagraph, ResultWrapper} from "./styled";
import React from "react";
const Result = ({ result }) => (
  <ResultWrapper>
    {result !== undefined && (
      <ResultParagraph>
        
        {result.selectedCurrency}&nbsp;
      </ResultParagraph>
    )}
  </ResultWrapper>
);

export default Result;
