<template>
  <NavBar></NavBar>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup>
import NavBar from './components/Navigation.vue';
document.documentElement.scrollTop = 0;
// const Provider = {
//   provide: {
//     projectList: [
//       {
//         name: 'projectList',
//         checkItems: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }]
//       }
//     ],
//     noteList: [
//       {
//         name: 'noteList',
//         checkItems: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }]
//       }
//     ],
//     photoList: [
//       {
//         name: 'photoList',
//         checkItems: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }]
//       }
//     ],
//     profileList: [
//       { name: 'profileList', checkItems: [{ name: 'this is state' }] }
//     ]
//   }
// };
// console.log(process.env.VUE_APP_KEY);
// return {
//   provide
// };
</script>
