import { UpdateNotesController } from './UpdateNoteController';

import { UpdateNoteUseCase } from './UpdateNoteUseCase';
import { FirebaseNotesRepository } from './../../repositories/implementations/FirebaseNotesRepository';


const firebaseNotesRepository = new FirebaseNotesRepository()

const updateNoteUseCase = new UpdateNoteUseCase(
    firebaseNotesRepository,
)

const updateNoteController = new UpdateNotesController(
    updateNoteUseCase
)

export { updateNoteUseCase, updateNoteController }