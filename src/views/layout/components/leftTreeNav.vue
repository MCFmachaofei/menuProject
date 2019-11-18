<template>
  <div class="leftNav flex">
    <el-menu ref="menu" :default-active="curIndex" class="leftTreeNavMenu flex1" @select='selectMenu' @open="handleOpen" @close="handleClose">
      <span class="flex flex1 border" v-for="(item,index) in treeList" :key="index">
        <el-submenu class="flexColumn flex1" v-if="item.children" :index="index+''" style="width:100%">
          <template slot="title">
            <i class="icon-item icon02"></i>
            <span :title="item.name"><em><i>{{item.name}}</i></em></span>
          </template>
          <span class="flexColumn flex1" v-for="(item1,index1) in item.children" :key="index1">
            <el-menu-item class="last" v-if="!item1.children" :index="index+'-'+index1" @click="gotoUrl(item1.panelId,item1.siteId,item1.name,item1.id,item1.skipType,index)"><em><i>{{item1.name}}</i></em></el-menu-item>
            <el-submenu v-if="item1.children" :index="index+'-'+index1">
              <template slot="title">
                <span :title="item1.name"><em>{{item1.name}}</em></span>
              </template>
              <span v-for="(item2,index2) in item1.children" :key="index2">
                <el-menu-item v-if="item1.children" class="last" :index="index+'-'+index1+'-'+index2" @click="gotoUrl(item2.panelId,item2.siteId,item2.name,item2.id,item2.skipType,index)"><em :title="item2.name"><i>{{item2.name}}</i></em></el-menu-item>
              </span>
            </el-submenu>
          </span>
        </el-submenu>
        <el-menu-item class="last" :index="index+''" v-if="!item.children">
          <!-- <i class="el-icon-menu"></i> -->
          <span :title="item.name" lot="title" @click="gotoUrl(item.panelId,item.siteId,item.name,item.id,item.skipType,index)"><em><i>{{item.name}}</i></em></span>
        </el-menu-item>
      </span>
    </el-menu>
  </div>
</template>
<script>
import * as menuApi from '@/api/menu'
export default {
  props: {
    treeList: {
      type: Array,
      required: true
    },
    curIndex: {
      type: String,
      required: true
    },
    teacherId: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      treeNav: [],
      checkIndex: '' // 记录点击index
    }
  },
  watch: {
    treeList () {
      // 初始化页面
      let objs = {}
      objs.browsePosition = this.$store.state.user.analysisObj.analysisName
      objs.menuId = this.$store.state.user.analysisObj.analysisId
      objs.module = 1
      menuApi.addBrowseRecord(objs, res => {})
    }
  },
  mounted () {},
  methods: {
    selectMenu (index, indexPath) {
      this.checkIndex = index
    },
    handleOpen (key, keyPath) {},
    handleClose (key, keyPath) {},
    // 记录访问路径
    requestAddBrowseRecord (objs) {
      menuApi.addBrowseRecord(objs, res => {})
    },
    // 校务分析
    analysisUrl (parentId, siteId, name, id, skipType, index) {
      let objs = {}
      objs.browsePosition = name
      objs.menuId = id // 个人画像：-1  校务分析：菜单id
      this.$store.commit('analysisId', id)
      this.$store.commit('analysisName', name)
      objs.module = 1
      // 记录访问路径
      this.requestAddBrowseRecord(objs)
      if (skipType == 'another') {
        let routeData = this.$router.resolve({
          path:
            '/analysis/index/innerIframe/' +
            localStorage.getItem('analysisMenuId') +
            '/' +
            parentId +
            '/' +
            siteId +
            '/' +
            index +
            '/' +
            skipType
        })
        window.open(routeData.href, '_blank')
      } else {
        // this.checkIndex = index
        this.$router.push({
          path: '/analysis/index/innerIframe/00/' + parentId + '/' + siteId + '/00' + '/' + skipType
        })
      }
    },
    // 教师画像
    teacherUrl (parentId, siteId, name, id, skipType, index) {
      // 记录访问路径
      let objs = {}
      objs.browsePosition = name
      objs.menuId = -1
      objs.module = 1 // ?????
      this.requestAddBrowseRecord(objs)

      // if (skipType == 'another') {
      // } else {
      this.$router.push({
        path:
          '/personalPortrait/teacher/' +
          this.$store.state.user.curNavId +
          '/' +
          this.teacherId +
          '/' +
          parentId +
          '/' +
          siteId +
          '/' +
          skipType
      })
      // }
    },
    gotoUrl (parentId, siteId, name, id, skipType, index) {
      if (this.teacherId !== '') {
        // 教师画像
        this.teacherUrl(parentId, siteId, name, id, skipType, index)
      } else {
        // 校务分析
        this.analysisUrl(parentId, siteId, name, id, skipType, index)
      }
    }
  }
}
</script>
<style lang="less">
@import '~@/assets/styls/common.less';
.leftNav {
  width: 230px;
  height: 850px;
  overflow: auto;
  /deep/ .el-menu-item{
    width: 100%;
  }
  /deep/ .el-menu-item span{
    width: 100%;
    display: inline-block
  }
  .flexColumn;
  .el-menu-item:focus,
  .el-menu-item:hover {
    background: none;
  }
  // .el-menu-item:hover{
  //   em{
  //     color:@hoverNavChildColor;
  //   }
  // }
  .leftTreeNavMenu {
    background: none;
    border-right-color: @borderColor;
    .border {
      border-bottom: 1px solid @borderColor;
    }
    .el-submenu {
      // border-bottom:1px solid @borderColor;
      font-size: 15px;
      .el-submenu__title {
        border-bottom: 1px solid @borderColor;
        font-size: 15px;
        .alignCenter;
        .flex1;
      }
      &:hover {
        background: none;
        span {
          color: #fff;
        }
        .el-submenu__title {
          background: none;
          &:hover {
            background: none;
          }
          span {
            color: #fff;
          }
        }
      }
    }
    .el-menu-item.el-menu-item.is-active,
    .el-menu-item.last.is-active span em i {
      color: #409eff !important;
    }
    .el-menu-item,
    .el-submenu__title {
      span {
        color: @fontColor;
      }
    }
    .el-submenu__title {
      // padding-left:20px !important;
      .icon-item {
        width: 36px;
        height: 36px;
        border-radius: 100%;
        margin-right: 15px;
        &.icon02 {
          background: url(~@/assets/img/icon02.png) no-repeat;
        }
      }
    }
    .el-submenu {
      .el-menu {
        background: #191d27;
        // padding-left:25px;
        li {
          color: @navChildColor;
          position: relative;
          font-size: 14px;
          &:hover,
          &.active {
            color: @hoverNavChildColor;
            background: none;
            &:before,
            &:after {
              background: @hoverNavChildColor;
            }
          }
          &.last {
            display: flex;
            em {
              position: relative;
              display: inline-block;
              flex: 1;
              padding-left: 25px;
              i {
                max-width: 120px;
                overflow: hidden;
                display: inline-block;
                text-overflow: ellipsis;
                word-break: break-all;
                white-space: nowrap;
              }
              &:before,
              &:after {
                position: absolute;
                content: '';
                display: block;
                top: 50%;
                background: #a8bbd2;
              }
              &:before {
                width: 3px;
                height: 8px;
                left: 8px;
                margin-top: -4px;
              }
              &:after {
                width: 6px;
                height: 6px;
                margin-top: -3px;
                right: -20px;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
