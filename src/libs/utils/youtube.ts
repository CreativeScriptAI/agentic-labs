/**
 * Check if a URL is a valid YouTube URL
 * @param url - The URL to check
 * @returns boolean indicating if the URL is a YouTube URL
 */
export function isYouTubeURL(url?: string): boolean {
  console.log("url", url);
  if (!url) return false;

  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
  return youtubeRegex.test(url);
}

/**
 * Convert a YouTube URL to an embed URL
 * @param url - The YouTube URL to convert
 * @returns The embed URL or null if invalid
 */
export function getYouTubeEmbedURL(url?: string): string | null {
  if (!url || !isYouTubeURL(url)) return null;

  console.log("url;;;", url);
  let videoId: string | null = null;

  // Handle youtu.be URLs
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0] || null;
  }
  // Handle youtube.com URLs
  else if (url.includes("youtube.com/")) {
    // Handle watch URLs
    if (url.includes("/watch")) {
      const urlParams = new URLSearchParams(url.split("?")[1] || "");
      videoId = urlParams.get("v");
    }
    // Handle embed URLs
    else if (url.includes("/embed/")) {
      videoId = url.split("/embed/")[1]?.split("?")[0] || null;
    }
  }

  if (!videoId) return null;

  console.log("embed", videoId);
  return `https://www.youtube.com/embed/${videoId}`;
}
