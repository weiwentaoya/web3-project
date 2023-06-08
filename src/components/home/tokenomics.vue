<template>
  <div class="home-page__token-omics w1400">
    <div class="title">Tokenomics</div>
    <div class="container">
      <div class="content">
        <div class="total">888,690,000,000</div>
        <div class="info">No Taxes, No Bullshit. It’s that simple.</div>
        <div class="desc">
          92% of the tokens were sent to the liquidity pool, xx tokens were
          burnt, and contract is renounced. The remaining 8% of the supply is
          being held in a multi-sig wallet only to be used as tokens for future
          centralized exchange listings, bridges, and liquidity pools. This
          wallet is easily trackable with the ENS name “xxxxxxxx.eth”
        </div>
      </div>
      <img
        class="scale"
        src="../../assets/images/home/Group249@2x.webp"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home-page__token-omics {
  margin-top: 114px;
  @media screen and (max-width: 768px) {
    margin-top: 80px;
  }
  .title {
    font-size: 85px;
    font-family: Chinese Rocks-Regular, Chinese Rocks;
    text-align: center;
    font-weight: 400;
    color: #ffffff;
    line-height: 100px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 38px;
    }
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 114px 160px 0 90px;
    width: 100%;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 0;
    }
    .total {
      font-size: 66px;
      font-family: Chinese Rocks-Regular, Chinese Rocks;
      font-weight: 400;
      color: #ffffff;
      line-height: 78px;
      @media screen and (max-width: 768px) {
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        margin-top: 44px;
      }
    }
    .info,
    .desc {
      font-size: 20px;
      font-family: Montserrat-Regular, Montserrat;
      font-weight: 400;
      color: #ffffff;
      line-height: 30px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 28px;
        text-align: center;
      }
    }
    .info {
      margin-top: 64px;
      margin-bottom: 32px;
      @media screen and (max-width: 768px) {
        margin-top: 17px;
        margin-bottom: 28px;
      }
    }
    .scale {
      width: 460px;
      height: 460px;
      margin-left: 120px;
      @media screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
        margin-left: 0px;
        margin-top: 40px;
      }
    }
  }
}
</style>
