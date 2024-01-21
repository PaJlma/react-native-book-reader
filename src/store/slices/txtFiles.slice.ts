import type { TxtFile } from "@/types/txtFile.types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: TxtFile[] = [];

export const getSavedTxtFiles = createAsyncThunk<TxtFile[]>("txtFiles/getSavedFiles", async () => {
  return JSON.parse((await AsyncStorage.getItem(".txt")) ?? "[]") as TxtFile[];
});

export const addTxtFile = createAsyncThunk<TxtFile[], TxtFile>("txtFiles/addTxtFile", async (file) => {
  const savedFiles = JSON.parse((await AsyncStorage.getItem(".txt")) ?? "[]") as TxtFile[];
  savedFiles.push(file);
  await AsyncStorage.setItem(".txt", JSON.stringify(savedFiles));
  return savedFiles;
});

export const removeTxtFile = createAsyncThunk<TxtFile[], string>("txtFiles/removeTxtFile", async (uri) => {
  const savedFiles = JSON.parse((await AsyncStorage.getItem(".txt")) ?? "[]") as TxtFile[];
  const filteredFiles = savedFiles.filter((file) => file.uri !== uri);
  await AsyncStorage.setItem(".txt", JSON.stringify(filteredFiles));
  return filteredFiles;
});

export const toggleTxtMarked = createAsyncThunk<TxtFile[], string>("txtFiles/toggleMarked", async (uri) => {
  const savedFiles = JSON.parse((await AsyncStorage.getItem(".txt")) ?? "[]") as TxtFile[];
  const file = savedFiles[savedFiles.findIndex((file) => file.uri === uri)];
  file.bookmarked = !file.bookmarked;
  await AsyncStorage.setItem(".txt", JSON.stringify(savedFiles));
  return savedFiles;
});

export const setTxtRead = createAsyncThunk<TxtFile[], { uri: string; scrolled: number; percents: number }>(
  "txtFiles/setTxtRead",
  async ({ uri, scrolled, percents }) => {
    const savedFiles = JSON.parse((await AsyncStorage.getItem(".txt")) ?? "[]") as TxtFile[];
    const file = savedFiles[savedFiles.findIndex((file) => file.uri === uri)];
    file.read.scrolled = scrolled;
    file.read.percents = percents;
    await AsyncStorage.setItem(".txt", JSON.stringify(savedFiles));
    return savedFiles;
  },
);

export const txtFilesSlice = createSlice({
  name: "txtFiles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSavedTxtFiles.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(addTxtFile.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(removeTxtFile.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(toggleTxtMarked.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(setTxtRead.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
