import "./style.css";
import React from "react";
const Result = ({ result }) => (
  <div class="form__resultBox">
    {result !== undefined && (
      <p className="form__resultParagraph">
        &nbsp;{result.targetAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
        {result.selectedCurrency}
      </p>
    )}
  </div>
);

export default Result;
