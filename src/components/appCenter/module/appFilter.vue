<template>
  <div>
    <div class="card">
      <div class="image img-card">
      </div>
      <div class="content">
        <div class="ui buttons" style="width: 100%">
          <button v-if="!loading" v-for="letter in letters" :class="['ui','button',{active : isActive(letter)}]"
                  @click="click_button(letter,$event)">{{letter}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "appFilter",
    props: ['loading'],
    data() {
      return {
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      }
    },
    computed: {
      Active() {
        console.log();
      }
    },
    methods: {
      isActive(letter) {
        if (this.existApp(letter) === true) {
          console.log(letter, "ACTIVE");
          return true;
        }
        return false;
      },
      existApp(letter) {
        $('.appList').find('.header>a').each(function () {
          if ($(this).text().slice(0, 1) === letter) {
            console.log("True");
            return true;
          }
        });
        return false;
      },
      click_button(key) {
        this.toggle_button(event.currentTarget)
      },
      hasClass(elements, cName) {
        return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)")); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
      },
      removeClass(elements, cName) {
        if (this.hasClass(elements, cName)) {
          elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " "); // replace方法是替换
        }
      },
      toggle_button($object) {
        if (this.hasClass($object, 'active')) {
          this.removeClass($object, 'active')
        }
        else {
          $object.className += " " + 'active';
        }
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .img-card {
    height: 300px;
    background: url("/src/assets/home/appCenter.jpg") center center no-repeat;
    background-size: cover;
  }

  .active {
    background: #0ea432 !important;
  }
</style>
