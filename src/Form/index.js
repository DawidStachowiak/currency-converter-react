import { useState } from "react";
import {
  FormWrapper,
  FormInput,
  FormFieldset,
  FormLabel,
  FormButton,
  FormLegend,
  FormSelect,
} from "./styled";

const Form = ({ currencies, calculateResult }) => {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].name);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, selectedCurrency);
  };

  const onReset = (result) => {
    setAmount("");
  };

  return (
    <FormWrapper onSubmit={onFormSubmit} onReset={onReset}>
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

      <FormFieldset>
        <FormLabel>Wybierz walutę</FormLabel>

        <FormSelect
          value={selectedCurrency}
          onChange={({ target }) => setSelectedCurrency(target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.id} value={currency.name}>
              {currency.name}
            </option>
          ))}
        </FormSelect>
      </FormFieldset>

      <FormButton type="submit">Przelicz</FormButton>
      <FormButton type="reset">Wyczyść formularz</FormButton>
    </FormWrapper>
  );
};

export default Form;
