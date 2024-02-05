import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <header id="searchbar">
        <h1>Search to find your new book</h1>
      </header>
      <main></main>
      <NavLink to="books/add">add book</NavLink>
      <br />
      <NavLink to="books/123">123book</NavLink>
    </>
  );
}

export { Home };
