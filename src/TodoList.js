import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./TodoList.css";
const TodoList = () => {
  const [lists, setLists] = useState([]);

  const handleTextDecor = (id) => {
    alert("i dont know how to add line through");
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/list`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/list")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, [lists]);
  const deleteItem = (id) => {
    const success = window.confirm("Are you sure you want to delete this item");
    if (success) {
      const url = `http://localhost:5000/list/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const restItem = lists.filter((list) => list._id !== id);
          setLists(restItem);
        });
    }
  };
  return (
    <div className="mt-5 w-50 mx-auto">
      <div className="mb-5">
        <h2>Add to do list</h2>
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Name" {...register("name", { required: true })} />
          <input placeholder="Description" {...register("about")} />
          <input
            className="text-secondary fw-bold"
            type="submit"
            value="AddToDoList"
          />
        </form>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list._id}>
              <td>{list.name}</td>
              <td id="my">{list.about}</td>
              <td>
                <button
                  onClick={() => handleTextDecor()}
                  className=" border-0 bg-success rounded text-white fw-bold px-3 me-4"
                >
                  Complete
                </button>

                <button
                  onClick={() => deleteItem(list._id)}
                  className=" border-0 bg-danger rounded text-white fw-bold px-3 "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
