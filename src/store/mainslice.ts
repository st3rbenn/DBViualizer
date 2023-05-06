import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DatabaseService, { IDBCredentials } from '../services/DatabaseService';

export interface RootState {
  databases: {Database: string}[];
  loadingDatabaseConnection: boolean;
  loadingDatabases: boolean;
}

type PartialRootState = {
  [P in keyof RootState]?: RootState[P];
};

const initialState: PartialRootState = {
  databases: [],
  loadingDatabaseConnection: false,
  loadingDatabases: false,
};

export const connect = createAsyncThunk('root/connect', async () => {
  return await DatabaseService.connect();
});

export const retrieveAllDatabase = createAsyncThunk('root/retrieveAllDatabase', async () => {
  return await DatabaseService.retrieveAllDatabase();
});

export const mainSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(connect.pending, (state) => {
        state.loadingDatabaseConnection = true;
      })
      .addCase(connect.fulfilled, (state, action) => {
        state.loadingDatabaseConnection = false;
      })
      .addCase(connect.rejected, (state) => {
        state.loadingDatabaseConnection = false;
      })
      .addCase(retrieveAllDatabase.pending, (state) => {
        state.loadingDatabases = true;
      })
      .addCase(retrieveAllDatabase.fulfilled, (state, action) => {
        state.loadingDatabases = false;
        state.databases = action.payload;
      })
      .addCase(retrieveAllDatabase.rejected, (state) => {
        state.loadingDatabases = false;
      });
  },
});

export default mainSlice.reducer;
