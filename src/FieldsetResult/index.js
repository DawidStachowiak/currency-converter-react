import "./style.css";
import { Result } from "../Form/Result";

export const FieldsetResult = (result) => {
  <div class="form__resultBox">
    <h1>Po przeliczeniu</h1>

    <p class="formResult__paragraph">
      <Result result={result} />
    </p>
  </div>;
};
