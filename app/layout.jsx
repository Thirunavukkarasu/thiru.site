import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.css";

export default function RootLayout({children}) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}