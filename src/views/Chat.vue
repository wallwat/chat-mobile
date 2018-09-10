<template>
  <div class="container">
    <div class="head">
      <span>Chat-Mobile</span>
    </div>

    <div class="content" ref="ps-messages-view">
      <div class="message" v-for="(item, index) in messageChat" :key="index">
        <div class="left"><div class="cover"></div></div>
        <div class="right">{{item}}</div>
      </div>        
    </div>

    <div class="footer">
      <input class="footer-input" v-model="message" placeholder="message">
      <button class="footer-btn" v-on:click="addMessageChat">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
      messageChat: [
        'Imagine we have a right-aligned navigation on the very top of our website, but we want it to be centered on medium-sized screens and single-columned on small devices. Easy enough.',
        '[HMR] Waiting for update signal from WDS...',
        'Download the Vue Devtools extension for a better development experience',
        'Download the Vue Devtools extension for a better development experience',
        'Download the Vue Devtools extension for a better development experience',
        'Download the Vue Devtools extension for a better development experience',
        'Download the Vue Devtools extension for a better development experience',
        'This is last row...',
      ],
      message: ''
    }
  },
  methods: {
    addMessageChat () {
      if (this.message.length) {
        this.messageChat.push(this.message)
        this.message = ''
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.$refs['ps-messages-view'].scrollTop = this.$refs['ps-messages-view'].scrollHeight
      })
      this.$refs['ps-messages-view'].scrollTop = this.$refs['ps-messages-view'].scrollHeight
    })
  },
  computed: {
    messageChatLength() {
      return this.messageChat.length
    }
  },
  watch: {
    messageChatLength(newVal, oldVal) {
      if (newVal > oldVal) {
        this.$nextTick(() => {
          this.$refs['ps-messages-view'].scrollTop = this.$refs['ps-messages-view'].scrollHeight
        })
      }
    },
  }
}
</script>

<style scoped>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .head {
    background: #53ad0a;
    height: 60px;
    line-height: 3em;
    font-size: 20px;
    color: #FFF;
  }
  .content {
    overflow: auto;
    overscroll-behavior-y: contain;
    height: calc(100% - 117px);
  }
  .message {
    display: flex;
    min-height: 75px;
    align-items: center;
    padding: 10px 0;
  }
  .left {
    margin: 10px;
  }
  .right {
    flex: 3;
    margin: 10px;
    text-align: left;
  }
  .cover {
    width: 50px;
    height: 50px;
    background: #d0d0d0;
    border-radius: 50%;
  }
  .footer {
    color: #fff;
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 50px;
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: hidden;
  }
  .footer-input {
    flex: 3;
    padding-left: 10px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #c5c5c5;
    outline: none;
    margin-left: 10px;
  }
  .footer-btn {
    flex: 1;
    margin-right: 10px;
    height: 44px;
    width: calc(100% - 10px);
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #c5c5c5;
    outline: none;
  }
  .scroll-area {
    position: relative;
    margin: auto;
    width: 400px;
    height: 300px;
  }
</style>

