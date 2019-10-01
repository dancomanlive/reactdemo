import React, { Component } from 'react'
import { store, persistor } from './store/configureStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Welcome from './containers/Welcome'

// persistor.purge()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Welcome />
        </PersistGate>
      </Provider>
    )
  }
}
