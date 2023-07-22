import React from "react";
import searchlogo from "./icon-search.svg";

export const Nav = ({ search, setSearch, setFinalInput }) => {
  const handleRefresh = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <>
      <nav className="flex px-2 py-4 bg-primary sm:px-8 sm:justify-center">
        <p
          onClick={handleRefresh}
          className="px-2 py-2 text-sm text-white sm:text-2xl cursor-pointer"
        >
          KeazoNBOOKS
        </p>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className=" w-1/2 bg-secondary placeholder:text-sm px-2 ml-2 sm:placeholder:text-lg text-white"
          type="text"
          value={search}
          placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
        ></input>
        <img
          className=" absolute left-72 top-6 w-4 hidden"
          src={searchlogo}
          alt="search logo"
        ></img>
        <button
          onClick={() => setFinalInput(search)}
          className=" w-20 bg-secondary text-white border-2 ml-2 sm:w-36 sm:text-xl"
          type="button"
        >
          Search
        </button>
      </nav>
    </>
  );
};
