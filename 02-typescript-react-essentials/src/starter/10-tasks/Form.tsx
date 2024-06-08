import { useState } from "react";
import { type Task } from "./types";

type FormProps = {
  addTask: (task: Task) => void;
};

function Form({ addTask }: FormProps) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!text) {
      alert("please enter a task");
      return;
    }

    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });

    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="form task-form">
      <input
        type="text"
        className="form-input"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type="submit" className="btn">
        add task
      </button>
    </form>
  );
}

export default Form;
