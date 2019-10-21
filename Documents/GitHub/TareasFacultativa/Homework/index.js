/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import HomeContainer from './src/homeContainer';

AppRegistry.registerComponent(appName, () => HomeContainer);
