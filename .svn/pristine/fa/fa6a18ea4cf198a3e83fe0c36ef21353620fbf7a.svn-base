<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  data () {
    return {
      targetName: '',
      nav: [
        {
          name: '基本信息',
          icon: 'icon01'
        },
        {
          name: '科研成就',
          icon: 'icon02'
        },
        {
          name: '财务信息',
          icon: 'icon03'
        },
        {
          name: '消费信息',
          icon: 'icon04'
        },
        {
          name: '图书借阅',
          icon: 'icon05'
        },
        {
          name: '体质健康',
          icon: 'icon06'
        },
        {
          name: '交流合作',
          icon: 'icon07'
        }
      ]
    }
  },
  computed: {
    iconName () {
      let target = {}
      target = this.nav.find(item => item.name === this.iconClass)
      if (target) {
        this.targetName = target.icon
      }
      return `#icon-${this.targetName}`
    },
    svgClass () {
      if (this.targetName) {
        return 'svg-icon ' + this.targetName
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1.2em;
  height: 1.2em;
  margin-right: 10px;
  fill: currentColor;
  overflow: hidden;
}
</style>
