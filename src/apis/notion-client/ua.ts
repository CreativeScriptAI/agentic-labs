// Notion's unofficial API (used by notion-client / react-notion-x) now returns
// 403 for requests without a browser User-Agent (anti-scraping). Sending a
// normal desktop UA restores access to publicly shared pages. Shared by every
// NotionAPI call site so it stays consistent.
export const NOTION_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

export const NOTION_KY_OPTIONS = {
  mode: undefined as any,
  headers: { "User-Agent": NOTION_UA },
};
