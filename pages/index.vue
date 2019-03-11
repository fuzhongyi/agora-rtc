<template>
  <div class="chat">
    <!--音频流-->
    <div id="agora"/>
    <!--房间名称-->
    <p class="room-name">强撸灰飞烟灭</p>
    <!--连接时间-->
    <div class="connect-time">
      <div class="connect-time__icon">
        <svg
          style="vertical-align: middle;fill: currentColor;overflow: hidden;"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M192.437 816.222c-23.575 0-42.863-19.288-42.863-42.863v-64.294c0-23.575 19.288-42.863 42.863-42.863s42.863 19.288 42.863 42.863v64.294c0.005 23.57-19.284 42.863-42.863 42.863zM406.754 816.222c-23.575 0-42.862-19.288-42.862-42.863v-171.458c0-23.575 19.288-42.862 42.862-42.862s42.863 19.288 42.863 42.862v171.458c0.005 23.57-19.284 42.863-42.863 42.863zM621.080 816.222c-23.575 0-42.862-19.288-42.862-42.863v-342.912c0-23.575 19.288-42.862 42.862-42.862s42.862 19.288 42.862 42.862v342.908c0 23.575-19.288 42.867-42.862 42.867zM835.397 816.222c-23.575 0-42.863-19.288-42.863-42.863v-557.234c0-23.575 19.288-42.863 42.863-42.863s42.863 19.288 42.863 42.863v557.229c0 23.575-19.288 42.867-42.863 42.867z"/>
        </svg>
      </div>
      <div class="connect-time__num">{{ connectTime }}</div>
    </div>
    <!--用户列表-->
    <ul class="users-list">
      <li
        :key="index"
        v-for="(item,index) in users"
        class="users-list__item"
      >
        <div
          :style="{color:item.color}"
          class="avatar"
        >
          <svg
            style="vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1040 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M995.155045 597.676311C949.782671 304.637232 860.250542 20.487613 562.470485 20.487613 16.832364 20.425192 0 900.704906 0 900.704906l201.912639 0c0 0 146.614196 101.053534 245.172909 101.053534 98.553597 0 72.127737-101.053534 72.127737-101.053534l100.922551 0c0 0-7.234775 101.053534 72.059176 101.053534 115.38596 0 230.708476-84.157725 245.172909-101.053534 14.462387-16.832364 86.590124 0 86.590124 0S1025.044796 790.9502 995.155045 597.676311L995.155045 597.676311zM621.541859 754.727207c-248.694105 0-273.972838-145.338133-273.972838-324.658218S470.251154 105.347327 621.541859 105.347327c176.570461 0 273.972838 145.400554 273.972838 324.720639S882.843096 754.727207 621.541859 754.727207L621.541859 754.727207zM621.541859 754.727207M447.849958 354.680998c0 39.83117 32.295544 72.127737 72.127737 72.127737s72.127737-32.295544 72.127737-72.127737-32.295544-72.126714-72.127737-72.126714S447.849958 314.849828 447.849958 354.680998L447.849958 354.680998 447.849958 354.680998zM447.849958 354.680998M620.962667 636.075877c0 19.936051 19.370163 36.097126 43.263339 36.097126 23.895223 0 43.264363-16.161075 43.264363-36.097126 0-19.930935-19.370163-36.09201-43.264363-36.09201C640.33283 599.98489 620.962667 616.144942 620.962667 636.075877L620.962667 636.075877zM620.962667 636.075877M707.491393 354.680998c0 39.83117 29.05064 72.127737 64.891939 72.127737 35.837206 0 64.892963-32.295544 64.892963-72.127737s-29.055756-72.126714-64.892963-72.126714C736.542033 282.555308 707.491393 314.849828 707.491393 354.680998L707.491393 354.680998zM707.491393 354.680998"/>
          </svg>
        </div>
        <p
          :style="{color:item.color}"
          class="name"
        >
          {{ item.uid }}
        </p>
        <div
          v-show="item.speaking"
          class="status speaking"
        >
          <svg
            style="vertical-align: top;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M586.030545 943.080727a586.123636 586.123636 0 0 0 198.004364-438.784c0-158.673455-65.978182-312.552727-181.201454-422.935272L671.208727 12.986182c135.144727 130.094545 209.501091 304.337455 209.501091 491.147636 0 192.837818-82.525091 377.390545-226.56 507.066182l-68.119273-68.119273zM365.428364 722.478545a257.512727 257.512727 0 0 0 121.995636-218.321454c0-80.384-38.190545-156.578909-102.423273-204.939636l68.701091-68.701091c82.944 67.537455 130.420364 167.028364 130.420364 273.640727 0 114.408727-55.598545 221.835636-148.898909 288.116364l-69.794909-69.79491z m-150.970182-128.768c-40.285091 0-73.076364-32.768-73.076364-73.076363s32.791273-73.076364 73.076364-73.076364c40.308364 0 73.076364 32.791273 73.076363 73.076364s-32.768 73.076364-73.076363 73.076363z"/>
          </svg>
        </div>

        <div
          v-show="item.mute"
          class="status mute"
        >
          <svg
            style="vertical-align: top;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M770.276345 493.547743l-62.723553 0c0 25.841551-7.377014 51.635007-14.753005 73.813123l44.26004 44.26004C759.237941 578.401316 770.276345 537.829272 770.276345 493.547743M622.698195 500.92271l0-7.326872 0-221.418902c0-62.677505-47.974641-110.650099-110.650099-110.650099-62.7256 0-110.698195 47.972595-110.698195 110.650099l0 7.40055L622.698195 500.92271zM227.927129 198.410885l-47.970548 47.995107 221.394343 221.347271 0 25.794479c0 62.748113 47.972595 110.672612 110.698195 110.672612 7.327896 0 14.754029 0 25.794479-3.665483l62.7256 62.701041c-25.843598 11.089569-55.350632 18.442024-84.806501 18.442024-103.32118 0-195.551768-77.478606-195.551768-188.151217l-66.438155 0c0 125.425617 99.607602 228.771357 221.345224 247.187799l0 121.737622 73.765027 0 0-121.737622c33.219589-3.712555 66.438155-18.416442 92.28073-33.218566l154.907069 154.956188 47.974641-47.971571L227.927129 198.410885z"/>
          </svg>
        </div>
      </li>
    </ul>
    <!--操作-->
    <div class="handel">
      <!--声音-->
      <div class="handel-item mute">
        <div
          :class="{on:!voice}"
          @click="toggleVoice"
          class="icon"
        >
          <svg
            style="fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <template v-if="!voice">
              <path
                d="M192 320c-54.4 0-96 41.6-96 92.8V608c0 54.4 41.6 96 96 96h83.2l182.4 188.8c22.4 22.4 44.8 35.2 67.2 35.2 6.4 0 12.8 0 19.2-3.2 19.2-9.6 32-28.8 32-51.2v-224L233.6 320H192z m758.4 489.6l-57.6-54.4C934.4 681.6 960 598.4 960 512c0-115.2-41.6-227.2-118.4-316.8-12.8-12.8-32-16-44.8-3.2-12.8 12.8-16 32-3.2 44.8 64 76.8 102.4 176 102.4 275.2 0 70.4-19.2 137.6-51.2 195.2L752 617.6c9.6-35.2 16-70.4 16-105.6 0-73.6-22.4-144-67.2-204.8-9.6-16-28.8-19.2-44.8-6.4s-19.2 28.8-6.4 44.8c35.2 48 54.4 108.8 54.4 166.4 0 19.2-3.2 38.4-6.4 54.4L576 451.2V153.6c0-25.6-12.8-44.8-32-51.2-25.6-9.6-57.6 0-86.4 32L352 240 214.4 105.6c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l736 704c6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6 12.8-12.8 12.8-32 0-44.8z"/>
            </template>
            <template v-else>
              <path
                d="M526.432 924.064c-20.96 0-44.16-12.576-68.96-37.344L274.752 704H192c-52.928 0-96-43.072-96-96V416c0-52.928 43.072-96 96-96h82.752l182.624-182.624c24.576-24.576 47.744-37.024 68.864-37.024C549.184 100.352 576 116 576 160v704c0 44.352-26.72 60.064-49.568 60.064zM687.584 730.368a31.898 31.898 0 0 1-18.656-6.016c-14.336-10.304-17.632-30.304-7.328-44.672l12.672-17.344C707.392 617.44 736 578.624 736 512c0-69.024-25.344-102.528-57.44-144.928-5.664-7.456-11.328-15.008-16.928-22.784-10.304-14.336-7.04-34.336 7.328-44.672 14.368-10.368 34.336-7.04 44.672 7.328 5.248 7.328 10.656 14.464 15.968 21.504C764.224 374.208 800 421.504 800 512c0 87.648-39.392 141.12-74.144 188.32l-12.224 16.736c-6.272 8.704-16.064 13.312-26.048 13.312z"/>
              <path
                d="M796.448 839.008a31.906 31.906 0 0 1-21.088-7.936c-13.28-11.648-14.624-31.872-2.976-45.152C836.608 712.672 896 628.864 896 512s-59.392-200.704-123.616-273.888c-11.648-13.312-10.304-33.504 2.976-45.184 13.216-11.648 33.44-10.336 45.152 2.944C889.472 274.56 960 373.6 960 512s-70.528 237.472-139.488 316.096c-6.368 7.232-15.2 10.912-24.064 10.912z"/>
            </template>
          </svg>
        </div>
        <p class="desc">声音</p>
      </div>
      <!--挂断-->
      <div class="handel-item">
        <div
          @click="hangUp"
          class="icon level"
        >
          <svg
            style="fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M156.853 648.88h-16.816c-0.736-0.207-1.46-0.526-2.211-0.605-19.122-2.033-34.26-10.914-45.562-26.427-8.119-11.144-13.813-23.541-18.06-36.54-3.8-11.633-6.813-23.525-10.174-35.303V538.57c1.685-5.882 2.827-11.989 5.16-17.602 5.773-13.884 15.904-24.522 27.111-34.18 15.258-13.149 32.348-23.631 49.598-33.88 28.341-16.837 57.427-32.09 88.71-42.876 43.863-15.126 89.194-23.133 135.143-28.124 35.334-3.837 70.795-5.749 106.328-6.364 0.99-0.017 1.975-0.276 2.961-0.422h64.572c1.21 0.158 2.415 0.39 3.63 0.464 29.953 1.841 59.948 3.162 89.85 5.621 36.74 3.022 73.084 9.008 108.96 17.55 50.42 12.005 98.76 28.752 140.824 60.465 16.098 12.136 32.966 23.244 47.116 37.771 9.762 10.023 18.283 20.93 22.915 34.367 1.264 3.664 2.054 7.493 3.062 11.245v11.434c-2.247 8.518-4.386 17.067-6.767 25.547-3.96 14.098-7.752 28.271-14.933 41.205-7.544 13.59-18.826 22.28-34.091 25.443-5.777 1.198-11.68 1.782-17.525 2.645h-12.78c-1.32-0.179-2.636-0.417-3.962-0.527-6.81-0.56-13.654-0.823-20.427-1.67-40.25-5.04-79.28-15.285-117.685-28.065-20.007-6.657-32.68-20.496-37.337-40.945-2.172-9.532-3.213-19.45-3.582-29.236-0.711-18.863-9.015-32.775-25.447-41.673-5.863-3.176-12.145-5.79-18.511-7.78-21.149-6.612-43.062-8.482-65.04-8.72-40.114-0.435-80.235-0.31-120.352-0.329-22.538-0.01-45.041 0.722-67.264 4.955-13.706 2.61-27.02 6.413-38.847 14.187-11.667 7.67-19.07 18.225-20.775 32.225-0.893 7.327-0.843 14.764-1.545 22.12-2.531 26.52-15.224 45.5-40.72 55.293-37.85 14.54-77.097 23.11-117.208 28.14-6.095 0.764-12.212 1.354-18.319 2.025z"/>
          </svg>
        </div>
        <p class="desc">挂断</p>
      </div>
      <!--静音-->
      <div class="handel-item">
        <div
          :class="{on:mute}"
          @click="toggleMute"
          class="icon"
        >
          <svg
            style="fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M701 183.1c-27.9-69.6-95.7-118.9-175.2-118.9-104.4 0-189 84.6-189 189l-0.1 278.3L701 183.1z m67.8 394.1c-24.6 108.2-127.4 189-243 189-52.4 0-101.6-17.2-142.6-45.4l-37.9 38.4c44.1 32.7 96.7 54.6 153.6 59.7v55.2h-26.3c-15.2 0-27.9 12.4-27.6 27.6 0.3 14.7 12.3 26.4 27 26.4h108c14.7 0 26.7-11.8 27-26.4 0.3-15.2-12.5-27.6-27.6-27.6h-26.3V819c133.3-12 246.1-112.2 270-241.8h-54.3zM241.7 624l42.3-42.8c-0.3-1.3-1-2.5-1.3-3.9h-53.9c3 16 7.3 31.6 12.9 46.7z m569.7-478.4L174.6 755.3l38.5 38 637-609.4-38.7-38.3z m-96.6 377.6v-142L410.7 672.1c32 24.8 71.6 40.1 115.1 40.1 104.4 0 189-84.6 189-189z"/>
          </svg>
        </div>
        <p class="desc">静音</p>
      </div>
    </div>
  </div>
</template>

<script>
import AgoraRTC from 'agora-rtc-sdk'
import { formatSeconds } from '~/utils'

// 应用ID
const APP_ID = '8d551adee0e04eed92aa078f7da226ec'
// 默认房间
const ROOM = 'qlhfym'
// 创建客户端
const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'h264' })
// 本地流
let localStream = {}

/**
 * 用户
 * @param uid 编号
 * @param stream 流
 * @param mute 静音 {0:'静音',1:'未静音'}
 * @param speaking 正在说话 {0:'未说话',1:'正在说话'}
 * @constructor
 */
function User(uid, stream, mute = 0, speaking = 0) {
  this.uid = uid
  this.stream = stream
  this.mute = mute
  this.speaking = speaking
  // 随机颜色
  this.color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
}

export default {
  data() {
    return {
      // 用户
      users: [],
      // 声音
      voice: true,
      // 静音
      mute: false,
      // 连接成功时间
      startTime: 0,
      // 当前时间
      currentTime: 0,
      // 连接时间定时器
      timer: null
    }
  },
  computed: {
    connectTime() {
      return formatSeconds((this.currentTime - this.startTime) / 1000)
    }
  },
  watch: {
    users(v) {
      if (v.length > 17) {
        this.$message('😭房间人数已达到上限，即将退出...')
        setTimeout(
          () => (window.location.href = 'https://github.com/fuzhongyi'),
          1500
        )
      }
    }
  },
  mounted() {
    this.$nextTick(() => this.init())
  },
  methods: {
    async init() {
      // 显示顶部进度条
      this.$nuxt.$loading.start()
      try {
        // 客户端初始化
        await this.clientInit()
        // 加入频道
        let uid = await this.clientJoin()
        // 本地流初始化，发布本地流
        await this.localStreamInit(uid)
        // 连接成功，计算连接时间
        this.intervalConnectTime()
        // 添加当前用户到聊天列表
        this.users.push(new User(uid, localStream))
        // 关闭顶部进度条
        this.$nuxt.$loading.finish()
        // 远程流加入监听
        this.streamAddedListener()
        // 音频禁用监听
        this.muteAudioListener()
        // 说话者音量监听
        this.volumeListener()
        // 离开频道监听
        this.peerLeaveListener()
      } catch (e) {
        console.log(e)
        // 初始化异常，关闭顶部进度条
        this.$nuxt.$loading.finish()
      }
    },
    /**
     * 连接时间
     */
    intervalConnectTime() {
      let initTime = +new Date()
      this.startTime = initTime
      this.currentTime = initTime
      this.timer = setInterval(() => (this.currentTime = +new Date()), 1000)
    },
    /**
     * 客户端初始化
     * @returns {Promise<any>}
     */
    clientInit() {
      return new Promise((resolve, reject) => {
        client.init(
          APP_ID,
          () => {
            console.log('客户端初始化成功')
            resolve()
          },
          err => {
            this.$message(`客户端初始化失败:${JSON.stringify(err)}`)
            reject(err)
          }
        )
      })
    },
    /**
     * 加入频道
     * @returns {Promise<any>}
     */
    clientJoin() {
      return new Promise((resolve, reject) => {
        client.join(
          null,
          ROOM,
          null,
          uid => {
            console.log(`用户${uid}加入频道成功`)
            resolve(uid)
          },
          err => {
            this.$message(`加入频道失败${JSON.stringify(err)}`)
            reject(err)
          }
        )
      })
    },
    /**
     * 本地流初始化
     * @param uid 用户编号
     * @returns {Promise<any>}
     */
    localStreamInit(uid) {
      return new Promise((resolve, reject) => {
        try {
          localStream = AgoraRTC.createStream({
            streamID: uid,
            audio: true,
            video: false,
            screen: false
          })
          localStream.init(
            () => {
              console.log('本地流初始化成功')
              localStream.play('agora')
              this.publish(localStream)
              client.on('stream-published', evt => {
                console.log('发布本地流成功', evt)
                resolve(evt)
              })
            },
            err => {
              this.$message(`本地流初始化失败:${JSON.stringify(err)}`)
              reject(err)
            }
          )
        } catch (e) {
          this.$message(`本地流初始化失败:${e}`)
          reject(e)
        }
      })
    },
    /**
     * 远程流加入监听
     */
    streamAddedListener() {
      client.on('stream-added', evt => {
        let stream = evt.stream
        let uid = stream.getId()
        this.users.push(new User(uid, stream))
        console.log(`远程流[${uid}]加入`)
        // 订阅成功
        client.on('stream-subscribed', evt => {
          const remoteStream = evt.stream
          console.log(`成功订阅远程流[${remoteStream.getId()}]`)
          remoteStream.play('agora')
        })
        // 订阅失败
        client.subscribe(stream, err => {
          this.$message(`订阅远程流失败${JSON.stringify(err)}`)
        })
      })
    },
    /**
     * 音频监听
     */
    muteAudioListener() {
      client.on('mute-audio', evt => {
        this.users.find(v => v.uid === evt.uid).mute = true
      })
      client.on('unmute-audio', evt => {
        this.users.find(v => v.uid === evt.uid).mute = false
      })
    },
    /**
     * 说话者音量监听
     */
    volumeListener() {
      // 每两秒触发 "volume-indicator" 回调
      client.enableAudioVolumeIndicator()
      client.on('volume-indicator', evt => {
        this.users.forEach(v => {
          let index = evt.attr.findIndex(volume => volume.uid === v.uid)
          if (index > -1) {
            v.speaking = true
          } else {
            v.speaking = false
          }
        })
      })
    },
    /**
     * 离开频道监听
     */
    peerLeaveListener() {
      client.on('peer-leave', evt => {
        let uid = evt.uid
        let index = this.users.findIndex(v => v.uid === uid)
        if (index > -1) {
          this.users.splice(index, 1)
          document.getElementById(`player_${uid}`).remove()
        }
      })
    },
    /**
     * 离开频道
     */
    level() {
      return new Promise((resolve, reject) => {
        client.leave(
          () => {
            console.log('离开频道')
            resolve()
          },
          err => {
            this.$message(`离开频道失败：${JSON.stringify(err)}`)
            reject(err)
          }
        )
      })
    },
    /**
     * 声音(开启/关闭)
     */
    toggleVoice() {
      if (this.voice) {
        // 关闭声音
        this.voice = false
        this.users.forEach(({ stream }) => stream.setAudioVolume(0))
      } else {
        // 开启声音
        this.voice = true
        this.users.forEach(({ stream }) => stream.setAudioVolume(100))
      }
    },
    /**
     * 静音(开启/关闭)
     */
    toggleMute() {
      if (this.mute) {
        // 关闭静音
        this.mute = false
        // 启用音频轨道
        if (localStream.unmuteAudio()) {
          this.users[0].mute = false
        }
      } else {
        // 开启静音
        this.mute = true
        // 禁用音频轨道
        if (localStream.muteAudio()) {
          this.users[0].mute = true
        }
      }
    },
    /**
     * 挂断
     */
    hangUp() {
      this.level().then(() => {
        this.$message('退出房间')
        // 清除聊天用户
        this.users = []
        // 清除连接时间定时器
        clearInterval(this.timer)
        setTimeout(
          () => (window.location.href = 'https://github.com/fuzhongyi'),
          1500
        )
      })
    },
    /**
     * 发布本地流
     * @param stream
     */
    publish(stream) {
      client.publish(stream, err => {
        this.$message(`发布本地流错误:${JSON.stringify(err)}`)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  padding-top: 30px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #1abc9c 20%, #5c677b 80%, #3b4356);

  .room-name {
    font-size: 20px;
    color: #fff;
    text-align: center;
  }

  .connect-time {
    margin: 10px 0 20px;
    color: #fff;
    text-align: center;

    div {
      display: inline-block;
      vertical-align: middle;
    }

    &__icon {
      width: 20px;
    }
  }

  .users-list {
    padding: 10px 10vw 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-height: calc(100vh - 210px);
    overflow: auto;

    &__item {
      position: relative;
      width: 50px;
      margin: 0 15px 15px;

      .avatar {
        font-size: 50px;

        svg {
          display: block;
          margin: auto;
        }
      }

      .name {
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-shadow: 1px 1px 1px #5c677b;
      }

      .status {
        position: absolute;
        padding: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        right: -10px;
        bottom: 20px;
        color: #fff;
        &.mute {
          padding: 0;
          background: #ff0000;
          z-index: 99;
        }

        &.speaking {
          background: #36b33f;
          z-index: 1;
        }
      }
    }
  }

  .handel {
    position: fixed;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 120px;
    max-width: 400px;
    transform: translateX(-50%);
    display: flex;
    padding: 0 12vw;
    align-items: center;
    justify-content: space-between;
    transition: padding 0.3s;
    @media only screen and (min-width: 500px) {
      padding: 0;
    }

    .handel-item {
      width: 50px;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        background: #363b47;
        border-radius: 50%;
        color: #fff;

        &.level {
          background: #ff0000;
        }

        &.on {
          color: #363b47;
          background: #fff;
        }

        svg {
          width: 30px;
        }
      }

      .desc {
        margin-top: 10px;
        color: #fff;
        text-align: center;
      }
    }
  }
}
</style>
