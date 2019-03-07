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
  padding: 3px 10px 5px;
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  text-align: center;
  z-index: 1000;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
</style>
