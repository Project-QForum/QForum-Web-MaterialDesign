<template>
  <VAppBar
      app
      color="white"
      flat
  >
    <VContainer class="py-0 fill-height">
      <VImg
          v-if="data&&data['logoUrl']"
          :src="data['logoUrl']"
          max-width="150"
          max-height="40"
      ></VImg>

      <RouterLink v-for="link in links" :key="link.name" :to="link.url" style="text-decoration: none;">
        <VBtn text>
          {{ link.name }}
        </VBtn>
      </RouterLink>

      <VSpacer></VSpacer>

      <VResponsive max-width="260">
        <VTextField
            dense
            flat
            hide-details
            rounded
            solo-inverted
            placeholder="搜索..."
        ></VTextField>
      </VResponsive>
      <div style="margin-left: 20px">
        <AvatarView @click.native="onAvatarClick(sessionId)" v-if="profile" :profile="profile"></AvatarView>
        <VBtn @click="onAvatarClick(sessionId)" color="blue" v-else dark>登录</VBtn>
        <!--TODO:修复无头像但已登录会显示登录按钮-->
      </div>


    </VContainer>
  </VAppBar>
</template>

<script>
import {checkLogin, getProfile} from "@/api/UserApi";
import Vue from "vue";
import AvatarView from "@/components/view/AvatarView";

export default {
  name: "AppBar",
  components: {AvatarView},
  props:["data","links","onAvatarClick"],
  created:async function() {
    if(this.$cookies.get("sessionId")){
      if(this.$cookies.get("profile")){
        this.profile = this.$cookies.get("profile");
      }
      let tmp = await checkLogin(this.$cookies.get("sessionId"));
      if(tmp["data"]["code"]===200){
        this.sessionId = this.$cookies.get("sessionId");
        this.profile = (await getProfile(this.profile["id"],this.profile["userName"]))["data"]["profile"];
        this.$cookies.set("profile", JSON.stringify(this.profile), "30d");
        console.log("个人信息刷新成功");
      }
      else{
        this.$cookies.remove("profile");
        this.$cookies.remove("sessionId");
        this.profile = "";
        console.log("登录过期");
      }
    }
    else{
      if(this.$cookies.get("profile")){
        this.$cookies.remove("profile");
      }
    }
    Vue.set(this.profile,0,this.profile[0]);
  },
  data(){
    return{
      profile:this.profile,
      sessionId:this.sessionId
    }
  }
}
</script>

<style scoped>

</style>