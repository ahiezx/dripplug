// import useState and useEffect

"use client";

import { useState } from "react";
import { useEffect } from "react";

// import QCDropDown component from components/qcdropdown.tsx


export default function Product({ params }) {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState(null);
  let [qcImages, setQcImages] = useState(null);

  let image;
  let goodsId;

  if(!images) {
    
    image = "";
    

  } else {
    goodsId = images[0][0]['goodsId'];
    image = images[1];
  }


  useEffect(() => {
    getProductById(params.id)
      .then((data) => setProduct(data))
      .catch((error) => {

      });
  }, [params.id]);

  useEffect(() => {
    if (product && product?.link) {
      const linkParts = product.link.split("/");
      if (linkParts.length >= 4) {
        const linkParam = linkParts[3];
        getImages(linkParam)
          .then((data) => setImages(data))
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

    qcImages = qcImages[0]['photos'];
  }

        





  if (product && !product?.name) {
    return <div className="p-5 text-center h-screen flex">
        <span className="my-auto mx-auto text-3xl">Could not resolve product</span>
        </div>;
  }



  

  // convert product price chinese yuan to usd

  const convertPrice = (price) => {
    // turn string to number and remove uneccessary characters
    if(price == undefined) {
      return 0;
    }
    price = Number(price.replace(/[^0-9.-]+/g,""));
    return (price * 0.15);
  }
  
  return (
<main
style={{
  // linear gradient gray to light gray
  background: "linear-gradient(180deg, #222 0%, #22C55E 500%)",
}}
>
  <div className="container lg:py-10 lg:px-10 mx-auto">
    {product ? (
    <div className="min-h-screen shadow-xl rounded-md"
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
        background: "linear-gradient(360deg, rgba(45,45,45,0.8) 0%, rgba(34,197,94,0.3) 150%)",
      }}
    />
  ) : (
    <img src="/spinner.svg" alt="" />
  )}
</div>
        {/* Product Details */}
        <div className="lg:col-span-5 mt-8 lg:mt-0 flex flex-col justify-between
        px-4 lg:px-0
        py-4 lg:py-20
        ">
          <div className="info">
          <h1 className="text-3xl font-semibold mb-4">
            {
              product.name
            }
          </h1>
          {/* views */}
          <i className="fas fa-eye text-gray-400 mb-4"></i>
          <span className="text-gray-400 mb-4"> 1000 views</span>
          
          <div className="
          ml-5
          ">

          {/* stars */}
          <i className="fas fa-star text-yellow-400 mb-4"></i>
          <i className="fas fa-star text-yellow-400 mb-4"></i>
          <i className="fas fa-star text-yellow-400 mb-4"></i>
          <i className="fas fa-star text-yellow-400 mb-4"></i>

          </div>


          <p className="text-md text-gray-400 mb-6 w-4/5">
            
              
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium eum optio dolorem nihil molestias repudiandae. Ea itaque minima neque numquam voluptas quibusdam magni ut laudantium culpa, blanditiis facilis consequatur reprehenderit?
              
            
          </p>
          </div>
          <div className="actions">
          <div className="flex items-center mb-4 justify-between">
            <span className="text-xl font-semibold mr-2"
            style={{ 
              borderLeft: "6px solid #22C55E",
              backgroundColor: "rgba(34, 197, 94, 0.1)",
              padding: "0.5rem 1rem",
              borderRadius: "0.2rem",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
             }}
            >
              {
                "$" + convertPrice(product.price).toFixed(2)
              }
            </span>
            <span className="text-gray-300">Regular Price: {
              "$" + convertPrice(product.price).toFixed(2) * 8
            }</span>
          </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600
            transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green w-full
            shadow-md
            ">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <div className="p-10 pl-0"
    style={
      {
        background: "rgba(35, 35, 35, 0.7)",
        borderTop: "3px solid #22C55E",
      }
    }
    >
    {/* quality check image section */}
    <h1
    className="text-4xl font-semibold ml-5 lg:ml-20 mb-6 mt-8 text-left"
    >
      Quality Check Images
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-20">
    
    {
      Array.isArray(qcImages) ? (
        qcImages.map((image, index) => (
          <img src={image.src} alt="" key={index} className="w-full h-auto rounded-md shadow-md" />
        ))
      ) : (
        <img src="/spinner.svg" alt="" />
      )
    }

    </div>

  </div>
  </div>
    ) : (
      <img src="/spinner.svg" alt="" />
    )}
  </div>
</main>
  );
}

const getProductById = async (id) => {
  const res = await fetch(`http://localhost:9000/product/${id}`);
  const data = await res.json();
  return data;
};

const getImages = async (link) => {
  // get only after https://pandabuy.page.link/
  const res = await fetch(`http://localhost:9000/qc/${link}?all=true`);
  const data = await res.json();
  return data;
};

const getQcImagesRequest = async (goodsId) => {
  const res = await fetch(`http://localhost:9000/getqc/${goodsId}`);
  const data = await res.json();
  return data;
}