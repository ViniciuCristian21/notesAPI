import { IFindOneNoteRequestDTO } from './FindOneNoteDTO';
import { INotesRepository } from './../../repositories/INotesRepository';

export class FindOneNoteUseCase {
    constructor(
        private notesRepository: INotesRepository,
    ) {}

    async execute({id}: IFindOneNoteRequestDTO) {

        const result = await this.notesRepository.getById(id);

        return result;
    }
}