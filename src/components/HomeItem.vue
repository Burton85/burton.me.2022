<template>
  <li class="home-item" @click="goNext()">
    <h3 class="home-item-title" v-html="homeItemList.name"></h3>
    <img
      v-if="
        homeItemList.checkItems &&
        homeItemList.checkItems[0].name.includes('https')
      "
      :src="homeItemList.checkItems[0].name"
      alt=""
    />
  </li>
</template>
<script>
export default {
  props: ['homeItemList', 'index', 'type'],
  methods: {
    goNext() {
      if (this.type !== 'profile') {
        this.$router.push({
          path: '/' + this.type + 'detail',
          query: { id: this.index }
        });
      }
    }
  }
};
</script>
