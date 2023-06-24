<template>
  <div class="w1200">
    <div class="ntf-list" v-for="item in props.nftSetList" :key="item.nftSetId">
      <div class="ntf-list__name">{{ item.nftSetName }}</div>
      <div class="ntf-list__desc">
        {{ item.lastHourMintCount }} mints last hr
      </div>
      <div class="ntf-list__child">
        <div
          v-for="child in item.nftTokenList"
          :key="child.tokenId"
          class="child-item"
        >
          <div class="img">
            <img :src="child.tokenImage" />
          </div>
          <div class="price"># {{ child.tokenId }}</div>
          <div class="desc">
            Minted by
            <el-tooltip
              class="box-item"
              effect="dark"
              :content="child.tokenOwnerAddress"
              placement="top"
            >
              {{ child.tokenOwnerAddress.substring(0, 8) }}
            </el-tooltip>
          </div>
          <div class="free">
            <!-- FREE •  -->
            <!-- {{ Math.floor(child.tokenMintedTime / 60) }}m -->
            {{ formatSeconds(child.tokenMintedTime) }}
          </div>
        </div>
        <div class="child-item"></div>
        <div class="child-item"></div>
        <div class="child-item"></div>
        <div class="child-item"></div>
        <div class="child-item"></div>
      </div>
      <div class="ntf-list__mint-now" @click="handleMint(item)">Mint Now !</div>
    </div>
    <NftDialog ref="nft" />
  </div>
</template>

<script setup lang="ts">
import NftDialog from './nftDialog.vue'
import { ref, defineProps } from 'vue'
import { NFTDETAIL } from '@/api/nft/type'
import { formatSeconds } from '@/utils'

interface Props {
  nftSetList: any[]
}
const props = defineProps<Props>()
const nft = ref()
const handleMint = (item: NFTDETAIL) => {
  nft.value.handleOpen(item)
}
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
      .desc {
        white-space: nowrap;
        overflow: hidden;
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
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .price {
      margin-top: 12px;
    }
  }
  &__mint-now {
    margin: 28px auto 0;
    width: 332px;
    height: 128px;
    text-align: center;
    line-height: 128px;
    font-size: 30px;
    font-family: Chinese Rocks-Regular, Chinese Rocks;
    color: #fff;
    background: url(/src/assets/images/mint/group32@2x.webp) no-repeat;
    background-size: 100% 100%;
    @media screen and (max-width: 768px) {
      margin: 25px auto 0;
      width: 204px;
      height: 78px;
      line-height: 78px;
    }
    cursor: pointer;
  }
}
</style>
