import "./style.css";
import { useState } from "react";
import { Result } from "../Result";

export const Form = ({ currencies }) => {
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const onSubmit = (event) => {
    event.preventDefaul();
    const currency = currencies.find(({ name }) => name === selectedCurrency);
    const result = calculateResult(amount, currency.price);
    setResult({ value: result, currency: currency.id });
  };

  const calculateResult = (amount, price) => {
    return amount / price;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend>Kalkulator walut</legend>

        <label className="form__label">Wpisz kwotę w PLN</label>

        <input
          className="form__input"
          placeholder="wpisz kwotę"
          type="number"
          min="1"
          value={amount}
          required
          onChange={({ target }) => setAmount(target.value)}
        />
      </fieldset>

      <fieldset>
        <label className="form__label">
          Wybierz walutę na jaką chcesz przeliczyć
        </label>

        <select
          className="form__select"
          value={selectedCurrency}
          onChange={({ target }) => setSelectedCurrency(target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.id} value={currency.name} >{currency.name}</option>
          ))}
        </select>
      </fieldset>

      <fieldset className="fieldset__result">
        <legend>Po przeliczeniu</legend>
        <Result result={result} />
      </fieldset>

      <button className="form__button js-convert__button" type="submit">
        Przelicz
      </button>
      <button className="form__button js-remove__button" type="reset">
        Wyczyść formularz
      </button>
    </form>
  );
};
