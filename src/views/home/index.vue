<template>
  <div class="home-page__wrap">
    <Header />
    <div class="home-page__content">
      <Banner />
      <About />
      <Tokenomics />
      <Story />
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
import Tokenomics from '@/components/home/tokenomics.vue'
import Land from '@/components/home/land.vue'
import Story from '@/components/home/story.vue'
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
    background-size: 100% 75vh;
  }
  .home-page__content {
    background: url(/src/assets/images/home/Group24@2x.webp) repeat;
    background-size: 100% auto;
  }
}
</style>
