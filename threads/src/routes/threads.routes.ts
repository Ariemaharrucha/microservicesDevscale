import express from "express";
import ThreadControllers from "../cotrollers/threads.controller";

export const ThreadRoutes = express.Router();

ThreadRoutes.get("/", ThreadControllers.getAllThreads);
ThreadRoutes.post("/", ThreadControllers.createThreads);
ThreadRoutes.get("/:id", ThreadControllers.getThreadById);
ThreadRoutes.put("/:id", ThreadControllers.updateThreadById);
ThreadRoutes.delete("/:id", ThreadControllers.deleteThreadById)