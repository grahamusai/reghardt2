import React from "react";

const About = () => {
  return (
    <div className="mt-20">
      <h6 className="text-center mb-2 text-purple-500 font-bold">
        About our institution
      </h6>
      <h3 className="text-center text-[45px] text-gray-800 font-bold ">
        Why Attend?
      </h3>
      <p className="text-center px-24">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Minus
        doloremque voluptates fugiat ea quod hic architecto adipisci! Alias
        deserunt eveniet pariatur itaque rerum fugit fuga.
      </p>

      <div className="flex flex-col md:flex-row mx-5 md:mx-24 text-white text-center mt-5 gap-10">
        <div className="w-full md:w-1/2 bg-blue-gray-900 px-12 py-16 rounded-lg">
          <h2 className="">Presentation</h2>
          <h3 className="text-2xl font-bold mb-3">Lorem Ipsum Dolor</h3>
          <p className="px-10">
            Gain deep insights into the latest AI trends, developments, and
            applications that are reshaping industries worldwide
          </p>
          <button className="text-gray-800 px-3 py-2 rounded-lg bg-white mt-4">
            View Details
          </button>
        </div>
        <div className="w-full md:w-1/2 bg-blue-gray-900 px-12 py-16 rounded-lg">
          <h2 className="">Presentation</h2>
          <h3 className="text-2xl font-bold mb-3">Lorem Ipsum Dolor</h3>
          <p className="px-10">
            Gain deep insights into the latest AI trends, developments, and
            applications that are reshaping industries worldwide
          </p>
          <button className="text-gray-800 px-3 py-2 rounded-lg bg-white mt-4">
            View Details
          </button>
        </div>
      </div>
      <div className="max-w-auto mx-10 md:mx-24 text-white my-12 flex flex-col justify-center items-center bg-blue-gray-900 px-12 py-[6rem] rounded-lg">
        <h2 className="">Community</h2>
        <h3 className="text-2xl font-bold mb-3">Student Networking Events</h3>
        <p className="px-10 text-center">
          Gain deep insights into the latest AI trends, developments, and
          applications that are reshaping industries worldwide
        </p>
        <button className="text-gray-800 px-3 py-2 rounded-lg bg-white mt-4">
          View Details
        </button>
      </div>
    </div>
  );
};

export default About;
