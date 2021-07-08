import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Home} from './Home';
import { ContextProvider } from "./Context"

function App() {
  return (
    <ContextProvider>
      <Home/>
    </ContextProvider>
  );
}

export default App;
