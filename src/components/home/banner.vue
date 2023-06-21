<template>
  <div class="home-page__banner" id="banner">
    <div class="banner-container w1400">
      <img class="banner" src="../../assets/images/home/banner.webp" alt="" />
      <img
        class="name"
        src="../../assets/images/home/ProjectName@2x.webp"
        alt=""
      />
      <!-- <div class="name">ProjectName</div> -->
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
      min-height: 624px;
      @media screen and (max-width: 768px) {
        min-height: 168px;
      }
    }
    .name {
      width: 637px;
      /* height: 215px; */
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 570px;
      /* font-size: 187px;
      font-family: Resident Evil-Regular, Resident Evil;
      font-weight: 400;
      color: #fff;
      -webkit-text-stroke: 5px #451100;
      text-stroke: 5px #451100;
      -webkit-background-clip: text;
      -webkit-text-fill-color: #fff; */
      @media screen and (max-width: 768px) {
        position: relative;
        left: initial;
        transform: initial;
        top: initial;
        margin: 40px auto 18px;
        display: flex;
        width: 288px;
      }
    }
    &__desc {
      font-size: 25px;
      font-family: Montserrat;
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
