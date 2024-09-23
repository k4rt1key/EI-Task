import { Logger } from './logger';

export class Classroom {
  name: string;
  students: string[];
  assignments: string[];
  submissions: { [assignmentName: string]: { [studentId: string]: string } };

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.assignments = [];
    this.submissions = {};
    Logger.logToFile(`Classroom ${this.name} was created.`);
    Logger.logToUser(`🏫 Classroom "${this.name}" has been created.`);
  }

  addStudent(studentId: string) {
    this.students.push(studentId);
    Logger.logToFile(`Student ${studentId} was enrolled in classroom ${this.name}.`);
    Logger.logToUser(`👨‍🎓 Student "${studentId}" has been enrolled in "${this.name}".`);
  }

  addAssignment(assignmentDetails: string) {
    this.assignments.push(assignmentDetails);
    this.submissions[assignmentDetails] = {};
    Logger.logToFile(`Assignment "${assignmentDetails}" was added to classroom ${this.name}.`);
    Logger.logToUser(`📝 Assignment "${assignmentDetails}" has been scheduled in "${this.name}".`);
  }

  submitAssignment(studentId: string, assignmentName: string, content: string) {
    if (!this.assignments.includes(assignmentName)) {
      Logger.logToUser(`⚠️ Assignment "${assignmentName}" does not exist in class "${this.name}".`);
      return;
    }
    if (!this.students.includes(studentId)) {
      Logger.logToUser(`⚠️ Student ID "${studentId}" is not enrolled in class "${this.name}".`);
      return;
    }
    this.submissions[assignmentName][studentId] = content;
    Logger.logToFile(`Student ${studentId} submitted assignment "${assignmentName}" in classroom ${this.name}.`);
    Logger.logToUser(`✅ Assignment "${assignmentName}" submitted by Student "${studentId}".`);
  }

  listStudents() {
    return this.students;
  }

  listAssignments() {
    return this.assignments;
  }

  getAssignmentSubmissions(assignmentName: string) {
    return this.submissions[assignmentName];
  }
}
