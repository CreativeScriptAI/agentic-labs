import { NotionAPI } from "notion-client";

export const getRecordMap = async (pageId: string) => {
  const api = new NotionAPI();

  try {
    const recordMap = await api.getPage(pageId);
    return recordMap;
  } catch (error: any) {
    console.error(`Failed to fetch recordMap for pageId: ${pageId}`, error);

    // If it's a 400 error or other Notion API error during build, return empty recordMap
    if (error?.response?.status === 400 || error?.status === 400) {
      console.warn(
        `Returning empty recordMap for pageId: ${pageId} due to API error`
      );
      return {
        block: {},
        collection: {},
        collection_view: {},
        notion_user: {},
        space: {},
        signed_urls: {},
        collection_query: {},
      };
    }

    // Re-throw other errors
    throw error;
  }
};
