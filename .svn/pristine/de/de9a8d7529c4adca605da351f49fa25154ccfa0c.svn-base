<template>
  <div>
    <el-button @click="login">登录！</el-button>
  </div>
</template>
<script>
import store from '@/store'
export default {
  data () {
    return {}
  },
  methods: {
    login () {
      store.dispatch('getNavInfo', res => {
        this.$router.push({ path: '/' + res[0].url })
      })
    }
  }
}
</script>
