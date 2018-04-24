<template>
  <div>
    <span id="slider">
    </span>
    <ul class="switch">
      <depart-button @click.native="menuSwitch(index,dp)" v-for="(dp,index) in departs" :depart-name="dp.departmentName"
                     :index="index">

      </depart-button>
    </ul>
  </div>
</template>

<script>
  import DepartButton from "./module/departButton";

  export default {
    name: "departSwitch",
    components: {DepartButton},
    data() {
      return {
        departs: ''
      }
    },
    computed: {
      sliderTop() {
        return '534.890625'
      },
      sliderLeft() {

      }
    },
    methods: {
      loadDeparts() {
        this.$http.get("/getDepartments.form").then((response) => {
          this.departs = response.data;
        })
      },
      menuSwitch(index, dp) {
        $('#slider').css({
          'transform': 'translate(' + (173 + index * 280) + 'px,-35px)'
        })
      }
    },
    mounted() {
      this.loadDeparts();
    }
  }
</script>

<style scoped>
  .switch {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  #slider {
    position: absolute;
    width: 180px;
    height: 135px;
    background: #0d71bb;
    border-radius: 10px;
    transform: translate(194%, -26%);
    transition: all 1s;
  }
</style>
