import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import repoReducer from 'app/reducers/repoReducer';
import searchReducer from 'app/reducers/searchReducer';

// Комбинируем редьюсеры
const rootReducer = combineReducers({
  repositories: repoReducer,
  search: searchReducer,
});

// Конфигурация для redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['repositories', 'search'], // сохраняем только состояние репозиториев
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создаем стор с redux-persist
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Создаем persistor
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };