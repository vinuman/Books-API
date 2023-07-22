import React from "react";
import { useState } from "react";

export const Main = ({ books, selectedBook }) => {
  const [description, setDescription] = useState(false);
  return (
    <>
      <main className="sm:px-12 sm:py-8 bg-secondary px-2 py-4">
        {books.length === 0 ? (
          <div>
            <h2>Loading...</h2>
          </div>
        ) : (
          <div className="flex">
            <img
              className=" sm:w-60 sm:h-72 w-1/2 h-64"
              src={books[selectedBook].image_url}
              alt={books[selectedBook].title}
            ></img>
            <div className=" sm:ml-8 ml-4">
              <h1 className="sm:text-4xl text-2xl text-white pb-4">
                {books[selectedBook].title}
              </h1>
              <h2 className=" text-slate-400 sm:text-lg text-base pb-4">
                {books[selectedBook].authors}
              </h2>
              {description === true ? (
                <p className=" text-slate-400 text-xs pb-4">
                  {books[selectedBook].description}
                  <span
                    onClick={() => setDescription(false)}
                    className=" ml-2 sm:text-lg text-base text-white cursor-pointer"
                  >
                    Read Less...
                  </span>
                </p>
              ) : (
                <p className=" text-slate-400 text-xs pb-4">
                  {books[selectedBook].description.slice(0, 400)}
                  <span
                    onClick={() => setDescription(true)}
                    className=" ml-2 sm:text-lg text-base text-white cursor-pointer"
                  >
                    Read More...
                  </span>
                </p>
              )}

              <div className=" w-9/12 flex flex-col sm:flex-row justify-between text-white text-base sm:text-lg">
                <p>Rating: {books[selectedBook].rating}</p>
                <p>Format: {books[selectedBook].format}</p>
                <p>Pages: {books[selectedBook].num_pages}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
