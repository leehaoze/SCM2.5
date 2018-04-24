<template>
  <Menu mode="horizontal"style="background: rgba(0,101,184,1);" theme="dark">
      <Submenu name="1">
          <template slot="title">
              <Icon type="person" :size="25"></Icon>
          </template>
         <MenuGroup title="activity">
             <MenuItem name="1-1" @click.native="Logout">Log out</MenuItem>
         </MenuGroup>
      </Submenu>
    <!--<MenuItem name="1">
      <Icon type="person" :size="25"></Icon>
    </MenuItem>-->
    <Submenu name="2">
      <template slot="title">
        <Icon type="settings" :size="25"></Icon>
      </template>
      <MenuGroup title="User Settings">
        <MenuItem name="2-1">Add Users</MenuItem>
        <MenuItem name="2-2">Add User Group</MenuItem>
        <MenuItem name="2-3">Add Roles</MenuItem>
      </MenuGroup>
      <MenuGroup title="Data Settings">
        <MenuItem name="2-4">Add Departments</MenuItem>
        <MenuItem name="2-5">Add Catalogs</MenuItem>
        <MenuItem name="2-6">Add Tags</MenuItem>
        <MenuItem name="2-7">Add Document Types</MenuItem>
        <MenuItem name="2-8">Add Activity Log</MenuItem>
      </MenuGroup>
      <MenuGroup title="Other">
        <MenuItem name="2-9">My Profile</MenuItem>
        <MenuItem name="2-10">System Settings</MenuItem>
        <MenuItem name="2-11">DashBoard Type</MenuItem>
      </MenuGroup>
    </Submenu>
  </Menu>
</template>

<script>
  export default {
    name: "userPanel",
    data() {
      return {

      }
    },
    methods : {
      Logout () {
        this.$store.commit('logout',this);
        console.log("Click Logout");
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
</script>

<style scoped>

</style>
