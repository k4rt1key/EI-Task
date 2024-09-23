// app.ts

import { Note } from "./models/Note";
import { NoteHistory } from "./models/NoteHistory";
import { rl } from "./utils/readline";

class NoteTakingApp {
    private note: Note;
    private history: NoteHistory;

    constructor() {
        this.note = new Note();
        this.history = new NoteHistory();
    }

    addNote(text: string) {
        this.history.saveState(this.note);
        this.note.write(text);
    }

    showNotes() {
        console.log(`📓 Current Notes:\n${this.note.getContent()}`);
    }

    undo() {
        this.history.undo(this.note);
    }
}

// Main interactive app
function main() {
    const app = new NoteTakingApp();

    const promptUser = () => {
        console.log("\n📒 Note-Taking App");
        console.log("1️⃣ Add Note");
        console.log("2️⃣ Show Notes");
        console.log("3️⃣ Undo");
        console.log("4️⃣ Exit");

        rl.question("Choose an option (1-4): ", (choice) => {
            switch (choice) {
                case "1":
                    rl.question("📝 Enter note: ", (note) => {
                        app.addNote(note);
                        promptUser();
                    });
                    break;
                case "2":
                    app.showNotes();
                    promptUser();
                    break;
                case "3":
                    app.undo();
                    promptUser();
                    break;
                case "4":
                    console.log("👋 Exiting the app...");
                    rl.close();
                    break;
                default:
                    console.log("❌ Invalid option, please try again.");
                    promptUser();
            }
        });
    };

    promptUser();
}

main();
