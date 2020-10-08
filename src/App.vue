<template>
  <div id="app">
    <FooterNav/>
    <router-view/>
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
export default {
  components: {
    FooterNav
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,body {
  height: 100%;
  touch-action: none;
  ul,
  li {
    list-style: none;
  }
}
</style>
