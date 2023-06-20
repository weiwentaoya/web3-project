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
        <img
          @click="handleMint"
          class="mint"
          src="../../assets/images/mint/Group32@2x.webp"
          alt=""
        />
      </div>
      <div class="img"></div>
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
          <div class="price">{{ child.tokenMintedTime }}</div>
          <div class="desc">Minted by {{ child.tokenOwnerAddress }}</div>
          <!-- <div class="free">{{ child.free }}</div> -->
        </div>
      </div>
    </div>
    <div class="nft-dialog__detalis">
      <div class="title">Detali</div>
      <div class="content">
        <div>
          A detailed introduction to this NFT series A detailed introduction to
          this NFT series
        </div>
        <div>
          A detailed introduction to this NFT series A detailed introduction to
          this NFT series
        </div>
        <div>
          A detailed introduction to this NFT series A detailed introduction to
          this NFT series
        </div>
      </div>
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
          @click="handleMint"
        />
        <div class="text">
          To continue, please login to your MetaMask extension.
        </div>
      </div>
    </el-dialog>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NFTDETAIL } from '@/api/nft/type'
import Mm from './useMm'
const dialogVisible = ref(false)
const loginVisible = ref(false)
const nft = ref<NFTDETAIL>()
const handleClose = (done: () => void) => {
  done()
}
const handleOpen = (item: NFTDETAIL) => {
  nft.value = item
  dialogVisible.value = true
  // console.log(Mm.instance)
  // console.log(Mm.getInstance())
}

const MM = Mm.getInstance()
const handleMint = async () => {
  if (!MM.userAdderss || MM.error) return (loginVisible.value = true)
  loginVisible.value = false
  MM.sendTransaction(nft.value)
}
defineExpose({
  handleClose,
  handleOpen,
})
</script>

<style lang="scss">
.nft-dialog {
  width: 1149px;
  height: 1259px;
  box-sizing: border-box;
  padding: 35px 48px;
  background: url(/src/assets/images/mint/dialogbg.webp) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  @media screen and (max-width: 768px) {
    width: 354px;
    max-width: 98vw;
    height: 1704px;
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
      width: 250px;
      height: 96px;
      margin-top: 40px;
      margin-left: -26px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 204px;
        height: 80px;
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
      display: flex;
      overflow: hidden;
      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .item {
        width: 175px;
        margin-right: 30px;
        @media screen and (max-width: 768px) {
          width: 154px;
          margin-right: 0px;
          margin-top: 12px;
          margin-bottom: 12px;
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
          font-size: 18px;
          font-family: Archivo-Medium, Archivo;
          color: #ffffff;
          line-height: 32px;
          @media screen and (max-width: 768px) {
            margin-top: 20px;
            font-size: 16px;
            line-height: 28px;
          }
        }
        .desc {
          font-size: 18px;
          font-family: Archivo-Medium, Archivo;
          color: #ffffff;
          line-height: 32px;
          white-space: nowrap;
          overflow: hidden;
          @media screen and (max-width: 768px) {
            font-size: 16px;
            line-height: 28px;
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
