import { ref, onMounted, onUnmounted } from "vue"
import { throttle } from 'underscore'

export default function useScroll() {
  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)


  // 防抖、节流
  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    // console.log("监听到滚动")
    if( clientHeight.value + scrollTop.value +1 >= scrollHeight.value) {
      console.log("滚动到底部")
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}