import './App.css';
import Todo from './components/Todo';
import TodoHeader from './components/TodoHeader';
import Pie from './components/Pie';
import CompletedEffect from './components/CompletedEffect';

function App() {
  return (
    <div className="App">
      <CompletedEffect />
      <div className="centerColumn">
        <TodoHeader />
        <Todo />
      </div>
      <div className="rightColumn">
        <Pie />
      </div>
    </div>
  );
}

export default App;
