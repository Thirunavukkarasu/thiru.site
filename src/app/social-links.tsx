import { GitHubIcon, TwitterIcon, LinkedInIcon } from "@/components/icons";

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center space-x-3 pt-5 text-gray-400">
      <a
        href="https://www.github.com/thirunavukkarasu"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/thirunavukkarasu-m/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://www.twitter.com/thiru_saa"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        <TwitterIcon />
      </a>
    </div>
  );
}
