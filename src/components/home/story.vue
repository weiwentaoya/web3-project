<template>
  <div class="home-page__story w1400" id="story">
    <div class="tabs">
      <div class="tabs-header">
        <div v-for="item in dataList" :key="item.id" @click="active = item.id">
          <img
            v-if="item.id === active"
            class="img active"
            :src="item.iconActive"
            alt=""
          />
          <img v-else class="img" :src="item.icon" alt="" />
        </div>
      </div>
      <div class="tabs-center">
        <div class="center">
          <div class="title">{{ activeTab.title }}</div>
          <div class="desc">{{ activeTab.desc }}</div>
        </div>
        <img :src="activeTab.path" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()

// const carousel = ref()
import path2 from '@/assets/images/home/Group17@2x(1).webp'
import icon2 from '@/assets/images/home/556@2x.webp'
import icon2A from '@/assets/images/home/563@2x.webp'
import path3 from '@/assets/images/home/Group17@2x(2).webp'
import icon3 from '@/assets/images/home/557@2x.webp'
import icon3A from '@/assets/images/home/564@2x.webp'
import path4 from '@/assets/images/home/Group17@2x(3).webp'
import icon4 from '@/assets/images/home/558@2x.webp'
import icon4A from '@/assets/images/home/562@2x.webp'
import path5 from '@/assets/images/home/Group17@2x(4).webp'
import icon5 from '@/assets/images/home/559@2x(1).webp'
import icon5A from '@/assets/images/home/559@2x.webp'
import path6 from '@/assets/images/home/Group17@2x(5).webp'
import icon6 from '@/assets/images/home/561@2x(1).webp'
import icon6A from '@/assets/images/home/561@2x.webp'
import { computed } from 'vue'
const dataList = [
  {
    id: 2,
    title: 'joker story',
    desc: 'Once, in a dimension beyond our own, there existed a realm known as the Realm of Chaos. It was a realm where reality was fluid, and the very fabric of existence was molded by the whims of unpredictable forces. Within this realm, an ancient entity known as the Ring Master ruled with an iron fist, sowing chaos and disorder throughout the land.',
    path: path2,
    icon: icon2,
    iconActive: icon2A,
  },
  {
    id: 3,
    title: 'joker story',
    desc: `As the tyrant's reign intensified, a group of brave individuals known as the Rebel Jokers rose up to challenge his tyranny. These rebels possessed a unique connection to the chaotic energies of the realm, enabling them to harness its power for their own purposes.  `,
    path: path3,
    icon: icon3,
    iconActive: icon3A,
  },
  {
    id: 4,
    title: 'joker story',
    desc: 'Each rebel Joker had their own distinct personality and abilities, representing a facet of chaos.The Jokers spread across the universe, whispered among those who sought chaos as a catalyst for change. Their presence was felt in small acts of rebellion, mysterious disruptions, and unforeseen events that defied logic. ',
    path: path4,
    icon: icon4,
    iconActive: icon4A,
  },
  {
    id: 5,
    title: 'joker story',
    desc: 'The Jokers became a symbol of hope for those who yearned for freedom from the oppressive forces of order and control. ',
    path: path5,
    icon: icon5,
    iconActive: icon5A,
  },
  {
    id: 6,
    title: 'joker story',
    desc: 'We are The Joker Movement, a web3 Chaos experiment represented by $TJOKER & A Chaotic Collection. The Jokers are representing free spirits, mischief makers, and agents of change. We believe that through disruption, laughter, and an unwavering commitment to authenticity, the Jokers can reshape the world.',
    path: path6,
    icon: icon6,
    iconActive: icon6A,
  },
]
const active = ref(2)
const activeTab = computed(() => {
  return dataList.find((item) => item.id === active.value) || dataList[0]
})
// const indicators = ref(0)
// const handleChange = (index: number) => {
//   indicators.value = index
// }
// const carouselHeight = ref()
// const handleResize = () => {
//   console.log(window.innerWidth)
//   if (width.value < 768) {
//     carouselHeight.value = '625px'
//   } else {
//     carouselHeight.value = '874px'
//   }
// }
</script>
<style scoped lang="scss">
.home-page__story {
  padding: 284px 0;
  @media screen and (max-width: 768px) {
    padding: 66px 28px 10px 28px;
  }
  .tabs {
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    &-header {
      width: 170px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 40px 0 50px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: row;
        margin: 0 10px 0 0;
      }
      .img {
        width: 98px;
        height: 98px;
        margin-top: 20px;
        @media screen and (max-width: 768px) {
          width: 52px;
          height: 52px;
        }
      }
      .active {
        width: 170px;
        height: 170px;
        @media screen and (max-width: 768px) {
          width: 88px;
          height: 88px;
        }
      }
    }
    &-center {
      color: #fff;
      background: url(../../assets/images/home/image55@2x.webp) 100% no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      padding-top: 30px;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        background: url(../../assets/images/home/image52@2x.webp) 100% no-repeat;
        background-size: 100% 100%;
        padding-bottom: 12px;
        padding-top: 0px;
        margin-top: 36px;
      }
      .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 90px;
        margin-right: -80px;
        @media screen and (max-width: 768px) {
          padding: 28px 48px 0 20px;
          margin-right: 0px;
        }
        .title {
          font-size: 85px;
          font-family: Chinese Rocks-Regular, Chinese Rocks;
          font-weight: 400;
          line-height: 100px;
          @media screen and (max-width: 768px) {
            font-size: 56px;
            line-height: 66px;
          }
        }
        .desc {
          font-size: 20px;
          font-family: Archivo-Regular, Archivo;
          font-weight: 400;
          line-height: 35px;
          margin-top: 44px;
          @media screen and (max-width: 768px) {
            margin-top: 22px;
            font-size: 13px;
            line-height: 23px;
          }
        }
      }
      img {
        width: 660px;
        @media screen and (max-width: 768px) {
          width: 100%;
          margin-left: -25px;
        }
      }
    }
  }
}
</style>
