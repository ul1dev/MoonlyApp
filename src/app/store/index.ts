import { configureStore } from '@reduxjs/toolkit';
import stringMiddleware from './middlewares/stringMiddleware';
import user from './reducers/users';
import telegram from './reducers/telegram';
import clicks from './reducers/clicks';

const store = configureStore({
    reducer: { user, telegram, clicks },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
