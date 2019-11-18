<template>
    <div class="flex flex1" id="wrap">
        <leftNav :treeList = 'treeList'/>
        <div class="flex1" id="cnt">
            <router-view/>
        </div>
        <footerNav/>
    </div>
</template>
<script>
import leftNav from '@/views/layout/components/leftNav'
import footerNav from '@/views/layout/components/footerNav'

export default {
  components: {
    leftNav,
    footerNav
  },
  data () {
    return {
      treeList: [
        {
          name: '基本信息',
          value: '',
          url: '/personalPortrait/baseInfo'
        },
        {
          name: '修改密码',
          value: '',
          url: '/iframe'
        },
        {
          name: '我的预警',
          value: '5',
          url: '/page2'
        },
        {
          name: '我的收藏',
          value: '',
          url: '/page3'
        },
        {
          name: '查看记录',
          value: '',
          url: '/page4'
        },
        {
          name: '我的推送',
          value: '',
          url: '/page5'
        }
      ]
    }
  }
}
</script>
