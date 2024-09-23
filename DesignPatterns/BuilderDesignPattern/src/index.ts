import { ResumeBuilder } from "./ResumeBuilder";
import readline from 'readline';

// Create an interface for readline to take input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => resolve(answer));
    });
}

async function app() {
    let flag = true;

    while (flag) {
        console.log("\n📝 Let's build your resume! Please follow the instructions below.");
        
        let name = await askQuestion("👤 Enter your name or press enter to skip: ") || "";
        let email = await askQuestion("📧 Enter your email or press enter to skip: ") || "";
        let phone = await askQuestion("📱 Enter your phone number or press enter to skip: ") || "";
        let address = await askQuestion("🏠 Enter your address or press enter to skip: ") || "";
        let education = await askQuestion("🎓 Enter your education or press enter to skip: ") || "";
        let experience = await askQuestion("💼 Enter your experience or press enter to skip: ") || "";

        // Input for comma-separated values with proper guidelines
        let skills = await askQuestion("🛠️ Enter your skills (comma-separated) or press enter to skip: ") || "";
        let languages = await askQuestion("🗣️ Enter languages you speak (comma-separated) or press enter to skip: ") || "";
        let hobbies = await askQuestion("🎨 Enter your hobbies (comma-separated) or press enter to skip: ") || "";

        // Create the resume using ResumeBuilder
        let resume = new ResumeBuilder()
            .setName(name)
            .setEmail(email)
            .setPhone(phone)
            .setAddress(address)
            .setEducation(education)
            .setExperience(experience)
            .setSkills(skills)
            .setLanguages(languages)
            .setHobbies(hobbies)
            .build();

        console.log("\n🖨️ Here is your resume:\n");
        console.log(resume.getResume());

        let input = await askQuestion("🔄 Do you want to create another resume? (yes/no): ");
        if (input.toLowerCase() === "no") {
            flag = false;
        }
    }

    rl.close(); 
}

app();
