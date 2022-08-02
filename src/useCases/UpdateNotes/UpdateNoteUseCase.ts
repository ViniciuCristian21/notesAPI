import { Notes } from './../../entities/Notes';
import { INotesRepository } from './../../repositories/INotesRepository';
import { IUpdateNoteRequestDTO } from './UpdateNoteDTO';


export class UpdateNoteUseCase {
    constructor(
        private notesRepository: INotesRepository,
    ) {}

    async execute(data: IUpdateNoteRequestDTO) {

        const note = new Notes(data, data.id)

        const result = await this.notesRepository.update(note);

        return result;
    }
}