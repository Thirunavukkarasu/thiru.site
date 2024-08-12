import { GitHubIcon, TwitterIcon, YoutubeIcon } from "@/components/icons";
import Subscribe from "./subscribe";
import Projects from "./projects";
import RecentPosts from "./recent-posts";

export default function Home() {
  return (
    <>
      <section className="space-y-2">
        <h1 className="text-xl font-bold text-gray-700">hey, I'm Thiru 👋</h1>
        <h4 className="text-lg text-gray-600"></h4>
        <p className="max-w-2xl text-gray-500">
          I'm a full-stack developer and technlogy enthusiast hailing from
          India. I currently work as a VP of Engineering at{" "}
          <a href="https://mantys.in" className="text-yellow-900 underline">
            Mantys
          </a>
          . I love to share my thoughts and learnings with the community.
        </p>
        <SocialLinks />
      </section>
      <div className="my-4 border-b"></div>
      <RecentPosts />
      <div className="my-4 border-b"></div>
      <Projects />
      <Subscribe />
    </>
  );
}

function SocialLinks() {
  return (
    <ul className="flex items-center space-x-3 pt-5 text-gray-400">
      <li>
        <a
          href="https://www.github.com/thirunavukkarasu"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.twitter.com/thiru_saa"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/thirunavukkarasu-m/"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeIcon />
        </a>
      </li>
    </ul>
  );
}
