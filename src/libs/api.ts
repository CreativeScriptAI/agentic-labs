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
        },
        next: {
          revalidate: 10, // Cache for 5 minutes
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch testimonials data: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return {
      success: false,
      count: 0,
      data: [],
    };
  }
}
