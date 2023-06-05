<template>
  <div class="home-page__wrap">
    <Header />
    <div class="home-page__content">
      <Banner />
      <About />
      <Land />
      <RoadMap />
      <ContactUs />
    </div>
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
  padding-top: 76px;
  background: url(/src/assets/images/home/bg.webp) no-repeat;
  background-size: 100% 140vh;
  @media screen and (max-width: 768px) {
    padding-top: 10px;
  }
  .home-page__content {
    background: url(/src/assets/images/home/Group24@2x.webp) no-repeat;
    background-size: 100% 100%;
  }
}
</style>
