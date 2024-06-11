import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reducer from './Reducer';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer=persistReducer(persistConfig,Reducer);

const Store = configureStore({
    reducer: persistedReducer,
});
const persistor=persistStore(Store);

export {Store,persistor};