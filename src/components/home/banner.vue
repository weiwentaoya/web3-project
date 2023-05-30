<template>
  <div class="home-page__banner" id="banner">
    <div class="banner-container w1400">
      <img class="banner" src="../../assets/images/home/banner.png" alt="" />
      <img
        class="name"
        src="../../assets/images/home/ProjectName@2x.png"
        alt=""
      />
      <p class="banner-container__desc">
        This is an introduction to the project This is an introduction to the
        project This is an introduction to the project This is an introduction
        to the project This is an introduction to the project This is an
        introduction to the project This is an introduction to the project
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home-page__banner {
  padding-top: 68px;
  position: relative;
  width: 100%;
  .banner-container {
    .banner {
      width: 100%;
    }
    .name {
      width: 637px;
      /* height: 215px; */
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -180px;
    }
    &__desc {
      font-size: 25px;
      font-family: Archivo-Regular, Archivo;
      font-weight: 400;
      color: #fff;
      line-height: 44px;
      padding: 0 158px;
      margin-top: 60px;
    }
  }
}
</style>
