# JSON to XML Converter

## Overview

This is a simple JSON to XML Converter built using TypeScript. The system allows users to input JSON data through a command-line interface and receive the corresponding XML output. It utilizes the Adapter pattern to convert JSON to XML.

## Project Structure

The project is organized into several TypeScript files, each with a specific role:

1. **src/adapters/JsonToXmlAdapter.ts**

   - Implements the `DataAdapter` interface.
   - Contains the logic for converting JSON to XML.

2. **src/utils/userInteraction.ts**

   - Handles user interaction through the command-line interface.
   - Uses the `JsonToXmlAdapter` to convert user input.

3. **src/interfaces/DataAdapter.ts**

   - Defines the `DataAdapter` interface.

4. **src/index.ts**
   - The entry point of the application.
   - Initiates the user interaction.

## Features

- Convert JSON data to XML format.
- User-friendly command-line interface.
- Proper error handling for invalid JSON input.

## How to Run the Project

1. **Prerequisites:**

   - Ensure you have Node.js and npm (Node Package Manager) installed on your system.

2. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd AdapterDesignPattern
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Program:**

   ```bash
   npx ts-node src/index.ts
   ```

5. **Interact with the Converter:**
   - Follow the prompts to enter your JSON data.
   - The program will output the converted XML.

## Sample Interaction

Here's an example of how a user would interact with the system:

```
🌟 Welcome to the JSON to XML Converter! 🌟
Please enter your JSON data below:

💬 Enter JSON data (e.g. {"key": "value"}): {"name": "John", "age": 30, "city": "New York"}

✅ Converted XML:

<?xml version="1.0"?>
<root>
  <name>John</name>
  <age>30</age>
  <city>New York</city>
</root>
```

## Code Structure

### JsonToXmlAdapter (src/adapters/JsonToXmlAdapter.ts)

This class implements the `DataAdapter` interface and is responsible for converting JSON to XML.

Key methods:

- `convert(json: any): string`: The main method that initiates the conversion process.
- `jsonToXml(json: any): string`: Creates the XML structure.
- `buildXml(xmlObj: any, json: any): void`: Recursively builds the XML elements.

### UserInteraction (src/utils/userInteraction.ts)

This module handles the command-line interface for user input and output.

Key features:

- Uses `readline` for user input.
- Implements error handling for invalid JSON input.
- Utilizes the `JsonToXmlAdapter` for conversion.

### DataAdapter Interface (src/interfaces/DataAdapter.ts)

Defines the contract for data adapters with a single method:

- `convert(data: string): string`

### Main Application (src/index.ts)

The entry point of the application that initiates the user interaction.

## Dependencies

This project uses the following npm packages:

- `xmlbuilder`: For creating XML structures.
- `typescript`: For TypeScript support.
- `ts-node`: For running TypeScript files directly.
