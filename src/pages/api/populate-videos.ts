import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { METHODS } from "@/lib/utils";
import { data } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    
    case METHODS.POST: {
      

      data.forEach(async (category) => {
        await prisma.video.create({
          data: {
            title: category.title,
            imgUrl: category.imgUrl,
            
          },
        });
      });

      return res.status(200).json({ message: "Created" });
    }
    
    default: {
      res.status(500).json("not supported");
    }
  }
}
