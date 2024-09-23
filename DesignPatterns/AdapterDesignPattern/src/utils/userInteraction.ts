// src/utils/userInteraction.ts
import * as readline from 'readline';
import { JsonToXmlAdapter } from '../adapters/JsonToXmlAdapter';
import { DataAdapter } from '../interfaces/DataAdapter';

export function userInteraction() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("🌟 Welcome to the JSON to XML Converter! 🌟");
    console.log("Please enter your JSON data below:\n");
    
    rl.question('💬 Enter JSON data (e.g. {"key": "value"}): ', (jsonString) => {
        try {
            const jsonData = JSON.parse(jsonString);
            const adapter: DataAdapter = new JsonToXmlAdapter();
            const xmlOutput: string = adapter.convert(jsonData);

            console.log('\n✅ Converted XML:\n', xmlOutput);
        } catch (e) {
            console.error('❌ Invalid JSON format. Please try again. 😕');
        } finally {
            rl.close();
        }
    });
}
