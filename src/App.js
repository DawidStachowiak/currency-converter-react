import "./App.css";
import Container from "./Container";
import { Form } from "./Form";
import { currencies } from "./currencies";

function App() {

  
  return (

    
    <Container>
      <Form currencies={currencies} />
      <Result result={result} />
    </Container>
  );
}

export default App;
