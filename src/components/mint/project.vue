<template>
  <div class="claim-project w1200">
    <div class="project-list" v-for="item in projectList" :key="item.id">
      <div class="name">{{ item.name }}</div>
      <div class="c-s">
        <div class="claimed">Claimed {{ AirDropContract?.totalClaim }}</div>
        <div class="sale" v-if="AirDropContract?.contractAddress">
          Countdown {{ formatSeconds(AirDropContract?.saleEndTime) }}
        </div>
      </div>
      <div class="detalis">
        <!-- <div class="img"></div> -->
        <img
          class="img"
          src="../../assets/images/home/Group17@2x.webp"
          alt=""
        />
        <div class="detalis-content">
          <div class="title">MEME LABS</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
      <div
        class="project-list__btn"
        @click="handleClaim"
        v-if="AirDropContract?.contractAddress"
      >
        <img src="../../assets/images/mint/Group300.png" alt="" />
      </div>
      <div v-else class="project-list__btn">
        <img src="../../assets/images/mint/Group299.png" alt="" />
      </div>
    </div>
  </div>
  <ViewEtherscan ref="ViewEtherscanRef" />
  <Message ref="MessageRef" />
  <el-dialog
    v-model="loginVisible"
    append-to-body
    :lock-scroll="true"
    top="25vh"
    class="login-dialog"
    width="570px"
  >
    <template #header>
      <div class="login-dialog__header">
        <div class="title">Login to MetaMask</div>
      </div>
    </template>
    <div class="login-dialog__content">
      <img
        src="../../assets/images/mint/dog-head.webp"
        alt=""
        @click="handleLogin"
      />
      <div class="text">
        To continue, please login to your MetaMask extension.
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Mm from '@/components/mint/useMm'
import { airDropContract } from '@/api/nft'
import { airDropContractResponse } from '@/api/nft/type'
import ViewEtherscan from './viewEtherscan.vue'
import Message from './message.vue'
import { formatSeconds } from '@/utils'

const AirDropContract = ref<airDropContractResponse>()
const ViewEtherscanRef = ref()
const getAirDropContract = async () => {
  const res = await airDropContract()
  AirDropContract.value = res.data
}

let Interval: any = null
onMounted(() => {
  getAirDropContract()
  Interval = setInterval(() => {
    if (AirDropContract.value) {
      AirDropContract.value.saleEndTime--
    }
  }, 1000)
})
onUnmounted(() => {
  clearInterval(Interval)
})

const MessageRef = ref()
const loginVisible = ref(false)
let MM = Mm.getInstance()
const handleLogin = () => {
  console.log(MM)
}
const handleClaim = () => {
  if (!MM || MM.error) {
    loginVisible.value = true
    MM.initWeb3(
      () => {
        loginVisible.value = false
        handleClaim()
      },
      (err: string) => {
        MessageRef.value.show(err)
      },
    )
    return
  }
  loginVisible.value = false
  MM.sendTransaction(
    AirDropContract.value,
    (hash) => {
      ViewEtherscanRef.value.show(hash)
    },
    () => {
      console.log('success')
    },
    (err) => {
      console.log(err.message)
      MessageRef.value.show(err.message)
    },
    'claim',
  )
}
const projectList = ref([
  {
    id: '1-1',
    name: 'Check Your Airdrop Eligibility',
    claimed: 'Claimed 89,893',
    sale: 'Sale Ends 10d 5h 9m 10s',
    desc: `THE JOKER CHAOS is an important member of MEME, and we aim to initiate a MEME movement through MEME LABS. We are actively working towards this thought. Here, holders of THE JOKER NFTs can receive various MEME coins and NFT airdrops. Please note that we make no promises of returns. It is simply a social experiment initiated by THE JOKER CHAOS within the MEME movement. All of this will begin in Phase 2.`,
  },
])
</script>

<style scoped lang="scss">
.claim-project {
  margin-top: 78px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    padding: 0 20px;
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
      background: url(../../assets/images/mint/Rectangle4@2x.webp) 100%
        no-repeat;
      background-size: 100% 100%;
      @media screen and (max-width: 768px) {
        background: none;
        margin-top: 20px;
        flex-direction: column;
      }
      .img {
        width: 394px;
        height: 394px;
        background: #d9d9d9;
        object-fit: cover;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
      .detalis-content {
        flex: 1;
        padding: 54px 66px;
        @media screen and (max-width: 768px) {
          padding: 26px 8px;
          background: url(../../assets/images/mint/Rectangle4@2x2.webp) 100%
            no-repeat;
          background-size: 100% 100%;
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
          font-family: Montserrat;
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
