// app/api/proxy/file/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { storage } = await createAdminClient();
  const fileId = params.id;

  try {
    // Fetch binary data from Appwrite, using Admin key
    const result = await storage.getFileDownload(
      appwriteConfig.bucketId,
      fileId
    );
    const arrayBuffer = await result.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new NextResponse(buffer, {
      headers: {
        // Preserve content‑type & disposition
        "Content-Type":
          result.headers.get("content-type") || "application/octet-stream",
        "Content-Disposition":
          result.headers.get("content-disposition") || "inline",
      },
    });
  } catch (err) {
    console.error("Proxy image error:", err);
    return new NextResponse("File not found", { status: 404 });
  }
}
