<script setup lang="ts">
import components from './components';
import { useComponentName } from '@/hooks/useComponentName';
const componentName = useComponentName();
</script>

<template>
  <main>
    <template v-if="componentName">
      <component v-if="componentName in components" :is="components[componentName]" />
      <div v-else>Error... component {{ componentName }} not found!</div>
    </template>
  </main>
</template>
