import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DatabaseService, { IDBCredentials } from '../services/DatabaseService';

export interface RootState {
  databases: {Database: string}[];
  loadingDatabaseConnection: boolean;
  loadingDatabases: boolean;
  loadingSingleDatabase: boolean;
  currentDatabase: any;
}

type PartialRootState = {
  [P in keyof RootState]?: RootState[P];
};

const initialState: PartialRootState = {
  databases: [],
  loadingDatabaseConnection: false,
  loadingDatabases: false,
  loadingSingleDatabase: false,
  currentDatabase: null,
};

export const connect = createAsyncThunk('root/connect', async () => {
  return await DatabaseService.connect();
});

export const retrieveAllDatabase = createAsyncThunk('root/retrieveAllDatabase', async () => {
  return await DatabaseService.retrieveAllDatabase();
});

export const useDatabase = createAsyncThunk('root/useDatabase', async (database: string) => {
  return await DatabaseService.useDatabase(database)
})

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
      })
      .addCase(useDatabase.pending, (state) => {
        state.loadingSingleDatabase = true;
      })
      .addCase(useDatabase.fulfilled, (state, action) => {
        state.loadingSingleDatabase = false;
      })
      .addCase(useDatabase.rejected, (state) => {
        state.loadingSingleDatabase = false;
      })
  },
});

export default mainSlice.reducer;
