<template>
  <div class="flex flex1" style="padding-top:72px" id="wrap">
    <!-- <iframe width="100%" height="100%" border='0' :src='"http://192.168.0.22:8020/library/index.html?t="+randomObj.edit'></iframe> -->
    <iframe width="100%" height="100%" frameborder='no' marginwidth='0' marginheight='0' scrolling='no' border='0' :src='setSrc'></iframe>

  </div>
</template>
<script>
export default {
  data () {
    return {
      setSrc: ''
    }
  },
  mounted () {
    var setIp = this.$store.state.user.innerIframeUrl
    var time = (new Date()).valueOf()
    this.setSrc = setIp + '/dataPortal/zymd-deck/index.html?t=' + time
  }
}
</script>
