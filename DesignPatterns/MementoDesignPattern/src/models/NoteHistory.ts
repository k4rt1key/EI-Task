// models/NoteHistory.ts

import { Memento } from "./Memento";
import { Note } from "./Note";

export class NoteHistory {
    private mementoStack: Memento[] = [];

    saveState(note: Note) {
        console.log(`🗃️ Saving note state to history...`);
        this.mementoStack.push(note.save());
    }

    undo(note: Note) {
        if (this.mementoStack.length > 0) {
            console.log(`⏪ Undoing last action...`);
            const lastState = this.mementoStack.pop();
            if (lastState) {
                note.restore(lastState);
            }
        } else {
            console.log(`⚠️ No more undos available.`);
        }
    }
}
