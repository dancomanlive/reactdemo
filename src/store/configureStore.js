import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk)),
)

export const persistor = persistStore(store, null, () => {})