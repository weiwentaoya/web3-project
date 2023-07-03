<template>
  <div class="home-page__road-map w1400" id="roadMap">
    <div class="title">ROADMAP</div>
    <div class="line"></div>
    <div class="container">
      <div class="items">
        <div class="item" v-for="item in dataList" :key="item.id">
          <img
            class="item-line"
            src="../../assets/images/home/road-map-line.webp"
            alt=""
          />
          <img class="photo" :src="item.path" alt="" />
          <div class="time">
            {{ item.time }}
            <!-- <br />
            {{ item.time2 }} -->
          </div>
          <!-- <div class="time" v-if="item.time2">{{ item.time2 }}</div> -->
          <div class="desc">
            <p v-for="l in item.desc" :key="l">{{ l }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import path1 from '@/assets/images/home/image21@2x.webp'
import path2 from '@/assets/images/home/image46@2x.webp'
import path3 from '@/assets/images/home/image47@2x.webp'
import path4 from '@/assets/images/home/image48@2x.webp'
import path5 from '@/assets/images/home/image49@2x.webp'
const dataList = [
  {
    id: 1,
    time: 'Phase 0',
    desc: [
      `Launch the Joker Movement, creating chaos`,
      `Design Joker NFTs`,
      `Recruit initial Jokers`,
    ],
    path: path1,
  },
  {
    id: 2,
    time: 'Phase 1',
    desc: [
      `Mint Joker NFTs`,
      `Reach 2,500 NFT holders`,
      `List on OPENSEA`,
      `Comprehensive upgrade of the official website`,
    ],
    path: path2,
  },
  {
    id: 3,
    time: 'Phase 2',
    desc: [
      `Release Joker AI`,
      `Launch Joker Exhibition Hall`,
      `Introduce Chaos Ground`,
      `Announce Joker Chaos Creators`,
      `Release details about $TJOKER`,
      `Launch $TJOKER on Uniswap`,
    ],
    path: path3,
  },
  {
    id: 4,
    time: 'Phase 3',
    desc: [
      `Announce Joker Brand Ambassador Program`,
      `Establish Joker Club`,
      `Found Chaos Labs`,
      `Launch MEME LABS Metaverse Space`,
    ],
    path: path4,
  },
  {
    id: 5,
    time: 'Phase 4',
    // time2: 'Soon',
    desc: [`Maintain the mystery`],
    path: path5,
  },
]
</script>

<style scoped lang="scss">
.home-page__road-map {
  padding-top: 82px;
  .title {
    font-size: 85px;
    font-family: Chinese Rocks-Regular, Chinese Rocks;
    font-weight: 400;
    color: #ff112d;
    line-height: 100px;
    text-align: center;
    width: 1030px;
    margin: 0 auto;
    height: 69px;
    background: url(../../assets/images/home/road-map-title-bg.webp) 100%
      no-repeat;
    background-size: 100% 100%;
    @media screen and (max-width: 768px) {
      width: 338px;
      height: 26px;
      line-height: 26px;
      font-size: 32px;
    }
  }
  .line {
    margin-top: 45px;
    height: 1px;
    background: url(../../assets/images/home/line.webp) 100% no-repeat;
    background-size: 100% 100%;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .container {
    margin-top: 58px;
    .items {
      z-index: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
      .item {
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 275px;
        height: 430px;
        background: url(../../assets/images/home/road-map-bg.webp) 100%
          no-repeat;
        background-size: 100% 100%;
        margin-right: 15px;
        position: relative;
        @media screen and (max-width: 768px) {
          margin-right: 0;
          margin-bottom: 20px;
        }
        .item-line {
          position: absolute;
          top: -58px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 58px;
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
        &:last-child {
          margin-right: 0;
        }
        .photo {
          width: 118px;
          object-fit: contain;
          height: 118px;
          margin: 55px auto 0;
        }
        .time {
          text-align: center;
          font-size: 32px;
          font-family: Archivo-Bold, Archivo;
          font-weight: bold;
          color: #ffffff;
          line-height: 56px;
          margin-top: 8px;
        }
        .desc {
          font-size: 12px;
          font-family: Montserrat;
          font-weight: 400;
          color: #fff;
          line-height: 20px;
          margin-top: 12px;
          width: 100%;
          text-align: left;
          p {
            padding-left: 12px;
            position: relative;
            &:before {
              content: '';
              position: absolute;
              left: 2px;
              top: 8px;
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
