import Cookie from "js-cookie"
const user = {
  state: {},
  mutations: {
    logout (state, vm) {
      Cookie.remove("user");
      Cookie.remove("departId")
    },
    getDepartId (state, vm) {
      return Cookie.get("departId");
    }
  }
};

export default user