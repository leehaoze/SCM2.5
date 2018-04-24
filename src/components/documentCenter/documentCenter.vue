<template>
  <Layout>
    <Sider class="sideBar">
      <left-side-bar></left-side-bar>
    </Sider>
    <Content>
      <doc-search></doc-search>
      <doc-table style="width: 90%;margin-left: 5%;"></doc-table>
    </Content>
  </Layout>
</template>

<script>
  import DocSearch from "./module/docSearch";
  import LeftSideBar from "../leftSideBar/leftSideBar";
  import DocTable from "./module/docTable";

  export default {
    name: "documentCenter",
    components: {DocTable, LeftSideBar, DocSearch}
  }
</script>

<style scoped>
  .sideBar {
    min-width: 240px !important;
  }
</style>
