# Quasar App (vue-draggable-with-quasar)

A Quasar Framework with VueDraggable (created with quasar-cli)

## Add VueDraggable

#### Install dependency
```
npm i vue-draggable
```
#### Create Quasar Boot
```bash
quasar new boot vue-draggable
```

```js
import VueDraggable from 'vue-draggable'

export default async ({ Vue }) => {
  Vue.use(VueDraggable)
}
```
#### Modify `quasar.conf.js` boot section
```js
    boot: [
      'vue-draggable'
    ],
    ...
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
