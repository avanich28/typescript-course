import { useEffect, useState } from "react";
import { type Task } from "./types";
import Form from "./Form";
import List from "./List";

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  function addTask(task: Task): void {
    setTasks((data) => [...data, task]);
  }

  function toggleTask(id: string): void {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) return { ...task, isCompleted: !task.isCompleted };
        return task;
      })
    );
  }

  useEffect(
    function () {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    [tasks]
  );

  return (
    <section>
      <Form addTask={addTask} />
      <List toggleTask={toggleTask} tasks={tasks} />
    </section>
  );
}
export default Component;
