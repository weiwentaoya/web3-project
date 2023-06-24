<template>
  <el-dialog
    v-model="viewVisible"
    append-to-body
    :lock-scroll="true"
    top="25vh"
    class="message-dialog"
    width="570px"
  >
    <template #header>
      <div class="message-dialog__header">
        <div class="title">Message</div>
      </div>
    </template>
    <p class="message-dialog__content">{{ str }}</p>
    <img
      @click="viewVisible = false"
      class="ok"
      src="../../assets/images/mint/ok.webp"
      alt=""
    />
  </el-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const viewVisible = ref(false)
const str = ref('Returned error: execution reverted: Minting limit exceeded')
const show = (hash: string) => {
  viewVisible.value = true
  str.value = hash
}
defineExpose({
  show,
})
</script>
<style lang="scss">
.message-dialog {
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
    display: block;
    text-align: center;
    background-size: 100% 100%;
    font-size: 20px;
    font-family: Archivo-Regular, Archivo;
    color: #fff;
    line-height: 35px;
    padding: 72px 0;
    @media screen and (max-width: 768px) {
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
  .ok {
    width: 330px;
    margin: 15px auto 0;
    cursor: pointer;
  }
}
</style>
