import './App.css';
import Todo from './components/Todo';
import TodoHeader from './components/TodoHeader';
import Pie from './components/Pie';
import CompletedEffect from './components/CompletedEffect';

function App() {
  return (
    <div className="App">
      <CompletedEffect />
      <div className="center-column">
        <TodoHeader />
        <Todo />
      </div>
      <div className="right-column">
        <Pie />
      </div>
    </div>
  );
}

export default App;
