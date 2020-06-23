import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = composeWithDevTools({
  name: 'library rest-api'
})

const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
)

const persistor = persistStore(store)

export { store, persistor }
