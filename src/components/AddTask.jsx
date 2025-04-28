import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, seatTitle] = useState("");
  const [description, seatDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="digite o titulo da tafera"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => seatTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="digite a descrição da tafera"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => seatDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          //verificar se o titulo e a descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("preencha o titulo e a descrição da tarefa.");
          }
          onAddTaskSubmit(title, description);
          seatTitle("");
          seatDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
