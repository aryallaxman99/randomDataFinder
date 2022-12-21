//for fetching random data

import { useState } from "react";

const FakeData = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState("");
  const [types, setTypes] = useState("");
  const [body, setBody] = useState("");

  fetch("https://dummyjson.com/posts/32")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      setName(json.title);
      setCategories(json.tags[0] + "/" + json.tags[1]);
      setTypes("story");
      setBody(json.body);
    });

  console.log(name, categories, types, body);

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
        setName(name);
        setCategories(categories);
        setTypes(types);
        setBody(body);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <button onClick={submit}>ok</button>
    </>
  );
};
export default FakeData;
