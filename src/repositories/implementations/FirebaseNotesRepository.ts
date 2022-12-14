import { Notes } from '../../entities/Notes';
import { INotesRepository } from './../INotesRepository';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, getDoc } from '@firebase/firestore';
import { db } from '../../api';

export class FirebaseNotesRepository implements INotesRepository {

    userCollectionRef = collection(db, "teste");
    Notes: any = [];


    async save(notes: Notes): Promise<Notes> {
        const {description, date} = notes;
        await addDoc(this.userCollectionRef, {
            description: description,
            date: new Date(date)
        })
        return notes;
    }

    async update(note: Notes): Promise<Notes> {
        const userDoc = doc(this.userCollectionRef, note.id);
        const updateDescription = {description: note.description};
        await updateDoc(userDoc, updateDescription)

        return note
    }

    async getAll(): Promise<any> {
        const snap = await getDocs(this.userCollectionRef)
        this.Notes = [];
        snap.forEach((props) =>  {
            this.Notes.push(
                {
                    id: props.id,
                    description: props.data().description,
                    date: new Date(props.data().date.seconds * 1000)
                }
        )
        })
        return this.Notes;
    }

    async delete(id: string): Promise<void> {
        const userDoc = doc(this.userCollectionRef, id)
        await deleteDoc(userDoc)
    
        return
    }

    async getById(id: string): Promise<any> {
        
        const noteRef = doc(this.userCollectionRef, id)
        const noteDoc = await getDoc(noteRef)
        const note: any = {
            id: noteDoc.id,
            description: noteDoc.data().description,
            date: noteDoc.data().date
        }

            
        return note
    }
}