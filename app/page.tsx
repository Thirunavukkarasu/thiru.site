import RecentPosts from './recent-posts'
import Projects from './projects'
import SocialLinks from './social-links'

export default function page() {
  return (
    <>
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-700">
          Hello, I&apos;m Thiru
        </h1>
        <h4 className="text-lg text-gray-600">
          Full Stack Developer and Engineering Leader hailing from India.
        </h4>
        <p className="max-w-2xl text-gray-500">
          Mastering the craft of web app development is my game. Currently{'  '}
          <a
            href="https://www.freelancer.com/"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-900 underline"
          >
            freelancing
          </a>
          , previously conquering challenges at{' '}
          <a
            href="https://www.byjus.com/"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-900 underline"
          >
            BYJU&apos;s
          </a>
        </p>
        <SocialLinks />
      </section>
      <div className="my-4 border-b"></div>
      <RecentPosts />
      <div className="my-4 border-b"></div>
      <Projects />
    </>
  )
}
