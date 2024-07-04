import React from "react";

const Hero = () => {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center">
        Find your next <br /> dream job
      </h1>
      <p className="text-center text-gray-600 mt-2 max-w-5xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum
        vero mollitia, ipsum provident aut sed quo quas quasi accusamus cum qui
        odit facilis a quidem. Ipsam nihil molestias blanditiis.
      </p>
      <form className="flex gap-2 mt-4 max-w-xl mx-auto">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md"
          placeholder="Search phrase.."
        />
        <button className=" bg-blue-600 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
