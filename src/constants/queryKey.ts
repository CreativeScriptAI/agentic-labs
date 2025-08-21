export const queryKey = {
  scheme: () => ["scheme"] as const,
  posts: () => ["posts"] as const,
  agents: () => ["agents"] as const,
  categories: () => ["categories"] as const,
  tags: () => ["tags"] as const,
  testimonials: () => ["testimonials"] as const,
  post: (slug: string) => ["post", slug] as const,
  agent: (slug: string) => ["agent", slug] as const,
};
