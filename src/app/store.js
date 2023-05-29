import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
  name: 'cryptoApi',
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});

