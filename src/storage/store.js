// Imports: Dependencies
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import authReducer from './reducers';

// Imports: Redux

// Imports: Reducers

// Redux: Root Reducer
const rootReducer = combineReducers({
    authReducer: authReducer
});

// Middleware: Redux Persist Config
const persistConfig = {
    // Root
    key: 'root',
    // Storage Method defaults to localstorage
    storage,
    // Whitelist (Save Specific Reducers)
    timeout: null,
    // Blacklist (Don't Save Specific Reducers)
    // blacklist: [
    // ],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
    persistedReducer,
    applyMiddleware(
        createLogger(),
    ),
);
// Middleware: Redux Persist Persister
const persistor = persistStore(store);

export { store, persistor };