import { Notes } from './../entities/Notes';


export interface INotesRepository {
    save(notes: Notes): Promise<Notes>;
}