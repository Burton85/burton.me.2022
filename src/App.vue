<template>
  <NavBar></NavBar>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup>
import { useStore } from 'vuex'
import NavBar from './components/Navigation.vue';
document.documentElement.scrollTop = 0;

const store = useStore();
store.dispatch('getNotion')

</script>
