import React from "react";
import searchlogo from "./icon-search.svg";

export const Nav = () => {
  return (
    <>
      <nav className="flex px-2 py-4 bg-primary sm:px-8 sm:justify-center">
        <p className="px-2 py-2 text-sm text-white sm:text-2xl">KeazoNBOOKS</p>
        <input
          className=" w-1/2 bg-secondary placeholder:text-sm px-2 ml-2 sm:placeholder:text-lg text-white"
          type="text"
          placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
        ></input>
        <img
          className=" absolute left-72 top-6 w-4 hidden"
          src={searchlogo}
          alt="search logo"
        ></img>
        <button
          className=" w-20 bg-secondary text-white border-2 ml-2 sm:w-36 sm:text-xl"
          type="button"
        >
          Search
        </button>
      </nav>
    </>
  );
};
