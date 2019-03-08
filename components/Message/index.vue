<template>
  <transition name="up">
    <div
      v-show="show"
      class="message"
    >
      {{ text }}
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.up-enter-active,
.up-leave-active {
  transition: 0.3s;
}

.up-enter,
.up-leave-to {
  opacity: 0;
  top: 0 !important;
}
.message {
  padding: 3px 8px;
  position: fixed;
  top: 30px;
  left: 50%;
  font-size: 14px;
  transform: translateX(-50%);
  border-radius: 4px;
  text-align: center;
  z-index: 1000;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
</style>
