import "./style.css";
import { Result } from "../Result";

export const FieldsetResult = (result) => {
  <fieldset className="fieldset__result">
    <legend>Po przeliczeniu</legend>
    <Result result={result} />
  </fieldset>;
};
