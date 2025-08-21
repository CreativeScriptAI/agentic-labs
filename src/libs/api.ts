export async function fetchAgentsData() {
  try {
    const response = await fetch(
      "https://notion-blog.estulife.com/api/case-studies",
      {
        next: {
          revalidate: 10,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch agents data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching agents data:", error);
    return {
      pages: [],
      total_pages: 0,
      last_updated: new Date().toISOString(),
    };
  }
}

export async function fetchAgentByID(id: string) {
  try {
    const response = await fetch(
      `https://notion-blog.estulife.com/api/case-studies/${id}`,
      {
        next: {
          revalidate: 10,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch agents data");
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching agent by id:", error);
    return null;
  }
}

export async function fetchTestimonials() {
  try {
    const response = await fetch(
      "https://notion-blog.estulife.com/api/testimonials",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
        // Force fresh request
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch testimonials data: ${response.status}`);
    }

    const data = await response.json();

    // Add timestamp for client-side cache invalidation
    return {
      ...data,
      _fetchedAt: Date.now(),
    };
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return {
      success: false,
      count: 0,
      data: [],
    };
  }
}
