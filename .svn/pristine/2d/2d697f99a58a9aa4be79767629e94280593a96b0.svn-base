<template>
  <div class="flex flex1" style="">
    <!-- <iframe width="100%" height="100%" border='0' :src='"http://192.168.0.22:8020/library/index.html?t="+randomObj.edit'></iframe> -->
    <iframe width="100%" height="100%" name="panel_iframe" frameborder='no' marginwidth='0' marginheight='0' scrolling='no' border='0' :curName='analysisName' :src='iframeUrl'></iframe>
  </div>
</template>
<script>
export default {
  data () {
    return {
      iframeUrl: '',
      panelId: '',
      analysisName: '', // 当前选中的菜单名
      siteId: '',
      skipType: ''
    }
  },
  watch: {
    $route () {
      this.setIframeUrl()
    }
  },
  mounted () {
    this.setIframeUrl()
  },
  methods: {
    setIframeUrl () {
      // 接收 参数
      this.analysisName = this.$store.state.user.analysisObj.analysisName
      this.panelId = this.$route.params.panelId
      this.siteId = this.$route.params.siteId
      this.menuId = this.$route.params.menuId
      this.curId = this.$route.params.curId
      this.skipType = this.$route.params.skipType
      // 引导页进来
      if (this.curId === '00') {
        // 设置 iframe 路径
        let setIp = this.$store.state.user.innerIframeUrl
        this.iframeUrl =
          setIp + '/zymdMenu/loadPanel?panelId=' + this.panelId + '&siteId=' + this.siteId
      } else {
        // 其他页面跳转过来
        if (this.$store.state.user.analysisObj.panelId === '') {
          this.$store.commit('panelId', this.panelId)
          this.$store.commit('siteId', this.siteId)
          this.$store.commit('menuId', this.menuId)
          this.$store.commit('curId', this.curId)
          this.$store.commit('skipType', this.skipType)
          this.$router.push({
            path: '/analysis/index'
          })
        } else {
          // 个人中心 回跳转
          this.$store.commit('panelId', '')
          this.$store.commit('siteId', '')
          this.$store.commit('menuId', '')
          this.$store.commit('curId', '')
          this.$store.commit('skipType', '')
          // 设置 iframe 路径
          let setIp = this.$store.state.user.innerIframeUrl
          this.iframeUrl =
            setIp +
            '/zymdMenu/loadPanel?panelId=' +
            this.panelId +
            '&siteId=' +
            this.siteId +
            '&skipType=' +
            this.skipType
        }
      }
    }
  }
}
</script>
