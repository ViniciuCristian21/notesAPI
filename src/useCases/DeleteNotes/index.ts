import { DeleteNoteController } from './DeleteNoteController';
import { DeleteNoteUseCase } from './DeleteNoteUseCase';
import { FirebaseNotesRepository } from './../../repositories/implementations/FirebaseNotesRepository';


const firebaseNotesRepository = new FirebaseNotesRepository()

const deleteNoteUseCase = new DeleteNoteUseCase(
    firebaseNotesRepository,
)

const deleteNoteController = new DeleteNoteController(
    deleteNoteUseCase,
)

export { deleteNoteUseCase, deleteNoteController }
