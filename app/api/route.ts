import { NextRequest } from "next/server";

export async function GET(request : NextRequest){
    return Response.json({
        res: 200
    })
}

export async function POST(request : NextRequest){
    const data = await request.json()
    data.isLogin = true
    return Response.json(data)
}