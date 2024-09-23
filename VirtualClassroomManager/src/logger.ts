import { appendFileSync } from 'fs';

export class Logger {
  static logToFile(message: string) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    // Append log to the file but do not display this in the console
    appendFileSync('applogs.log', logMessage);
  }

  static logToUser(userMessage: string) {
    // Display the user-friendly message in the console (user output)
    console.log(userMessage);
  }
}
