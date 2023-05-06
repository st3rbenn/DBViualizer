import {Action, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import mainSliceReducer from './mainslice';

const persistConfig = {
  key: 'SQLNest',
  storage: storage,
}

const persisted = persistReducer(persistConfig, mainSliceReducer);

export const store = configureStore({
  reducer: persisted,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkDispatch<RootState, unknown, Action<string>>;
export const useAppThunkDispatch = () => useDispatch<AppDispatch>();

export const useAppThunkDispatchMultipleActions = (): (
  actions: Array<() => Promise<any>>
) => Promise<void> => {
  const dispatch = useDispatch<AppDispatch>();

  const dispatchMultipleActions = async (
    actions: Array<() => Promise<any>>
  ): Promise<void> => {
    await Promise.all(actions.map(async action => await dispatch(action)));
  };

  return dispatchMultipleActions;
}