import { IDeleteNoteRequestDTO } from './DeleteNoteDTO';
import { INotesRepository } from './../../repositories/INotesRepository';


export class DeleteNoteUseCase {
    constructor(
        private notesRepository: INotesRepository,
    ) {}

    async execute(data: IDeleteNoteRequestDTO) {
        
        const result = await this.notesRepository.delete(data.id);

        return result
    }
}