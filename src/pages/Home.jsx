import React from "react";
import { Link } from "react-router-dom";
import van from "../assets/van.jpg";

const Home = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${van})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col gap-8 items-center justify-center h-full text-white p-4  text-center">
          <h1 className="text-4xl md:text-6xl font-bold">You got the travel plans, we got the travel vans</h1>
          <Link className="p-2 bg-amber-600 text-white font-bold w-[90%] " to="/vans">Find you van</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
