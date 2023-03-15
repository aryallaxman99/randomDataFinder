import { useState } from "react";

const Search = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");

  const random = () => {
    const data = fetch(`http://localhost:4004/finder/search?q=${search}`)
      .then((res) => res.json())
      .then((value) => setFetchedData(value.data));
  };

  return (
    <div className="App">
      <>
        <input
          type="text"
          onKeyUp={(event) => setSearch(event.target.value)}
        ></input>
        <button onClick={() => random()}>Search</button>
      </>

      <>
        {fetchedData && fetchedData.length > 0
          ? fetchedData.map((item, id) => (
              <ul>
                <li>
                  <strong>Name: </strong>
                  {item.item.title}
                </li>
                <li>
                  <strong>Categories:</strong> {item.item.categories}
                </li>
                <li>
                  <strong>Types:</strong> {item.item.types}
                </li>
                <li>{item.item.body}</li>
              </ul>
            ))
          : null}
      </>
    </div>
  );
};

export default Search;
