import { NextRequest } from "next/server";


export const POST = async (req: NextRequest) => {
    const data = await req.formData();
    const file = data.get('file');
    return Response.json({name : JSON.stringify(file)})
}