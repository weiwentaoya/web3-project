<template>
  <div class="home-page__road-map w1400" id="roadMap">
    <div class="title">ROADMAP</div>
    <div class="container">
      <div class="bg">
        <img src="../../assets/images/home/Vector 9@2x.png" alt="" />
      </div>
      <div class="items">
        <div class="item">
          <img src="../../assets/images/home/image 21@2x.png" alt="" />
          <div class="time">2023 H2</div>
          <div class="desc">Live a function</div>
        </div>
        <div class="item">
          <img src="../../assets/images/home/image 22@2x.png" alt="" />
          <div class="time">2024 H1</div>
          <div class="desc">Live a function</div>
        </div>
        <div class="item">
          <img src="../../assets/images/home/image 23@2x.png" alt="" />
          <div class="time">2025 H1</div>
          <div class="desc">Live a function</div>
        </div>
        <div class="item">
          <img src="../../assets/images/home/image 24@2x.png" alt="" />
          <div class="time">2025 H2</div>
          <div class="desc">Live a function</div>
        </div>
        <div class="item">
          <img src="../../assets/images/home/image 25@2x.png" alt="" />
          <div class="time">Coming Soon</div>
          <div class="desc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home-page__road-map {
  padding-top: 87px;
  .title {
    font-size: 85px;
    font-family: Chinese Rocks-Regular, Chinese Rocks;
    font-weight: 400;
    color: #fff;
    line-height: 100px;
    text-align: center;
  }
  .container {
    margin-top: 63px;
    position: relative;
    .bg {
      position: absolute;
      left: 0;
      top: 45px;
      width: 100%;
      img {
        width: 100%;
        height: 10px;
      }
    }
    .items {
      z-index: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .item {
        padding: 0 66px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 100px;
          height: 100px;
        }
        .time {
          font-size: 32px;
          font-family: Archivo-Bold, Archivo;
          font-weight: bold;
          color: #ffffff;
          line-height: 56px;
          margin-top: 15px;
        }
        .desc {
          font-size: 18px;
          font-family: Archivo-Regular, Archivo;
          font-weight: 400;
          color: #ffffff;
          height: 35px;
          line-height: 35px;
          margin-top: 13px;
        }
      }
    }
  }
}
</style>
