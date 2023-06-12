<template>
  <div class="mint-page">
    <Header initActive="mint" />
    <Tab init="mint" />
    <NftList :nftSetList="nftSetList" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/index.vue'
import Tab from '@/components/mint/tab.vue'
import NftList from '@/components/mint/nftList.vue'
import Footer from '@/components/mint/footer.vue'
import { onMounted, ref } from 'vue'
import { getNftSetList, getNftTokenList, getNftDetail } from '@/api/nft'
import { NftSet, NftToken } from '@/api/nft/type'

const nftSetList = ref<NftSet[]>([])
onMounted(async () => {
  const res = await getNftSetList()
  nftSetList.value = res.nftSetList
  nftSetList.value.forEach((item) => {
    itemFill(item)
  })
})

const itemFill = async (item: NftSet) => {
  const params = {
    nftSetId: item.nftSetId,
    offset: 0,
    limit: 6,
  }
  const [{ nftTokenList }, detail] = await Promise.all([
    getNftTokenList(params),
    getNftDetail({ nftSetId: item.nftSetId }),
  ])
  item.nftTokenList = nftTokenList
  Object.assign(item, detail)
  console.log(item)
}
</script>

<style scoped lang="scss">
.mint-page {
  background: #000;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 95px;
  @media screen and (max-width: 768px) {
    padding-top: 46px;
  }
}
</style>
