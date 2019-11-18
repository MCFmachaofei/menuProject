<template>
<div class="flex flex1" style="padding-top:72px;">
    <!-- <iframe width="100%" height="100%" border='0' :src='"http://localhost:8081/dataPortal/guide/personalPortrait/index.html?t="+randomObj.edit'></iframe> -->
    <iframe width="100%" height="100%" frameborder='no' marginwidth='0' marginheight='0' scrolling='no' border='0'
    :src='iframeSrc'></iframe>
</div>
</template>
<script>
export default {
  data () {
    return {
      iframeSrc: ''
    }
  },
  mounted () {
    var _pathIndex = this.$route.params.pathIndex
    var _browsePath = this.$route.params.browsePath
    var setIp = this.$store.state.user.innerIframeUrl
    this.iframeSrc = setIp + '/dataPortal/studentPortait/index.html?pathIndex=' + _pathIndex + '&browsePath=' + _browsePath
  }
}
</script>
