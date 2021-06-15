import "./style.css";
import React from "react";
export const Result = ({ result }) =>
  result !== undefined && (
    <p className="form__resultParagraph">
      Otrzymasz:{result.targetAmount}&nbsp;{result.selectedCurrency}
    </p>
  );
