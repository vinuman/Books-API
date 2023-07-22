import React from "react";

export const BookList = ({ books, setSelectedBook }) => {
  return (
    <>
      <div className=" p-12 grid grid-cols-4">
        {books.length === 0 ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          books.map((book) => {
            return (
              <div
                onClick={() => {
                  setSelectedBook(book.id - 1);
                  document.documentElement.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                key={book.id}
                className="mb-8 w-52 cursor-pointer"
              >
                <img
                  className=" w-52 h-64"
                  src={book.image_url}
                  alt={book.title}
                ></img>
                <h2>{book.title}</h2>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
