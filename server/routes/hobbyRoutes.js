import express from "express";
import { hobbyFeed } from "../controllers/post.js";
import { joinHobby, leaveHobby } from "../controllers/hobbies.js";
import { hobbyId, hobbyInfo } from "../controllers/hobbies.js";

const routes = express.Router();

routes.get("/:hobbyId/info", hobbyInfo);
routes.get("/:hobby", hobbyFeed);
routes.post("/:author/:hobby", joinHobby);
routes.post("/:author/:hobby/leave", leaveHobby);
routes.post("/getId", hobbyId);

export default routes;