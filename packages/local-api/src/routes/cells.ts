import express from "express";

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  router.get("/cells", async (req, res) => {
    // check if file exists
    // if not, add default list of cells
    // read the file
    // parse cells, send it back to browser
  });

  router.post("/cells", async (req, res) => {
    // check if file exists
    // if not, create it
    // take list of cells
    // serialize them
    // write cells to into the file
  });

  return router;
};
