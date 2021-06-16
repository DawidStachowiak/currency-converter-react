import "./style.css";
import { Result } from "../Form/Result";

export const FieldsetResult = (result) => {
  <div class="result__box">
    <h1>Po przeliczeniu</h1>

    <p class="formResult__paragraph">
      <Result result={result} />
    </p>
  </div>;
};
