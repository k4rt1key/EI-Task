# Note-Taking App

## Overview

This Note-Taking App is a TypeScript-based command-line application that demonstrates the use of the Memento design pattern. It allows users to add notes, view their notes, and undo previous actions.

## Project Structure

The project is organized into several TypeScript files:

1. **app.ts**

   - The main application file that handles user interaction and orchestrates the note-taking operations.

2. **models/Memento.ts**

   - Defines the `Memento` class, which stores the state of a note.

3. **models/Note.ts**

   - Implements the `Note` class, which represents a note and includes methods for writing, saving, and restoring content.

4. **models/NoteHistory.ts**

   - Implements the `NoteHistory` class, which manages the history of note states and provides undo functionality.

5. **utils/readline.ts**
   - Sets up the readline interface for user input.

## Features

- Interactive command-line interface for note-taking operations.
- Add new notes to the existing content.
- View all current notes.
- Undo previous actions using the Memento pattern.
- User-friendly prompts with emojis for better readability.

## How to Run the Project

1. **Prerequisites:**

   - Ensure you have Node.js and npm (Node Package Manager) installed on your system.

2. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd note-taking-app
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Program:**

   ```bash
   npx ts-node app.ts
   ```

5. **Follow the Prompts:**
   - The application will guide you through the note-taking process.

## Code Structure

### Main Application (app.ts)

This file contains the main application logic:

- Implements the `NoteTakingApp` class, which manages the note and history objects.
- Sets up the main menu and user interaction flow.
- Handles user input and executes corresponding actions.

### Memento Class (models/Memento.ts)

Responsible for storing the state of a note:

- `constructor(state: string)`: Creates a new Memento with the given state.
- `getState(): string`: Returns the stored state.

### Note Class (models/Note.ts)

Manages individual notes:

- `write(text: string)`: Adds new text to the note.
- `getContent(): string`: Returns the current content of the note.
- `save(): Memento`: Creates a Memento of the current state.
- `restore(memento: Memento)`: Restores the note's state from a Memento.

### NoteHistory Class (models/NoteHistory.ts)

Handles the history of note states:

- `saveState(note: Note)`: Saves the current state of a note to the history.
- `undo(note: Note)`: Restores the note to its previous state.

### Readline Utility (utils/readline.ts)

Sets up the readline interface for handling user input.

## Sample Interaction

Here's an example of how a user would interact with the system:

```
📒 Note-Taking App
1️⃣ Add Note
2️⃣ Show Notes
3️⃣ Undo
4️⃣ Exit
Choose an option (1-4): 1
📝 Enter note: This is my first note

📝 Added note: "This is my first note"
🗃️ Saving note state to history...
💾 Saving current state...

📒 Note-Taking App
1️⃣ Add Note
2️⃣ Show Notes
3️⃣ Undo
4️⃣ Exit
Choose an option (1-4): 1
📝 Enter note: Adding a second note

📝 Added note: "Adding a second note"
🗃️ Saving note state to history...
💾 Saving current state...

📒 Note-Taking App
1️⃣ Add Note
2️⃣ Show Notes
3️⃣ Undo
4️⃣ Exit
Choose an option (1-4): 2
📓 Current Notes:
This is my first note Adding a second note

📒 Note-Taking App
1️⃣ Add Note
2️⃣ Show Notes
3️⃣ Undo
4️⃣ Exit
Choose an option (1-4): 3
⏪ Undoing last action...
🔄 Restored to previous state!

📒 Note-Taking App
1️⃣ Add Note
2️⃣ Show Notes
3️⃣ Undo
4️⃣ Exit
Choose an option (1-4): 2
📓 Current Notes:
This is my first note

📒 Note-Taking App
1️⃣ Add Note
2️⃣ Show Notes
3️⃣ Undo
4️⃣ Exit
Choose an option (1-4): 4
👋 Exiting the app...
```

## Design Pattern: Memento

This project demonstrates the use of the Memento design pattern:

- The `Memento` class acts as a snapshot of the `Note` state at a particular point in time.
- The `Note` class (Originator) creates Mementos to save its state and uses them to restore previous states.
- The `NoteHistory` class (Caretaker) manages the collection of Mementos, allowing for undo functionality.

This pattern allows the application to implement undo functionality without exposing the internal structure of the `Note` class. It provides a way to restore the `Note` object to its previous state, enhancing the user experience by allowing them to revert changes.
