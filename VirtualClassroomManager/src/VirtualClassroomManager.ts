import { Classroom } from './Classroom';
import { Logger } from './logger';

export class VirtualClassroomManager {
  classrooms: { [key: string]: Classroom } = {};

  addClassroom(className: string) {
    if (this.classrooms[className]) {
      Logger.logToFile(`Attempted to create duplicate classroom: ${className}.`);
      Logger.logToUser(`⚠️ Classroom "${className}" already exists.`);
    } else {
      const newClassroom = new Classroom(className);
      this.classrooms[className] = newClassroom;
    }
  }

  addStudent(studentId: string, className: string) {
    const classroom = this.classrooms[className];
    if (classroom) {
      classroom.addStudent(studentId);
    } else {
      Logger.logToFile(`Failed attempt to enroll student ${studentId} in non-existent classroom: ${className}.`);
      Logger.logToUser(`⚠️ Classroom "${className}" does not exist.`);
    }
  }

  scheduleAssignment(className: string, assignmentDetails: string) {
    const classroom = this.classrooms[className];
    if (classroom) {
      classroom.addAssignment(assignmentDetails);
    } else {
      Logger.logToFile(`Failed attempt to schedule assignment "${assignmentDetails}" in non-existent classroom: ${className}.`);
      Logger.logToUser(`⚠️ Classroom "${className}" does not exist.`);
    }
  }

  submitAssignment(studentId: string, className: string, assignmentName: string, content: string) {
    const classroom = this.classrooms[className];
    if (classroom) {
      classroom.submitAssignment(studentId, assignmentName, content);
    } else {
      Logger.logToFile(`Failed attempt to submit assignment "${assignmentName}" in non-existent classroom: ${className} by ${studentId}.`);
      Logger.logToUser(`⚠️ Classroom "${className}" does not exist.`);
    }
  }

  removeClassroom(className: string) {
    if (this.classrooms[className]) {
      delete this.classrooms[className];
      Logger.logToFile(`Classroom "${className}" was removed.`);
      Logger.logToUser(`❌ Classroom "${className}" has been removed.`);
    } else {
      Logger.logToFile(`Failed attempt to remove non-existent classroom: ${className}.`);
      Logger.logToUser(`⚠️ Classroom "${className}" does not exist.`);
    }
  }

  getClassInfo(className: string) {
    const classroom = this.classrooms[className];
    if (classroom) {
      Logger.logToFile(`Fetched info for classroom ${className}.`);
      Logger.logToUser(`🏫 Classroom: "${className}"`);
      Logger.logToUser(`👨‍🎓 Students: ${classroom.listStudents().join(", ") || 'None'}`);
      Logger.logToUser(`📝 Assignments: ${classroom.listAssignments().join(", ") || 'None'}`);

      classroom.listAssignments().forEach(assignment => {
        const submissions = classroom.getAssignmentSubmissions(assignment);
        Logger.logToUser(`📋 Assignment: ${assignment}`);
        if (Object.keys(submissions).length === 0) {
          Logger.logToUser(`  No submissions yet.\n`);
        } else {
          for (const studentId in submissions) {
            Logger.logToUser(`  Student ${studentId} submitted: ${submissions[studentId]}`);
          }
        }
        Logger.logToUser(""); // Add extra spacing
      });
    } else {
      Logger.logToFile(`Attempted to fetch info for non-existent classroom: ${className}.`);
      Logger.logToUser(`⚠️ Classroom "${className}" does not exist.`);
    }
  }

  showCommands() {
    Logger.logToUser("Available commands:");
    Logger.logToUser("  ➕ add_classroom <ClassName> - Create a new classroom.");
    Logger.logToUser("  👨‍🎓 add_student <StudentID> <ClassName> - Enroll a student in a classroom.");
    Logger.logToUser("  📅 schedule_assignment <ClassName> <AssignmentDetails> - Schedule an assignment for a classroom.");
    Logger.logToUser("  📝 submit_assignment <StudentID> <ClassName> <AssignmentName> <Content> - Submit an assignment for a class.");
    Logger.logToUser("  ❌ remove_classroom <ClassName> - Remove a classroom.");
    Logger.logToUser("  🏫 class_info <ClassName> - Get class details including students, assignments, and submissions.");
    Logger.logToUser("  💻 help - Show available commands.");
    Logger.logToUser("  🚪 exit - Exit the application.\n");
  }
}
