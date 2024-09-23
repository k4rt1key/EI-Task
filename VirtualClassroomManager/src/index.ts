import * as readline from 'readline';
import { VirtualClassroomManager } from './VirtualClassroomManager';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const manager = new VirtualClassroomManager();

const handleUserInput = (input: string) => {
  const [command, ...args] = input.trim().split(" ");

  switch (command) {
    case "add_classroom":
      if (args.length < 1) {
        console.log("❌ Syntax error: add_classroom <ClassName>\n");
      } else {
        manager.addClassroom(args.join(" "));
      }
      break;
    case "add_student":
      if (args.length < 2) {
        console.log("❌ Syntax error: add_student <StudentID> <ClassName>\n");
      } else {
        const studentId = args[0];
        const classNameForStudent = args.slice(1).join(" ");
        manager.addStudent(studentId, classNameForStudent);
      }
      break;
    case "schedule_assignment":
      if (args.length < 2) {
        console.log("❌ Syntax error: schedule_assignment <ClassName> <AssignmentDetails>\n");
      } else {
        const classNameForAssignment = args[0];
        const assignmentDetails = args.slice(1).join(" ");
        manager.scheduleAssignment(classNameForAssignment, assignmentDetails);
      }
      break;
    case "submit_assignment":
      if (args.length < 4) {
        console.log("❌ Syntax error: submit_assignment <StudentID> <ClassName> <AssignmentName> <Content>\n");
      } else {
        const studentId = args[0];
        const classForSubmit = args[1];
        const assignmentForSubmit = args[2];
        const contentForSubmit = args.slice(3).join(" ");
        manager.submitAssignment(studentId, classForSubmit, assignmentForSubmit, contentForSubmit);
      }
      break;
    case "remove_classroom":
      if (args.length < 1) {
        console.log("❌ Syntax error: remove_classroom <ClassName>\n");
      } else {
        const classNameForRemove = args.join(" ");
        manager.removeClassroom(classNameForRemove);
      }
      break;
    case "class_info":
      if (args.length < 1) {
        console.log("❌ Syntax error: class_info <ClassName>\n");
      } else {
        const classNameForInfo = args.join(" ");
        manager.getClassInfo(classNameForInfo);
      }
      break;
    case "help":
      manager.showCommands();
      break;
    case "exit":
      console.log("👋 Exiting the Virtual Classroom Manager. Goodbye!");
      rl.close();
      return;
    default:
      console.log("❓ Unknown command. Type 'help' to see available commands.\n");
  }
  promptUser();
};

const promptUser = () => {
  rl.question("💻 Enter a command: ", handleUserInput);
};

// Start interaction
manager.showCommands();
promptUser();
