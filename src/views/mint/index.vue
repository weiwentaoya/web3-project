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
import { NftSet, NFTDETAIL } from '@/api/nft/type'

const nftSet = ref<NftSet[]>([])
const nftSetList = ref<any>([])
onMounted(async () => {
  const res = await getNftSetList()
  nftSet.value = res.data.nftSetList
  nftSet.value.forEach((item) => {
    itemFill(item)
  })
})

const itemFill = async (item: NftSet) => {
  const params = {
    nftSetId: item.nftSetId,
    offset: 0,
    limit: 6,
  }
  const [token, detail] = await Promise.all([
    getNftTokenList(params),
    getNftDetail({ nftSetId: item.nftSetId }),
  ])
  const o: NFTDETAIL = Object.assign({}, item, {
    ...detail.data,
    nftTokenList: token.data.nftTokenList,
  })
  nftSetList.value.push(o)
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
