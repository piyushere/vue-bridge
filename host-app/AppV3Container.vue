<template>
  <div class="v3Container">
    <header class="v2app">
      <h1>Hello from Vue 2!</h1>
      <span>
        currently showing:
        <strong>
          {{ componentName }}
        </strong>
      </span>

      <div>
        <button type="button" @click="$store.dispatch('setCounter')" ref="upgradeBtn">
          increment counter: {{ $store.state.counter }}
        </button>

        <button
          type="button"
          @click="
            $router.push({
              query: { userid: Number(app.$route.query.userid || 1) + 1 },
            })
          "
          ref="upgradeBtn"
        >
          changes route params
        </button>
      </div>
    </header>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue';
defineProps(['componentName']);
const { proxy: app } = getCurrentInstance();
const unmountExternalAppCallback = ref(null);

onMounted(() => {
  const mountPoint = document.createElement('div');
  mountPoint.id = 'vue3-app';
  app.$el.appendChild(mountPoint);
  mountVue3Component();
});

const mountVue3Component = () => {
  console.info('mounting vue3 app');
  unmountVue3Component();
  import('@piyux/app/v3').then(
    ({ default: AppV3 }) =>
      (unmountExternalAppCallback.value = AppV3.renderApp({
        context: app,
      })),
  );
};

const unmountVue3Component = () =>
  unmountExternalAppCallback.value && unmountExternalAppCallback.value();

onUnmounted(unmountVue3Component);
</script>

<style scoped>
.v3Container {
  padding: 0.5rem 0;
}

.v2app {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 5px;
  border: solid 0.25rem var(--xpl-color-red-300);
  background-color: var(--xpl-color-red-100);
}
</style>
