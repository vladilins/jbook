import express from "express";
import fs from "fs/promises";
import path from "path";

interface Cell {
  id: string;
  content: string;
  type: "text" | "code";
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  const fullPath = path.join(dir, filename);

  router.get("/cells", async (req, res) => {
    try {
      // read the file
      const result = await fs.readFile(fullPath, { encoding: "utf8" });

      res.send(JSON.parse(result))
    } catch (error) {
      if(error.code === 'ENOENT') {
        
      } else {
        throw error
      }
    }
    


  });

  router.post("/cells", async (req, res) => {
    // take list of cells
    // serialize them
    const { cells }: { cells: Cell[] } = req.body;

    // write cells to into the file
    await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");

    res.send({ status: "ok" });
  });

  return router;
};
