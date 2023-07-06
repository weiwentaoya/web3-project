<template>
  <div class="header-nav">
    <div class="header-nav__home">
      <router-link to="/">
        <img src="../../assets/images/home/image30@2x.webp" alt="" />
      </router-link>
    </div>
    <div class="header-nav__page" v-show="navShow" @click="handleSwitch(false)">
      <div class="close">
        <SvgIcon
          class="close-icon"
          name="close"
          color="#fff"
          width="24px"
          height="24px"
        />
      </div>

      <div class="nav-items">
        <div
          class="nav-item"
          :class="active === item.id ? 'active' : ''"
          v-for="item in navList"
          :key="item.id"
          @click="handleMoveTo(item)"
        >
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
    <div class="header-nav__buy">
      <img src="../../assets/images/home/Group1@2x.webp" alt="" />
      <SvgIcon
        @click="navShow = true"
        class="nav"
        name="nav"
        color="#fff"
        width="24px"
        height="24px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { throttle } from '@/utils/index'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()

const navList = [
  { title: 'HOME', id: 'banner', type: 'move' },
  { title: 'ABOUT', id: 'about', type: 'move' },
  { title: 'MINT', id: 'mint', type: 'link' },
  { title: 'CLAIM', id: 'claim', type: 'link' },
  { title: 'LAND', id: 'land', type: 'move' },
  { title: 'ROADMAP', id: 'roadMap', type: 'move' },
]
import { useAppStore } from '@/store/modules/app'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const props = defineProps(['initActive'])

const navShow = ref(true)
const isM = ref(false)
const router = useRouter()
const route = useRoute()
const store = useAppStore()
const active = ref(props.initActive || store.active || navList[0].id)

const handleMoveTo = (item: any) => {
  if (route.path === '/') {
    active.value = item.id
    const rootElement = document.getElementById(item.id)
    if (!rootElement) return router.push('/' + item.id)
    rootElement.scrollIntoView()
    // 下面是有动画的
    // rootElement.scrollIntoView({ behavior: 'smooth' })
  } else if (item.type === 'move') {
    store.setActive(item.id)
    router.push('/')
  } else {
    active.value = item.id
    router.push('/' + item.id)
  }
}

// 监听width
watch(
  () => width.value,
  (val) => {
    console.log(val)
    if (val > 768) {
      isM.value = false
      navShow.value = true
    } else {
      isM.value = true
      navShow.value = false
    }
  },
)

onMounted(() => {
  if (store.active) {
    setTimeout(() => {
      const rootElement = document.getElementById(store.active)
      rootElement && rootElement.scrollIntoView({ behavior: 'smooth' })
      store.setActive(undefined)
      setTimeout(() => {
        initScroll()
      }, 1000)
    }, 0)
  } else {
    initScroll()
  }
  if (width.value > 768) {
    isM.value = false
    navShow.value = true
  } else {
    isM.value = true
    navShow.value = false
  }
})
const handleSwitch = (val: boolean) => {
  if (isM.value) {
    navShow.value = val
  }
}
onUnmounted(() => {
  console.log('onUnmounted')
  window.removeEventListener('scroll', handleScroll)
})
const initScroll = () => {
  window.addEventListener('scroll', handleScroll)
}
const handleScroll = throttle(() => {
  if (route.path !== '/') return
  const contentSections = navList.map((item) => {
    const rootElement = document.getElementById(item.id)
    return {
      rootElement,
      ...item,
    }
  })
  // 获取当前滚动位置
  const scrollPosition = window.scrollY
  // 遍历内容块元素
  contentSections.forEach((section: any) => {
    // 获取内容块的顶部和底部位置
    if (section.rootElement) {
      const sectionTop = section.rootElement.offsetTop - 150
      const sectionBottom = sectionTop + section.rootElement.offsetHeight
      // 检查当前滚动位置是否位于此内容块内
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        active.value = section.id
        // 更新导航状态
      }
    }
  })
}, 100)
</script>

<style scoped lang="scss">
.header-nav {
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 0 22px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    background: transparent;
    height: 66px;
  }
  &__home {
    img {
      width: 52px;
      height: 52px;
      @media screen and (max-width: 768px) {
        width: 28px;
        height: 28px;
      }
    }
  }
  &__page {
    @media screen and (max-width: 768px) {
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
      display: flex;
      justify-content: end;
      animation: slide-in 0.5s ease-out;
    }
    @keyframes slide-in {
      0% {
        width: 0; /* 初始位置在右侧屏幕外 */
      }
      100% {
        width: 100%; /* 最终位置在屏幕右侧 */
      }
    }
    .close {
      display: none;
      @media screen and (max-width: 768px) {
        display: inline-block;
        position: absolute;
        top: 18px;
        right: 24px;
      }
    }
    .nav-items {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 254px;
        background: #000;
        padding-left: 20px;
        min-height: 100vh;
        overflow-y: auto;
        padding-top: 42px;
      }
      .nav-item {
        font-size: 20px;
        font-family: Chinese Rocks-Regular, Chinese Rocks;
        font-weight: 400;
        color: #ffffff;
        width: 144px;
        height: 36px;
        line-height: 24px;
        padding: 6px 0 6px 32px;
        cursor: pointer;
        @media screen and (max-width: 768px) {
          height: 24px;
          line-height: 24px;
          padding: 0 0 0 32px;
          margin-top: 40px;
        }
      }
      .active {
        background: url(../../assets/images/home/nav-bg.webp) 100% no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  &__buy {
    display: flex;
    align-items: center;
    img {
      width: 190px;
      height: 52px;
      @media screen and (max-width: 768px) {
        width: 100px;
        height: 28px;
        margin-right: 16px;
      }
    }
    .nav {
      display: none;
      @media screen and (max-width: 768px) {
        display: inline-block;
      }
    }
  }
}
</style>
