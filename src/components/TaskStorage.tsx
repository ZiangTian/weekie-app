// taskStorage.ts
import {TaskT} from './MainTask'; // Make sure this path points to your type definition file
// taskStorage.ts
import { openDB, DBSchema, IDBPDatabase } from 'idb';


interface TaskDB extends DBSchema {
  tasks: {
    key: string;
    value: TaskT;
  };
}

let db: IDBPDatabase<TaskDB>;

const initDB = async () => {
  db = await openDB<TaskDB>('taskDB', 1, {
    upgrade(db) {
      db.createObjectStore('tasks', { keyPath: 'taskID' });
    },
  });
};

export const getTasks = async (): Promise<TaskT[]> => {
  if (!db) await initDB();
  return (await db.getAll('tasks')) || [];
};

export const addTask = async (task: TaskT): Promise<void> => {
  if (!db) await initDB();
  await db.put('tasks', task);
};

export const updateTask = async (task: TaskT): Promise<void> => {
  if (!db) await initDB();
  await db.put('tasks', task);
};

export const removeTask = async (taskID: string): Promise<void> => {
  if (!db) await initDB();
  await db.delete('tasks', taskID);
};
