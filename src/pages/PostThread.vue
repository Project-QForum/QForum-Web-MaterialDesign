<template>
  <VContainer style="height: 100%">
    <VTextField placeholder="标题..." v-model="title"></VTextField>
    <mavon-editor ref="md" v-model="value" style="min-height: 80%" @imgAdd="handleEditorImgAdd" @imgDel="handleEditorImgDel"/>
    <VBtn style="float: right;margin-top: 10px" color="blue" @click="post" dark>
      发送
    </VBtn>
  </VContainer>
</template>

<script>
import Vue from "vue";
import mavonEditor from "mavon-editor";
import 'mavon-editor/dist/css/index.css'
import {uploadImage} from "@/api/FileApi";
import {postThread} from "@/api/ThreadApi";
Vue.use(mavonEditor)
export default {
  name: "PostThread",
  props:["snackbar","dialog"],
  data(){
    return{
      value:"",
      title:"",
      post:async () => {
        let tmp = (await postThread(this.$cookies.get("token"), this.$route.query.boardId, this.title, this.value));
        if(tmp["data"]["code"]===200){
          this.snackbar.text = "发布成功";
          await this.$router.push('/thread/'+tmp["data"]["id"])
        }
        else{
          this.snackbar.text = tmp["data"]["errorMsg"];
        }
        this.snackbar.visible = true;
      },
      imgFile:[]
    }
  },
  methods:{
    handleEditorImgAdd(pos,file){
      this.imgFile[pos] = file
      uploadImage(file).then(res=>{
        if(res["data"]["code"]===200){
          this.$refs.md.$img2Url(pos,res["data"]["url"]);
        }
        else{
          alert("图片上传失败");

        }
      });
    },
    handleEditorImgDel(pos){
      delete this.imgFile[pos]
    }
  }
}
</script>

<style scoped>
  .v-note-wrapper{
    z-index: 0 !important
  }
</style>