import NavBar from "./NavBar";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import EllipseBackground from "../../../assets/images/EllipseBackground";

type Props = {
  fullWidth: boolean;
};

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <header className="bg-[#F9F6F4] z-50 relative">
      {/* Ellipse background image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <EllipseBackground />
      </div>

      <div
        className={`mx-auto flex h-16 items-center px-4 ${
          fullWidth ? "max-w-full md:px-24" : "max-w-7xl"
        }`}
      >
        {/* Left side - Logo */}
        <div className="flex-1">
          <Logo />
        </div>

        {/* Center - Navigation and Contact Us button */}
        <div className="flex items-center justify-center gap-8 flex-1">
          {/* <NavBar /> */}
          <Link
            href="https://calendly.com/creative-script/30min?month=2024-01"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>

        {/* Right side - Empty for balance */}
        <div className="flex-1"></div>
      </div>
    </header>
  );
};

export default Header;
