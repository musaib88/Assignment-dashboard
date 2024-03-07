import Cryptocurrency from "./pages/cryptocurrency/Cryptocurrency";
import {Navbar} from './components/navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cryptocurrency></Cryptocurrency>
    </div>
  );
}

export default App;
