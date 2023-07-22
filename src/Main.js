import React from "react";
import { useState } from "react";

export const Main = ({ books, selectedBook }) => {
  const [description, setDescription] = useState(false);
  return (
    <>
      <main className="px-12 py-8 bg-secondary">
        {books.length === 0 ? (
          <div>
            <h2>Loading...</h2>
          </div>
        ) : (
          <div className="flex">
            <img
              className=" w-60 h-72"
              src={books[selectedBook].image_url}
              alt={books[selectedBook].title}
            ></img>
            <div className=" ml-8">
              <h1 className="text-4xl text-white pb-4">
                {books[selectedBook].title}
              </h1>
              <h2 className=" text-slate-400 text-lg pb-4">
                {books[selectedBook].authors}
              </h2>
              {description === true ? (
                <p className=" text-slate-400 text-sm pb-4">
                  {books[selectedBook].description}
                  <span
                    onClick={() => setDescription(false)}
                    className=" ml-2 text-lg text-white cursor-pointer"
                  >
                    Read Less...
                  </span>
                </p>
              ) : (
                <p className=" text-slate-400 text-sm pb-4">
                  {books[selectedBook].description.slice(0, 400)}
                  <span
                    onClick={() => setDescription(true)}
                    className=" ml-2 text-lg text-white cursor-pointer"
                  >
                    Read More...
                  </span>
                </p>
              )}

              <div className=" w-9/12 flex justify-between text-white">
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
