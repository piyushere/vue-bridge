/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApp, reactive } from 'vue';
import type { Component } from 'vue';

interface RenderV3App {
  name: string;
  props?: Record<string, unknown>;
  context?: Record<string, any>;
}

export const bridgeToV2App = (component: Component) => {
  return ({ name = '#app-v3', context = {} }: RenderV3App) => {
    const route = reactive({ ...context.$route });
    const state = reactive({ ...context.$store.state });
    const parentProps = reactive({ ...context.$props });
    const appInstance = createApp(component);

    appInstance.provide('route', route);
    appInstance.provide('parentProps', parentProps);
    appInstance.provide('store', { ...context.$store, state });
    appInstance.provide('router', context.$router);

    appInstance.mount(name);

    // Synchronize context between the two applications
    context.$watch('$route', (val: any) => Object.assign(route, val), { deep: true });
    context.$watch('$store.state', (val: any) => Object.assign(state, val), { deep: true });
    context.$watch('$props', (val: any) => Object.assign(parentProps, val), { deep: true });

    return () => {
      console.info(`Unmounting ${name} application...`);
      appInstance.unmount();
    };
  };
};
