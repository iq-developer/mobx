import './App.css';
import Todo from './components/Todo';
import Pie from './components/Pie';

function App() {
  return (
    <div className="App">
      <div className="center-column">
        <Todo />
      </div>
      <div className="right-column">
        <Pie />
      </div>

    </div>
  );
}

export default App;
