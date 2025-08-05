import React, { useState } from "react";
import styled from "@emotion/styled";
import AgentCard from "./AgentCard";
import useAgentsQuery from "src/hooks/useAgentsQuery";

const HEADER_HEIGHT = 73;

type Props = Record<string, never>;

const Agents: React.FC<Props> = () => {
  const data = useAgentsQuery();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgents = (Array.isArray(data) ? data : []).filter((agent) => {
    const searchContent = (
      agent.title +
      " " +
      (agent.summary || "") +
      " " +
      (agent.tags?.join(" ") || "")
    ).toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  return (
    <StyledWrapper>
      <div className="container">
        <div className="header">
          <h1>AI Agents</h1>
          <p>Discover powerful AI agents to enhance your workflow</p>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search agents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="grid">
          {!filteredAgents.length && (
            <div className="empty-state">
              <p>No agents found 🤖</p>
            </div>
          )}
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} data={agent} />
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Agents;

const StyledWrapper = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  padding: 2rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 768px) {
      padding: 0 2rem;
    }
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;

    h1 {
      font-size: 2.5rem;
      line-height: 1.2;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray12};
      margin-bottom: 1rem;

      @media (min-width: 768px) {
        font-size: 3rem;
      }
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: ${({ theme }) => theme.colors.gray11};
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .search {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;

    .search-input {
      width: 100%;
      max-width: 500px;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.colors.gray8};
      background-color: ${({ theme }) =>
        theme.scheme === "light" ? "white" : theme.colors.gray4};
      color: ${({ theme }) => theme.colors.gray12};
      font-size: 1rem;
      transition: all 0.2s ease;

      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.gray10};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gray6};
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.gray10};
      }
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .empty-state {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem;
    color: ${({ theme }) => theme.colors.gray10};
    font-size: 1.125rem;
  }
`;
