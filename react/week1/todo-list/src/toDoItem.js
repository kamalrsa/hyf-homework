const ToDoItem = (props) => (
  <li>
    {props.list.description}:{props.list.deadline}
  </li>
);
export default ToDoItem;
