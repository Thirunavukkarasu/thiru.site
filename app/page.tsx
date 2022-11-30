import LatestCode from "components/LatestCode";
import FavouriteProjects from "components/FavouriteProjects";
import HeroSection from "components/HeroSection";
import { FaAws, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";

const technologies = [
  {
    title: "Front-End",
    description:
      "Developed front-end codebases using ReactJS, AngularJS and TailwindCSS.",
    icon: <FaReact size={32} className="text-green-400" />,
  },
  {
    title: "Back-End",
    description: "Developed back-end codebases using NodeJS and Java.",
    icon: <FaNodeJs size={32} className="text-green-400" />,
  },
  {
    title: "Databases",
    description:
      "Developed apps using databases using Postgres, MongoDB, Elastic Search and Redis.",
    icon: <FaDatabase size={32} className="text-green-400" />,
  },
  {
    title: "Cloud & DevOps",
    description: "Deployed apps in AWS, Azure, Digital Ocean & Heroku.",
    icon: <FaAws size={32} className="text-green-400" />,
  },
];

export default function Home(props) {
  return (
    <>
      <HeroSection />
      {/* Intro Section */}
      <section className="bg-gray-700 text-white py-20">
        <div className="container mx-auto max-w-6xl flex flex-row space-x-20">
          {/* Services Column */}
          <div className="w-1/2 space-y-4">
            {technologies.map((technology, idx) => (
              <div className="bg-gradient-to-tr from-slate-800 via-slate-700 to-slate-600 px-10 py-6 flex flex-row items-center rounded-lg shadow-lg">
                <div className="space-y-5 flex-1">
                  <h4 className="text-2xl text-green-300">
                    {technology.title}
                  </h4>
                  <p className="text-gray-400 max-w-[80%]">
                    {technology.description}
                  </p>
                </div>
                <div>{technology.icon}</div>
              </div>
            ))}
          </div>
          {/* Story Column*/}
          <div className="w-1/2">
            <div className="font-bold tracking-widest">Introduce</div>
            <h1 className="text-4xl leading-loose font-medium mt-5">
              <span>Hello! I'm</span>{" "}
              <span className="text-green-300">Thiru</span>
              <span className="text-gray-400">navukkarasu</span>
            </h1>
            <h6 className="text-xl mt-3">
              Every great developement started with humble beginnings!
            </h6>
            <p className="text-md text-gray-300 leading-loose mt-10">
              My journey as a software developer started 11 years ago, I have
              done Devops work for large codebases, consulted for multiple
              teams, and collaborated with multiple teams to create end-to-end
              products for various departments in B2B & B2C domains. I'm very
              confident, organically curious, and constantly work on optimizing
              system design and codebases.
            </p>
            <div className="text-green-300 underline px-4 py-2 rounded-xl mt-10 w-44 uppercase cursor-pointer font-semibold leading-loose">
              Go To Blog
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800"></section>
      <FavouriteProjects />
    </>
  );
}
