import React from "react";

export default function Favorites({ favorites, setFavorites }) {
  if (!favorites || favorites.length === 0) {
    return null; 
  }

  return (
    <div className="container mx-auto py-20 px-5 flex flex-col items-center gap-5 text-white">
      <h1 className="text-3xl font-bold mb-5">Favorite Cities</h1>
      <ul className="flex flex-col gap-2 w-full md:w-1/2">
        {favorites.map((city, index) => (
          <li
            key={index}
            className="bg-purple-500/50 p-2 rounded flex justify-between items-center"
          >
            {city}
            <button
              className="ml-2 bg-red-500 hover:bg-red-700 text-white px-2 rounded"
              onClick={() =>
                setFavorites(favorites.filter((_, i) => i !== index))
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}