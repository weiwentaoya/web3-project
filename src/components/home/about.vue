<template>
  <div class="home-page__about w1400" id="about">
    <img class="about-l" src="../../assets/images/home/about.webp" alt="" />
    <div class="about-r">
      <img class="img1" src="../../assets/images/home/Group22@2x.webp" alt="" />
      <img class="img2" src="../../assets/images/home/Group22@2x2.webp" />
      <p>
        THE JOKER is a collection of 15,000 NFTs released by the Chaos
        Laboratory. You can find them on OPENSEA. Each Joker is one-of-a-kind,
        programmatically generated with over 100 possible traits including
        props, headgear, clothing, eyes, and more.
        <br />
        Jokers are not just PFP or rare artworks. They can serve as your digital
        identity within JOKERS LAND and MEME LABS, granting you additional
        rights and membership benefits within the Joker Movement.
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
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .img1 {
      opacity: 1;
      height: initial;
      margin-top: 60px;
      @media screen and (max-width: 768px) {
        margin-top: 0px;
        opacity: 0;
        height: 0;
      }
    }
    .img2 {
      opacity: 0;
      height: 0;
      margin-top: 0;
      @media screen and (max-width: 768px) {
        margin-top: -38px;
        opacity: 1;
        height: initial;
      }
    }
    p {
      padding: 30px 18px 0 30px;
      font-size: 20px;
      font-family: Montserrat;
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
