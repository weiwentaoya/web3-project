<template>
  <div class="home-page__contact w1400">
    <div class="title">Contact US</div>
    <div class="desc">Welcome exchanges and discussions！</div>
    <img src="../../assets/images/home/Frame3@2x.webp" alt="" />
    <div class="reserved">© 2023 by xxx. All rights reserved！</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home-page__contact {
  text-align: center;
  margin-top: 78px;
  @media screen and (max-width: 768px) {
    margin-top: 88px;
  }
  .title {
    font-size: 50px;
    font-family: Chinese Rocks-Regular, Chinese Rocks;
    font-weight: 400;
    color: #fff;
    line-height: 60px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 38px;
    }
  }
  .desc {
    margin-top: 20px;
    font-size: 32px;
    font-family: Archivo-Bold, Archivo;
    font-weight: bold;
    color: #ffffff;
    line-height: 56px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 28px;
    }
  }
  img {
    margin-top: 54px;
    width: 198px;
    height: 30px;
    @media screen and (max-width: 768px) {
      margin-top: 28px;
    }
  }
  .reserved {
    margin-top: 42px;
    font-size: 14px;
    font-family: Archivo-Regular, Archivo;
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    padding-bottom: 60px;
    @media screen and (max-width: 768px) {
      margin-top: 22px;
      font-size: 12px;
      line-height: 20px;
      padding-bottom: 52px;
    }
  }
}
</style>
