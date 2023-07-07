import React from "react";
import { Button } from "react-bootstrap";

const Moreextra = () => {
  return (
    <div className="bg-gray-300 py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Elevate Your Game</h2>
      <p className="text-xl text-gray-800 mb-6">
        Experience top-notch training and facilities at our sports academy.
      </p>
      <Button
        className="bg-gradient-to-r from-teal-500 to-yellow-400 hover:from-teal-400 hover:to-yellow-500 text-white font-bold py-3 px-8 rounded-lg"
      >
        Explore Programs
      </Button>
    </div>
  </div>
  );
};

export default Moreextra;
