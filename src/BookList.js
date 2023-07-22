import React from "react";

export const BookList = ({ books, setSelectedBook, search, finalInput }) => {
  return (
    <>
      <div className=" sm:p-12 sm:grid sm:grid-cols-4 p-8 flex flex-col justify-center">
        {books.length === 0 ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          books
            .filter((item) => {
              return finalInput.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(finalInput);
            })
            .map((book) => {
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
