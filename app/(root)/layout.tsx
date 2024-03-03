import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <MobileNav />
      <main>{children}</main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Layout;
