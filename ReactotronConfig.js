import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

Reactotron
  .configure() // controls connection & communication settings
Reactotron.useReactNative() // add all built-in react native plugins
Reactotron.use( reduxPlugin() )
Reactotron.use( sagaPlugin() )


if (__DEV__) {
  Reactotron.connect()
  Reactotron.clear()
}

console.tron = Reactotron