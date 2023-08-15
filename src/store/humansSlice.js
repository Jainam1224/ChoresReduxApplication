import { createSlice, nanoid } from "@reduxjs/toolkit";

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
});
