<template>
  <div class="claim-project w1200">
    <div class="project-list" v-for="item in projectList" :key="item.id">
      <div class="name">{{ item.name }}</div>
      <div class="c-s">
        <div class="claimed">{{ item.claimed }}</div>
        <div class="sale">{{ item.sale }}</div>
      </div>
      <div class="detalis">
        <div class="img"></div>
        <div class="detalis-content">
          <div class="title">detalis</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
      <div class="project-list__btn">
        <img src="../../assets/images/mint/Group214@2x.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const projectList = ref([
  {
    id: '1-1',
    name: 'TokemProjectName',
    claimed: 'Claimed 89,893',
    sale: 'Sale Ends 10d 5h 9m 10s',
    desc: `To commemorate the announcement of Worldcoin launching on Optimism Mainnet, we're releasing this limited edition NFT to add to your collection. Worldcoin and Optimism are committed to realizing a scalable, inclusive future that unlocks the full potential of crypto. Worldcoin's deployment on Optimism and entry into the Superchain are an important milestone in the evolution of identity on the blockchain.`,
  },
  {
    id: '1-1',
    name: 'TokemProjectName',
    claimed: 'Claimed 89,893',
    sale: 'Sale Ends 10d 5h 9m 10s',
    desc: `To commemorate the announcement of Worldcoin launching on Optimism Mainnet, we're releasing this limited edition NFT to add to your collection. Worldcoin and Optimism are committed to realizing a scalable, inclusive future that unlocks the full potential of crypto. Worldcoin's deployment on Optimism and entry into the Superchain are an important milestone in the evolution of identity on the blockchain.`,
  },
])
</script>

<style scoped lang="scss">
.claim-project {
  margin-top: 78px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
  .project-list {
    padding-bottom: 78px;
    @media screen and (max-width: 768px) {
      padding-bottom: 30px;
    }
    .name {
      font-size: 25px;
      font-family: Archivo-Black, Archivo;
      font-weight: 900;
      color: #ffffff;
      line-height: 44px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 28px;
      }
    }
    .c-s {
      display: flex;
      font-size: 20px;
      font-family: Archivo-Medium, Archivo;
      font-weight: 500;
      color: #ffffff;
      line-height: 35px;
      margin-top: 20px;
      @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 24px;
        justify-content: space-between;
      }
      .sale {
        margin-left: 60px;
        @media screen and (max-width: 768px) {
          margin-left: 0px;
        }
      }
    }
    .detalis {
      display: flex;
      margin-top: 38px;
      background: url(../../assets/images/mint/Rectangle4@2x.webp) 100% no-repeat;
      background-size: 100% 100%;
      @media screen and (max-width: 768px) {
        margin-top: 20px;
        flex-direction: column;
      }
      .img {
        width: 394px;
        height: 394px;
        background: #d9d9d9;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
      .detalis-content {
        flex: 1;
        padding: 54px 70px;
        @media screen and (max-width: 768px) {
          padding: 26px 8px;
        }
        .title {
          margin-top: 16px;
          font-size: 25px;
          font-family: Archivo-Black, Archivo;
          font-weight: 900;
          color: #ffffff;
          line-height: 44px;
          @media screen and (max-width: 768px) {
            margin-top: 26px;
          }
        }
        .desc {
          font-size: 18px;
          font-family: Archivo-Regular, Archivo;
          font-weight: 400;
          color: #ffffff;
          line-height: 34px;
          margin-top: 18px;
          @media screen and (max-width: 768px) {
            font-size: 16px;
            line-height: 30px;
          }
        }
      }
    }
    .project-list__btn {
      margin: 78px auto 0;
      width: 329px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        margin: 30px auto 0;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
