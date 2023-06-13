"use client";

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "#111",
      }}
    >
      <div className="container mx-auto py-20 px-4">

        <div className="mt-8 text-center">
          <p>
          Panda Finds &trade; {new Date().getFullYear()}
          </p>
          <p className="text-sm">
            <a href="#" className="text-green-800">
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="text-green-800">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
