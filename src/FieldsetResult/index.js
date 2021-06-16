import { Result } from "../Form/Result";

export const FieldsetResult = (result) => {
  <fieldset class="fieldset__result">
    <h1>Po przeliczeniu</h1>

    <p class="formResult__paragraph js-result__paragraph">
      <Result result={result} />
    </p>
  </fieldset>;
};
