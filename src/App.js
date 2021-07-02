import "./App.css";
import { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import { currencies } from "./Form/currencies.js";
import Result from "./Result";
import { Clock } from "./Clock";
function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, selectedCurrency) => {
    const rate = currencies.find(({ name }) => name === selectedCurrency).price;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      selectedCurrency,
    });
  };
  return (
    <Container>
      <Clock />
      <Form currencies={currencies} calculateResult={calculateResult} />
      <Result result={result} />
    </Container>
  );
}

export default App;
