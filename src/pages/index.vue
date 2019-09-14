<template>
  <div class='test'>
    <div class="btn" @click='testRequest'>test xhr</div>
  </div>
</template>

<script>
export default {
  mpType: 'page',

  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  methods: {
    testRequest() {
      this.$http.request({
      url: '/getMsg',
      method: 'get'
      }).then(res => {
        console.log('res:', res)
      })
      }
  },

  created () {
    
  }
}
</script>

<style scoped lang='scss'>
</style>
