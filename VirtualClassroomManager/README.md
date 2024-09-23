# Virtual Classroom Management System

## Overview

This is a simple Virtual Classroom Management System built using TypeScript. The system allows for managing virtual classrooms, enrolling students, scheduling assignments, and managing assignment submissions. A detailed logging system is integrated, which logs events to a file while keeping user-facing messages concise.

## Project Structure

The project is modular, with each component playing a specific role:

1. **Classroom.ts**

   - Defines the Classroom class, which represents a single virtual classroom.
   - Manages the list of students, assignments, and submissions within a particular class.

2. **VirtualClassroomManager.ts**

   - Main manager class that interacts with multiple classrooms.
   - Allows creating, removing, and managing classrooms.

3. **index.ts**

   - Handles user interaction through the command-line interface (CLI).
   - Accepts commands from the user and calls the appropriate functions in the VirtualClassroomManager.

4. **logger.ts**
   - Logging utility responsible for logging important events to the `applogs.log` file.
   - Separates user-facing messages from detailed log entries.

## Features

- **Classroom Management:**

  - Add or remove classrooms.
  - List students and assignments for each classroom.

- **Student Management:**

  - Enroll students in specific classrooms.

- **Assignment Management:**

  - Schedule assignments for classrooms.
  - Submit assignments by students.

- **Detailed Logging:**
  - All actions are logged with timestamps in `applogs.log`.
  - Logs and user-facing messages are separated, ensuring clean and non-redundant output.

## How to Run the Project

1. **Prerequisites:**

   - Ensure you have Node.js installed on your system.

2. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd VirtualClassroomManager
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Program:**

   ```bash
   npx ts-node index.ts
   ```

5. **Interact via Commands:**
   You can now interact with the system using commands like `add_classroom`, `add_student`, `schedule_assignment`, etc.

## Sample Interaction

Here's an example of how a user would interact with the system:

1. **Add a Classroom**

   ```
   💻 Enter a command: add_classroom Math
   🏫 Classroom "Math" has been created.
   ```

2. **Add Students**

   ```
   💻 Enter a command: add_student John Math
   👨‍🎓 Student "John" has been enrolled in "Math".
   ```

3. **Schedule an Assignment**

   ```
   💻 Enter a command: schedule_assignment Math Homework1
   📝 Assignment "Homework1" has been scheduled in "Math".
   ```

4. **Submit an Assignment**

   ```
   💻 Enter a command: submit_assignment John Math Homework1 "My first homework submission"
   ✅ Assignment "Homework1" submitted by Student "John".
   ```

5. **Get Classroom Info**

   ```
   💻 Enter a command: class_info Math
   🏫 Classroom: "Math"
   👨‍🎓 Students: John
   📝 Assignments: Homework1
   📋 Assignment: Homework1
     Student John submitted: My first homework submission
   ```

6. **Remove a Classroom**
   ```
   💻 Enter a command: remove_classroom Math
   ❌ Classroom "Math" has been removed.
   ```

## Logging

All important actions, such as creating classrooms or submitting assignments, are logged in the `applogs.log` file with timestamps for auditing or debugging purposes. These logs are distinct from the user-facing console messages to avoid redundancy.
