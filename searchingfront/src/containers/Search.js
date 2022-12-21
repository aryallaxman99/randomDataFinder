import { useEffect, useState } from "react";

const Search = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4004/finder/search`)
      .then((res) => res.json())
      .then((value) => setFetchedData(value));
  }, []);

  const random = () => {
    if (fetchedData) {
      let data = fetchedData[Math.floor(Math.random() * fetchedData.length)];
      setRandomData([data]);
    }
  };

  return (
    <div className="App">
      <>
        <button onClick={() => random()}>Random</button>
      </>

      <>
        {randomData && randomData.length > 0
          ? randomData.map((item) => (
              <ul>
                <li>
                  <strong>Name: </strong>
                  {item.title}
                </li>
                <li>
                  <strong>Categories:</strong> {item.categories}
                </li>
                <li>
                  <strong>Types:</strong> {item.types}
                </li>
                <li>{item.body}</li>
              </ul>
            ))
          : null}
      </>
    </div>
  );
};

export default Search;
