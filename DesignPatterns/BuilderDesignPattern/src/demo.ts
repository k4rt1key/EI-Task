import { ResumeBuilder } from "./ResumeBuilder";


async function app() {
    let resume = new ResumeBuilder()
        .setName("Kartikey")
        // .setEmail(email)
        // .setPhone(phone)
        // .setAddress(address)
        // .setEducation(education)
        // .setExperience(experience)
        // .setSkills(skills)
        // .setLanguages(languages)
        // .setHobbies(hobbies)
        .build();
    console.log("\n🖨️ Here is your resume:\n");
    console.log(resume.getResume());
}

app();
