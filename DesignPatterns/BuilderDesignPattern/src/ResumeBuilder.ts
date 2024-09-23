import { Resume } from './Resume';

export class ResumeBuilder {
    private resume: Resume;

    constructor() {
        this.resume = new Resume();
    }

    public setName(name: string): ResumeBuilder {
        this.resume.setName(name);
        return this;
    }

    public setEmail(email: string): ResumeBuilder {
        this.resume.setEmail(email);
        return this;
    }

    public setPhone(phone: string): ResumeBuilder {
        this.resume.setPhone(phone);
        return this;
    }

    public setAddress(address: string): ResumeBuilder {
        this.resume.setAddress(address);
        return this;
    }

    public setEducation(education: string): ResumeBuilder {
        this.resume.setEducation(education);
        return this;
    }

    public setExperience(experience: string): ResumeBuilder {
        this.resume.setExperience(experience);
        return this;
    }

    public setSkills(skills: string): ResumeBuilder {
        this.resume.setSkills(skills);
        return this;
    }

    public setLanguages(languages: string): ResumeBuilder {
        this.resume.setLanguages(languages);
        return this;
    }

    public setHobbies(hobbies: string): ResumeBuilder {
        this.resume.setHobbies(hobbies);
        return this;
    }

    public build(): Resume {
        return this.resume;
    }

}