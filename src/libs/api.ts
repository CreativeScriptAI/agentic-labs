const API_BASE_URL = "https://agentikbackend.tryagentikai.com";

export async function fetchAgentsData() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/case-studies`, {
      next: {
        revalidate: 10,
      },
    });

    if (!response.ok) {
      // Log the error but don't throw - return fallback instead
      const errorMessage = `Failed to fetch agents data: ${response.status} ${response.statusText}`;
      console.error(errorMessage);

      // In development, log more details
      if (process.env.NODE_ENV === "development") {
        console.error("API URL:", `${API_BASE_URL}/api/case-studies`);
        console.error("Response Status:", response.status);
      }

      return {
        data: [],
        pages: [],
        total_pages: 0,
        last_updated: new Date().toISOString(),
        error: {
          message: errorMessage,
          status: response.status,
          timestamp: new Date().toISOString(),
        },
      };
    }

    const data = await response.json();

    // Log success in development
    if (process.env.NODE_ENV === "development") {
      console.log("✅ Agents data fetched successfully:", {
        count: data?.data?.length || 0,
        total_pages: data?.total_pages || 0,
      });
    }

    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("❌ Error fetching agents data:", errorMessage);

    // In development, log full error
    if (process.env.NODE_ENV === "development") {
      console.error("Full error:", error);
    }

    return {
      data: [],
      pages: [],
      total_pages: 0,
      last_updated: new Date().toISOString(),
      error: {
        message: errorMessage,
        timestamp: new Date().toISOString(),
      },
    };
  }
}

export async function fetchAgentByID(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/case-studies/${id}`, {
      next: {
        revalidate: 10,
      },
    });

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
    const response = await fetch(`${API_BASE_URL}/api/testimonials`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 10, // Cache for 10 seconds
      },
    });

    if (!response.ok) {
      // Log the error but don't throw - return fallback instead
      const errorMessage = `Failed to fetch testimonials data: ${response.status} ${response.statusText}`;
      console.error(errorMessage);

      // In development, log more details
      if (process.env.NODE_ENV === "development") {
        console.error("API URL:", `${API_BASE_URL}/api/testimonials`);
        console.error("Response Status:", response.status);
      }

      return {
        success: false,
        count: 0,
        data: [],
        error: {
          message: errorMessage,
          status: response.status,
          timestamp: new Date().toISOString(),
        },
      };
    }

    const data = await response.json();

    // Log success in development
    if (process.env.NODE_ENV === "development") {
      console.log("✅ Testimonials data fetched successfully:", {
        count: data?.data?.length || data?.count || 0,
        success: data?.success !== false,
      });
    }

    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("❌ Error fetching testimonials:", errorMessage);

    // In development, log full error
    if (process.env.NODE_ENV === "development") {
      console.error("Full error:", error);
    }

    return {
      success: false,
      count: 0,
      data: [],
      error: {
        message: errorMessage,
        timestamp: new Date().toISOString(),
      },
    };
  }
}

export async function registerUser(userData: {
  name: string;
  email: string;
  phone: string;
}) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Failed to register user: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error registering user:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
