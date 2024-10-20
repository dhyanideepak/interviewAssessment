import { CounterProvider } from "./context/CounterContext";
import CounterDisplay from './Components/CounterDisplay';
import CounterControls from "./components/CounterControls";

function App() {

  return (
    <>
      <CounterProvider>
        <div className="App">
          <h1>React Counter using Context API</h1>
          <CounterDisplay />
          <CounterControls />
        </div>
      </CounterProvider>
    </>
  );
}

export default App
