import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple UI React App bbb</h1>
        <p>This is for CICD test.</p>
      </header>
      <main>
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </main>
    </div>
  );
}

export default App;
