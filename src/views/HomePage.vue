<template>
    <Banner></Banner>
    <myContact></myContact>
    <home-sec v-for="(item, index) in secList" :homeSecList="item" :key="index"></home-sec>
    <div class="hr"></div>
    <Footer></Footer>
</template>

<script setup>
import Banner from '../components/Banner.vue';
import myContact from '../components/Contact.vue';
import HomeSec from '../components/HomeSec.vue';
import Footer from '../components/Footer.vue';
import { ref } from '@vue/reactivity';

const secList= ref([
    {
        name: 'My Profiles',
        icon: 'profile',
    },
    {
        name: 'Recently Projects',
        icon: 'project',
    },
    {
        name: 'Learning Notes',
        icon: 'note',
    },
    {
        name: 'Photos Albums',
        icon: 'photo',
    },
])
</script>
