import { getCurrentInstance, ref, watch } from 'vue';

/** The V3 container in a host application should have a prop 'componentName' defined */
export const useComponentName = () => {
  const app = getCurrentInstance();
  const componentName = ref<string>(app?.appContext.provides.parentProps.componentName);

  watch(
    () => app?.appContext.provides.parentProps.componentName,
    () => {
      componentName.value = app?.appContext.provides.parentProps.componentName;
      console.log(componentName.value);
    },
  );
  return componentName;
};
