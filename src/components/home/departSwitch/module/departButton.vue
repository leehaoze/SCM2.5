<template>
  <li style="margin-left: 100px;display: flex;flex-flow: column nowrap; align-items: center;">
    <Row class="recant">
      <div class="circle-outline">
        <div class="circle-inline">
          <Icon :type="iconTypes[index]" color="white" size="45" style="transform: translate(9px,5px)"></Icon>
        </div>
      </div>
    </Row>
    <Row style="margin-top: 60px;background: white;width: 100%;text-align: center">
      {{departName}}
    </Row>
  </li>
</template>

<script>
  export default {
    name: "departButton",
    props: ['departName', 'index'],
    data() {
      return {
        iconTypes: ['ios-world-outline', 'android-share-alt', 'home', 'monitor', 'bag']
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  .recant {
    background: #4b443a;
    height: 15px;
    width: 180px;
  }

  .circle-outline {
    position: absolute;
    background: #4b443a;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    left: 27%;
    top: -220%;
  }

  .circle-inline {
    background: #4b443a;
    width: 60px;
    height: 60px;
    border: 3px solid white;
    border-radius: 50%;
    transform: translate(10px, 10px);
  }

</style>
