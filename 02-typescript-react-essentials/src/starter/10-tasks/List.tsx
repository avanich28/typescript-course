import { type Task } from "./types";

type ListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
};

function List({ tasks, toggleTask }: ListProps) {
  return (
    <ul className="list">
      {tasks?.map((task) => (
        <li key={task.id}>
          <p className="task-text">{task.description}</p>
          <input
            type="checkbox"
            onChange={() => toggleTask(task.id)}
            checked={task.isCompleted}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
