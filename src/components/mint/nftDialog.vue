<template>
  <el-dialog
    v-model="dialogVisible"
    append-to-body
    :lock-scroll="true"
    class="nft-dialog"
  >
    <template #header>
      <div class="nft-dialog__header">
        <div class="title">MintingNow</div>
        <!-- <SvgIcon
          @click="close"
          class="close-icon"
          name="close"
          color="#fff"
          width="24px"
          height="24px"
        /> -->
      </div>
    </template>
    <div class="nft-dialog__content">
      <div>
        <div class="name">{{ nft?.nftSetName }}</div>
        <div class="hour">{{ nft?.lastHourMintCount }} mints last hr</div>
        <div class="mint" @click="handleMint">
          {{
            route.name === 'free-mint'
              ? 'Mint For Free'
              : 'mint 1 for ' + (nft?.mintPrice || 0) * 0.0001 + ' ETH'
          }}
        </div>
      </div>
      <img class="img" :src="nft?.nftTokenList[0]?.tokenImage" />
    </div>
    <div class="nft-dialog__mints">
      <div class="name">Recent Mints</div>
      <div class="hour">{{ nft?.lastHourMintCount }} mints last hr</div>
      <div class="list">
        <div
          v-for="child in nft?.nftTokenList"
          :key="child.tokenId"
          class="item"
        >
          <img :src="child.tokenImage" />
          <div class="price"># {{ child.tokenId }}</div>
          <div class="desc">
            Minted by
            <el-tooltip
              class="box-item"
              effect="dark"
              :content="child.tokenOwnerAddress"
              placement="top"
            >
              {{ child.tokenOwnerAddress.substring(0, 8) }}
            </el-tooltip>
          </div>
          <div class="free">
            <!-- FREE •  -->
            <!-- {{ Math.floor(child.tokenMintedTime / 60) }}m -->
            {{ formatSeconds(child.tokenMintedTime) }}
          </div>
        </div>
      </div>
    </div>
    <div class="nft-dialog__detalis">
      <div class="title">Detali</div>
      <div class="content" v-html="nft?.nftDetail.replace(/\n/g, '<br>')"></div>
    </div>
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
  </el-dialog>
  <ViewEtherscan ref="ViewEtherscanRef" />
  <Message ref="MessageRef" />
  <NftProcess ref="NftProcessRef" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NFTDETAIL } from '@/api/nft/type'
import Mm from './useMm'
import ViewEtherscan from './viewEtherscan.vue'
import Message from './message.vue'
import NftProcess from './nftProcess.vue'
import { formatSeconds } from '@/utils'
import { useRoute } from 'vue-router'
const route = useRoute()
const dialogVisible = ref(false)
const loginVisible = ref(false)
const nft = ref<NFTDETAIL>()
const handleClose = (done: () => void) => {
  done()
}
const handleOpen = (item: NFTDETAIL) => {
  nft.value = item
  dialogVisible.value = true
}

const ViewEtherscanRef = ref()
const MessageRef = ref()
let MM = Mm.getInstance()
const handleLogin = () => {
  console.log(MM)
}
const NftProcessRef = ref()
const handleMint = () => {
  console.log(MM)
  if (!MM || MM.error) {
    loginVisible.value = true
    MM.initWeb3(
      () => {
        loginVisible.value = false
        handleMint()
      },
      (err: string) => {
        MessageRef.value.show(err)
      },
    )
    return
  }
  loginVisible.value = false
  MM.sendTransaction(
    nft.value,
    (hash: any) => {
      dialogVisible.value = false
      NftProcessRef.value.hide()
      ViewEtherscanRef.value.show(hash)
      // window.location.reload()
    },
    (nft) => {
      console.log(nft)
      NftProcessRef.value.show(nft)
    },
    (err: { message: any }) => {
      console.log(err.message)
      NftProcessRef.value.hide()
      MessageRef.value.show(err.message)
    },
    route.name || '',
  )
}
defineExpose({
  handleClose,
  handleOpen,
})
</script>

<style lang="scss">
.nft-dialog {
  width: 1149px;
  // height: 1259px;
  box-sizing: border-box;
  padding: 35px 48px;
  background: url(/src/assets/images/mint/dialogbg.webp) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  @media screen and (max-width: 768px) {
    width: 354px;
    max-width: 98vw;
    // height: 1704px;
    box-sizing: border-box;
    padding: 0;
    background: url(/src/assets/images/mint/dialogbg-m.webp) no-repeat;
    background-size: 100% 100%;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
    font-size: 20px;
  }
  .el-dialog__body {
    @media screen and (max-width: 768px) {
      padding: 14px;
    }
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 30px;
      font-family: Open Sans-SemiBold, Open Sans;
      font-weight: 600;
      color: #fff;
      line-height: 35px;
      position: relative;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        font-family: Archivo-Black, Archivo;
        line-height: 27px;
        padding-left: 26px;
      }
      &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #18ff2f;
        top: 50%;
        transform: translateY(-50%);
        left: -42px;
        @media screen and (max-width: 768px) {
          left: 0;
        }
      }
    }
  }
  &__content {
    margin-top: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      margin-top: 0;
      text-align: center;
    }
    .name {
      font-size: 25px;
      font-family: Archivo-Black, Archivo;
      font-weight: 900;
      color: #fff;
      line-height: 44px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 28px;
        margin-top: 18px;
      }
    }
    .hour {
      font-size: 20px;
      font-family: Archivo-Medium, Archivo;
      color: #fff;
      line-height: 35px;
      margin-top: 20px;
      @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 24px;
        margin-top: 10px;
      }
    }
    .mint {
      // width: 250px;
      height: 96px;
      line-height: 96px;
      padding: 0 45px;
      font-size: 23px;
      font-family: Chinese Rocks-Regular, Chinese Rocks;
      color: #fff;
      margin-top: 40px;
      margin-left: -26px;
      background: url(/src/assets/images/mint/group32@2x.webp) no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        // width: 204px;
        height: 80px;
        line-height: 80px;
        margin-top: 18px;
        margin-left: 0px;
      }
    }
    .img {
      width: 225px;
      height: 225px;
      background: #d9d9d9;
      @media screen and (max-width: 768px) {
        width: 312px;
        height: 312px;
      }
    }
  }
  &__mints {
    .name {
      font-size: 25px;
      font-family: Archivo-Black, Archivo;
      font-weight: 900;
      color: #ffffff;
      line-height: 44px;
      margin-top: 68px;
      @media screen and (max-width: 768px) {
        margin-top: 28px;
        font-size: 15px;
        line-height: 26px;
      }
    }
    .hour {
      font-size: 20px;
      font-family: Archivo-Medium, Archivo;
      color: #ffffff;
      line-height: 35px;
      margin-top: 20px;
      @media screen and (max-width: 768px) {
        margin-top: 8px;
        font-size: 13px;
        line-height: 24px;
      }
    }
    .list {
      margin-top: 38px;
      display: flex;
      overflow: hidden;
      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 0;
      }
      .item {
        width: 175px;
        margin-right: 30px;
        font-size: 18px;
        font-family: Archivo-Medium, Archivo;
        color: #ffffff;
        line-height: 32px;
        @media screen and (max-width: 768px) {
          width: 154px;
          margin-right: 0px;
          margin-top: 12px;
          margin-bottom: 12px;
          font-size: 16px;
          line-height: 28px;
        }
        img {
          width: 175px;
          height: 175px;
          background: #d9d9d9;
          @media screen and (max-width: 768px) {
            width: 154px;
            height: 154px;
          }
        }
        .price {
          margin-top: 24px;
          @media screen and (max-width: 768px) {
            margin-top: 20px;
          }
        }
      }
    }
  }
  &__detalis {
    .title {
      font-size: 25px;
      font-family: Archivo-Black, Archivo;
      font-weight: 600;
      color: #ffffff;
      line-height: 44px;
      margin-top: 70px;
      @media screen and (max-width: 768px) {
        font-size: 15px;
        line-height: 26px;
        margin-top: 55px;
      }
    }
    .content {
      font-size: 20px;
      font-family: Archivo-Medium, Archivo;
      color: #ffffff;
      line-height: 35px;
      padding: 45px 0;
      @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 24px;
        padding: 18px 0;
      }
    }
  }
}
.login-dialog {
  width: 570px;
  height: 394px;
  box-sizing: border-box;
  padding: 20px 40px;
  background: url(/src/assets/images/mint/loginbg.webp) no-repeat;
  background-size: 100% 100%;
  .el-dialog__body {
    @media screen and (max-width: 768px) {
      padding: 0px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 354px;
    height: 245px;
    padding: 12px 24px;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
    font-size: 20px;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 25px;
      font-family: Archivo-Black, Archivo;
      font-weight: 900;
      color: #ffffff;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: initial;
      }
    }
  }
  &__content {
    text-align: center;
    padding: 10px 0;
    img {
      width: 194px;
      height: 194px;
      margin-top: 22px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 120px;
        height: 120px;
        margin-top: 12px;
      }
    }
    .text {
      font-size: 16px;
      font-family: Archivo-Regular, Archivo;
      color: #ffffff;
      line-height: 31px;
      @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>
