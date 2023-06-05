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
        <img src="../../assets/images/mint/Group32@2x.png" alt="" />
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
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
  &__name {
    font-size: 25px;
    font-family: Archivo-Black, Archivo;
    font-weight: 900;
    color: #ffffff;
    line-height: 44px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 28px;
    }
  }
  &__desc {
    font-size: 20px;
    font-family: Archivo-Medium, Archivo;
    font-weight: 500;
    color: #ffffff;
    line-height: 35px;
    margin-top: 20px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 24px;
      margin-top: 10px;
    }
  }
  &__child {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 18px;
    font-family: Archivo-Medium, Archivo;
    font-weight: 500;
    color: #ffffff;
    line-height: 32px;
    @media screen and (max-width: 768px) {
      justify-content: flex-start;
    }
    .child-item {
      width: 174px;
      @media screen and (max-width: 768px) {
        width: 50%;
        box-sizing: border-box;
        &:nth-child(even) {
          padding-left: 10px;
        }
        &:nth-child(odd) {
          padding-right: 10px;
        }
      }
    }
    .img {
      width: 100%;
      height: 174px;
      background: #d9d9d9;
      margin-top: 38px;
      @media screen and (max-width: 768px) {
        margin-top: 30px;
      }
    }
    .price {
      margin-top: 12px;
    }
  }
  &__mint-now {
    margin: 28px auto 0;
    width: 332px;
    @media screen and (max-width: 768px) {
      margin: 25px auto 0;
      width: 204px;
    }
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}
</style>
