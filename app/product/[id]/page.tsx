// import useState and useEffect

"use client";

import { useState } from "react";
import { useEffect } from "react";
import Product from "@/app/components/product";
// import QCDropDown component from components/qcdropdown.tsx

const defaultProduct = {
  name: "",
  price: "",
  link: "",
  views: "",
  affiliate: "",
};
async function getProductById(id: string) {
  const res = await fetch(`http://192.168.1.14:9000/product/${id}`);
  const data = await res.json();
  return data;
}

export default function ProductComponent({ params }: any) {
  const [product, setProduct] = useState(defaultProduct);



  useEffect(() => {
    getProductById(params.id)
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("Couldn't get product", error);
      });
  }, [params.id]);

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
          backgroundRepeat: "repeat-x",
        }}
      >
        <Product product={product} />
      </div>
    </main>
  );
}
