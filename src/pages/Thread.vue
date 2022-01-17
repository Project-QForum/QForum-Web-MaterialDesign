<template>
  <VContainer>
    <VRow>
      <VCol>
        <VSheet rounded="lg" style="padding: 30px;">
          <h1>
            {{ thread["title"] }}
          </h1>
          <p style="color: darkgrey">
            {{ getTimeText(thread['postTime']) }}
          </p>
        </VSheet>
        <VSheet rounded="lg" v-html="markdownHTML" style="padding: 30px;margin-top: 20px">
        </VSheet>
      </VCol>
      <VCol cols="3">
        <AuthorView :profile="thread['publisher']"></AuthorView>
        <ThreadOpsWidget style="margin-top: 20px" :handleLike="handleLike" :handleDisLike="handleDisLike" :likeList="likeList"></ThreadOpsWidget>
      </VCol>
    </VRow>

  </VContainer>
</template>

<script>
import Vue from "vue";
import {disLikeThread, getThreadDetail, likeThread} from "@/api/ThreadApi";
import {getTimeText} from "@/util/TimeUtil";
import AuthorView from "@/components/view/AuthorView";
import ThreadOpsWidget from "@/components/widget/ThreadOpsWidget";

import mavonEditor from 'mavon-editor'
Vue.use(mavonEditor)

export default {
  name: "Thread",
  components:{ThreadOpsWidget, AuthorView},
  created:async function() {
    let tmp = await getThreadDetail(this.$route.params.tid);
    this.thread = tmp.data;
    this.markdownHTML = mavonEditor.markdownIt.render(this.thread["content"])
    this.likeList = JSON.parse(this.thread["likeList"]);
  },
  data(){
    return{
      markdownHTML:"",
      thread:{},
      likeList:[],
      getTimeText
    }
  },
  methods:{
    handleLike:function (){
      likeThread(this.$cookies.get("token"),this.$route.params.tid);
    },
    handleDisLike:function (){
      disLikeThread(this.$cookies.get("token"),this.$route.params.tid);
    }
  }
}
</script>

<style>
  img{
    max-width: 100%;
  }
</style>