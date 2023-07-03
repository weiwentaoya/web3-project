<template>
  <div class="home-page__land w1400" id="land">
    <div class="content">
      <img class="img" src="../..//assets/images/home/Group17@2x.webp" alt="" />
      <div class="title">LAND</div>
      <p class="desc">
        I don't know if I've ever truly existed in this lifetime, but now I feel
        everyone starting to take notice of me. We are all Jokers, soloists in
        different worlds. I want to break these rules and invite you to become a
        chaos creator alongside me. LAND is a world belonging to the Jokers,
        where we can freely communicate, work, entertain, create, and build.
        Remember, the value of THE JOKER and $TJOKER that you possess will be
        significant here. We will unveil its importance in the second and third
        phases.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// import { useWindowSize } from '@vueuse/core'
// const { width } = useWindowSize()

// const carousel = ref()
// import path1 from '@/assets/images/home/Group17@2x.webp'
// import path2 from '@/assets/images/home/Group17@2x(1).webp'
// import path3 from '@/assets/images/home/Group17@2x(2).webp'
// import path4 from '@/assets/images/home/Group17@2x(3).webp'
// import path5 from '@/assets/images/home/Group17@2x(4).webp'
// import path6 from '@/assets/images/home/Group17@2x(5).webp'
// const dataList = [
//   {
//     id: 1,
//     title: 'LAND',
//     desc: 'NFT cards of varying rarity thatcontain slots for staking infrastructurefacilities, along with the amount ofworks for Working. Sector owners willget a stable 10% profit margin gainedfrom all facilities placed in theirsector, together with profits from allcompleted works. NFT cards can bepurchased in packs with Wax at thepre-sale stage and, in rare cases, atauction with T-coin.',
//     path: path1,
//   },
//   {
//     id: 2,
//     title: 'joker story',
//     desc: 'Once, in a dimension beyond our own, there existed a realm known as the Realm of Chaos. It was a realm where reality was fluid, and the very fabric of existence was molded by the whims of unpredictable forces. Within this realm, an ancient entity known as the Ring Master ruled with an iron fist, sowing chaos and disorder throughout the land.',
//     path: path2,
//   },
//   {
//     id: 3,
//     title: 'joker story',
//     desc: `As the tyrant's reign intensified, a group of brave individuals known as the Rebel Jokers rose up to challenge his tyranny. These rebels possessed a unique connection to the chaotic energies of the realm, enabling them to harness its power for their own purposes.  `,
//     path: path3,
//   },
//   {
//     id: 4,
//     title: 'joker story',
//     desc: 'Each rebel Joker had their own distinct personality and abilities, representing a facet of chaos.The Jokers spread across the universe, whispered among those who sought chaos as a catalyst for change. Their presence was felt in small acts of rebellion, mysterious disruptions, and unforeseen events that defied logic. ',
//     path: path4,
//   },
//   {
//     id: 5,
//     title: 'joker story',
//     desc: 'The Jokers became a symbol of hope for those who yearned for freedom from the oppressive forces of order and control. ',
//     path: path5,
//   },
//   {
//     id: 6,
//     title: 'joker story',
//     desc: 'We are The Joker Movement, a web3 Chaos experiment represented by $TJOKER & A Chaotic Collection. The Jokers are representing free spirits, mischief makers, and agents of change. We believe that through disruption, laughter, and an unwavering commitment to authenticity, the Jokers can reshape the world.',
//     path: path6,
//   },
// ]
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
.home-page__land {
  height: 854px;
  // margin-top: 143px;
  background: url(../../assets/images/home/land-bg.webp) 100% no-repeat;
  background-size: 100% 100%;
  text-align: center;
  @media screen and (max-width: 768px) {
    height: initial;
    margin-top: 50px;
    background: url(../../assets/images/home/land-bg2.webp) 100% no-repeat;
    background-size: 100% 100%;
  }
  .img {
    display: none;
    width: 240px;
    margin: 76px auto 0;
    @media screen and (max-width: 768px) {
      display: inline-block;
    }
  }
  .content {
    width: 512px;
    margin-left: 224px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0;
      padding-bottom: 114px;
    }
    .title {
      font-size: 65px;
      font-family: Chinese Rocks-Regular, Chinese Rocks;
      font-weight: 400;
      color: #560404;
      line-height: 100px;
      text-align: center;
      margin: 160px 0 44px;
      text-transform: uppercase;
      @media screen and (max-width: 768px) {
        margin: 0;
        font-size: 32px;
        line-height: 38px;
      }
    }
    .desc {
      text-align: left;
      font-size: 20px;
      font-family: Montserrat;
      font-weight: 400;
      color: #101010;
      line-height: 35px;
      min-height: 280px;
      @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 21px;
        padding: 12px 48px 0;
        min-height: 180px;
      }
    }
  }
}
</style>
