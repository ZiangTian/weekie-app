import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";

export default function App() {
  return <Scheduler events={EVENTS} />;
}
