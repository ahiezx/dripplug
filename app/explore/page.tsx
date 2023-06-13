"use client";
import { useState, useEffect } from "react";

const getExplore = async (pages) => {
  const res = await fetch(`http://192.168.1.14:9000/explore?pages=${pages}`);
  const data = await res.json();
  return data;
};

export default function Explore() {
  const [explore, setExplore] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getExploreData = async () => {
      setIsLoading(true);
      const exploreFromServer = await getExplore(currentPage);
      setExplore((prevExplore) => [...prevExplore, ...exploreFromServer]);
      setIsLoading(false);
    };
    getExploreData();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const convertPrice = (price: string) => {
    // Check if the price is in Chinese Yuan
    if (price.includes("¥")) {
      // Extract the numeric value from the string
      const numericValue = Number(price.replace(/[^0-9.-]+/g, ""));
      // Convert the price to another currency (e.g., USD) using the appropriate conversion rate
      const convertedPrice = numericValue * 0.15;
      return convertedPrice.toFixed(2);
    }
  
    // Return the original price if it is not in Chinese Yuan
    return price.replace("$","").replace(" ","");
  };

  return (
<main
  style={{
    // linear gradient gray to light gray
    background: "linear-gradient(360deg, #222 0%, #111 100%)",
  }}
>
  <style>
    {`
      .customScrollbar::-webkit-scrollbar {
        width: 10px;
      }
      .customScrollbar::-webkit-scrollbar-track {
        background: #111;
      }
      .customScrollbar::-webkit-scrollbar-thumb {
        background-color: #17803d;
        border-radius: 20px;
        border: 3px solid #111;
      }
      .customScrollbar::-webkit-scrollbar-thumb:hover {
        background-color: #17803d;
      }
      .exploreProduct:hover {
        transform: scale(1.03);
        transition: all 0.3s ease-in-out;
      }
      .exploreProduct {
        transition: all 0.3s ease-in-out;
      }
    `}
  </style>
  <div
    className="
    w-full
    h-screen
    overflow-y-auto
    w-11/12
    lg:p-5
    mx-auto
    py-10
    customScrollbar
    "
    style={{
      backgroundImage: "url('/bgeffect.png')",
      backgroundRepeat: "repeat-x",
    }}
  >
    <h1 className="text-4xl font-bold text-center pb-5 text-neutral-100">
      EXPLORE
      <i className="fad fa-compass ml-3 text-neutral-300"></i>
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {explore.map((item) => (
        <a
          href={"/product/" + item.id}
          target="_blank"
          key={item.id}
          className="flex flex-col items-center w-full h-full rounded-md shadow-md exploreProduct"
          style={{ height: "240px",
          background: "linear-gradient(360deg, rgba(35,35,35,1) 0%, rgba(34, 197, 94, 1) 1000%)",
        }}
        >
          <div className="h-full flex w-full">
            <div className="w-3/4">
              <div
                className="h-full rounded-l-md"
                style={{ position: "relative", overflow: "hidden", borderRight: "3px solid #17803d" }}
              >
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="absolute h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full p-5 flex flex-col justify-between mx-auto">
              <h1 className="text-xl font-bold text-white mb-2 mt-4">
                {item.name}
              </h1>
              <div className="flex w-full">
                <div className="bg-green-500 px-2 py-1 w-1/2 text-center rounded-md shadow-md">
                View
                  <i className="fas fa-arrow-right ml-2"></i>
                </div>
                <p className="mx-auto my-auto text-right w-1/2">
                  ${convertPrice(item.price)}
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>

    {isLoading && (
      <div className="flex justify-center mt-5">
        <img
          src="/spinner.svg"
          alt="loading.."
          className="mx-auto"
          width={512}
          height={512}
        />
      </div>
    )}

    {explore.length > 0 && !isLoading && (
      <div className="flex justify-center mt-5">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      </div>
    )}
  </div>
</main>
  );
}
