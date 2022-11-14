import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method === "POST") {
        const message = JSON.parse(req.body).message;
        const createdMessage = await prisma.contactUsMessage.create({
            data: { ...message },
        });
        res.json(createdMessage);
    }
}