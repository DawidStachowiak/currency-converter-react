import "./style.css";
import React from "react";
const Result = ({ result }) => (
  <div class="form__resultBox">
    {result !== undefined && (
      <p className="form__resultParagraph">Wynik:
        &nbsp;{result.targetAmount.toFixed(2)}&nbsp;{result.selectedCurrency}
        
      </p>
    )}
  </div>
);

export default Result;
