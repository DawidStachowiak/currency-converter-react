import "./style.css";
import { useState } from "react";

const Form = ({ currencies, calculateResult }) => {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[2].name);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, selectedCurrency);
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
        <label className="form__label">Wybierz walutę</label>

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

      <button className="form__button" type="submit">
        Przelicz
      </button>
      <button className="form__button" type="reset">
        Wyczyść formularz
      </button>
    </form>
  );
};

export default Form;
