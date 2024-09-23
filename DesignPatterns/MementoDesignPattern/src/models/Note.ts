// models/Note.ts

import { Memento } from "./Memento";

export class Note {
    private content: string = "";

    write(text: string) {
        this.content += text + " ";
        console.log(`📝 Added note: "${text}"`);
    }

    getContent(): string {
        return this.content;
    }

    // Save the current state into a Memento
    save(): Memento {
        console.log(`💾 Saving current state...`);
        return new Memento(this.content);
    }

    // Restore a previous state from a Memento
    restore(memento: Memento) {
        this.content = memento.getState();
        console.log(`🔄 Restored to previous state!`);
    }
}
