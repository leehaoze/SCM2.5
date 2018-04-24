<template>
  <Content>
    <Row>
      <h2 class="ui center aligned centered icon header">My DashBoard</h2>
    </Row>
    <Row>
      <Col>
        <charts-content></charts-content>
      </Col>
    </Row>
  </Content>
</template>

<script>
  import ChartsContent from "./module/chartsContent";

  export default {
    name: "dashBoard",
    components: {ChartsContent}
  }
</script>

<style scoped>

</style>
