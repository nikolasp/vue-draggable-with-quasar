<template>
  <q-page>
    <div class="row">
      <div class="col-4 q-pa-sm">
        <q-tabs align="justify">
          <q-tab default slot="title" name="ttab-1" icon="share" label="tree 1"/>
          <q-tab slot="title" name="ttab-2" icon="list" label="list 1"/>
          <q-tab-pane name="ttab-1">
            <q-tree :nodes="tree1" node-key="label" default-expand-all></q-tree>
            <q-alert color="info">
              <ul>
                <li>you can move between branches in tree1</li>
                <li>you can copy from tree1 to list2, tree2</li>
                <li>you can move from tree1 to clipboard</li>
                <li>you can copy from tree1 to favorites</li>
              </ul>
            </q-alert>
          </q-tab-pane>
          <q-tab-pane name="ttab-2">
            <div class="row" v-drag-and-drop="listDragOptions1">
              <q-list
                v-for="group in groupsWithItems1"
                :key="group.id"
                :data-id="group.id"
                class="app-custom-list"
                @added="added1($event, group)"
                @removed="removed1($event, group)"
                @reordered="reordered1($event, group)"
              >
                <q-item
                  v-for="item in group.items"
                  :key="item.id"
                  :data-id="item.id"
                  class="app-custom-item"
                >
                  <q-item-main :label="item.name" />
                </q-item>
              </q-list>
            </div>
            <q-alert color="info">
              <ul>
                <li>you can move between groups in list1</li>
                <li>you can copy from list1 to list2, tree2</li>
                <li>you can move from list1 to clipboard</li>
                <li>you can copy from list1 to favorites</li>
              </ul>
            </q-alert>
          </q-tab-pane>
        </q-tabs>
      </div>
      <div class="col-4 q-pa-sm">
        <q-tabs align="justify">
          <q-tab default slot="title" name="dtab-1" icon="list" label="list 2"/>
          <q-tab slot="title" name="dtab-2" icon="share" label="tree 2" />
          <q-tab-pane name="dtab-1">
            <div class="row" v-drag-and-drop="listDragOptions2">
              <q-list
                v-for="group in groupsWithItems2"
                :key="group.id"
                :data-id="group.id"
                class="app-custom-list"
                @added="added2($event, group)"
                @removed="removed2($event, group)"
                @reordered="reordered2($event, group)"
              >
                <q-item
                  v-for="item in group.items"
                  :key="item.id"
                  :data-id="item.id"
                  class="app-custom-item"
                >
                  <q-item-main :label="item.name" />
                </q-item>
              </q-list>
            </div>
            <q-alert color="info">
              <ul>
                <li>you can move between groups in list2</li>
                <li>you can move from list2 to clipboard</li>
                <li>you can copy from list2 to favorites</li>
              </ul>
            </q-alert>
          </q-tab-pane>
          <q-tab-pane name="dtab-2">
            <q-tree :nodes="tree2" node-key="label" default-expand-all></q-tree>
            <q-alert color="info">
              <ul>
                <li>you can move between branches in tree2</li>
                <li>you can move from tree2 to clipboard</li>
                <li>you can copy from tree2 to favorites</li>
              </ul>
            </q-alert>
          </q-tab-pane>
        </q-tabs>
      </div>
      <div class="col-4 q-pa-sm">
        <q-tabs align="justify">
          <q-tab default :count="clipboard[0].items.length" slot="title" name="ftab-1" icon="file_copy" label="clipboard"/>
          <q-tab default :count="favorites[0].items.length" slot="title" name="ftab-2" icon="favorite" label="favorites"/>
          <q-tab :count="history[0].items.length" slot="title" name="ftab-3" icon="history" label="history"/>
          <q-tab-pane name="ftab-1">
            <div class="row" v-drag-and-drop="clipboardDragOptions">
              <q-list
                v-for="group in clipboard"
                :key="group.id"
                :data-id="group.id"
                class="app-custom-list"
                @added="addedClipboard($event, group)"
                @removed="removedClipboard($event, group)"
                @reordered="reorderedClipboard($event, group)"
              >
                <q-item
                  v-for="item in group.items"
                  :key="item.id"
                  :data-id="item.id"
                  class="app-custom-item"
                >
                  <q-item-main :label="item.name" />
                </q-item>
              </q-list>
            </div>
            <q-alert color="info">
              <ul>
                <li>you can move from clipboard to list1, list2, tree1, tree2</li>
              </ul>
            </q-alert>
          </q-tab-pane>
          <q-tab-pane name="ftab-2">
            <div class="row" v-drag-and-drop="favoritesDragOptions">
              <q-list
                v-for="group in favorites"
                :key="group.id"
                :data-id="group.id"
                class="app-custom-list"
                @added="addedFavorites($event, group)"
                @removed="removedFavorites($event, group)"
                @reordered="reorderedFavorites($event, group)"
              >
                <q-item
                  v-for="item in group.items"
                  :key="item.id"
                  :data-id="item.id"
                  class="app-custom-item"
                >
                  <q-item-main :label="item.name" />
                </q-item>
              </q-list>
            </div>
            <q-alert color="info">
              <ul>
                <li>you can copy from favorites to list1, list2, tree1, tree2</li>
              </ul>
            </q-alert>
          </q-tab-pane>
          <q-tab-pane name="ftab-3">
            <div class="row" v-drag-and-drop="historyDragOptions">
              <q-list
                v-for="group in history"
                :key="group.id"
                :data-id="group.id"
                class="app-custom-list"
                @added="addedHistory($event, group)"
                @removed="removedHistory($event, group)"
                @reordered="reorderedHistory($event, group)"
              >
                <q-item
                  v-for="item in group.items"
                  :key="item.id"
                  :data-id="item.id"
                  class="app-custom-item"
                >
                  <q-item-main :label="item.name" />
                </q-item>
              </q-list>
            </div>
            <q-alert color="info">
              <ul>
                <li>every moved or copied item is automatically referenced here</li>
                <li>you can copy from history to list1, list2, tree1, tree2</li>
              </ul>
            </q-alert>
          </q-tab-pane>
        </q-tabs>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    listDragOptions1: {
      multipleDropzonesItemsDraggingEnabled: false,
      dropzoneSelector: '.q-list',
      draggableSelector: '.q-item'
    },
    listDragOptions2: {
      multipleDropzonesItemsDraggingEnabled: false,
      dropzoneSelector: '.q-list',
      draggableSelector: '.q-item'
    },
    clipboardDragOptions: {
      multipleDropzonesItemsDraggingEnabled: false,
      dropzoneSelector: '.q-list',
      draggableSelector: '.q-item'
    },
    favoritesDragOptions: {
      multipleDropzonesItemsDraggingEnabled: false,
      dropzoneSelector: '.q-list',
      draggableSelector: '.q-item'
    },
    historyDragOptions: {
      multipleDropzonesItemsDraggingEnabled: false,
      dropzoneSelector: '.q-list',
      draggableSelector: '.q-item'
    },
    clipboard: [
      {
        id: 1,
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' }
        ]
      }
    ],
    favorites: [
      {
        id: 1,
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' }
        ]
      }
    ],
    history: [
      {
        id: 1,
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' }
        ]
      }
    ],
    tree1: [
      {
        label: 'Satisfied customers',
        children: [
          {
            label: 'Good food',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service (disabled node)',
            disabled: true,
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            children: [
              { label: 'Happy atmosphere' },
              { label: 'Good table presentation' },
              { label: 'Pleasing decor' }
            ]
          }
        ]
      }
    ],
    tree2: [
      {
        label: 'Satisfied customers',
        children: [
          {
            label: 'Good food',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service (disabled node)',
            disabled: true,
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            children: [
              { label: 'Happy atmosphere' },
              { label: 'Good table presentation' },
              { label: 'Pleasing decor' }
            ]
          }
        ]
      }
    ],
    groupsWithItems1: [
      {
        id: 1,
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 5, name: 'Item 5' },
          { id: 6, name: 'Item 6' }
        ]
      },
      {
        id: 2,
        items: [
          { id: 3, name: 'Item 3' },
          { id: 4, name: 'Item 4' }
        ]
      }
    ],
    groupsWithItems2: [
      {
        id: 1,
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 5, name: 'Item 5' },
          { id: 6, name: 'Item 6' }
        ]
      },
      {
        id: 2,
        items: [
          { id: 3, name: 'Item 3' },
          { id: 4, name: 'Item 4' }
        ]
      }
    ]
  }),
  methods: {
    // tree 1 methods
    // ...
    // tree 2 methods
    // ...
    // list 1 methods
    added1 (event, group) {
      const newItems = this.groupsWithItems1.map((group) => group.items)
        .reduce((prev, curr) => [...prev, ...curr], [])
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0)
      group.items.splice(event.detail.index, 0, ...newItems)
    },
    removed1 (event, group) {
      group.items = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0)
    },
    reordered1 (event, group) {
      const reorderedItems = group.items.filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0)
      const newItems = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0)
      newItems.splice(event.detail.index, 0, ...reorderedItems)
      group.items = newItems
    },
    // list 2 methods
    added2 (event, group) {
      const newItems = this.groupsWithItems1.map((group) => group.items)
        .reduce((prev, curr) => [...prev, ...curr], [])
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0)
      group.items.splice(event.detail.index, 0, ...newItems)
    },
    removed2 (event, group) {
      group.items = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0)
    },
    reordered2 (event, group) {
      const reorderedItems = group.items.filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0)
      const newItems = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0)
      newItems.splice(event.detail.index, 0, ...reorderedItems)
      group.items = newItems
    },
    // clipboard methods
    addedClipboard (event, group) {
      const newItems = this.clipboard.map((group) => group.items)
        .reduce((prev, curr) => [...prev, ...curr], [])
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0)
      group.items.splice(event.detail.index, 0, ...newItems)
    },
    removedClipboard (event, group) {
      group.items = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0)
    },
    reorderedClipboard (event, group) {
      const reorderedItems = group.items.filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0)
      const newItems = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0)
      newItems.splice(event.detail.index, 0, ...reorderedItems)
      group.items = newItems
    },
    // favorites methods
    addedFavorites (event, group) {
      const newItems = this.favorites.map((group) => group.items)
        .reduce((prev, curr) => [...prev, ...curr], [])
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0)
      group.items.splice(event.detail.index, 0, ...newItems)
    },
    removedFavorites (event, group) {
      group.items = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0)
    },
    reorderedFavorites (event, group) {
      const reorderedItems = group.items.filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0)
      const newItems = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0)
      newItems.splice(event.detail.index, 0, ...reorderedItems)
      group.items = newItems
    },
    // history methods
    addedHistory (event, group) {
      const newItems = this.history.map((group) => group.items)
        .reduce((prev, curr) => [...prev, ...curr], [])
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0)
      group.items.splice(event.detail.index, 0, ...newItems)
    },
    removedHistory (event, group) {
      group.items = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0)
    },
    reorderedHistory (event, group) {
      const reorderedItems = group.items.filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0)
      const newItems = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0)
      newItems.splice(event.detail.index, 0, ...reorderedItems)
      group.items = newItems
    }
  }
}
</script>

<style>
.app-custom-list {
  min-width: 10rem;
  height: 50vh;
  margin-top: 0 !important;
}

.app-custom-item[aria-grabbed="true"] {
  background: #5cc1a6;
  color: #fff;
}

@keyframes nodeInserted {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 0.8;
  }
}

.item-dropzone-area {
  height: 2rem;
  background: #888;
  opacity: 0.8;
  animation-duration: 0.5s;
  animation-name: nodeInserted;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
}
</style>
