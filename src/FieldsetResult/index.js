import "./style.css";
import { Result } from "../Result";

export const FieldsetResult = (result) => {
  <fieldset className="fieldset__result">
    <h1>Po przeliczeniu</h1>
    <Result result={result} />
  </fieldset>;
};
