<template>
  <div class="home-page__wrap">
    <Header />
    <Banner />
    <About />
    <Land />
    <RoadMap />
    <ContactUs />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/index.vue'
import Banner from '@/components/home/banner.vue'
import About from '@/components/home/about.vue'
import Land from '@/components/home/land.vue'
import RoadMap from '@/components/home/roadMap.vue'
import ContactUs from '@/components/home/contactUs.vue'
</script>

<style scoped lang="scss">
.home-page__wrap {
  background: url(/src/assets/images/home/bg.png) no-repeat;
  background-size: 100% 140vh;
  padding-top: 76px;
  @media screen and (max-width: 768px) {
    padding-top: 10px;
  }
}
</style>
