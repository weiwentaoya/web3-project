<template>
  <div class="mint-page">
    <Header initActive="mint" />
    <Tab init="mint" />
    <NftList />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/index.vue'
import Tab from '@/components/mint/tab.vue'
import NftList from '@/components/mint/nftList.vue'
import Footer from '@/components/mint/footer.vue'
</script>

<style scoped lang="scss">
.mint-page {
  background: #000;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 95px;
  @media screen and (max-width: 768px) {
    padding-top: 46px;
  }
}
</style>
