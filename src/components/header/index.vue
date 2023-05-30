<template>
  <div class="header-nav">
    <div class="header-nav__home">
      <img src="../../assets/images/home/image 30@2x.png" alt="" />
    </div>
    <div class="header-nav__page">
      <div
        class="nav-items"
        :class="active === item.id ? 'active' : ''"
        v-for="item in navList"
        :key="item.id"
        @click="handleMoveTo(item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="header-nav__buy">
      <img src="../../assets/images/home/Group 1@2x.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { throttle } from '@/utils/index'
const navList = [
  { title: 'HOME', id: 'banner', type: 'move' },
  { title: 'ABOUT', id: 'about', type: 'move' },
  { title: 'MINT', id: 'mint', type: 'link' },
  { title: 'CLAIM', id: 'claim', type: 'link' },
  { title: 'LAND', id: 'land', type: 'move' },
  { title: 'ROADMAP', id: 'roadMap', type: 'move' },
]
import { useAppStore } from '@/store/modules/app'
import { defineProps, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const props = defineProps(['initActive'])

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
})
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
  padding: 0 30px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__home {
    img {
      width: 52px;
      height: 52px;
    }
  }
  &__page {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav-items {
      font-size: 20px;
      font-family: Chinese Rocks-Regular, Chinese Rocks;
      font-weight: 400;
      color: #ffffff;
      width: 144px;
      height: 36px;
      line-height: 24px;
      padding: 6px 0 6px 32px;
      cursor: pointer;
    }
    .active {
      background: url(../../assets/images/home/nav-bg.png) 100% no-repeat;
      background-size: 100% 100%;
    }
  }
  &__buy {
    img {
      width: 190px;
      height: 52px;
    }
  }
}
</style>
