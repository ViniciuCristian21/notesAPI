import { FindOneNoteController } from './FindOneNoteController';
import { FindOneNoteUseCase } from './FindOneNoteUseCase';
import { FirebaseNotesRepository } from './../../repositories/implementations/FirebaseNotesRepository';




const firebaseNotesRepository = new FirebaseNotesRepository()

const findOneNoteUseCase = new FindOneNoteUseCase(
    firebaseNotesRepository,
)

const findOneNoteController = new FindOneNoteController(
    findOneNoteUseCase
)

export {findOneNoteUseCase, findOneNoteController}