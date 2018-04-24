<template>
  <Layout>
    <Row>
    <h2 class="ui center aligned centered icon header">Navigative Links</h2>
    </Row>
    <Content class="mainContent">
      <app-list v-if="urls" class="appList" :urls="urls" :appCardLoading="loading">
      </app-list>
    </Content>
  </Layout>
</template>

<script>
  import AppCard from "./module/appCard";
  import AppList from "./module/appList";

  export default {
    name: "appCenter",
    components: {AppList, AppCard},
    data() {
      return {
        urls: {

        },
        loading: true
      }
    },
    methods: {},
    mounted() {
      this.$http.get('/getUrl.form').then((response) => {
        this.urls= response.data.slice(0,12);
        this.loading = false;
      });
    }
  }
</script>

<style scoped>
  .sideBar {
    min-width: 240px !important;
  }

  .mainContent {
    padding: 25px;
    padding-top: 20px;
    z-index: 25
  }

  .appList {
    padding-top: 40px;
  }
</style>
