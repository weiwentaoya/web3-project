<template>
  <el-dialog
    v-model="viewVisible"
    append-to-body
    :lock-scroll="true"
    top="25vh"
    class="eth-dialog"
    width="570px"
  >
    <template #header>
      <div class="eth-dialog__header">
        <div class="title">Transaction pending</div>
      </div>
    </template>
    <a
      :href="'https://goerli.etherscan.io/tx/' + hashEtherscan"
      target="_blank"
      class="eth-dialog__content"
    >
      View on Etherscan
    </a>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const viewVisible = ref(false)
const hashEtherscan = ref('')
const show = (hash: string) => {
  viewVisible.value = true
  hashEtherscan.value = hash
}
defineExpose({
  show,
})
</script>
<style lang="scss">
.eth-dialog {
  width: 570px;
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
      font-weight: 900;
      color: #ffffff;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: initial;
      }
    }
  }
  &__content {
    display: block;
    text-align: center;
    background: url(/src/assets/images/mint/ethbg.webp) no-repeat;
    background-size: 100% 100%;
    font-size: 25px;
    font-weight: 400;
    font-family: Archivo-Regular, Archivo;
    color: #fff;
    height: 100px;
    line-height: 100px;
    cursor: pointer;
    text-decoration: none;
    @media screen and (max-width: 768px) {
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
}
</style>
