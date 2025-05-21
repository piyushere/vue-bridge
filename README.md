# vue-bridge

- A bridge application, demo-ing how to share state between Vue2 and Vue3 apps.
  (Or any other application, e.g. Svelte. For react as well, it should be trivial if you are using redux)
- This lets you do a progressive migration to Vue 3 from a Vue 2 application.
- A general apporach is to export this application as a federated module (remote) and mount it in a vue 2 host.
- There are few downsides, e.g. you need to ensure that the global styling/reset of these applications don't interfare with each other (in case they are using different global styles). Also, it doesn't support HMR at the moment.

# Why?

- No need to fuss over backwards compatibility or worry about finding replacements of your libraries from vue 2 to vue 3.
- Progressively upgrade to vue 3, with your choice of libraries including testing framework.
- This approach only make sense if your application is complex enough that you can't make it work with `vue-compat`. Please, follow the official vue 3 migration guide otherwise.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
