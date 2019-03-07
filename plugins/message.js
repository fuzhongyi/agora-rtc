import Vue from 'vue'
import Message from '~/components/Message'

// 动画时间,表示这个组件切换show的动画时间
const ANIMATE_TIME = 300

/**
 * 自定义消息提示窗口
 * @param text 内容
 * @param duration 显示的时间 ms
 */
Vue.prototype.$message = (text, duration = 3000) => {
  let msg
  if (typeof text === 'string') {
    msg = text
  } else if (text instanceof Object) {
    msg = text.text || ''
    if (text.duration) {
      duration = text.duration
    }
  }
  let VueMessage = Vue.extend(Message)
  let newMessage = new VueMessage({
    propsData: { text: msg }
  })
  let vm = newMessage.$mount()
  let el = vm.$el
  document.body.appendChild(el)
  vm.show = true
  let t1 = setTimeout(() => {
    clearTimeout(t1)
    // 隐藏提示组件，此时会有300ms的动画效果，等动画效果过了再从body中移除dom
    vm.show = false
    let t2 = setTimeout(() => {
      clearTimeout(t2)
      // 从body中移除dom
      document.body.removeChild(el)
      newMessage.$destroy()
      // 设置为null，好让js垃圾回收算法回收，释放内存
      vm = null
    }, ANIMATE_TIME)
  }, duration)
}
