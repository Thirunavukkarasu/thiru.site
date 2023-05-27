import SocialLinks from './social-links'

export default function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-5xl border-t">
      <div className="flex items-center justify-between p-3">
        <SocialLinks />
        <p> © Thirunavukkarasu Muthusamy</p>
      </div>
    </footer>
  )
}
