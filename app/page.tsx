import RecentPosts from './recent-posts'
import Projects from './projects'
import SocialLinks from './social-links'

export default function page() {
  return (
    <>
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">Hello, I&apos;m Thiru</h1>
        <h4 className="text-lg text-gray-600">
        An accomplished Full Stack Developer and Engineering Leader hailing from India.
        </h4>
        <p className="max-w-2xl text-gray-500">
        Mastering the craft of web app development is my game. Currently {" "}
          <a
            href="https://www.freelancer.com/"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 underline"
          >
            freelancing
          </a>
          , previously conquering challenges at{' '}
          <a
            href="https://www.byjus.com/"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 underline"
          >
            BYJU&apos;s
          </a>
        </p>
        <SocialLinks />
      </section>
      <RecentPosts />
      <Projects />
    </>
  )
}
