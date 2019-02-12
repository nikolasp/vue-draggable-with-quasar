<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          vue-draggable Quasar DEMO
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="openURL('https://vivify-ideas.github.io/vue-draggable/')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="https://vivify-ideas.github.io/vue-draggable/" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/Vivify-Ideas/vue-draggable')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="https://github.com/Vivify-Ideas/vue-draggable" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/Vivify-Ideas/vue-draggable')">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="???" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/Vivify-Ideas/vue-draggable')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="???" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/Vivify-Ideas/vue-draggable')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="???" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
