import { Notes } from '../../entities/Notes';
import { INotesRepository } from './../INotesRepository';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from '@firebase/firestore';
import { db } from '../../api';

export class FirebaseNotesRepository implements INotesRepository {

    userCollectionRef = collection(db, "teste");
    async save(notes: Notes): Promise<Notes> {
        const {description, date} = notes;
        await addDoc(this.userCollectionRef, {
            description: description,
            date: date
        })
        return notes;
    }
}