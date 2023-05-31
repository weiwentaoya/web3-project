<template>
  <div class="home-page__banner" id="banner">
    <div class="banner-container w1400">
      <img class="banner" src="../../assets/images/home/banner.png" alt="" />
      <!-- <img
        class="name"
        src="../../assets/images/home/ProjectName@2x.png"
        alt=""
      /> -->
      <div class="name">ProjectName</div>
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
      /* width: 637px; */
      /* height: 215px; */
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 550px;
      font-size: 187px;
      font-family: Resident Evil-Regular, Resident Evil;
      font-weight: 400;
      color: #fff;
      -webkit-text-stroke: 5px #451100;
      text-stroke: 5px #451100;
      -webkit-background-clip: text;
      -webkit-text-fill-color: #fff;
      @media screen and (max-width: 768px) {
        position: relative;
        left: initial;
        transform: initial;
        top: initial;
        font-size: 84px;
        font-family: Resident Evil-Regular, Resident Evil;
        font-weight: 400;
        -webkit-text-stroke: 2px #451100;
        text-stroke: 2px #451100;
        -webkit-background-clip: text;
        -webkit-text-fill-color: #fff;
        margin-top: 21px;
        text-align: center;
      }
    }
    &__desc {
      font-size: 25px;
      font-family: Archivo-Regular, Archivo;
      font-weight: 400;
      color: #fff;
      line-height: 44px;
      padding: 0 158px;
      margin-top: 60px;
      text-align: center;
      @media screen and (max-width: 768px) {
        margin-top: 2px;
        font-size: 16px;
        line-height: 28px;
        padding: 0;
      }
    }
  }
}
</style>
