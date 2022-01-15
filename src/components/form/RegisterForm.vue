<template>
  <VCard>
    <v-card-title>
      <span class="text-h5">注册</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
                v-model="email"
                label="邮箱"
                type="email"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
                v-model="userName"
                label="用户名"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
                v-model="password"
                label="密码"
                type="password"
                required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <VCardActions>
      <small @click="onToggle">已有账号？登录</small>
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
          @click="onRegister(email,userName,password)"
      >
        注册
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script>
let email;
let userName;
let password;
export default {
  name: "LoginForm",
  props:["onCancel","onRegister","onToggle"],
  data(){
    return{
      email,
      userName,
      password
    }
  }
}
</script>

<style scoped>

</style>