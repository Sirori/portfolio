import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const currentPath = pathSegments[1];

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
