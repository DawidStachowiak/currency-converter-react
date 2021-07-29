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
  CurrentDayParagraph,
} from "./styled";
import { useDataRates } from "../useDataRates";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useDataRates();
  
  const calculateResult = (currency, amount) => {
      const rate = ratesData.rates[currency];

      setResult({
          sourceAmount: +amount,
          targetAmount: amount * rate,
          selectedCurrency,
      });
  }

  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
      event.preventDefault();
      calculateResult(selectedCurrency, amount);
  }
  
  return (
    <FormWrapper onSubmit={onSubmit}>
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
          
          {!! ratesData.rates && Object.keys(ratesData.rates).map((selectedCurrency) => (
            <option key={selectedCurrency} value={selectedCurrency}>
              {selectedCurrency}
            </option>
          ))}
        </FormSelect>
      </FormFieldset>

      <Result result={result} />
      <CurrentDayParagraph>
       Kursy ładowane są na dzień {ratesData.date}
      </CurrentDayParagraph>
      <FormButton type="submit">Przelicz</FormButton>
    </FormWrapper>
  );
};

export default Form;
