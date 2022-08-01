import { CreateNotesController } from './CreateNotesController';
import { CreateNoteUseCase } from './CreateNoteUseCase';
import { FirebaseNotesRepository } from './../../repositories/implementations/FirebaseNotesRepository';



const firebaseNotesRepository = new FirebaseNotesRepository()


const createNoteUseCase = new CreateNoteUseCase(
    firebaseNotesRepository,
)

const createNotesController = new CreateNotesController(
    createNoteUseCase
)

export { createNoteUseCase, createNotesController}