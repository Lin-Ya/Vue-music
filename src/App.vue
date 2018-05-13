<template>
  <div id="app">
    <!-- <router-view/> -->
    <MHeader></MHeader>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
export default {
  components: {
    MHeader
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import 'common/stylus/variable';

#app {
  color: $color-theme;
}
</style>
