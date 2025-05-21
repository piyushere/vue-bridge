import { getCurrentInstance } from 'vue';

const useRoute = () => {
  const app = getCurrentInstance();
  return app?.appContext.provides.route;
};

export default useRoute;
