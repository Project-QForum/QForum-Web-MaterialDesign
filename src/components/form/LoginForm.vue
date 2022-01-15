<template>
  <VCard>
    <v-card-title>
      <span class="text-h5">登录</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-text-field
            v-model="userName"
            label="用户名"
            required
            filled
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="密码"
            type="password"
            required
            filled
        ></v-text-field>

      </v-container>
    </v-card-text>
    <VCardActions>
      <small @click="onToggle">没有账号？注册</small>
      <v-spacer></v-spacer>
      <VBtn
          color="blue darken-1"
          text
          @click="onCancel"
      >
        取消
      </VBtn>
      <VBtn
          color="blue darken-1"
          text
          @click="onLogin(userName,password)"
      >
        登录
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script>
let userName;
let password;
export default {
  name: "LoginForm",
  props:["onCancel","onLogin","onToggle"],
  data(){
    return{
      userName,
      password
    }
  }
}
</script>

<style scoped>

</style>