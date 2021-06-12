

<form className="js-maiForm">
            <fieldset className="form__fieldset">
                <legend>Kalkulator walut</legend>

                <label className="form__label">Wpisz kwotę w PLN</label>

                <input className="form__input js-form__input" placeholder="wpisz kwotę" type="number" min="1" value=""
                    required name="pln">
            </fieldset>

            <fieldset>

                <label className="form__label">Wybierz walutę na jaką chcesz przeliczyć</label>


                <select className="form__select js__select--currency">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                    <option value="sek">SEK</option>
                    <option value="chf">CHF</option>
                </select>

            </fieldset>

            <fieldset className="fieldset__result">
                <legend>Po przeliczeniu</legend>

                <p className="formResult__paragraph js-result__paragraph">Otrzymasz:</p>

            </fieldset>

            <button className="form__button js-convert__button" type="submit">Przelicz</button>
            <button className="form__button js-remove__button" type="reset">Wyczyść formularz</button>
        </form>