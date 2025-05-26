import { Outlet, Link } from "react-router";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-manrope bg-[#19191C] min-h-screen bg-linear-to-br from-[#212121] via-[#8b1230] to-[#212121]">
      <div className="flex flex-col items-center justify-center w-full">
        <div
          className={`w-full flex justify-center sticky top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-md bg-rose-500/10 border border-rose-500/10 shadow-lg"
              : "bg-transparent border border-transparent"
          }`}
        >
          <div className="flex items-center justify-between w-full max-w-7xl px-5 py-3">
            <Link to="/home" className="text-2xl font-semibold text-white">
              existera
            </Link>
            <div className="flex items-center gap-5">
              <Link
                to="/product"
                className="py-1 px-2 text-white hover:bg-rose-500/15 rounded-md hover:border-white/20 hover:cursor-pointer"
              >
                <span>Product</span>
              </Link>

              <Link
                to="/pricing"
                className="py-1 px-2 text-white hover:bg-rose-500/15 rounded-md hover:border-white/20 hover:cursor-pointer"
              >
                <span>Pricing</span>
              </Link>

              <Link
                to="/news"
                className="py-1 px-2 text-white hover:bg-rose-500/15 rounded-md hover:border-white/20 hover:cursor-pointer"
              >
                <span>News</span>
              </Link>

              <Link
                to="/about"
                className="py-1 px-2 text-white hover:bg-rose-500/15 rounded-md hover:border-white/20 hover:cursor-pointer"
              >
                <span>About</span>
              </Link>
              <button
                type="button"
                className="flex items-center gap-1 py-1 px-2 text-white hover:text-rose-500 hover:cursor-pointer"
              >
                <Globe size={15} /> <span className="text-sm">EN</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-7xl py-3 px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
