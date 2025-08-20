import { NotionAPI } from "notion-client";
import { idToUuid } from "notion-utils";

import getAllPageIds from "src/libs/utils/notion/getAllPageIds";
import getPageProperties from "src/libs/utils/notion/getPageProperties";
import { TPosts } from "src/types";

/**
 * Get agents from the specific Notion page
 */
export const getAgents = async () => {
  // Hardcoded page ID for the agents directory
  let id = "20eb34d6b4d480dfa876f581b273b88d";
  const api = new NotionAPI();

  try {
    const response = await api.getPage(id);
    id = idToUuid(id);
    const collection = Object.values(response.collection)[0]?.value;
    const block = response.block;
    const schema = collection?.schema;

    const rawMetadata = block[id].value;

    // Check Type
    if (
      rawMetadata?.type !== "collection_view_page" &&
      rawMetadata?.type !== "collection_view"
    ) {
      return [];
    } else {
      // Construct Data
      const pageIds = getAllPageIds(response);
      const data = [];
      for (let i = 0; i < pageIds.length; i++) {
        const id = pageIds[i];
        try {
          const properties =
            (await getPageProperties(id, block, schema)) || null;
          if (properties) {
            // Add fullwidth, createdtime to properties
            properties.createdTime = new Date(
              block[id].value?.created_time
            ).toString();
            properties.fullWidth =
              (block[id].value?.format as any)?.page_full_width ?? false;

            data.push(properties);
          }
        } catch (error) {
          console.warn(`Failed to get properties for agent page ${id}:`, error);
          // Skip this page and continue with others
          continue;
        }
      }

      // Sort by date
      data.sort((a: any, b: any) => {
        const dateA: any = new Date(a?.date?.start_date || a.createdTime);
        const dateB: any = new Date(b?.date?.start_date || b.createdTime);
        return dateB - dateA;
      });

      const agents = data as TPosts;
      return agents;
    }
  } catch (error: any) {
    console.error(`Failed to fetch agents from pageId: ${id}`, error);

    // Return empty array if there's an API error during build
    if (error?.response?.status === 400 || error?.status === 400) {
      console.warn(`Returning empty agents array due to API error`);
      return [];
    }

    // Re-throw other errors
    throw error;
  }
};
