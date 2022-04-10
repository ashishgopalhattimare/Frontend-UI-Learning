import './App.scss';
import Header from './components/Header/Header';
import { Todos } from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Header title="TodoList" searchBar={false}/>
      <Todos />
    </div>
  );
}

export default App;
