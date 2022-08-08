import { Notes } from './../../entities/Notes';
import { INotesRepository } from './../../repositories/INotesRepository';
import { ICreateNoteRequestDTO } from './CreateNoteDTO';


export class CreateNoteUseCase {
    constructor(
        private notesRepository: INotesRepository,
    ) {}

    async execute(data: ICreateNoteRequestDTO) {

        const notes = new Notes(data);



        const result = await this.notesRepository.save(notes);

        return result
    }
}