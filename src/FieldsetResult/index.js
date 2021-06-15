import "./style.css";
import { Result } from "../Result";

export const wynik = (result) => {
  <fieldset className="fieldset__result">
    <legend>Po przeliczeniu</legend>
    <Result result={result} />
  </fieldset>;
};
