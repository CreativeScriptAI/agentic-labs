import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get query parameters
    const {
      title = "Agentic AI Labs",
      description = "Production AI agents for real workflows",
      type = "website",
    } = req.query;

    // For now, redirect to a placeholder image service
    // In production, you could use Cloudinary, Canvas API, or a similar service
    // to generate dynamic OG images
    const ogImageUrl = `https://via.placeholder.com/1200x630/ffffff/000000?text=${encodeURIComponent(
      title as string
    )}`;

    res.redirect(302, ogImageUrl);
  } catch (error) {
    console.error("Error generating OG image:", error);
    res.status(500).json({ error: "Failed to generate OG image" });
  }
}
