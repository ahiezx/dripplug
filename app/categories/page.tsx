import Image from "next/image";

async function getCategories() {
  const res = await fetch(`http://localhost:9000/categories`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log("Failed to fetch data");
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getCategories();

  return (
    <main>
      <div
        className="container py-10 px-10 mx-auto my-10 rounded-sm shadow-md"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <h1 className="text-4xl pb-5 uppercase">Categories</h1>

        <ul className="grid grid-cols-3 gap-6">
          {data.map((category) => (
            <li key={category.id} className="flex">
              <a
                href={`/categories/${category.id}`}
                className="flex flex-col rounded-lg shadow-lg bg-white"
              >
                <div className="flex items-center justify-center h-60">
                  <img
                    src="https://www.pygame.org/thumb/8913d7d090d1b5e6f539ecc69c9d291a.png"
                    alt={category.name}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
                <div className="py-4 px-4 flex flex-col items-start">
                  <h3 className="text-lg font-semibold text-green-500">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{category.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
