<template>
  <div class="home-page__about w1400" id="about">
    <img class="about-l" src="../../assets/images/home/about.webp" alt="" />
    <div class="about-r">
      <img class="img1" src="../../assets/images/home/Group22@2x.webp" alt="" />
      <img class="img2" src="../../assets/images/home/Group22@2x2.webp" />
      <p>
        XX is an NFT publishing platform, and this is an introduction to our
        team.XX is an NFT publishing platform, and this is an introduction to
        our team.XX is an NFT publishing platform, and this is an introduction
        to our team.XX is an NFT publishing platform, and this is an
        introduction to our team.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home-page__about {
  padding: 88px 135px 0 42px;
  display: flex;
  @media screen and (max-width: 768px) {
    padding: 0 12px;
    flex-wrap: wrap;
  }
  .about-l {
    width: 692px;
    /* height: 486px; */
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .about-r {
    margin-left: -70px;
    @media screen and (max-width: 768px) {
      margin-left: initial;
    }
    img {
      width: 581px;
      height: 141px;
      margin-top: 60px;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: -38px;
      }
    }
    .img1 {
      opacity: 1;
      height: initial;
      @media screen and (max-width: 768px) {
        opacity: 0;
        height: 0;
      }
    }
    .img2 {
      opacity: 0;
      height: 0;
      @media screen and (max-width: 768px) {
        opacity: 1;
        height: initial;
      }
    }
    p {
      padding: 32px 18px 0 30px;
      font-size: 20px;
      font-family: Archivo-Regular, Archivo;
      font-weight: 400;
      color: #ffffff;
      line-height: 35px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 28px;
        padding: 12px 0;
      }
    }
  }
}
</style>
