import { idToUuid } from "notion-utils";
import { ExtendedRecordMap, ID } from "notion-types";

export default function getAllPageIds(
  response: ExtendedRecordMap,
  viewId?: string
) {
  const collectionQuery = response.collection_query;
  const views = Object.values(collectionQuery)[0];

  // Guard: if views is null/undefined, return empty
  if (!views) return [];

  let pageIds: ID[] = [];
  if (viewId) {
    const vId = idToUuid(viewId);
    pageIds = views[vId]?.blockIds ?? [];
  } else {
    const pageSet = new Set<ID>();
    Object.values(views).forEach((view: unknown) => {
      const v = view as any;
      // Notion updated their API - blockIds may be directly on the view
      // OR nested under collection_group_results (older format)
      if (v?.blockIds) {
        v.blockIds.forEach((id: ID) => pageSet.add(id));
      } else if (v?.collection_group_results?.blockIds) {
        v.collection_group_results.blockIds.forEach((id: ID) =>
          pageSet.add(id)
        );
      }
    });
    pageIds = [...pageSet];
  }
  return pageIds;
}
