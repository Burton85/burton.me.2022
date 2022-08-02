<template>
  <section
    :class="isMounted ? 'home-section home-section__action' : 'home-section'"
  >
    <h2 class="home-title">
      <i :class="'ico ico-' + homeSecList.icon"></i>
      {{ homeSecList.name }}
      <i
        :class="
          isExpand ? 'ico ico-expand ico-expand__expand' : 'ico ico-expand'
        "
        @click="expandList()"
      ></i>
    </h2>
    <ul class="home-list" v-if="isExpand">
      <HomeItem
        v-for="(item, index) in contentList"
        :homeItemList="item"
        :index="index + ''"
        :key="index"
        :type="homeSecList.icon"
      ></HomeItem>
    </ul>
  </section>
</template>
<script>
import HomeItem from '../components/HomeItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeSec',
  props: ['homeSecList'],
  components: {
    HomeItem
  },
  computed: {
    ...mapGetters([
      'getProjectList',
      'getNoteList',
      'getPhotoList',
      'getProfileList'
    ]),
    contentList() {
      switch (this.homeSecList.name) {
        case 'Recently Projects':
          return this.getProjectList;
        case 'Learning Notes':
          return this.getNoteList;
        case 'Photos Albums':
          return this.getPhotoList;
        case 'My Profiles':
          return this.getProfileList;
        default:
          return [];
      }
    }
  },
  data() {
    return {
      isMounted: false,
      isExpand: false
    };
  },
  mounted() {
    this.isMounted = true;
  },
  created() {
    console.log(this.homeSecList.name);
    switch (this.homeSecList.name) {
      case 'Recently Projects':
        this.$store.dispatch('getTrelloJson', {
          name: 'project'
        });
        break;
      case 'Learning Notes':
        this.$store.dispatch('getTrelloJson', {
          name: 'note'
        });
        break;
      case 'Photos Albums':
        this.$store.dispatch('getTrelloJson', {
          name: 'photo'
        });
        break;
      default:
        this.$store.dispatch('getTrelloJson', {
          name: 'profile'
        });
        break;
    }
  },
  methods: {
    expandList() {
      this.isExpand = !this.isExpand;
    }
  }
};
</script>
