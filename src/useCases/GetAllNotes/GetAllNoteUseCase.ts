import { INotesRepository } from './../../repositories/INotesRepository';


export class GetAllNoteUseCase {
    constructor(
        private notesRepository: INotesRepository,
    ) {}

    async execute() {

        const result = await this.notesRepository.getAll();

        return result;
    }
}