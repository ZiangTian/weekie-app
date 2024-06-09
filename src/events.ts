import type {
  ProcessedEvent,
  SchedulerHelpers
} from "@aldabil/react-scheduler/types";
import moment from "moment";

const EVENTS: ProcessedEvent[] = [
  {
    event_id: 1,
    title: "Task 1",
    start: new Date("2023-06-01T10:00:00"),
    end: new Date("2023-06-01T11:00:00"),
    description: "This is a task",
    Importance: true,
    Urgency: true,
    tag: "Work",
    taskID: "1",
    startTime: moment("2023-06-01T10:00:00"),
    endTime: moment("2023-06-01T11:00:00"),
    deadLine: moment("2023-06-01T12:00:00"),
    desc: "Description of Task 1"
  }
  // Add more events here
];