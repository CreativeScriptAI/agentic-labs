import Link from "next/link";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const links = [
    // { id: 1, name: "Automation Vault", to: "/automation-vault" },
    // { id: 2, name: "Press Release", to: "/press-release" },
    { id: 1, name: "About Us", to: "/about" },
    { id: 2, name: "Blog", to: "/blog" },
  ];

  return (
    <nav className="flex">
      <ul className="flex items-center space-x-8">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.to}
              className={`text-sm font-medium  transition-colors hover:text-blue-600 ${
                currentPath === link.to
                  ? "text-blue-600 font-semibold"
                  : "text-[#475569] dark:text-gray-200"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
