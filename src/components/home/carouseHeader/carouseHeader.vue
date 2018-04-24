<template>
  <Header class="header">
    <Row>
      <top-bar></top-bar>
    </Row>
    <Row style="transform: translateY(-32px);width: 100%!important;">
      <carouse></carouse>
    </Row>
  </Header>
</template>

<script>
  import TopBar from "../../login/topBar/topBar";
  import Carouse from "./module/carouse";

  export default {
    name: "carouseHeader",
    components: {Carouse, TopBar},
  }
</script>

<style scoped>
  .header {
    background: rgba(0, 101, 184, 1);
    height: 6vh;
    padding: 0!important;
  }
</style>
