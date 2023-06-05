// import useState
"use client";

import { useState } from "react";

async function searchProduct(product) {
  try {
    const res = await fetch(`http://localhost:9000/search/${product}`);
    const data = await res.json();

    const conversionRate = 0.009; // Conversion rate from yen to dollars

    const convertedData = data.map((item) => {
      if (item.price.includes('¥')) {
        const priceWithoutSymbol = item.price.replace('¥', '');
        const priceInYen = parseFloat(priceWithoutSymbol);

        if (!isNaN(priceInYen)) {
          const priceInDollars = (priceInYen * conversionRate).toFixed(2);
          return {
            ...item,
            price: `$${priceInDollars}`,
          };
        }
      }

      return item;
    });

    return convertedData;
  } catch (error) {
    console.error("An error occurred:", error);
    return [];
  }
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let searchTimer;

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      performSearch(value);
    }, 100);
  };

  const performSearch = async (value) => {
    if (value.trim() !== "") {
      const results = await searchProduct(value);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center w-full h-screen py-20 text-center bg-neutral-900">
      <div className="flex flex-row items-center justify-center w-full py-10 text-center">
        <div className="flex flex-col items-center justify-center w-1/3">
          <i className="fad fa-search text-6xl text-green-500 mb-5"></i>
          <h1 className="text-2xl font-bold mb-3 mt-5 text-white">Search</h1>
          <p className="text-xl text-gray-400 w-full mb-10">
            Search for your favorite artists, albums, and songs.
          </p>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full h-10 px-3 bg-zinc-100 text-base placeholder-gray-600 focus:shadow-outline text-black outline-none"
              placeholder="Search..."
              value={searchTerm.toLocaleLowerCase()}
              onChange={handleInputChange}
              style={
                {
                    borderTop: "3px solid #22C55E",
                    boxShadow: "0px 0px 25px 3px rgba(66,206,110,0.3)",
                }
              }
            />
            {searchResults.length > 0 && (
              <div className="absolute top-10 left-0 w-full text-black bg-white shadow-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {searchResults.map((result) =>
                    result.link !== null ? (
                      <li
                        key={result.link}
                        className="py-4 px-5 text-sm hover:bg-gray-200 flex justify-between items-center"
                      >
                        <a
                          href={result.link}
                          className="flex justify-between items-center w-full"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="font-medium align-left">
                            {/* escape html */}
                            {result.name.split('').map((character, index) => (
                              <span
                                key={index}
                                className={searchTerm.includes(character.toLocaleLowerCase()) ? "text-green-600" : ""}
                              >
                                {character}
                              </span>
                            ))}
                          </span>
                          <span className="text-gray-500">~ {result.price}</span>
                        </a>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}