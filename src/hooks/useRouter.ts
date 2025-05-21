import { getCurrentInstance } from 'vue';

const useRouter = () => {
  const app = getCurrentInstance();
  return app?.appContext.provides.router;
};

export default useRouter;
