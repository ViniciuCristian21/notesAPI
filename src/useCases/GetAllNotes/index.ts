import { GetAllNoteController } from './GetAllNoteController';
import { GetAllNoteUseCase } from './GetAllNoteUseCase';
import { FirebaseNotesRepository } from './../../repositories/implementations/FirebaseNotesRepository';



const firebaseNotesRepository = new FirebaseNotesRepository()


const getAllNoteUseCase = new GetAllNoteUseCase(
    firebaseNotesRepository,
)

const getAllNoteController = new GetAllNoteController(
    getAllNoteUseCase,
)


export { getAllNoteUseCase, getAllNoteController }