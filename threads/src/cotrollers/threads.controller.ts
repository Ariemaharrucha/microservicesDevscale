import { Request, Response } from "express";
import ThreadServices from "../services/threads.services";
import { IThread } from "../types/entity";

const ThreadControllers = {
  createThreads: async (req: Request, res: Response) => {
    try {
      const { userId, post } = req.body;

      if (!userId || !post) {
        return res.status(401).json({ message: "please insert data" });
      }

      const dataThread: IThread = { userId, post };
      const newThread = await ThreadServices.createThreads(dataThread);
      return res.status(200).json({data:"success", thread:newThread});
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  getAllThreads: async (req: Request, res: Response) => {
    try {
      const threads = await ThreadServices.getAllThreads();
      return res.status(200).json({threads});
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  getThreadById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const thread = await ThreadServices.getThreadById(id);
      return res.status(200).json(thread);
    } catch (error) {
      return res.status(401).json({ message: "thread not found" });
    }
  },

  updateThreadById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { userId, post } = req.body;

      const updateThrad = await ThreadServices.updateThread(id, {
        userId,
        post,
      });
      return res.status(200).json({status:"bershasil di update",thread:updateThrad});
    } catch (error) {
      return res.status(401).json({ message: "thread not found" });
    }
  },

  deleteThreadById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const delThread = await ThreadServices.deleteThread(id);
      return res.status(200).json({status:"delete success",thrad: delThread});
    } catch (error) {
      return res.status(401).json({ message: "thread not found" });
    }
  },
};

export default ThreadControllers;
