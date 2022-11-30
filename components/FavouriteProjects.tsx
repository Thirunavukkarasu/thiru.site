import Link from "next/link";
import { works } from "constants/data";

export default function FavouriteProjects() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto max-w-6xl py-20 space-y-10">
        <div className="flex flex-row items-center justify-center space-x-20">
          <h1 className="text-6xl lg:text-6xl text-center font-bold">
            Favourite Projects
          </h1>
          <Link
            href="/projects"
            className="bg-green-300 text-gray-700 px-12 py-3 rounded-xl"
          >
            <p>View All</p>
          </Link>
        </div>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, idx) => {
            return (
              <a
                href="https://project1.com"
                className="w-full block border-2 border-green-300"
                key={idx}
              >
                <div className="relative">
                  <img src="/project1.png" alt="portfolio" className="" />
                  <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-green-500 rounded-md px-2">
                    {work.title}
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
