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

const Form = () => {
  const ratesData = useDataRates();

  const [result, setResult] = useState();

  const calculateResult = (amount, selectedCurrency) => {
    const rate = ratesData.rates[selectedCurrency];
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      selectedCurrency,
    });
  };
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, selectedCurrency);
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
          value={selectedCurrency}
          onChange={({ target }) => setSelectedCurrency(target.value)}
        >
          {Object.keys(ratesData.rates).map((selectedCurrency) => (
            <option key={selectedCurrency} value={selectedCurrency}>
              {selectedCurrency}
            </option>
          ))}
        </FormSelect>
      </FormFieldset>
      <Result result={result} />
      <FormButton type="submit">Przelicz</FormButton>
    </FormWrapper>
  );
};

export default Form;
