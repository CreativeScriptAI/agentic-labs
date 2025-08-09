import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type ApiResponse = { success: boolean; message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { email, description, message } = req.body || {};
    const descriptionText: string | undefined = description ?? message;

    if (!email || !descriptionText) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: email and description/message",
      });
    }

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL as string | undefined;
    const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(
      /\\n/g,
      "\n"
    );
    const spreadsheetId = process.env.GOOGLE_SHEET_ID as string | undefined;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      return res.status(500).json({
        success: false,
        message:
          "Server is missing Google Sheets credentials. Please set env vars.",
      });
    }

    const jwtClient = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth: jwtClient });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:B",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[String(email), String(descriptionText)]],
      },
    });

    return res
      .status(200)
      .json({ success: true, message: "Submission saved to Google Sheets" });
  } catch (error) {
    console.error("/api/contact error", error);
    return res.status(500).json({
      success: false,
      message: "Failed to save submission to Google Sheets",
    });
  }
}
