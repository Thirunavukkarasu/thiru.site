import { GitHubIcon, TwitterIcon, YoutubeIcon } from "@/components/icons";

export default function SocialLinks() {
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
