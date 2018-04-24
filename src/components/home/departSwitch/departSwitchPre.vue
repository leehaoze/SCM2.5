<template>
  <div>
    <div class="Depart" ref="menus">
      <ul class="menus">
        <li v-for="(dp, index) in departs" ref="menu">
          <div class="menu-link" @click="menuSwitch(index, dp)">
            <depart-button :depart-name="dp.departmentName"></depart-button>
          </div>
        </li>
      </ul>
      <span id="slider-block">

      </span>
    </div>
    <!--<div class="Table">-->
    <!--<Table :loading="documentDataLoading" border :columns="documentDataTable" :data="docData"-->
    <!--width="100%!important" v-on:on-row-click="click_row"></Table>-->
    <!--<Page :total="dataCount" :page-size="pageSize" show-total show-sizer @on-change="changepage" @on-page-size-change="changesize"></Page>-->
    <!--</div>-->
  </div>
</template>

<script>
  import Cookie from "js-cookie"
  import DepartButton from "./module/departButtonPre";

  export default {
    name: 'departSwitch',
    components: {DepartButton},
    data() {
      return {
        documentDataTable: [
          {title: 'Title', key: 'docName', sortable: true},
          {title: 'Description', key: 'docDesc', sortable: true},
          {title: 'DocPath', key: 'docPath', sortable: true},
          {title: 'Department', key: 'department', sortable: true},
          {title: 'DocTypes', key: 'docType', sortable: true},
          {title: 'DocNumber', key: 'docNumber', sortable: true},
        ],
        departs: [],
        thisDepart: null,
        nowIndex: 0,
        docData: [],
        ajaxDocumentData: [],
        documentDataLoading: true,
        dataCount: 0,
        nowPage: 1,
        pageSize: 10
      }
    },
    methods: {
      loadDeparts() {
        this.$http.get("/getDepartments.form").then((response) => {
          this.departs = response.data;
          this.getDepartId();
          this.defaultDepart(this.nowIndex)
        })
      },
      getDepartId() {
        this.thisDepart = Cookie.get("departId");
        this.nowIndex = this.thisDepart;
      },
      menuSwitch(index, dp) {
        console.log(index);
        let collections = document.querySelectorAll(".menu-link");
        if (index !== this.nowIndex) {
          collections[this.nowIndex].style.backgroundColor = "rgba(0,0,0,0)";
          this.nowIndex = index;
          collections[index].style.backgroundColor = "rgba(0, 101, 184, 1)";
          this.loadDocByDepart(this.nowIndex);
        }

      },
      defaultDepart() {
        console.log(this.nowIndex);
        let collections = document.querySelectorAll(".menu-link");
        console.log(collections);
        collections[this.nowIndex].style.backgroundColor = "rgba(0, 101, 184, 1)";
      }
    },
    mounted() {
      this.loadDeparts();
    },
    created() {
      this.loadDeparts();
    }

  }
</script>

<style scoped>
  .Depart {
    width: 90%;
    height: 50px;
    margin-left: 9%;
  }

  .Table {
    width: 90%;
    margin-left: 5%;
    margin-top: 2%;
  }

  .menus {
    text-align: center;
    list-style-type: none;
  }

  .menus li {
    float: left;
    width: 16%;
    display: inline-block;
    margin-right: 4%;
  }

  .menu-link {
    display: block;
    width: 90px;
    height: 80px;
    line-height: 49px;
    background-color: transparent;
    color: #fff;
    text-decoration: none;
  }
</style>
