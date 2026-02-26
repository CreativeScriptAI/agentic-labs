import { CONFIG } from "site.config";
import { NotionAPI } from "notion-client";
import { idToUuid } from "notion-utils";

import getAllPageIds from "src/libs/utils/notion/getAllPageIds";
import getPageProperties from "src/libs/utils/notion/getPageProperties";
import { TPosts } from "src/types";

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */

// TODO: react query를 사용해서 처음 불러온 뒤로는 해당데이터만 사용하도록 수정
export const getPosts = async (): Promise<TPosts> => {
  try {
    let id = CONFIG.notionConfig.pageId as string;
    console.log(`[getPosts] Fetching posts from Notion pageId: ${id}`);
    const api = new NotionAPI();

    try {
      const response = await api.getPage(id);
      id = idToUuid(id);
      const collection = (Object.values(response.collection)[0] as any)?.value?.value;
      const block = response.block;
      const schema = collection?.schema;

      if (!collection) {
        console.warn(`[getPosts] No collection found in response for pageId: ${id}`);
        return [];
      }

      if (!schema) {
        console.warn(`[getPosts] No schema found in collection for pageId: ${id}`);
        return [];
      }

      const rawMetadata = (block[id] as any)?.value?.value;

      if (!rawMetadata) {
        console.warn(`[getPosts] No metadata found for pageId: ${id}`);
        return [];
      }

      // Check Type
      if (
        rawMetadata?.type !== "collection_view_page" &&
        rawMetadata?.type !== "collection_view"
      ) {
        console.warn(`[getPosts] Page type is not collection_view_page or collection_view. Type: ${rawMetadata?.type}`);
        return [];
      } else {
        // Construct Data
        const pageIds = getAllPageIds(response);
        console.log(`[getPosts] Found ${pageIds.length} page IDs in collection`);
        const data = [];
        for (let i = 0; i < pageIds.length; i++) {
          const id = pageIds[i];
          try {
            const properties =
              (await getPageProperties(id, block, schema)) || null;
            if (properties) {
              // Add fullwidth, createdtime to properties
              properties.createdTime = new Date(
                (block[id] as any).value?.value?.created_time
              ).toString();
              properties.fullWidth =
                (block[id] as any).value?.value?.format?.page_full_width ?? false;

              data.push(properties);
            }
          } catch (error) {
            console.warn(`[getPosts] Failed to get properties for page ${id}:`, error);
            // Skip this page and continue with others
            continue;
          }
        }

        console.log(`[getPosts] Successfully processed ${data.length} posts`);

        // Sort by date
        data.sort((a: any, b: any) => {
          const dateA: any = new Date(a?.date?.start_date || a.createdTime);
          const dateB: any = new Date(b?.date?.start_date || b.createdTime);
          return dateB - dateA;
        });

        const posts = data as TPosts;
        return posts;
      }
    } catch (error: any) {
      console.error(`[getPosts] Failed to fetch posts from pageId: ${id}`, error);
      console.error(`[getPosts] Error details:`, {
        message: error?.message,
        status: error?.response?.status || error?.status,
        statusText: error?.response?.statusText,
      });

      // Return empty array if there's an API error during build
      if (error?.response?.status === 400 || error?.status === 400) {
        console.warn(`[getPosts] Returning empty posts array due to API error (400)`);
        return [];
      }

      // Re-throw other errors
      throw error;
    }
  } catch (error) {
    console.error("[getPosts] Error in getPosts:", error);
    return [];
  }
};
