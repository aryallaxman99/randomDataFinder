import { useState } from "react";
import "./Send.css";

const Send = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState("");
  const [types, setTypes] = useState("");
  const [body, setBody] = useState("");

  const submit = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, categories, types, body }),
    };
    fetch("http://localhost:4004/finder/send", requestOptions)
      .then(() => {
        setName("");
        setCategories("");
        setTypes("");
        setBody("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        className="textfield"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <input
        type="text"
        placeholder="categories"
        className="textfield"
        value={categories}
        onChange={(event) => {
          setCategories(event.target.value);
        }}
      ></input>

      <input
        type="text"
        className="textfield"
        placeholder="type"
        value={types}
        onChange={(event) => {
          setTypes(event.target.value);
        }}
      ></input>

      <textarea
        type="text"
        placeholder="body"
        className="bodytextfield"
        value={body}
        onChange={(event) => {
          setBody(event.target.value);
        }}
      ></textarea>

      <div className="button">
        <button onClick={submit}>submit</button>
      </div>
    </div>
  );
};

export default Send;
