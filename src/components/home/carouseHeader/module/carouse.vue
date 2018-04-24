<template>
  <div v-on:mouseover="mouseIn" v-on:mouseout="mouseOut">
  <Carousel autoplay :autoplay-speed="4000" v-model="value1" loop collapsible="false" hide-trigger
            dots="outside" :height="430">
    <CarouselItem>
      <depart-des></depart-des>
    </CarouselItem>
    <CarouselItem :style="[carouseItemStyle,appCenterStyle]">
      <router-link to="/AppCenter">
        <div class="router routeLink">
          <span>
            App Center
            <p>Description here</p>
          </span>
        </div>
      </router-link>
    </CarouselItem>
    <CarouselItem :style="[carouseItemStyle,dashBoardStyle]">
      <router-link to="/DashBoard">
        <div class="router routeLink">
          <span>
          DashBoard KPI
            <p>Description here</p>
            </span>
        </div>
      </router-link>
    </CarouselItem>
    <CarouselItem :style="[carouseItemStyle,documentCenterStyle]">
      <router-link to="/DocumentCenter">
        <div class="router">
          <span>
          Document Center
            <p>Description here</p>
            </span>
        </div>
      </router-link>
    </CarouselItem>
  </Carousel>
  </div>
</template>

<script>
  import CarouselItem from "iview/src/components/carousel/carousel-item";
  import DepartDes from "./departDes";

  export default {
    components: {DepartDes, CarouselItem},
    name: "carouse",
    data() {
      return {
        value1: 0,
        carouseItemStyle: {
          backgroundSize: 'cover',
        },
        appCenterStyle: {
          background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0)),url("/src/assets/home/appCenter.jpg") no-repeat center center'
        },
        dashBoardStyle: {
          background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0)),url("/src/assets/home/dashBoard.jpg") no-repeat center center'
        },
        birdEyeViewStyle: {
          background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0)),url("/src/assets/home/3DBirdEye.png") no-repeat center center'
        },
        documentCenterStyle: {
          background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0)),url("/src/assets/home/documentCenter.jpg") no-repeat center center'
        }
      }
    },
    methods: {
      mouseIn(event) {
        $(event.currentTarget).find('div.router').addClass('router-after');
      },
      mouseOut(event){
        $(event.currentTarget).find('div.router').removeClass('router-after');
      }
    }
  }
</script>

<style scoped>
  .router {
    position: revert;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.42);
    display: flex;
    flex-flow: row nowrap;
    justify-content: left;
    align-items: center;
    bottom : 0px;
    transition: all 800ms;
  }

  .router-after{
    height: 40%;
    background: rgba(0,101,184,0.55);
  }

  .router span {
    margin-left: 140px;
    color: white;
    font-size: 20px;

  }

</style>
