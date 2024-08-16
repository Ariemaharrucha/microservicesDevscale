import { Thread } from "./models/threads.schema";
import { IThread } from "../types/entity";

export const ThreadRepository = {
  create: async (dataThread: IThread) => {
    try {
        const {userId, post} = dataThread;
      const thread = new Thread({
        userId,
        post,
      });
      const newThread = await thread.save();
      return newThread;
    } catch (error) {
      console.error(error);
    }
  },

  getAll: async () => {
    try {
      const threads = await Thread.find();
      return threads;
    } catch (error) {
      console.error(error);
    }
  },

  getById: async (id: string) => {
    try {
      const thread = await Thread.findById(id);
      return thread;
    } catch (error) {
      console.error(error);
    }
  },

  updateThread: async (id: string, dateThread:IThread) => {
    try {
        const {userId, post} = dateThread;
      const thread = await Thread.findByIdAndUpdate(
        {_id: id},
        {userId, post },
        { new: true }
      );
      return thread;
    } catch (error) {
      console.error(error);
    }
  },

  deleteThread: async (id: string) => {
    try {
      const thread = await Thread.findByIdAndDelete(id);
      return thread;
    } catch (error) {
      console.error(error);
    }
  },
};

export default ThreadRepository;