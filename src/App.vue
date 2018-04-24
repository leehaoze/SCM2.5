<template>
  <div id="app">
    <div v-if="visible" style="background: rgba(0, 101, 184, 1)">
      <top-bar ></top-bar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopBar from "./components/login/topBar/topBar";

  export default {
    name: 'app',
    components: {TopBar},
    data() {
      return {}
    },
    computed: {
      visible() {
        if (this.$route.path.indexOf('AppCenter') != -1 || this.$route.path.indexOf('DocumentCenter') != -1) {
          return true;
        }
        return false;
      }
    }
  }
</script>

<style lang="scss">

</style>
