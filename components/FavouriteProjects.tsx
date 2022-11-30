import Link from "next/link";

const { projects } = require("constants/data");

export default function FavouriteProjects() {
  return (
    <div className="bg-gray-100 mt-10">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-20 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-3xl font-bold text-gray-600 my-20 md:my-0 text-center">
            Favourite Projects
          </h1>
          <Link
            href="/projects"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center"
          >
            <p>View all</p>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:mt-8 pb-40">
          {projects.map((project, idx) => {
            return (
              <a
                href="https://project1.com"
                className="w-full block col-span-1 shadow-2xl"
                key={idx}
              >
                <div className="relative overflow-hidden">
                  <img
                    src="/project1.png"
                    alt="portfolio"
                    className="transform hover:scale-125 transition duration-2000 ease-out"
                  />
                  <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                    {project.title}
                  </h1>
                  <h1 className="absolute bottom-2 left-10 text-gray-50 font-bold text-xl">
                    {idx + 1}
                  </h1>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
