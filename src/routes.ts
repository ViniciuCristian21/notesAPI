import {Router} from "express";
import { createNotesController } from "./useCases/CreateNotes";
import { getAllNoteController } from "./useCases/GetAllNotes";
import { updateNoteController } from "./useCases/UpdateNotes";

const router = Router();


router.post("/new-note", (req, res) => {
    return createNotesController.handle(req, res);
})

router.patch("/update-note", (req, res) => {
    return updateNoteController.handle(req, res);
})

router.get("/all-notes", (req, res) => {
    return getAllNoteController.handle(req, res);
})
export { router }