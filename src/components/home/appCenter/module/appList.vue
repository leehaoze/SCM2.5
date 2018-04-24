<template>
  <div>
    <div class="ui four column grid" :loading="appCardLoading">
      <app-card v-for="url in urls" :key="url.id" :url="url"></app-card>
    </div>
  </div>
</template>

<script>
  import AppCard from "./appCard";

  export default {
    name: "appList",
    components: {AppCard},
    props: ['urls', 'appCardLoading'],
    data() {
      return {}
    },
    watch: {}
  }
</script>

<style scoped>
  #loader >>> .loader {
    top: 100px;
  }
</style>
