import logo from './logo.svg';
import './App.css';
import CreateTodo from './components/CreateTodo';
import DisplayTodo from './components/DisplayTodo';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App container">
      <h2>Redux todo app</h2>
      <CreateTodo/>
      <DisplayTodo/>
    </div>
    </Provider>
  );
}

export default App;
