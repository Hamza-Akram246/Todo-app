"use client";

import { useState, ChangeEvent } from "react";

interface Todo {
  movie: string;
  id: number;
}

export default function Home() {
  // define state
  const [todos, setTodos] = useState<Todo[]>([
    { movie: "Django Unchained", id: 1 },
    { movie: "Catch Me If You Can", id: 2 },
  ]);

  const [inputVal, setInput] = useState("");
  const [id, setId] = useState<number>(0);

  // function
  const addItem = () => {
    const obj = todos.find((item) => item.id === id);
    if (obj) {
      const newArray = todos.filter((item) => item.id !== obj.id);
      setTodos([...newArray, { movie: inputVal, id }]);
      setInput("");
      setId(0);
      return;
    }

    setTodos([...todos, { movie: inputVal, id }]);
    setInput("");
    setId(0);
  };

  const editItem = (id: number) => {
    const obj = todos.find((item) => item.id === id);
    if (obj) {
      setInput(obj.movie);
      setId(obj.id);
    }
  };

  const delItem = (id: number) => {
    const newArray = todos.filter((item) => item.id !== id);
    setTodos(newArray);
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center text-[40px] underline">Todo App</h1>

      {/* input div */}
      <div className="flex justify-between gap-4 mt-5">
        <input
          type="text"
          value={inputVal}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          className="w-[40%] p-2 text-lg border-b focus:outline-none"
          placeholder="Write movie name"
        />
        <input
          type="number"
          value={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setId(Number(e.target.value))
          }
          className="w-[20%] p-2 text-lg border-b focus:outline-none"
          placeholder="Write ID"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 hover:bg-blue-300 w-[20%] text-white p-2 rounded"
        >
          Add Movie
        </button>
      </div>

      {/* movie list */}
      <h1 className="text-center text-[40px] underline mt-5">Movies List</h1>

      <div className="grid grid-cols-2 gap-5 mt-5">
        {todos.map((item, i) => (
          <div className="shadow p-4" key={item.id}>
            <div className="flex justify-between text-lg">
              <span className="shadow rounded-full h-8 w-8 text-center my-auto">
                {i + 1}
              </span>
              <span
                onClick={() => delItem(item.id)}
                className="shadow rounded-full h-8 w-8 text-center my-auto cursor-pointer text-red-700"
              >
                x
              </span>
            </div>

            <div className="mt-5 text-[30px] text-gray-700">{item.movie}</div>
            <div>
              <h2
                onClick={() => editItem(item.id)}
                className="text-right cursor-pointer"
              >
                Edit
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
