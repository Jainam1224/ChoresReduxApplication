import { createSlice, nanoid } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasksSlice";

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: [],
});

const initialState = [
  createHuman("Jainam"),
  createHuman("Savan"),
  createHuman("Sagar"),
  createHuman("Shrey"),
];

export const humansSlice = createSlice({
  name: "humans",
  initialState,
  reducers: {
    add: (state, action) => {
      const human = createHuman(action.payload);
      state.push(human);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tasksSlice.actions.assignedToUser, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.humanId) {
          human.taskIds.push(action.payload.taskId);
        } else {
          human.taskIds = human.taskIds.filter(
            (id) => id !== action.payload.taskId
          );
        }
      }
    });
  },
});
