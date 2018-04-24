<template>
  <Layout>
    <carouse-header></carouse-header>
    <Content style="transform: translateY(500px)">
      <Row>
        <depart-switch></depart-switch>
      </Row>
      <Row style="transform: translateY(100px)">
        <dash-board></dash-board>
      </Row>
      <Row style="transform: translateY(100px)">
        <action-pane></action-pane>
      </Row>
      <Row style="width: 80%;transform: translateY(100px);margin-left: 10%">
        <app-center></app-center>
      </Row>
    </Content>
    <footer-links style="transform: translateY(600px);"></footer-links>
  </Layout>
</template>

<script>
  import CarouseHeader from "./carouseHeader/carouseHeader";
  import DepartDes from "./carouseHeader/module/departDes";
  import DepartSwitch from "./departSwitch/departSwitch";
  import DashBoard from "./dashBoard/dashBoard";
  import ActionPane from "./actionPane/actionPane";
  import AppCenter from "./appCenter/simpleAppCenter";
  import FooterLinks from "./footerLinks/footerLinks";

  export default {
    name: "home",
    components: {FooterLinks, AppCenter, ActionPane, DashBoard, DepartSwitch, DepartDes, CarouseHeader}
  }
</script>

<style scoped>

</style>
