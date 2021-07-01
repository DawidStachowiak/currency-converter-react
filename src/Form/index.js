import "./style.css";
import { useState } from "react";
import { FormWrapper, FormInput, FormFieldset, FormLabel } from "./styled";



const Form = ({ currencies, calculateResult }) => {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].name);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, selectedCurrency);
  };

  const onReset = () =>{
    setAmount("");
  };

  return (
    <FormWrapper onSubmit={onFormSubmit} onReset={onReset}>
      <FormFieldset>
        <legend>Kalkulator walut</legend>

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

        <select
          className="form__select"
          value={selectedCurrency}
          onChange={({ target }) => setSelectedCurrency(target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.id} value={currency.name}>
              {currency.name}
            </option>
          ))}
        </select>
      </FormFieldset>

      <button className="form__button" type="submit">
        Przelicz
      </button>
      <button className="form__button" type="reset">
        Wyczyść formularz
      </button>
    </FormWrapper>
  );
};

export default Form;
