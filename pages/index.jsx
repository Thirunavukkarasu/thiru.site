import Link from "next/link";
import { useEffect, useState } from "react";
import { RoughNotationGroup } from "react-rough-notation";

import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { RainbowHighlight } from "@components/RainbowHighlight";

export default function Home({ repositories }) {
  return (
    <>
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </>
  );
}

function Hero() {
  const highlights = [{
    title: "Developer",
    color: "#F59E0B"
  }, {
    title: "Architect",
    color: "#84CC16"
  }, {
    title: "Youtuber",
    color: "#10B981"
  }, {
    title: "Leader",
    color: "#3B82F6"
  }];

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          {highlights.map((highlight, idx) => (
            <RainbowHighlight color={highlight.color} key={idx}>
              <h1 className="text-4xl md:text-8xl font-bold text-gray-700 my-2">
                {highlight.title}
              </h1>
            </RainbowHighlight>
          ))}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          <img src={userData.avatarUrl} alt="avatar" className="rounded-3xl shadow" />
        </div>
      </div>
    </div>
  );
}

function FavouriteProjects() {
  const projects = [
    {
      title: 'Project 1',
      demoUrl: 'https://github.com/thirunavukkarasu',
      imageUrl: './project1.png'
    },
    {
      title: 'Project 2',
      demoUrl: 'https://github.com/thirunavukkarasu',
      imageUrl: './project1.png'
    },
    {
      title: 'Project 3',
      demoUrl: 'https://github.com/thirunavukkarasu',
      imageUrl: './project1.png'
    },
    {
      title: 'Project 4',
      demoUrl: 'https://github.com/thirunavukkarasu',
      imageUrl: './project1.png'
    },
    {
      title: 'Project 5',
      demoUrl: 'https://github.com/thirunavukkarasu',
      imageUrl: './project1.png'
    },
    {
      title: 'Project 6',
      demoUrl: 'https://github.com/thirunavukkarasu',
      imageUrl: './project1.png'
    },
  ];

  return (
    <div className="bg-gray-100 mt-10">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-20 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-3xl font-bold text-gray-600 my-20 md:my-0 text-center">
            Favourite Projects
          </h1>
          <Link href="/projects">
            <a className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center">
              <p>View all</p>
            </a>
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
            )
          })}
        </div>
      </div>
    </div>
  );
}

function LatestCode({ repositories }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setRepos(repositories);
  }, []);

  return (
    <section className="bg-white pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-20 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-3xl font-bold text-gray-600 my-10 md:my-0 md:text-gray-600 text-center lg:text-left">
            Latest Code
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center"
          >
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:mt-10 gap-y-20">
        {/* Single github Repo */}
        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key={idx} />
          ))}
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo">
      <h1 className="font-semibold text-xl text-gray-700">
        {latestRepo.name}
      </h1>
      <p className="text-base font-normal my-4 text-gray-500">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories: repositories || [],
    },
  };
};

