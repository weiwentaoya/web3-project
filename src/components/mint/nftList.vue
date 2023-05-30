<template>
  <div class="w1200">
    <div class="ntf-list" v-for="item in nftList" :key="item.id">
      <div class="ntf-list__name">{{ item.name }}</div>
      <div class="ntf-list__desc">{{ item.desc }}</div>
      <div class="ntf-list__child">
        <div v-for="child in item.children" :key="child.id" class="child-item">
          <div class="img"></div>
          <div class="price">{{ child.price }}</div>
          <div class="desc">{{ child.desc }}</div>
          <div class="free">{{ child.free }}</div>
        </div>
        <div class="child-item"></div>
        <div class="child-item"></div>
        <div class="child-item"></div>
        <div class="child-item"></div>
        <div class="child-item"></div>
      </div>
      <div class="ntf-list__mint-now">
        <img src="../../assets/images/mint/Group 32@2x.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nftList = ref([
  {
    id: '1',
    name: 'Set 1 NFT Name',
    desc: '1,893 mints last hr',
    children: [
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
    ],
  },
  {
    id: '2',
    name: 'Set 2 NFT Name',
    desc: '1,893 mints last hr',
    children: [
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
      {
        id: '1-1',
        price: '# 90,989',
        desc: 'Minted by 0x1ca255',
        free: 'FREE • 4m',
      },
    ],
  },
])
</script>

<style scoped lang="scss">
.ntf-list {
  margin-top: 78px;
  &__name {
    font-size: 25px;
    font-family: Archivo-Black, Archivo;
    font-weight: 900;
    color: #ffffff;
    line-height: 44px;
  }
  &__desc {
    font-size: 20px;
    font-family: Archivo-Medium, Archivo;
    font-weight: 500;
    color: #ffffff;
    line-height: 35px;
    margin-top: 20px;
  }
  &__child {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .child-item {
      width: 174px;
      margin-top: 38px;
    }
    .img {
      width: 174px;
      height: 174px;
      background: #d9d9d9;
    }
    .price {
      margin-top: 12px;
    }
    font-size: 18px;
    font-family: Archivo-Medium, Archivo;
    font-weight: 500;
    color: #ffffff;
    line-height: 32px;
  }
  &__mint-now {
    margin: 28px auto 0;
    width: 332px;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}
</style>
