// import './assets/main.css'
import DynamicContainer from './DynamicContainer.vue';
import { bridgeToV2App } from './utils/bridgeApp';

export const renderApp = bridgeToV2App(DynamicContainer);
