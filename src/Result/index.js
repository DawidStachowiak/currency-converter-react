import "./style.css";
import React from "react";
export const Result = ({ result }) =>
  result !== undefined && (
    <p className="form__resultParagraph">
      Otrzymasz:&nbsp;{result.targetAmount}&nbsp;{result.selectedCurrency}
    </p>
  );
