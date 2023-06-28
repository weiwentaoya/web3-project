<template>
  <el-dialog
    v-model="viewVisible"
    append-to-body
    :lock-scroll="true"
    top="25vh"
    class="process-dialog"
    width="760px"
  >
    <template #header>
      <div class="process-dialog__header">
        <div class="title">{{ nft.nftSetName }} is minting now</div>
      </div>
    </template>
    <div class="process-dialog__content">
      <img :src="nft.nftTokenList[0].tokenImage" alt="" />
      <div class="price">
        <div>
          <span>MintPrice:</span>
          <b v-if="route.name === 'free-mint'">Free</b>
          <span v-else>{{ nft.mintPrice * 0.0001 }} ETH</span>
        </div>
        <div>
          <span>GasFee:</span>
          <span>~{{ nft.gasPrice }} ETH</span>
        </div>
        <div>
          <span>Total:</span>
          <span>
            ~{{ total }}
            ETH
          </span>
        </div>
      </div>
    </div>
  </el-dialog>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Decimal from 'decimal.js'
const route = useRoute()
const viewVisible = ref(false)
const nft = ref<any>({})
const show = (_nft: any) => {
  viewVisible.value = true
  nft.value = _nft
}
const hide = () => {
  viewVisible.value = false
}
const total = computed(() => {
  const x = new Decimal(nft.value.gasPrice)
  const y = new Decimal(nft.value.mintPrice * 0.0001)
  return route.name === 'free-mint' ? nft.value.gasPrice : x.plus(y)
})
defineExpose({
  show,
  hide,
})
</script>
<style lang="scss">
.process-dialog {
  box-sizing: border-box;
  padding: 20px 30px;
  background: url(/src/assets/images/mint/loginbg.webp) no-repeat;
  background-size: 100% 100%;
  @media screen and (max-width: 768px) {
    width: 354px;
    padding: 12px 24px;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
    font-size: 20px;
  }
  .el-dialog__header {
    @media screen and (max-width: 768px) {
      padding: 8px 0px 28px 0;
    }
  }
  .el-dialog__body {
    text-align: center;
    @media screen and (max-width: 768px) {
      padding: 0px;
    }
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 25px;
      font-family: Archivo-Black, Archivo;
      font-weight: 600;
      color: #ffffff;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: initial;
      }
    }
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-family: Archivo-Medium, Archivo;
    font-weight: 500;
    color: #fff;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      font-size: 12px;
      padding-bottom: 16px;
    }
    img {
      width: 173px;
      height: 173px;
      margin-right: 46px;
      @media screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
        margin-right: 0px;
        margin-bottom: 16px;
      }
    }
    .price {
      flex: 1;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      div {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 768px) {
          height: 25px;
        }
      }
    }
  }
}
</style>
