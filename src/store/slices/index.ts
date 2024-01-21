import { combineReducers } from "@reduxjs/toolkit";
import { txtFilesSlice } from "./txtFiles.slice";

export const rootReducer = combineReducers({
  [txtFilesSlice.reducerPath]: txtFilesSlice.reducer,
});
