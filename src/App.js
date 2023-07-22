import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Main } from "./Main";
import { BookList } from "./BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(1);
  const [search, setSearch] = useState("");
  const [finalInput, setFinalInput] = useState("");

  useEffect(() => {
    fetch("https://example-data.draftbit.com/books?_limit=10")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="relative">
        <Nav
          search={search}
          setSearch={setSearch}
          setFinalInput={setFinalInput}
        />
        <Main books={books} selectedBook={selectedBook} />
        <BookList
          books={books}
          setSelectedBook={setSelectedBook}
          search={search}
          finalInput={finalInput}
        />
      </div>
    </>
  );
}

export default App;
