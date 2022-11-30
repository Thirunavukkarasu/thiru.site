import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth">
      <head />
      <body>
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
