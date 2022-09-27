import { Todo } from "../types/Todo";


type Props = {
  todo: Todo[]
};


const Todo = ({ todo }: Props) => {

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <ul>
        {todo.map((todo, index) => (
          <div key={index}>
            <li>{todo.title} - {todo.completed.toString()}</li>
          </div>
        ))}
      </ul>

    </div>
  );
}


export default Todo;


export const getServerSideProps = async () => {

  const resp = await fetch('https://jsonplaceholder.typicode.com/todos');

  const todoList: Todo[] = await resp.json();

  return {
    props: {
      todo: todoList
    },
  };

}