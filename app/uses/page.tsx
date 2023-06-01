import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
}

export default function UsesPage() {
  return (
    <section>
      <h1 className="mb-8 font-serif text-3xl font-bold">Uses</h1>
      <p className="mb-8 mt-2 text-neutral-700 dark:text-neutral-300">
        Here&apos;s what tech I&apos;m currently using for coding.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>16&quot; Macbook Pro (2020)</li>
          <li>31.5&quot; LG UltraFine 32UN880</li>
          <li>Logitech MX Master 3 Mouse</li>
          <li>Apple Magic Keyboard</li>
          <li>Focal XS 2.1 w/ Subwoofer</li>
          <li>Autonomous SmartDesk 2</li>
          <li>Autonomous ErgoChair 2</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode (
            <a href="https://gist.github.com/Thirunavukkarasu/91742e9905336f7e5934851d5dcad943">
              Settings / Extensions
            </a>
            )
          </li>
          <li>Theme: One Dark Pro</li>
          <li>Terminal: Hyper / zsh</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>1Password</li>
          <li>Spotify</li>
          <li>CleanShot X</li>
          <li>RetroClip</li>
          <li>Grammarly</li>
          <li>Texts</li>
          <li>Raycast</li>
          <li>Screenflow</li>
        </ul>
      </div>
    </section>
  )
}
