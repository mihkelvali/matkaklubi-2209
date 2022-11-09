import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method === "GET") {
        const treks = await prisma.trek.findMany({
            orderBy: { createdAt: "desc" },
        });
        res.json(treks);
    } // else if (req.method === "POST") {
    //     // create todo
    //     const text = JSON.parse(req.body).text;
    //     const todo = await prisma.todo.create({
    //       data: { text, completed: false },
    //     });

    //     res.json(todo);
    //   } else if (req.method === "PUT") {
    //     // update todo
    //     const id = req.query.todoId;
    //     const data = JSON.parse(req.body);
    //     const todo = await prisma.todo.update({
    //       where: { id },
    //       data,
    //     });

    //     res.json(todo);
    //   } else if (req.method === "DELETE") {
    //     // delete todo
    //     const id = req.query.todoId;
    //     await prisma.todo.delete({ where: { id } });

    //     res.json({ status: "ok" });
    //   }
};
