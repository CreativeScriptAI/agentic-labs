export interface Agent {
  id: string;
  name: string;
  title: string;
  tags: string[];
  link: string;
  avatar?: string;
  initials: string;
  position: { x: number; y: number };
}

export interface AgentsProps {
  agents: Agent[];
}

export function calculatePositions(
  count: number,
  radius: number = 120
): Array<{ x: number; y: number }> {
  const positions: Array<{ x: number; y: number }> = [];
  const angleStep = (2 * Math.PI) / Math.max(count, 1);

  for (let i = 0; i < count; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    positions.push({ x, y });
  }

  return positions;
}

export function transformApiDataToAgents(apiData: any): Agent[] {
  if (!apiData?.data) return [];

  const positions = calculatePositions(apiData.data.length);

  return apiData.data.map((page: any, index: number) => {
    const projectName: string = page.projectName || "Unnamed Agent";
    const subtitle: string =
      page.hero?.subtitle || page.hero?.description || "";
    const featuredImage: string =
      page.hero?.heroImage || page.header?.tryButtonIcon || "";

    const slug: string =
      projectName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "") || `agent-${index}`;

    return {
      id: page._id,
      name: projectName,
      title: subtitle,
      tags: [],
      link: `/agents/${slug}?id=${page._id}`,
      avatar: featuredImage || undefined,
      initials: projectName.substring(0, 2).toUpperCase(),
      position: positions[index],
    } as Agent;
  });
}
