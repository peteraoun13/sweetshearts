import { Footer } from "../Footer/Footer.jsx";
import { Navbar } from "../Navbar/Navbar.jsx";

export function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
