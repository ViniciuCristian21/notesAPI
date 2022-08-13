import { Notes } from './../entities/Notes';


export interface INotesRepository {
    save(notes: Notes): Promise<Notes>;
    update(note: Notes): Promise<Notes>;
    getAll(): Promise<any>;
    delete(id: string): Promise<void>;
    getById(id: string): Promise<any>;
}