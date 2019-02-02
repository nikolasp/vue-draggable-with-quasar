<template>
  <div>
    <div class="row">{{ groupsWithItems }}</div>
    <div class="row" v-drag-and-drop="options">
      <q-list
        v-for="group in groupsWithItems"
        :key="group.id"
        :data-id="group.id"
        class="app-custom-list"
        @added="added($event, group)"
        @removed="removed($event, group)"
        @reordered="reordered($event, group)"
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
  </div>
</template>

<script>
import { QList, QItem, QItemMain } from "quasar-framework";

export default {
  name: "hello",
  components: {
    QList,
    QItem,
    QItemMain
  },
  data() {
    const reorderItems = this.reorderItems;
    const nextTick = this.$nextTick;
    return {
      groupsWithItems: [
        {
          id: 1,
          items: [
            {
              id: 1,
              name: "Item 1"
            },
            {
              id: 2,
              name: "Item 2"
            },
            {
              id: 5,
              name: "Item 5"
            },
            {
              id: 6,
              name: "Item 6"
            }
          ]
        },
        {
          id: 2,
          items: [
            {
              id: 3,
              name: "Item 3"
            },
            {
              id: 4,
              name: "Item 4"
            }
          ]
        }
      ],
      options: {
        multipleDropzonesItemsDraggingEnabled: false,
        dropzoneSelector: ".q-list",
        draggableSelector: ".q-item"
      }
    };
  },
  methods: {
    added(event, group) {
      const newItems = this.groupsWithItems.map((group) => group.items)
        .reduce((prev, curr) => [...prev, ...curr], [])
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0)
      group.items.splice(event.detail.index, 0, ...newItems);
    },
    removed(event, group) {
      group.items = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0)
    },
    reordered(event, group) {
      const reorderedItems =
        group.items.filter((item) => event.detail.ids.map(Number).indexOf(item.id) >= 0);
      const newItems = group.items
        .filter((item) => event.detail.ids.map(Number).indexOf(item.id) < 0);
      newItems.splice(event.detail.index, 0, ...reorderedItems);
      group.items = newItems;
    }
  }
};
</script>

<style>
.app-custom-list {
  min-width: 10rem;
  height: 90vh;
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
