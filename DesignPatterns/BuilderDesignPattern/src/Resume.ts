export class Resume {
    private name: string;
    private email: string;
    private phone: string;
    private address: string;
    private education: string;
    private experience: string;
    private skills: string;
    private languages: string;
    private hobbies: string;
    
    constructor() {
        this.name = "";
        this.email = "";
        this.phone = "";
        this.address = "";
        this.education = "";
        this.experience = "";
        this.skills = "";
        this.languages = "";
        this.hobbies = "";
    }
    
    public getResume(): string {
        let content: string = '';
    
        if (this.name != "") {
            content += `👤 Meet ${this.name}\n\n`;
        }
    
        if (this.email != "") {
            content += `📧 Email: ${this.email}\n`;
        }
    
        if (this.phone != "") {
            content += `📞 Phone: ${this.phone}\n`;
        }
    
        if (this.address != "") {
            content += `🏠 Address: ${this.address}\n\n`;
        }
    
        if (this.education != "") {
            content += `🎓 Education:\n`;
            content += `${this.education}\n\n`;
        }
    
        if (this.experience != "") {
            content += `💼 Experience:\n`;
            content += `${this.experience}\n\n`;
        }
    
        if (this.skills != "") {
            content += `🛠️ Skills:\n`;
            content += this.skills.split(',').map((skill: string) => `  - ${skill}`).join('\n');
            content += '\n\n';
        }
    
        if (this.languages != "") {
            content += `🗣️ Languages:\n`;
            content += this.languages.split(',').map((language: string) => `  - ${language}`).join('\n');
            content += '\n\n';
        }
    
        if (this.hobbies != "") {
            content += `🎯 Hobbies:\n`;
            content += this.hobbies.split(',').map((hobby: string) => `  - ${hobby}`).join('\n');
            content += '\n\n';
        }
    
        content += '✨ Thank you for your time! ✨\n';
    
        return content;
    }
    

    public setName(name: string): void {
        this.name = name;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public setEducation(education: string): void {
        this.education = education;
    }

    public setExperience(experience: string): void {
        this.experience = experience;
    }

    public setSkills(skills: string): void {
        this.skills = skills;
    }

    public setLanguages(languages: string): void {
        this.languages = languages;
    }

    public setHobbies(hobbies: string): void {
        this.hobbies = hobbies;
    }

}
