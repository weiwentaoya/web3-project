<template>
  <div class="home-page__land w1400" id="land">
    <el-carousel
      height="874px"
      ref="carousel"
      :autoplay="false"
      arrow="never"
      indicator-position="none"
      @change="handleChange"
    >
      <el-carousel-item v-for="item in dataList" :key="item">
        <div class="content">
          <div class="title"> {{ item.title }} </div>
          <p class="desc">
            {{ item.desc }}
          </p>
          <div class="indicators">
            <div
              class="indicator"
              :class="indicators === index ? 'active' : ''"
              v-for="(item, index) in dataList"
              :key="item"
              @click="carousel.setActiveItem(index)"
            ></div>
          </div>
        </div>
        <img :src="item.path" alt="" />
      </el-carousel-item>
      <div class="arrow-l">
        <img
          @click="carousel.prev()"
          src="../../assets/images/home/Group 216@2x.png"
          alt=""
        />
      </div>
      <div class="arrow-r">
        <img
          @click="carousel.next()"
          src="../../assets/images/home/Group 215@2x.png"
          alt=""
        />
      </div>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const carousel = ref(null)
import path1 from '@/assets/images/home/Group 17@2x.png';
import path2 from '@/assets/images/home/Group 17@2x(1).png';
import path3 from '@/assets/images/home/Group 17@2x(2).png';
import path4 from '@/assets/images/home/Group 17@2x(3).png';
import path5 from '@/assets/images/home/Group 17@2x(4).png';
import path6 from '@/assets/images/home/Group 17@2x(5).png';
const dataList = [
  {
    id: 1,
    title: 'LAND',
    desc: 'NFT cards of varying rarity thatcontain slots for staking infrastructurefacilities, along with the amount ofworks for Working. Sector owners willget a stable 10% profit margin gainedfrom all facilities placed in theirsector, together with profits from allcompleted works. NFT cards can bepurchased in packs with Wax at thepre-sale stage and, in rare cases, atauction with T-coin.',
    path: path1,
  },
  {
    id: 2,
    title: 'joker story',
    desc: 'Once, in a dimension beyond our own, there existed a realm known as the Realm of Chaos. It was a realm where reality was fluid, and the very fabric of existence was molded by the whims of unpredictable forces. Within this realm, an ancient entity known as the Ring Master ruled with an iron fist, sowing chaos and disorder throughout the land.',
    path: path2,
  },
  {
    id: 3,
    title: 'joker story',
    desc: `As the tyrant's reign intensified, a group of brave individuals known as the Rebel Jokers rose up to challenge his tyranny. These rebels possessed a unique connection to the chaotic energies of the realm, enabling them to harness its power for their own purposes.  `,
    path: path3,
  },
  {
    id: 4,
    title: 'joker story',
    desc: 'Each rebel Joker had their own distinct personality and abilities, representing a facet of chaos.The Jokers spread across the universe, whispered among those who sought chaos as a catalyst for change. Their presence was felt in small acts of rebellion, mysterious disruptions, and unforeseen events that defied logic. ',
    path: path4,
  },
  {
    id: 5,
    title: 'joker story',
    desc: 'The Jokers became a symbol of hope for those who yearned for freedom from the oppressive forces of order and control. ',
    path: path5,
  },
  {
    id: 6,
    title: 'joker story',
    desc: 'We are The Joker Movement, a web3 Chaos experiment represented by $TJOKER & A Chaotic Collection. The Jokers are representing free spirits, mischief makers, and agents of change. We believe that through disruption, laughter, and an unwavering commitment to authenticity, the Jokers can reshape the world.',
    path: path6,
  },
]
const indicators = ref(0)
const handleChange = (index: number) => {
  indicators.value = index
}
</script>

<style scoped lang="scss">
.home-page__land {
  margin-top: 86px;
  background: url(../../assets/images/home/land-bg.png) 100% no-repeat;
  background-size: 100% 100%;
  .arrow-l {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    cursor: pointer;
    img {
      width: 84px;
      height: 84px;
    }
  }
  .arrow-r {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
    img {
      width: 84px;
      height: 84px;
    }
  }
  .el-carousel__item {
    display: flex;
    justify-content: right;
    padding: 98px 80px;
    .content {
      width: 484px;
      margin-right: -30px;
      .title {
        font-size: 85px;
        font-family: Chinese Rocks-Regular, Chinese Rocks;
        font-weight: 400;
        color: #560404;
        line-height: 100px;
        text-align: center;
        margin: 110px 0 44px;
      }
      .desc {
        font-size: 20px;
        font-family: Archivo-Regular, Archivo;
        font-weight: 400;
        color: #101010;
        line-height: 35px;
        min-height: 280px;
      }
      .indicators {
        display: flex;
        justify-content: center;
        margin-top: 80px;
        .indicator {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
          margin: 0 15px;
          cursor: pointer;
          &.active {
            width: 36px;
            background: #000;
            border-radius: 10px 10px 10px 10px;
          }
        }
      }
    }
    img {
      width: 660px;
      height: 668px;
    }
  }
}
</style>
