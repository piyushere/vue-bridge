<script setup lang="ts">
import useRoute from '@/hooks/useRoute';
import useRouter from '@/hooks/useRouter';
import useStore from '@/hooks/useStore';
import { watch } from 'vue';

const router = useRouter();
const store = useStore();
const route = useRoute();

watch(
  () => route.query,
  () => {
    console.log(route);
  },
);
</script>

<template>
  <div class="v3-app-demo">
    <div class="content-container">
      <header class="header">
        <h1 class="title">Welcome to Vue 3 app!</h1>
      </header>

      <div class="info-section">
        <div class="info-card">
          <h3>Route Query</h3>
          <p class="code-display">{{ JSON.stringify(route.query) }}</p>
        </div>

        <!-- considering you have a counter defined in you VueX/Pinia store, with 'incrementCounter' action -->
        <div class="info-card">
          <h3>Store State</h3>
          <p>
            The value of the counter is:
            <span class="counter-value">{{ store?.state?.counter }}</span>
          </p>
        </div>
      </div>

      <!-- considering you have a route '/v2-app-route' defined in a host app -->
      <div class="action-buttons">
        <button type="button" @click.stop="router.push('/v2-app-route')">
          Navigate to /v2-app-route
        </button>

        <button
          type="button"
          @click.stop="
            () => {
              router.push({
                query: { userid: Number(route.query.userid || 1) + 1 },
              });
              store.dispatch('incrementCounter');
            }
          "
        >
          update everything
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v3-app-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 80vh;
  width: 100%;
  background-color: var(--xpl-color-green-100);
  border: solid 0.5rem var(--xpl-color-green-300);
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 0.5rem;
  width: 100%;
  border-bottom: 1px solid var(--xpl-color-green-200);
  padding-bottom: 1rem;
}

.title {
  font-size: 2rem;
  color: var(--xpl-color-green-700, #1a866b);
  margin: 0;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.info-card {
  background-color: var(--xpl-color-green-50, #f0fff9);
  border: 1px solid var(--xpl-color-green-200, #b3e6d5);
  border-radius: 8px;
  padding: 1.2rem;
}

.info-card h3 {
  margin-top: 0;
  color: var(--xpl-color-green-700, #1a866b);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.code-display {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  border-radius: 4px;
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-all;
}

.counter-value {
  font-weight: bold;
  background-color: var(--xpl-color-green-300, #80d9ba);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.action-buttons button {
  transition: transform 0.2s;
}

.action-buttons button:hover {
  transform: translateY(-2px);
}

@media (min-width: 640px) {
  .info-section {
    flex-direction: row;
  }

  .info-card {
    flex: 1;
  }
}
</style>
