<template>
  <Row>
    <Col span="4">
      <router-link to="/">
        <logo></logo>
      </router-link>
    </Col>
    <Col span="4" v-if="visible">
      <global-search></global-search>
    </Col>
    <Col span="4" v-if="visible" offset="12">
      <user-panel></user-panel>
    </Col>
  </Row>
</template>

<script>
  import Logo from "./module/logo";
  import GlobalSearch from "./module/globalSearch";
  import UserPanel from "./module/userPanel";

  export default {
    name: "topBar",
    components: {UserPanel, GlobalSearch, Logo},
    computed : {
      visible(){
        if (this.$route.path.indexOf('login') == -1) {
            return true;
        }
        return false;
      }
    }
  }
</script>

<style scoped>

</style>
