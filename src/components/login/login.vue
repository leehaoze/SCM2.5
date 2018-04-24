<template>
  <Layout>
    <Header class="header">
      <top-bar></top-bar>
    </Header>
    <Content>
      <div class="login_background"></div>
      <div class="ui centered card login"  @keydown.enter="handleSubmit">
        <div class="content">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
              <Input v-model="form.userName" placeholder="Please input username">
              <span slot="prepend">
                <Icon :size="16" type="person"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>Login</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </Content>
  </Layout>
</template>

<script>
  import Cookie from 'js-cookie'
  import TopBar from "./topBar/topBar";

  export default {
    name: 'login',
    components: {TopBar},
    data() {
      return {
        form: {
          userName: '',
          departId: null
        },
        isLogin: [],
        rules: {
          userName: [
            {required: true, message: 'Username cannot be empty', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.$http.post("Login.form", {
              name: this.form.userName
            }).then((response) => {
              console.log(response);
              this.isLogin = response.data;
              console.log(this.isLogin[0].log);
              if (this.isLogin[0].log === true) {
                console.log(this.form.userName);
                Cookie.set('user', this.form.userName);
                Cookie.set('departId', this.isLogin[0].depart_id);
                console.log(this.isLogin[0].depart_id);
                Cookie.set('access', 0)
              }
              else
                Cookie.set('access', 1);
              this.$router.push({
                name: 'HomePage'
              });
            });
          }
        });
      }
    }
  }
</script>

<style scoped>
  .header {
    background: rgba(0, 101, 184, 1);
    height: 6vh;
  }

  .login_background {
    position: absolute;
    height: 91vh;
    width: 100vw;
    background: url("/src/assets/login/457346.jpg") no-repeat center center;
    background-size: cover;
    filter: blur(5px);
  }

  .login {
    margin-top: 30vh;
    background: rgba(255, 255, 255, 0.44);
    border-width: 0 !important;
    width: 15%;
    margin-left: 42%;
  }
</style>
