import ThreadRepository from "../repository/threads.repository";
import { IThread } from "../types/entity";

const ThreadServices = {
    createThreads: async (dataThread: IThread) => {
        try {
            const {userId, post} = dataThread;
            const newThread = await ThreadRepository.create({userId, post});
            return newThread;
        } catch (error) {
            console.error(error);
        }
    },

    getAllThreads: async () => {
        try {
            const threads = await ThreadRepository.getAll();
            return threads;
        } catch (error) {
            console.error(error);
        }
    },

    getThreadById: async (id: string) => {
        try {
            const thread = await ThreadRepository.getById(id);
            return thread;
        } catch (error) {
            console.error(error);
        }
    },

    updateThread: async (id: string, dateThread:IThread) => {
        try {
            const thread = await ThreadRepository.updateThread(id, dateThread);
            return thread;
        } catch (error) {
            console.error(error);
        }
    },

    deleteThread: async (id: string) => {
        try {
            const thread = await ThreadRepository.deleteThread(id);
            return thread;
        } catch (error) {
            console.error(error);
        }
    },
};

export default ThreadServices;