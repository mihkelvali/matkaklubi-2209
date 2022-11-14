import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method === "GET") {
        const treks = await prisma.trek.findMany({
            orderBy: { createdAt: "desc" },
        });
        res.json(treks);
    } else if (req.method === "POST") {
        const trek = JSON.parse(req.body).trek
        const createdTrek = await prisma.trek.create({
            data: { ...trek },
        });
        res.json(createdTrek);
    } else if (req.method === "PUT") {
        const id = req.query.trekId;
        const trek = JSON.parse(req.body).trek;
        console.log(trek)
        const updatedTrek = await prisma.trek.update({
            where: { id },
            data: { ...trek },
        });
        res.json(updatedTrek);
    } else if (req.method === "DELETE") {
        const id = req.query.trekId;
        await prisma.trek.delete({ where: { id } });

        res.json({ status: "ok" });
    }
};
