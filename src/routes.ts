import {Router} from "express";
import { createNotesController } from "./useCases/CreateNotes";

const router = Router();


router.post("/new-note", (req, res) => {
    return createNotesController.handle(req, res);
})

export { router }