import { ResultParagraph, ResultWrapper} from "./styled";
import React from "react";
const Result = ({ result }) => (
  <ResultWrapper>
    {result !== undefined && (
      <ResultParagraph>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.selectedCurrency}
                </strong>
      </ResultParagraph>
    )}
  </ResultWrapper>
);

export default Result;
