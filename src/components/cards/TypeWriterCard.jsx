import { Link } from "react-router-dom";

const TypeWriterCard = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className=" max-w-screen-xl container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Me
              </h2>
              <div className="w-max">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-2xl text-black font-bold">
                  Hello ! I am Karuna.
                </h1>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about me
                  <span className="ml-2">&#8594;</span>
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="/karuna.jpg"
                alt="About Us Image"
                className="object-cover aspect-square rounded-lg shadow-md size-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TypeWriterCard;
