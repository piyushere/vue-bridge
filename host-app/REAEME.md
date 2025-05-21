# A minimal example explaining how to consume the Vue 3 app in our Vue 2 application.

## Usage

this is a container component to load the Vue 3 application.
It will render the `CoolComponent.vue` from our V3 application, you can even tie this with your vue-router and use the props config to set the component name!

```html
<AppV3Container :componentName="'CoolComponent'" />
```

## Here's how you can config your vue 2 application to consume the V3 remote

if the remote module is exported on `/v3` path, then using following config, we can access it on path `@piyux/app/v3` in our host application

> vite.config.ts

```js
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    // your plugins...
    federation({
      name: 'legacy-app',
      remotes: {
        '@piyux/app': 'http://localhost:4173/assets/v3/remoteEntry.js',
      },
      shared: [],
    }),
  ],
});
```
