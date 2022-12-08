import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { wordApi } from "./slices/services/WordsApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [wordApi.reducerPath]: wordApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(wordApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
