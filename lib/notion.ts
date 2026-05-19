import { Client } from "@notionhq/client";

// Retrieve these from the environment block
const notionToken = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionToken || "mock-token",
});

export async function fetchKanchanData() {
  if (!notionToken || !databaseId) {
    console.warn("No Notion token or database ID provided. Returning mock data.");
    return {
      status: "mock",
      data: []
    };
  }

  try {
    // @ts-ignore
    const response = await (notion.databases as any).query({
      database_id: databaseId,
    });
    return {
      status: "success",
      data: response.results,
    };
  } catch (error) {
    console.error("Error fetching from Notion:", error);
    return {
      status: "error",
      error: error
    };
  }
}
