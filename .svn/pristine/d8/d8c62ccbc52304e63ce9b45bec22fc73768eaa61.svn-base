<template>
  <div class="flex flex1" style="padding-top:72px;">
    <!-- <iframe width="100%" height="100%" border='0' :src='"http://192.168.0.22:8020/library/index.html?t="+randomObj.edit'></iframe> -->
    <iframe width="100%" height="100%" frameborder='no' marginwidth='0' marginheight='0' scrolling='no' border='0' src='http://192.168.0.22:8020/generalAnalysis/index.html'></iframe>

  </div>
</template>
<script>
// import * as menuApi from '@/api/menu'
export default {
  data () {
    return {
      randomObj: {
        edit: 'edit_' + new Date().getTime() // 先定义随机ID
      }
    }
  },
  created () {
    window.addEventListener('message', function (e) {
      var data = e.data
      if (data.type === '1') {
        // this.$router.push({
        //   path:'/analysis/'+
        // })
      }
    })
  },
  mounted () {
    // this.id = this.$route.params.id
    // let obj = {}
    // obj.id = this.id
    // menuApi.getMenu(obj, res => {
    //   this.treeList = res
    // })
  },
  methods: {
    module_edit (param) {
      alert(param)
    }
  }
}
</script>
