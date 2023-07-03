<template>
  <div class="mint-footer">
    <div class="border"></div>
    <div class="desc">© 2023 By The Joker chaos. All rights reserved！</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.mint-footer {
  margin-top: 78px;
  @media screen and (max-width: 768px) {
    margin-top: 39px;
  }
  .border {
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, white, transparent);
  }
  .desc {
    font-size: 14px;
    font-family: Archivo-Regular, Archivo;
    font-weight: 400;
    color: #fff;
    line-height: 24px;
    padding: 36px 0;
    text-align: center;
    @media screen and (max-width: 768px) {
      padding: 18px 0;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>
