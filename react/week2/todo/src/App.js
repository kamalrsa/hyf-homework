import Counter from "./Counter";
import { Fibonacci } from "./Fibonacci";
import ToDoList from "./ToDoList";

export function App() {
  return (
    <div>
      <h3>Fibonacci Series</h3>
      <Fibonacci></Fibonacci>
      <Counter></Counter>
      <ToDoList></ToDoList>
    </div>
  );
}
export default App;
