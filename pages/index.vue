<template>
  <div class="chat">
    <div id="agora_local" />
    <ul class="users-list">
      <li
        :key="index"
        v-for="(item,index) in users"
        class="users-list__item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import AgoraRTC from 'agora-rtc-sdk'

const APP_ID = '8d551adee0e04eed92aa078f7da226ec'

export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.clientInit()
  },
  methods: {
    clientInit() {
      const vm = this
      const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'h264' })
      let localStream = {}
      client.init(
        APP_ID,
        () => {
          this.$message('客户端初始化成功')
          client.join(
            null,
            'cctv',
            null,
            uid => {
              this.$message('用户[' + uid + ']加入频道成功')
              this.users.push(uid)
              localStream = AgoraRTC.createStream({
                streamID: uid,
                audio: true,
                video: false,
                screen: false
              })
              localStream.init(
                () => {
                  this.$message('媒体流初始化成功')
                  localStream.play('agora_local')
                  client.publish(localStream, err => {
                    this.$message('发布本地媒体流错误' + err)
                  })
                  client.on('stream-published', evt => {
                    this.$message('发布本地媒体流成功')
                  })
                },
                err => {
                  this.$message('媒体流初始化失败' + err)
                }
              )
            },
            err => {
              this.$message('加入频道失败' + err)
            }
          )
          client.on('stream-added', evt => {
            const stream = evt.stream
            vm.users.push(stream.getId())
            this.$message('有新的媒体流加入: ' + stream.getId())
            client.subscribe(stream, err => {
              this.$message('订阅媒体流失败' + err)
            })
          })
          client.on('stream-subscribed', evt => {
            const remoteStream = evt.stream
            this.$message('成功订阅远程流: ' + remoteStream.getId())
            remoteStream.play('agora_local')
          })
          client.leave(
            () => {
              this.$message('Leave channel successfully')
            },
            err => {
              this.$message('Leave channel failed' + err)
            }
          )
        },
        err => {
          this.$message('客户端初始化失败' + err)
        }
      )
    }
  }
}
</script>

<style>
</style>
