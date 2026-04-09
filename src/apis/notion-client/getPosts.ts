import { CONFIG } from "site.config";
import { NotionAPI } from "notion-client";
import { idToUuid } from "notion-utils";

import getPageProperties from "src/libs/utils/notion/getPageProperties";
import { TPosts } from "src/types";

const NOTION_API_OPTIONS = {
  authToken: process.env.NOTION_TOKEN,
  kyOptions: { mode: undefined as any },
};

export const getPosts = async (): Promise<TPosts> => {
  try {
    const rawId = CONFIG.notionConfig.pageId as string;
    console.log(`[getPosts] Fetching posts from Notion pageId: ${rawId}`);
    const api = new NotionAPI(NOTION_API_OPTIONS);

    // Step 1: getPage to get collection ID, view ID, schema
    const pageResponse = await api.getPage(rawId);

    const collectionId = Object.keys(pageResponse.collection || {})[0];
    const collectionViewId = Object.keys(pageResponse.collection_view || {})[0];

    if (!collectionId || !collectionViewId) {
      console.warn(`[getPosts] Missing collectionId or viewId`);
      return [];
    }

    // Correct paths: schema lives at .value.value.schema (double-nested)
    const schema = (pageResponse.collection as any)[collectionId]?.value?.value?.schema;
    // Collection view object for getCollectionData lives at .value.value
    const collectionViewObj = (pageResponse.collection_view as any)[collectionViewId]?.value?.value;

    if (!schema) {
      console.warn(`[getPosts] No schema found`);
      return [];
    }

    console.log(`[getPosts] collectionId=${collectionId} viewId=${collectionViewId} schema keys=${Object.keys(schema).length}`);

    // Step 2: fetch all collection rows explicitly
    const collData = await api.getCollectionData(
      collectionId,
      collectionViewId,
      collectionViewObj,
      { limit: 999 }
    );

    // Block IDs live at result.reducerResults.collection_group_results.blockIds
    const result = (collData as any)?.result;
    const blockIds: string[] =
      result?.reducerResults?.collection_group_results?.blockIds ??
      result?.blockIds ??
      [];

    console.log(`[getPosts] Got ${blockIds.length} block IDs from collection`);

    if (blockIds.length === 0) {
      console.warn(`[getPosts] 0 block IDs returned`);
      return [];
    }

    // Merge blocks from both responses
    const block = {
      ...pageResponse.block,
      ...((collData as any)?.recordMap?.block ?? {}),
    };

    // Step 3: build post objects from block IDs
    const data = [];
    for (const id of blockIds) {
      try {
        const properties = (await getPageProperties(id, block, schema)) || null;
        if (properties) {
          const blockValue = (block[id] as any)?.value?.value ?? (block[id] as any)?.value;
          properties.createdTime = new Date(blockValue?.created_time).toString();
          properties.fullWidth = blockValue?.format?.page_full_width ?? false;
          data.push(properties);
        }
      } catch (error) {
        console.warn(`[getPosts] Skipping page ${id}:`, error);
        continue;
      }
    }

    console.log(`[getPosts] Successfully processed ${data.length} posts`);

    data.sort((a: any, b: any) => {
      const dateA: any = new Date(a?.date?.start_date || a.createdTime);
      const dateB: any = new Date(b?.date?.start_date || b.createdTime);
      return dateB - dateA;
    });

    return data as TPosts;
  } catch (error) {
    console.error("[getPosts] Error in getPosts:", error);
    return [];
  }
};
