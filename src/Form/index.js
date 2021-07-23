import { useState } from "react";
import Result from "../Result";
import {
  FormWrapper,
  FormInput,
  FormFieldset,
  FormLabel,
  FormButton,
  FormLegend,
  FormSelect,
  LoadingData,
  Error,
} from "./styled";
import { useDataRates } from "../useDataRates";

const Form = (rates, date) => {
  const [result, setResult] = useState();
  const ratesData = useDataRates();

  const calculateResult = (amount, currency) => {
    const rate = rates[currency];
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      {ratesData.state === "loading" ? (
        <LoadingData>
          Please wait while the data is downloaded from the Central Bank
        </LoadingData>
      ) : ratesData.state === "error" ? (
        <Error>Ups... something went wrong.</Error>
      ) : (
        <FormFieldset>
          <FormLegend>Kalkulator walut</FormLegend>

          <FormLabel>Wpisz kwotę w PLN</FormLabel>

          <FormInput
            placeholder="wpisz kwotę"
            type="number"
            min="1"
            value={amount}
            required
            onChange={({ target }) => setAmount(target.value)}
          />
        </FormFieldset>
      )}
      <FormFieldset>
        <FormLabel>Wybierz walutę</FormLabel>

        <FormSelect
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </FormSelect>
      </FormFieldset>
      <Result result={result} date={date} />
      <FormButton type="submit">Przelicz</FormButton>
    </FormWrapper>
  );
};

export default Form;
