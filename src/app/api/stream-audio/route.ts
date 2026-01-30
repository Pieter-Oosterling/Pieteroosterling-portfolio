import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { stat } from 'fs/promises';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const pwd = searchParams.get('pwd');

    // 1. Password Check
    if (pwd !== 'De beste docent van CLD - 65473829') { // Simple 8-digit code
        return new NextResponse('Niet geautoriseerd', { status: 401 });
    }

    // 2. File Path
    const filePath = path.join(process.cwd(), 'private_assets', 'interview-gd-p4-po.m4a');

    try {
        const stats = await stat(filePath);
        const fileSize = stats.size;
        const range = req.headers.get('range');

        if (range) {
            // Range request handling for seeking
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = (end - start) + 1;
            const file = fs.createReadStream(filePath, { start, end });

            const headers = new Headers();
            headers.set('Content-Range', `bytes ${start}-${end}/${fileSize}`);
            headers.set('Accept-Ranges', 'bytes');
            headers.set('Content-Length', chunksize.toString());
            headers.set('Content-Type', 'audio/mp4');

            return new NextResponse(file as any, {
                status: 206,
                headers,
            });
        } else {
            // Full file request
            const file = fs.createReadStream(filePath);
            const headers = new Headers();
            headers.set('Content-Length', fileSize.toString());
            headers.set('Content-Type', 'audio/mp4');

            return new NextResponse(file as any, {
                status: 200,
                headers,
            });
        }
    } catch (error) {
        console.error('Audio stream error:', error);
        return new NextResponse('File not found', { status: 404 });
    }
}
