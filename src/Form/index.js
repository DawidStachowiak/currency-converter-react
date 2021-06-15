import "./style.css";
import { useState } from "react";
import { Result } from "../Result";

export const Form = ({ currencies }) => {
  const [result, setResult] = useState();
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[2].name);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, selectedCurrency);
  };

  const calculateResult = (amount, selectedCurrency) => {
    const rate = currencies.find(({ name }) => name === selectedCurrency).price;
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      selectedCurrency,
    });
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
            <option key={currency.id} value={currency.name}>
              {currency.name}
            </option>
          ))}
        </select>
      </fieldset>
                <Result result={result} />
      <button className="form__button" type="submit">
        Przelicz
      </button>
      <button className="form__button" type="reset">
        Wyczyść formularz
      </button>
    </form>
  );
};
