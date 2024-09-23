# Resume Builder

## Overview

This is a simple Resume Builder application built using TypeScript. The system allows users to input their personal and professional information through a command-line interface and generates a formatted resume output. It utilizes the Builder pattern to construct the resume.

## Project Structure

The project is organized into several TypeScript files, each with a specific role:

1. **index.ts**

   - The main application file that handles user interaction and resume creation.

2. **Resume.ts**

   - Defines the `Resume` class, which represents the structure of a resume.

3. **ResumeBuilder.ts**
   - Implements the `ResumeBuilder` class, which uses the Builder pattern to construct a `Resume` object.

## Features

- Interactive command-line interface for inputting resume information.
- Supports the following resume sections:
  - Name
  - Email
  - Phone
  - Address
  - Education
  - Experience
  - Skills (comma-separated)
  - Languages (comma-separated)
  - Hobbies (comma-separated)
- Formatted output with emojis for better readability.
- Option to create multiple resumes in one session.

## How to Run the Project

1. **Prerequisites:**

   - Ensure you have Node.js and npm (Node Package Manager) installed on your system.

2. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd resume-builder
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
   - The application will guide you through entering your resume information.
   - After generating a resume, you'll have the option to create another one.

## Code Structure

### Main Application (app.ts)

This file contains the main application logic:

- Sets up the readline interface for user input.
- Implements the `askQuestion` function for prompting user input.
- Contains the `app` function that orchestrates the resume building process.

### Resume Class (Resume.ts)

The `Resume` class represents the structure of a resume:

- Stores resume information (name, email, phone, etc.).
- Provides setter methods for each piece of information.
- Implements the `getResume` method to generate a formatted string representation of the resume.

### ResumeBuilder Class (ResumeBuilder.ts)

The `ResumeBuilder` class implements the Builder pattern:

- Provides methods for setting each piece of resume information.
- Each setter method returns the builder instance for method chaining.
- The `build` method returns the constructed `Resume` object.

## Sample Interaction

Here's an example of how a user would interact with the system:

```
📝 Let's build your resume! Please follow the instructions below.

👤 Enter your name or press enter to skip: John Doe
📧 Enter your email or press enter to skip: john.doe@example.com
📱 Enter your phone number or press enter to skip: 123-456-7890
🏠 Enter your address or press enter to skip: 123 Main St, Anytown, USA
🎓 Enter your education or press enter to skip: Bachelor's in Computer Science, University of Example
💼 Enter your experience or press enter to skip: Software Developer at Tech Co, 2018-Present
🛠️ Enter your skills (comma-separated) or press enter to skip: JavaScript, TypeScript, React, Node.js
🗣️ Enter languages you speak (comma-separated) or press enter to skip: English, Spanish
🎨 Enter your hobbies (comma-separated) or press enter to skip: Reading, Hiking, Photography

🖨️ Here is your resume:

👤 Meet John Doe

📧 Email: john.doe@example.com
📞 Phone: 123-456-7890
🏠 Address: 123 Main St, Anytown, USA

🎓 Education:
Bachelor's in Computer Science, University of Example

💼 Experience:
Software Developer at Tech Co, 2018-Present

🛠️ Skills:
  - JavaScript
  - TypeScript
  - React
  - Node.js

🗣️ Languages:
  - English
  - Spanish

🎯 Hobbies:
  - Reading
  - Hiking
  - Photography

✨ Thank you for your time! ✨

🔄 Do you want to create another resume? (yes/no): no
```
