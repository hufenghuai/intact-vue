<template>
  <div class="recommend">推荐</div>
</template>

<script type="text/ecmascript-6">
  import { getRecommend } from 'api/recommend'
  import { ERR_OK } from 'api/config'

  export default {
    data () {
      return {
        recommends: []
      }
    },
    created () {
      this._getRecommend()
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data
            console.log(this.recommends)
          }
        })
      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">

</style>
