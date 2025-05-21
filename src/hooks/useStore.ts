import { getCurrentInstance } from 'vue';

const useStore = () => {
  const app = getCurrentInstance();
  return app?.appContext.provides.store;
};

export default useStore;
