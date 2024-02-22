// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/lib/prisma";
// import { Video, getVideos } from "@/lib/videos";
import { Video } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: Array<Video>
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    const {method} = req;
    if (method === 'GET') {
        // const videos = await getVideos();
        const data = await prisma.video.findMany();

        return res.status(200).json({ data: data});

    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({message: `Method ${method} is not allowed`, data: []})
    }

}
