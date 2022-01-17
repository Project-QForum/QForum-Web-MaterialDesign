<template>
  <VApp id="inspire">
    <AppBar :data="info" :links="links" :onAvatarClick="onAvatarClick" :key="appKey"></AppBar>
    <VMain class="grey lighten-3">
      <VFadeTransition>
        <RouterView style="height: 100%;width: 100%;margin-bottom: 50px" :snackbar="snackbar" :dialog="dialog"></RouterView>
      </VFadeTransition>

      <VRow justify="center">
        <VDialog
            v-model="dialog.visible"
            persistent
            max-width="600px"
        >
          <LoginForm :onLogin="onLogin" :onCancel="onCancel" :onToggle="toggleDialogType" v-if="dialog.type==='login'"></LoginForm>
          <RegisterForm :onRegister="onRegister" :onCancel="onCancel" :onToggle="toggleDialogType" v-else></RegisterForm>
        </VDialog>
      </VRow>

      <VSnackbar
          v-model="snackbar.visible"
          :timeout="snackbar.timeout"
      >
        {{ snackbar.text }}
      </VSnackbar>

      <VOverlay :value="offline">
        <VIcon
            size="200"
            color="white"
        >
          mdi-alert-circle
        </VIcon>

        <p style="margin-left: -5%">
          与服务器断开连接，请稍后重试。
        </p>
      </VOverlay>
    </VMain>
  </VApp>
</template>

<script>
import Vue from "vue";
import AppBar from "@/components/AppBar";
import LoginForm from "@/components/form/LoginForm";
import RegisterForm from "@/components/form/RegisterForm";
import {getForumInfo} from "@/api/ForumApi";
import {login, register,LOGIN_URL} from "@/api/UserApi";
import Request from "@/util/Request"
export default {
  name: "App",
  components:{AppBar,LoginForm,RegisterForm},
  info:{
    forumName:"",
    logoUrl:"",
    webUrl:""
  },
  created: async function () {
    // 站点信息
    let tmp = await getForumInfo();
    this.info = tmp["data"];
    if(this.info===undefined){
      this.offline = true;
    }
    // 重新渲染
    Vue.set(this.info,0,this.info[0]);
  },
  data() {
    return {
      info:[],
      offline:false,
      links: [
        {name:'论坛',url:'/'},
        {name:'应用中心',url:'/apps'},
        {name:'赞助我们',url:'/donate'},
      ],
      appKey:0,
      snackbar:{
        timeout:2000,
        text:"Unknown",
        visible:false
      },
      dialog:{
        type:"login",
        visible:false
      },
      onAvatarClick:(logged)=>{
        if(logged){
          alert("个人主页开发中");
        }
        else{
          this.dialog.visible = true;
        }
      },
      //这样就不用 async await 等待了
      onLogin:async (userName, password) => {
        Request.post(LOGIN_URL,{
          params: {
            userName: userName,
            password: password
          }
        }).then((res)=>{
          this.$cookies.set("profile", JSON.stringify(res.profile), "30d");
          this.$cookies.set("sessionId", res.sessionId, "30d");
          //....等等
        })

        let tmp = await login(userName,password);
        if(tmp["data"]["code"]===200){
          this.$cookies.set("profile", JSON.stringify(tmp["data"]["profile"]), "30d");
          this.$cookies.set("sessionId", tmp["data"]["profile"]["sessionId"], "30d");

          this.snackbar.text = "登录成功";
          this.dialog.visible = false;

          this.profile = tmp["data"]["profile"];
          this.sessionId = tmp["data"]["profile"]["sessionId"];

          this.appKey++;
        }
        else{
          this.snackbar.text = tmp["data"]["errorMsg"];
        }
        this.snackbar.visible = true;
      },
      onRegister:async (email,userName, password) => {
        let tmp = await register(email,userName,password);
        if(tmp["data"]["code"]===200){
          this.snackbar.text = "注册成功";
          this.onCancel();
        }
        else{
          this.snackbar.text = tmp["data"]["errorMsg"];
        }
        this.snackbar.visible = true;
      },
      toggleDialogType:()=>{
        if(this.dialog.type==="login"){
          this.dialog.type="register";
        }
        else{
          this.dialog.type="login";
        }
      },
      onCancel:()=>{
        this.dialog.visible=false;
        this.dialog.type="login";
      }
    }
  }
}
</script>

<style scoped>

</style>
