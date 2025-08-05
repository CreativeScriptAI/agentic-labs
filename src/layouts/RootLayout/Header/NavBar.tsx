import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const links = [
    { id: 1, name: "Agents", to: "/agents" },
    { id: 2, name: "Blog", to: "/blog" },
  ];

  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id} className={currentPath === link.to ? "active" : ""}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

export default NavBar;

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
      transition: color 0.2s ease;

      &.active {
        color: ${({ theme }) => theme.colors.gray12};
        font-weight: 600;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.gray12};
      }
    }
  }
`;
