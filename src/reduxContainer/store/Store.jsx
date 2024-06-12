import { configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './../reducer/Reducer';

// import { getDefaultMiddleware } from '@reduxjs/toolkit';
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer=persistReducer(persistConfig,reducer);

const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['persist/PERSIST'],
                // Ignore these paths in the state
                ignoredPaths: ['register'],
            },
        }),
    
});
const persistor=persistStore(Store);

export {Store,persistor};