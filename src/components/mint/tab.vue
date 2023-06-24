<template>
  <div class="w1200">
    <div class="mint-tabs">
      <router-link :class="props.init === 'mint' ? 'active' : ''" to="/mint">
        {{ route.name === 'free-mint' ? 'FreeMint' : 'Mint' }}
      </router-link>
      <router-link :class="props.init === 'claim' ? 'active' : ''" to="/claim">
        Claim
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps(['init'])
</script>

<style scoped lang="scss">
.mint-tabs {
  margin-top: 32px;
  a {
    display: inline-block;
    width: 230px;
    text-align: center;
    height: 68px;
    line-height: 68px;
    font-size: 25px;
    font-family: Chinese Rocks-Regular, Chinese Rocks;
    font-weight: 400;
    color: #fff;
    // 字体大写
    text-transform: uppercase;
    // 字体下划线
    text-decoration: none;
    background: url(../../assets/images/mint/Rectangle2@2x.webp) 100% no-repeat;
    background-size: 100% 100%;
    @media screen and (max-width: 768px) {
      width: 50%;
      height: 45px;
      line-height: 45px;
    }
  }
  .active {
    background: url(../../assets/images/mint/tab-bg.webp) 100% no-repeat;
    background-size: 100% 100%;
  }
}
</style>
