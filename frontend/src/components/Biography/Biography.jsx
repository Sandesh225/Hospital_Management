import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-10 px-4 md:px-20">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={imageUrl}
            alt="Who We Are"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-4xl font-bold text-white">Who We Are</h3>
          </div>
        </div>
        <div className="p-6 md:p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Biography</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            blanditiis sequi aperiam. Debitis fugiat harum ex maxime illo
            consequatur mollitia voluptatem omnis nihil nesciunt beatae esse
            ipsam, sapiente totam aspernatur porro ducimus aperiam nisi. Ex
            magnam voluptatum consectetur reprehenderit fugiat recusandae aut
            similique illum natus velit, praesentium nostrum nesciunt. Deleniti,
            nesciunt laboriosam totam iusto!
          </p>
          <p className="text-gray-700 mb-4">We are all in 2024!</p>
          <p className="text-gray-700 mb-4">
            We are working on a MERN STACK PROJECT.
          </p>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            assumenda exercitationem accusamus sit repellendus quo optio dolorum
            corporis corrupti. Quas similique vel minima veniam tenetur
            obcaecati atque magni suscipit laboriosam! Veniam vitae minus nihil
            cupiditate natus provident. Ex illum quasi pariatur odit nisi
            voluptas illo qui ipsum mollitia. Libero, assumenda?
          </p>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet!</p>
          <p className="text-gray-700">Coding is fun!</p>
        </div>
      </div>
    </div>
  );
};

export default Biography;
