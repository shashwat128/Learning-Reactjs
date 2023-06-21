import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: "John Wick",
      openingText: "This movie is of garbage value.",
      releaseDate: "2023-06-18",
    },
    {
      id: 2,
      title: "Spiderman",
      openingText: "A man who swings using strings.",
      releaseDate: "2023-06-25",
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
