// import useState and useEffect

"use client";

import { useState } from "react";
import { useEffect } from "react";

// import QCDropDown component from components/qcdropdown.tsx

export default function Product({ params }) {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState(null);
  let [qcImages, setQcImages] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  let image;
  let goodsId;
  let broken = false;

  if (!images) {
    image = "";
  } else {
    goodsId = images[0][0]["goodsId"];
    image = images[1];
  }

  const handleClick = (src: string) => {
    if (selectedImages.includes(src)) {
      setSelectedImages(
        selectedImages.filter((image: string) => image !== src)
      );
    } else {
      setSelectedImages([...selectedImages, src]);
    }
  };

  useEffect(() => {
    getProductById(params.id)
      .then((data) => setProduct(data))
      .catch((error) => {});
  }, [params.id]);

  useEffect(() => {
    if (product && product?.link) {
      const linkParts = product.link.split("/");
      if (linkParts.length >= 4) {
        const linkParam = linkParts[3];
        getImages(linkParam)
          .then((data) => {
            setImages(data)
          })
          .catch((error) => {
            // Handle the error
          });
      }
    }
  }, [product]);

  // getQcImagesRequest using goodsId

  useEffect(() => {
    if (goodsId) {
      getQcImagesRequest(goodsId)
        .then((data) => setQcImages(data))
        .catch((error) => {
          // Handle the error
        });
    }
  }, [goodsId]);

  // set qcImages to qcImages[0]['photos'] using setQcImages

  if (qcImages) {
    // qcImages = qcImages[0]['photos'];

    const combinedPhotos = qcImages.reduce(
      (accumulator, item) => accumulator.concat(item.photos),
      []
    );

    qcImages = combinedPhotos;

  }

  if (product && !product?.name) {
    return (
      <div className="p-5 text-center h-screen flex">
        <span className="my-auto mx-auto text-3xl">
          Could not resolve product
        </span>
      </div>
    );
  }

  if(images) {
    if(images?.length == 1) {
      // product broken
      broken = true;
    }
  }

  // convert product price chinese yuan to usd

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
        background: "linear-gradient(360deg, #222 0%, #22C55E 500%)",
      }}
    >
      <div
      className="
      w-full
      h-auto"
      style={{
        backgroundImage: "url('/bgeffect.png')",
        backgroundRepeat: "repeat-x"
      }}
      >
      <div className="container lg:py-10 lg:px-10 mx-auto">
        {product ? (
          <div
            className="min-h-screen shadow-xl rounded-md"
            style={{
              // linear gradient gray to light gray
              background: "rgba(35, 35, 35, 0.5)",
            }}
          >
            <div className="max-w-7xl mx-auto lg:py-12 lg:px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                {/* Product Image */}
                <div className="lg:col-span-7">
                  {image ? (
                    <img
                      className="w-full h-auto lg:rounded-md lg:shadow-lg shadow-md p-5"
                      src={image}
                      alt="Product Image"
                      style={{
                        background:
                          "linear-gradient(360deg, rgba(45,45,45,0.8) 0%, rgba(34,197,94,0.3) 150%)",
                      }}
                    />
                  ) : (
                    <img src="/spinner.svg" alt="" />
                  )}
                </div>
                {/* Product Details */}
                <div
                  className="lg:col-span-5 mt-8 lg:mt-0 flex flex-col justify-between
        px-4 lg:px-0
        py-4 lg:py-20
        "
                >
                  <div className="info">
                    <h1 className="text-3xl font-semibold mb-4">
                      {product.name}
                    </h1>
                    {/* views */}
                    <i className="fas fa-eye text-gray-400 mb-4"></i>
                    <span className="text-gray-400 mb-4"> {product.views.toLocaleString()} views</span>


                    <p className="text-md text-gray-400 mb-6 w-4/5">
                      
                    </p>
                  </div>
                  <div className="actions ">
                    <div className="flex items-center mb-4 justify-between">
                      <span
                        className="text-xl font-semibold mr-2"
                        style={{
                          borderLeft: "6px solid #22C55E",
                          backgroundColor: "rgba(34, 197, 94, 0.1)",
                          padding: "0.5rem 1rem",
                          borderRadius: "0.2rem",
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        ~ {"$" + convertPrice(product.price)}
                      </span>
                      <span className="text-gray-300">
                        Regular Price:{" "}
                        <span className="underline">~ ${convertPrice(product.price) * 8}</span>
                      </span>
                    </div>
                    {broken ? (
                      <div className="">
                      <h1
                        className="text-orange-500 text-center mb-4"
                      >
                        <i className="fas fa-info-circle mr-2"></i>
                      This product may not exist,
                      please confirm the link.
                      </h1>
                      <a
                      className="
            "
                      href={product.affiliate}
                      target="_blank"
                    ><div className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600
            transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green w-full
            shadow-md text-center">
                    
                      Confirm <i className="fas fa-arrow-right"></i>
                    
                  </div>
                  </a>  
                  </div>                    
                    ) : (
                      <a
                      className="
            "
                      href={product.affiliate}
                      target="_blank"
                    ><div className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600
            transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green w-full
            shadow-md text-center">
                    
                      View Product <i className="fas fa-arrow-right"></i>
                    
                  </div>
                  </a>
                    )}

                  </div>
                </div>
              </div>
            </div>

            <div
              className="lg:p-10 lg:pl-10 mx-auto"
              style={{
                background: "rgba(35, 35, 35, 0.7)",
                borderTop: "3px solid #22C55E",
              }}
            >
              {/* quality check image section */}
              <h1 className="text-2xl sm:text-4xl xs:text-4xl font-semibold ml-5 lg:ml-20 mb-6 mt-8 text-left">
                Quality Check Images
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-20 mx-auto">
              {Array.isArray(qcImages) ? (
        qcImages.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            onClick={() => handleClick(image.src)} // Handle image click event
          >
            {selectedImages.includes(image.src) ? (
              <img
                src={image.src}
                alt="x"
                className="w-full h-auto rounded-md shadow-md h-64 hover:cursor-pointer"
              />
            // <h1>{JSON.stringify(image)}</h1>
            ) : (
              <div className="w-full h-64 rounded-md shadow-md flex flex-col items-center justify-center text-gray-400 bg-neutral-800 hover:bg-neutral-700 hover:cursor-pointer">
                <span className="text-center text-xs text-green-50 flex flex-col">
                  {images[0][index]?.goodsAttribute
                    .replace(/;/g, "\n")
                    .replace(/:/g, "\n")}
                    {images[0][index]?.goodsAttribute}
                </span>
                <span className="text-green-500 hover:cursor-pointer mt-1">
                  Click to show image
                </span>
              </div>
            )}
          </div>
        ))
      ) : (
        <h2>No Quality Checks Found</h2>
      )}
              </div>
            </div>
          </div>
        ) : (
          <img src="/spinner.svg" alt="" />
        )}
      </div>
      </div>
    </main>
  );
}

const getProductById = async (id) => {
  const res = await fetch(`http://192.168.1.14:9000/product/${id}`);
  const data = await res.json();
  return data;
};

const getImages = async (link) => {
  // get only after https://pandabuy.page.link/
  const res = await fetch(`http://192.168.1.14:9000/qc/${link}?all=true`);
  const data = await res.json();
  return data;
};


const getQcImagesRequest = async (goodsId) => {
  const res = await fetch(`http://192.168.1.14:9000/getqc/${goodsId}`);
  const data = await res.json();
  return data;
};

const useFetch = (url:string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
}