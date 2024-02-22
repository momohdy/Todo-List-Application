import express from "express";
import {
  deleteHandler,
  getHandler,
  patchHandler,
  postHandler,
  putHandler,
} from "../handlers/todosHandler.js";
const router = express();

// PARSING REQUEST
router.use(express.json());

router.route("/").get(getHandler).post(postHandler)
router.route("/:id").put(putHandler).delete(deleteHandler).patch(patchHandler)

export { router };
