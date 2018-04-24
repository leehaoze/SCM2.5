<template>
  <span>
    <Row>
      <img v-if="departName==='All'" src="/src/assets/home/APPROVE%20FLOW.png" style="width: 58px">
      <img v-if="departName==='Planning'" src="/src/assets/home/COMMON%20LINKS.png" style="width: 58px">
      <img v-if="departName==='Purchasing'" src="/src/assets/home/DASHBOARD.png" style="width: 58px">
      <img v-if="departName==='InventoryControl'" src="/src/assets/home/DOCUMENTS.png" style="width: 58px">
      <img v-if="departName==='MRO'" src="/src/assets/home/DESKTOP%20APP.png" style="width: 58px">
    </Row>
    <Row style="color: black;">
      {{departName}}
    </Row>
  </span>
</template>

<script>
  export default {
    name: "departButton",
    props: [
      'departName'
    ],
    mounted () {
      // console.log(this.departName)
    }
  }
</script>

<style scoped>

</style>
