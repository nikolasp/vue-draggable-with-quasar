# vue-draggable quasar DEMO

This demo is a quasar spa application. You need quasar/vue installed as in:

[https://quasar-framework.org/guide/](https://quasar-framework.org/guide/)

```
# Node.js >= 8.9.0 is required.

# install vue-cli globally
$ npm install -g vue-cli
$ npm install -g quasar-cli
```

after git checkout:

```
# install required modules
$ npm install
```

and then:

```
# build SPA, run local dev server and open browser to localhost:8080
$ quasar dev
```

# what is done?

- DND testing framework based on quasar components
- base data structures with demo items
- upgraded from quasar 0.14 to quasar 0.17

# what needs to be done?

- DND mechanic for lists
- DND mechanic for trees
- add more complicated use cases in this demo
- auto add to history mechanic (something like global vue-draggable event would be nice)
- expand this readme.md

# what should be done?

- data structures based on VueX
- item IDs should not be numbers but strings (GUIDs)
- the long file index.vue should be refactored to simpler vue components
- upgrade from quasar 0.17 to quasar 1.0
- automatic GUI tests with TestCafe or similar tool
