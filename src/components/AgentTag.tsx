import styled from "@emotion/styled";
import React from "react";

type Props = {
  children: string;
  variant?: "primary" | "secondary" | "accent";
};

const AgentTag: React.FC<Props> = ({ children, variant = "primary" }) => {
  return <StyledWrapper variant={variant}>{children}</StyledWrapper>;
};

export default AgentTag;

const StyledWrapper = styled.div<{
  variant: "primary" | "secondary" | "accent";
}>`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  transition: all 0.2s ease;
  cursor: default;

  ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: ${theme.colors.gray6};
          color: ${theme.colors.gray12};
          border: 1px solid ${theme.colors.gray8};
        `;
      case "secondary":
        return `
          background-color: ${theme.scheme === "light" ? "#e0f2fe" : "#0c4a6e"};
          color: ${theme.scheme === "light" ? "#0369a1" : "#7dd3fc"};
          border: 1px solid ${theme.scheme === "light" ? "#0ea5e9" : "#0284c7"};
        `;
      case "accent":
        return `
          background-color: ${theme.scheme === "light" ? "#f0fdf4" : "#052e16"};
          color: ${theme.scheme === "light" ? "#15803d" : "#86efac"};
          border: 1px solid ${theme.scheme === "light" ? "#22c55e" : "#16a34a"};
        `;
      default:
        return `
          background-color: ${theme.colors.gray6};
          color: ${theme.colors.gray12};
        `;
    }
  }}

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
