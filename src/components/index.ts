import { defineAsyncComponent } from 'vue';

const componentsDirectory: Record<string, ReturnType<typeof defineAsyncComponent>> = {
  HelloWorld: defineAsyncComponent(() => import('./HelloWorld.vue')),
  CoolComponent: defineAsyncComponent(() => import('./CoolComponent.vue')),
};

export default componentsDirectory;
