import Crud from './CRUD/Crud';
import './App.css';

const server = 'http://localhost:7777';

function App() {
  return (
    <div className="App">
      <Crud server={server} />
    </div>
  );
}

export default App;
