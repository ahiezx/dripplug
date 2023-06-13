import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center w-full h-screen py-20 text-center bg-gradient-to-b bg-green-900">
        <div className="animate-pulse">
          <img
            src="/logo2.png"
            alt="Drip Plug Logo"
            width={300}
            height={300}
            className="select-none"
          />
        </div>

        <p className="text-3xl text-white mt-10">
          Welcome To Drip Plug. <br /> Let's get you dripped up 🤑
        </p>

        <a
          href="search"
          className="bg-green-500 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition duration-300 ease-in-out mt-10"
        >
          🔍 Search Products
        </a>

        <p className="mt-10 text-gray-300">Check us out!</p>
        <i
          id="arrow"
          className="animate-bounce fad fa-arrow-down text-2xl text-white mt-3"
        ></i>
      </main>
      <section>
        <div
          className="flex flex-col items-center justify-center w-full py-10 text-center"
          style={{
            background:
              "linear-gradient(90deg, rgba(92,68,158,0.40015756302521013) 0%, rgba(100,255,88,0.4049194677871149) 39%, rgba(30,156,148,0.45253851540616246) 100%);",
          }}
        >
          <h1 class="text-4xl font-bold mb-3 mt-5 text-white">Our Mission</h1>

          <div class="flex flex-col md:flex-row items-center justify-center w-full py-10 text-center">
            <div class="flex flex-col items-center justify-center mb-10 md:mb-0 md:w-1/3">
              <i class="fad fa-globe-americas text-6xl text-green-500 mb-5"></i>
              <h1 class="text-2xl font-bold mb-3 mt-5 text-white">Quality</h1>
              <p class="text-xl text-gray-400 w-4/5 md:w-1/2 mb-10">
                We only work with the best manufacturers and designers in China
                to ensure that our customers receive the highest quality
                products.
              </p>
            </div>
            <div class="flex flex-col items-center justify-center mb-10 md:mb-0 md:w-1/3">
              <i class="fad fa-dollar-sign text-6xl text-green-500 mb-5"></i>
              <h1 class="text-2xl font-bold mb-3 mt-5 text-white">
                Affordability
              </h1>
              <p class="text-xl text-gray-400 w-4/5 md:w-1/2 mb-10">
                We work directly with manufacturers and designers to cut out the
                middleman and provide our customers with the best prices.
              </p>
            </div>
            <div class="flex flex-col items-center justify-center md:w-1/3">
              <i class="fad fa-headset text-6xl text-green-500 mb-5"></i>
              <h1 class="text-2xl font-bold mb-3 mt-5 text-white">
                Customer Service
              </h1>
              <p class="text-xl text-gray-400 w-4/5 md:w-1/2 mb-10">
                We are dedicated to providing our customers with the best
                service possible. If you have any questions or concerns, please
                contact us at
                <a href="mailto:info@dripplug.io" class="text-green-500">
                  info@dripplug.io
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center w-full py-10 text-center bg-white">
          <h1 className="text-4xl font-bold mb-3 mt-5 text-black">Our Team</h1>

          <div className="flex flex-row items-center justify-center w-full py-10 text-center">
            <div className="flex flex-col items-center justify-center lg:w-1/3">
              <Image
                src="/profile.png"
                alt="Drip Plug Logo"
                width={300}
                height={300}
                className="rounded-full"
              />

              <h1 className="text-2xl font-bold mb-3 mt-5 text-black">Jared</h1>

              <p className="text-xl text-gray-400 w-full mb-10">
                Jared is a full-stack developer with a passion for building
                beautiful and functional web applications. He is currently
                studying Computer Science at the University of Colorado,
                Boulder.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="flex flex-col items-center justify-center w-full py-10 text-center bg-black">
          <h1 class="text-4xl font-bold mb-3 mt-5 text-white">Contact Us</h1>

          <div class="flex flex-col md:flex-row items-center justify-center w-full py-10 text-center">
            <div class="flex flex-col items-center justify-center mb-10 md:mb-0 md:w-1/2">
              <i class="fad fa-envelope text-6xl text-green-500 mb-5"></i>
              <h1 class="text-2xl font-bold mb-3 mt-5 text-white">Email</h1>
              <p class="text-xl text-gray-400 w-4/5 md:w-1/2 mb-10">
                If you have any questions or concerns, please contact us at
                <a href="mailto:info@dripplug.io" class="text-green-500 ml-1">
                  info@dripplug.io
                </a>
                .
              </p>
            </div>
            <div class="flex flex-col items-center justify-center md:w-1/2">
              <i class="fad fa-map-marker-alt text-6xl text-green-500 mb-5"></i>
              <h1 class="text-2xl font-bold mb-3 mt-5 text-white">Address</h1>
              <p class="text-xl text-gray-400 w-4/5 md:w-1/2 mb-10">
                If you have any questions or concerns, please contact us at
                <span class="text-green-500 ml-1">
                  105 E Maplewood St Walsh, Colorado(CO), 81090 📍
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
