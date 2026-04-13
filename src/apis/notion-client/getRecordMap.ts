import { NotionAPI } from "notion-client";

/**
 * The Notion API now returns blocks in a double-nested format:
 *   block[id].value.value = actual block data
 * but react-notion-x expects single-nested:
 *   block[id].value = actual block data
 *
 * This function unwraps each entry so react-notion-x can read it correctly.
 */
function normalizeRecordMap(recordMap: any) {
  if (!recordMap) return recordMap;

  // Normalize blocks
  if (recordMap.block) {
    const normalizedBlock: any = {};
    for (const [id, entry] of Object.entries(recordMap.block as any)) {
      const e = entry as any;
      // Double-nested: e.value.value has the real block data (with an `id` field)
      if (e?.value?.value?.id) {
        normalizedBlock[id] = { ...e, value: e.value.value };
      } else {
        normalizedBlock[id] = e;
      }
    }
    recordMap = { ...recordMap, block: normalizedBlock };
  }

  // Normalize collections
  if (recordMap.collection) {
    const normalizedCollection: any = {};
    for (const [id, entry] of Object.entries(recordMap.collection as any)) {
      const e = entry as any;
      if (e?.value?.value?.id) {
        normalizedCollection[id] = { ...e, value: e.value.value };
      } else {
        normalizedCollection[id] = e;
      }
    }
    recordMap = { ...recordMap, collection: normalizedCollection };
  }

  return recordMap;
}

export const getRecordMap = async (pageId: string) => {
  const api = new NotionAPI({ authToken: process.env.NOTION_TOKEN, kyOptions: { mode: undefined as any } });

  try {
    const rawRecordMap = await api.getPage(pageId);
    return normalizeRecordMap(rawRecordMap);
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
